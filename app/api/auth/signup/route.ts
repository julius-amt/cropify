/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "@/app/api/_lib/dbConfig";
import User from "@/app/api/_models/user";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import validator from "validator";

connect();

export const config = {
    api: {
        bodyParser: false,
    },
};

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData()!;
        const { username, email, phone, password, re_password }: any = {
            username: formData.get("username"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            password: formData.get("password"),
            re_password: formData.get("re_password"),
        };

        if (!email || !password || !re_password) {
            return NextResponse.json(
                {
                    error: `[email, password and re_password] fields are required`,
                },
                { status: 400 }
            );
        }

        // password validation
        if (password !== re_password)
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 }
            );

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
        // email validation
        if (!validator.isEmail(email)) {
            return NextResponse.json(
                { error: "Invalid email" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email already exists!" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcryptjs.hash(password, 12);

        const newUser = new User({
            username,
            email,
            phone,
            password: hashedPassword,
        });
        await newUser.save();

        return NextResponse.json(
            {
                message:
                    "User created successfully. You can login to your account now",
                success: true,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
