/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";
import { authenticatedUser } from "../_lib/authenticateUser";
import Chat from "../_models/chat";

const { AMALIAI_BASE_URL, AMALIAI_KEY } = process.env;

export const POST = async (request: NextRequest) => {
    try {
        // Authenticate the user
        const user = authenticatedUser(request);
        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        if (!AMALIAI_BASE_URL || !AMALIAI_KEY) {
            return NextResponse.json(
                {
                    error: "Missing AMALIAI_BASE_URL or AMALIAI_KEY in environment variables",
                },
                { status: 500 }
            );
        }

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

        // Handle the response
        if (response.ok) {
            let data = await response.json();
            data = data.data;

            // save record to database
            const newChat = new Chat({
                user: user._id,
                aiResponse: data.content,
                message,
            });
            await newChat.save();

            return NextResponse.json(
                { success: true, data: newChat },
                { status: 201 }
            );
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

export const GET = async (request: NextRequest) => {
    try {
        // Authenticate the user
        const user = authenticatedUser(request);
        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const chats = await Chat.find({ user: user._id }).sort({
            createdAt: -1,
        });
        return NextResponse.json({ success: true, data: chats });
    } catch (error: unknown) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
