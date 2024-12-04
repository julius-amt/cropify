import { NextResponse, NextRequest } from "next/server";
import { authenticatedUser } from "../_lib/authenticateUser";
import { WeatherData } from "@/app/_types/weather";

const { BASE_URL, AMALIAI_KEY, AMALIAI_BASE_URL } = process.env;

export const POST = async (request: NextRequest) => {
    try {
        const user = authenticatedUser(request);
        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                {
                    status: 401,
                }
            );
        }

        // Get coordinates from query param to be used for the next
        const params = request.nextUrl.searchParams;
        const lon = params.get("lon");
        const lat = params.get("lat");
        console.log("lon", lon);
        console.log("lat", lat);

        // fetch weather data through local /weather enpoint to the weatherapi.com
        const response = await fetch(
            `${BASE_URL}/api/weather?lon=${lon}&lat=${lat}`
        );

        let watherData: WeatherData;
        if (response.ok) {
            watherData = await response.json();
        } else {
            return NextResponse.json(
                { error: "Failed to fetch data from Weather API" },
                { status: 500 }
            );
        }

        const { location, current } = watherData.data;

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
            Provide tailored agricultural advice for local farmers in the following location under current weather conditions:

            **Location Information**:
            - Name: ${location.name}
            - Region: ${location.region}
            - Country: ${location.country}
            - Latitude: ${location.lat}
            - Longitude: ${location.lon}
            - Time Zone: ${location.tz_id}
            - Local Time: ${location.localtime}

            **Current Weather Conditions**:
            - Temperature: ${current.temp_c}°C (${current.temp_f}°F)
            - Weather: ${current.condition.text}
            - Wind: ${current.wind_kph} km/h (${current.wind_mph} mph) from ${current.wind_dir} (${current.wind_degree}°)
            - Humidity: ${current.humidity}%
            - Cloud Cover: ${current.cloud}%
            - Precipitation: ${current.precip_mm} mm (${current.precip_in} in)
            - UV Index: ${current.uv}
            - Pressure: ${current.pressure_mb} mb (${current.pressure_in} in)
            - Feels Like: ${current.feelslike_c}°C (${current.feelslike_f}°F)
            - Visibility: ${current.vis_km} km (${current.vis_miles} miles)
            - Dew Point: ${current.dewpoint_c}°C (${current.dewpoint_f}°F)
            - Gusts: ${current.gust_kph} km/h (${current.gust_mph} mph)

            **Agricultural Parameters**:
            - Crop: ${crop}
            - Growth Stage: ${cropStage}
            - Key Weeds: ${keyWeeds}
            - Soil Type: ${soilType}
            - Soil pH: ${soilPH}
            - Soil Fertility: ${soilFertility}
            - Soil Moisture: ${soilMoisture}
            - Diseases: ${disease}
            - Pests: ${pests}

            **Instructions**:
            Based on these parameters and current conditions, recommend:
            1. Best practices for managing weeds, pests, and diseases.
            2. Optimal fertilization, irrigation, and soil management strategies.
            3. Preventive measures to ensure sustainable crop growth and maximize yield.
            4. Any additional tips considering the local weather and soil conditions in ${location.name}, ${location.region}.
        `;

        // make request to amali ai
        const aiResponse = await fetch(`${AMALIAI_BASE_URL}/public/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": `${AMALIAI_KEY}`,
            },
            body: JSON.stringify({
                prompt,
                stream: false,
                modelId: process.env.AMALIAI_MODEL_ID,
            }),
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
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
