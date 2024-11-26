import { NextResponse, NextRequest } from "next/server";
import { authenticatedUser } from "../_lib/authenticateUser";
import connect from "../_lib/dbConfig";

const { BASE_URL, AMALIAI_KEY, AMALIAI_BASE_URL } = process.env;

export const POST = async (request: NextRequest) => {
    try {
        const user = authenticatedUser(request);
        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Get coordinates from query param to be used for the next
        const params = request.nextUrl.searchParams;
        const lon = params.get("lon");
        const lat = params.get("lat");
        // fetch weather data through local /weather enpoint to the weatherapi.com
        const response = await fetch(
            `${BASE_URL}/api/weather?lon=${lon}&lat=${lat}`
        );

        let watherData: unknown;
        if (response.ok) {
            watherData = await response.json();
        } else {
            return NextResponse.json(
                { error: "Failed to fetch data from Weather API" },
                { status: 500 }
            );
        }

        const data = await request.json();
        // get values
        const {
            crop = null, // Default value if crop is missing
            cropStage = null,
            keyWeeds = null,
            soilType = null,
            soilPH = null,
            soilFertility = null,
            soilMoisture = null,
            disease = null,
            pests = null,
        } = data;

        const prompt = `
        Provide tailored agricultural advice based on the following parameters:
        - **Crop**: ${crop}
        - **Growth Stage**: ${cropStage}
        - **Key Weeds**: ${keyWeeds}
        - **Soil Type**: ${soilType}
        - **Soil pH**: ${soilPH}
        - **Soil Fertility**: ${soilFertility}
        - **Soil Moisture**: ${soilMoisture}
        - **Diseases**: ${disease}
        - **Pests**: ${pests}
        
        Based on these conditions, recommend:
        1. Best weed, pest, and disease management strategies.
        2. Optimal fertilization and irrigation practices.
        3. Preventive measures for sustainable crop yield improvement.
        `;

        // make request to amali ai
        const aiResponse = await fetch(`${AMALIAI_BASE_URL}/public/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": `${AMALIAI_KEY}`,
            },
            body: JSON.stringify({ prompt, stream: false }),
        });

        if (aiResponse.ok) {
            const data = await aiResponse.json();
            return NextResponse.json({ success: true, data });
        } else if (aiResponse.status === 401) {
            return NextResponse.json(
                { error: "Server error, contact Cropify support team now!" },
                { status: 401 }
            );
        } else {
            return NextResponse.json(
                { error: "An error occured, try again" },
                { status: 500 }
            );
        }
    } catch (error: unknown) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
