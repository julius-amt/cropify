import { NextResponse, NextRequest } from "next/server";
import { authenticatedUser } from "../_lib/authenticateUser";

export const POST = async (request: NextRequest) => {
    try {
        const user = authenticatedUser(request);
        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const data = await request.json();
        return NextResponse.json({ success: true, data });
    } catch (error: unknown) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
