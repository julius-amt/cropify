/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";
import { authenticatedUser } from "../_lib/authenticateUser";
import Chat from "../_models/chat";
import connect from "../_lib/dbConfig";
import mongoose from "mongoose";

const { AMALIAI_BASE_URL, AMALIAI_KEY } = process.env;

connect();

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

        // Define a strict agriculture-specific instruction for the AI model
        const agricultureContext = `
            You are an AI assistant designed exclusively for farmers. 
            You will only respond to queries and provide information related to agriculture, farming practices, crops, soil management, pests, irrigation, and related topics. 
            Do not answer any question that is not directly related to agriculture.
        `;

        // Append the user message to the agriculture context
        const prompt = `${agricultureContext}\n\nUser's Query: ${message}`;

        // Make the fetch request
        const response = await fetch(`${AMALIAI_BASE_URL}/public/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": `${AMALIAI_KEY}`,
            },
            body: JSON.stringify({
                prompt,
                stream: false,
            }),
        });

        // Handle the response
        if (response.ok) {
            let data = await response.json();
            data = data.data;

            // Save record to database
            const newChat = new Chat({
                user: user.id,
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
        const userId = new mongoose.Types.ObjectId(user.id);
        const chats = await Chat.find({
            user: userId,
        }).sort({
            createdAt: -1,
        });

        return NextResponse.json({ success: true, data: chats });
    } catch (error: unknown) {
        console.log(error);

        return NextResponse.json({ error: error }, { status: 500 });
    }
};
