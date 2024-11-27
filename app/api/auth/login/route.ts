/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "@/app/api/_lib/dbConfig";
import User from "@/app/api/_models/user";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

connect();

export const POST = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "[email and password] fields are required" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return NextResponse.json(
                { error: "User with this email does not exist!" },
                { status: 400 }
            );
        }

        const passwordMatched = await bcryptjs.compare(
            password,
            existingUser.password
        );
        if (!passwordMatched) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 400 }
            );
        }

        if (!existingUser.isVerified) {
            return NextResponse.json(
                { error: "Account not verified" },
                { status: 400 }
            );
        }

        const token = jwt.sign(
            {
                id: existingUser._id,
                email: existingUser.email,
                role: existingUser.role,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );

        const response = NextResponse.json(
            { message: "Login successful", success: true },
            { status: 200 }
        );

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });
        return response;
    } catch (error: any) {
        console.log("error", error);

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
