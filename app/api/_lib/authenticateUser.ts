import { NextRequest } from "next/server";
import { JwtPayload } from "jsonwebtoken";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import jwt from "jsonwebtoken";

export const authenticatedUser = (request: NextRequest): JwtPayload | null => {
    const token = request.cookies.get("token") as RequestCookie | undefined;

    if (!token || !token.value) {
        return null;
    }

    try {
        const decoded = jwt.verify(
            token.value,
            process.env.JWT_SECRET!
        ) as jwt.JwtPayload;

        return decoded;
    } catch (error) {
        return null;
    }
};
