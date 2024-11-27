"use client";

import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                toast.success("Logged out successfully");
                router.push("/login");
            } else {
                toast.error("An error occurred while logging out");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className="cursor-pointer" onClick={handleLogout} title="Logout">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
            </svg>
        </div>
    );
};

export default LogoutButton;
