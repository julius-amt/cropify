/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";

const { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL, IP_API_URL, IP_API_KEY } =
    process.env;

export const GET = async (request: NextRequest) => {
    try {
        // get ip from query params
        const ip = request.nextUrl.searchParams.get("ip");

        if (!ip) {
            throw new Error("IP address is missing in query parameters");
        }

        const ipResponse = await fetch(
            `${IP_API_URL}?apiKey=${IP_API_KEY}&ip=${ip}`
        );
        const ipData = await ipResponse.json();
        const { latitude, longitude } = ipData;
        console.log(latitude, longitude);

        const response = await fetch(
            `${OPEN_WEATHER_BASE_URL}?id=524901&appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}`
        );

        if (response.ok) {
            const data = await response.json();
            return NextResponse.json({ success: true, data });
        } else {
            return NextResponse.json(
                { error: "Failed to fetch data from OpenWeather API" },
                { status: 500 }
            );
        }
    } catch (error: unknown) {
        // console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
