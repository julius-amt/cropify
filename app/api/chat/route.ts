/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";

const { AMALIAI_BASE_URL, AMALIAI_KEY } = process.env;

export const POST = async (request: NextRequest) => {
    try {
        if (!AMALIAI_BASE_URL || !AMALIAI_KEY) {
            return NextResponse.json(
                {
                    error: "Missing AMALIAI_BASE_URL or AMALIAI_KEY in environment variables",
                },
                { status: 500 }
            );
        }
        console.log(
            `Amaliai base url: ${AMALIAI_BASE_URL} and Amali ai key : ${AMALIAI_KEY}`
        );

        const { message } = await request.json();

        if (!message || typeof message !== "string") {
            return NextResponse.json(
                { error: "Invalid or missing 'message' field" },
                { status: 400 }
            );
        }

        // Make the fetch request
        const response = await fetch(`${AMALIAI_BASE_URL}/public/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": `${AMALIAI_KEY}`,
            },
            body: JSON.stringify({ prompt: message, stream: false }),
        });
        console.log("Message:", message);

        // Handle the response
        if (response.ok) {
            const data = await response.json();
            return NextResponse.json({ success: true, data }, { status: 201 });
        } else {
            const errorData = await response.json();
            return NextResponse.json(
                { error: errorData.message || "Failed to fetch from AMALIAI" },
                { status: response.status }
            );
        }
    } catch (error: unknown) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
