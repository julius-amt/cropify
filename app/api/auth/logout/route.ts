import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({
        message: "Logged out successfully",
        success: true,
    });
    response.cookies.set("token", "", {
        path: "/",
        expires: new Date(0), // Expire the cookie
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: "strict",
    });

    return response;
}
