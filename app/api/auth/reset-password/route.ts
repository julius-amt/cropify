/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "@/app/api/_lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/user";
import { sendResetPasswordEmail } from "@/app/api/_lib/mailer";

connect();

export const POST = async (req: NextRequest) => {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "[email] field is required" },
                { status: 400 }
            );
        }

        const user: any = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User with this email does not exist!" },
                { status: 400 }
            );
        }

        const userInstance = new User(user);

        // Send email
        const response = await sendResetPasswordEmail(userInstance);

        if (response.success) {
            return NextResponse.json({ message: "Verification email sent!" });
        }

        return NextResponse.json(
            { error: "Failed to send verification email!" },
            { status: 500 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
