import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    const isAuth = req.cookies.get("token");

    const sensitiveRoutes = ["/chat", "/agro-scan", "/agro-advisor"];

    const sensitiveRoutesAfterLogin = [
        "/",
        "/login",
        "/signup",
        "/forget-password",
        "/reset-password",
    ];

    // Redirect unauthenticated users trying to access sensitive routes
    if (!isAuth && sensitiveRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Allow unauthenticated users to access only the "/" path
    if (!isAuth && pathname === "/") {
        return NextResponse.next();
    }

    // Redirect authenticated users accessing "/" to another route
    if (isAuth && pathname === "/") {
        return NextResponse.redirect(new URL("/chat", req.url)); // Change this to "/dashboard" when it's ready
    }

    // Prevent authenticated users from accessing routes like login, signup, etc.
    if (isAuth && sensitiveRoutesAfterLogin.includes(pathname)) {
        return NextResponse.redirect(new URL("/chat", req.url)); // Adjust to "/dashboard" if needed
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
    ],
};
