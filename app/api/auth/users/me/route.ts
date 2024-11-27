/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "../../../_lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/user";
import { authenticatedUser } from "../../../_lib/authenticateUser";

connect();

export const GET = async (req: NextRequest) => {
    try {
        const user = authenticatedUser(req);
        if (!user) {
            return NextResponse.json({
                body: {
                    message: "User not found",
                },
                status: 404,
            });
        }

        // fetch user data
        const userObj = await User.findById(user.id).select(
            "-password -__v -createdAt -updatedAt -_id -role -email -isVerified -signinMethod -phone"
        );
        if (!userObj) {
            return NextResponse.json(
                {
                    error: "User not found",
                    succuss: false,
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            username: userObj.username,
            success: true,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "User not found",
                succuss: false,
            },
            { status: 500 }
        );
    }
};
