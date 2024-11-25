import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    const isAuth = req.cookies.get("token");
    console.log(`isAuth: ${isAuth}`);

    const sensitiveRoutes = [
        "/chat",
        "/agro-scan",
        "/agro-advisor",
        // "/dashboard",
    ];

    const isAccessingSensitiveRoute = sensitiveRoutes.includes(pathname);

    const sensitiveRoutesAfterLogin = [
        "/",
        "/login",
        "/signup",
        "/forget-password",
        "/reset-password",
    ];

    const isAccessingSensitiveRoutesAfterLogin =
        sensitiveRoutesAfterLogin.includes(pathname);

    if (!isAuth && isAccessingSensitiveRoute) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (pathname == "/") {
        return NextResponse.redirect(new URL("/chat", req.url)); // should be changed to /dashboard after the dashboard is ready
    }

    if (isAuth && isAccessingSensitiveRoutesAfterLogin) {
        return NextResponse.redirect(new URL("/chat", req.url));
    }
}

export const config = {
    matcher: [
        "/",
        "/login",
        "/signup",
        "/forget-password",
        "/reset-password",
        "/chat",
        "/agro-scan",
        "/agro-advisor",
        // "/dashboard",
    ],
};
