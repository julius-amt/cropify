/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";

const { WEATHER_API_BASE_URL, WEATHER_API_KEY } = process.env;

export const GET = async (request: NextRequest) => {
    try {
        // get coordinates from query params
        const params = request.nextUrl.searchParams;
        const lon = params.get("lon"); // value not beign used because the values are not being accurate
        const lat = params.get("lat");

        // fetch weather info from weatherapi.com
        const response = await fetch(
            `${WEATHER_API_BASE_URL}?key=${WEATHER_API_KEY}&q=${5.5486},${-0.2012}`
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
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
