/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "@/app/api/_lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/user";
import validator from "validator";
import bcryptjs from "bcryptjs";

connect();

export const POST = async (req: NextRequest) => {
    try {
        const { token, password, re_password } = await req.json();

        if (!token || !password || !re_password) {
            return NextResponse.json(
                {
                    error: "[token, password and re_password] fields are required",
                },
                { status: 400 }
            );
        }

        if (password !== re_password) {
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 }
            );
        }

        if (
            !validator.isStrongPassword(password, {
                minLength: 8,
                minSymbols: 0,
            })
        ) {
            return NextResponse.json(
                {
                    error: "Password is weak. Use a combination of numbers, lower & upper cases,  with a min lenght of 8",
                },
                { status: 400 }
            );
        }

        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid or expired token" },
                { status: 400 }
            );
        }

        // check if user provided the same password
        const isSamePassword = await bcryptjs.compare(password, user.password);
        if (isSamePassword) {
            return NextResponse.json(
                {
                    error: "You cannot use your old password, provide a new one",
                },
                { status: 400 }
            );
        }

        const hashedPassword = await bcryptjs.hash(password, 12);

        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({ message: "Password reset successful" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
