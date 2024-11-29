/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import LoginImage from "@/public/rb_2148889459.png";
import Link from "next/link";
import React from "react";

export default function Login() {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: loginData.email,
                    password: loginData.password,
                }),
            });
            if (response.ok) {
                router.push("/chat");
                toast.success("Logged in successfully 🎉", { duration: 4000 });
            } else if (response.status === 500) {
                toast.error("An error accoured, try again!", {
                    duration: 4000,
                });
            } else {
                toast.error("Invalid credentials!", { duration: 4000 });
            }
        } catch (error: any) {
            throw new Error("Error", error);
        }
        setIsLoading(false);
    };

    const disableBtn = () => {
        return !loginData.email || !loginData.password || isLoading;
    };

    return (
        <>
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-dvh">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                Sign in to Cropify
                            </h2>
                            <p className="mt-2 text-base text-gray-600">
                                Don’t have an account?{" "}
                                <Link
                                    href="/signup"
                                    title=""
                                    className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-700 hover:underline focus:text-orange-500"
                                >
                                    Signup
                                </Link>
                            </p>

                            <form action="#" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleInputChange}
                                                placeholder="Email Address"
                                                className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-400 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-start">
                                            <Link
                                                href="/reset-password"
                                                title=""
                                                className="text-sm font-medium text-orange-500 hover:underline hover:text-orange-700 focus:text-orange-500"
                                            >
                                                {" "}
                                                Forgot password?{" "}
                                            </Link>
                                        </div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                onChange={handleInputChange}
                                                placeholder="Confirm Password"
                                                className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                                                required
                                            />
                                            <div
                                                onClick={() =>
                                                    setShowPassword(
                                                        (val) => !val
                                                    )
                                                }
                                                className="absolute inset-y-0 right-2 flex items-center pl-3"
                                            >
                                                {showPassword ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 cursor-pointer"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 cursor-pointer"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={handleLogin}
                                            type="submit"
                                            disabled={disableBtn()}
                                            className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 from-fuchsia-60 border border-transparent rounded-md focus:outline-none hover:bg-orange-700 focus:bg-orange-700 ${
                                                disableBtn()
                                                    ? "cursor-not-allowed"
                                                    : ""
                                            } `}
                                        >
                                            {isLoading ? (
                                                <span className="loading loading-spinner loading-md"></span>
                                            ) : (
                                                "Log in"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    title="Not available yet"
                                    className="relative inline-flex cursor-not-allowed items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg
                                            className="w-6 h-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </div>
                                    Sign in with Google
                                </button>

                                <button
                                    type="button"
                                    title="Not available yet"
                                    className="relative cursor-not-allowed inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg
                                            className="w-6 h-6 text-[#2563EB]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </div>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div>
                            <Image
                                className="w-full mx-auto object-cover"
                                width={600}
                                height={600}
                                src={LoginImage}
                                alt=""
                            />

                            <div className="w-full max-w-md mx-auto xl:max-w-xl">
                                <h3 className="text-2xl font-bold text-center text-black">
                                    Smart farming, powered by AI — your trusted
                                    farming assistant
                                </h3>
                                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                                    Cropify is a platform that helps farmers
                                    manage their farms, crops, and livestock
                                    efficiently. It provides real-time insights
                                    and recommendations to help farmers make
                                    informed decisions.
                                </p>

                                <div className="flex items-center justify-center mt-10 space-x-3">
                                    <div className="bg-green-500 rounded-full w-20 h-1.5"></div>

                                    <div className="bg-green-300 rounded-full w-12 h-1.5"></div>

                                    <div className="bg-green-200 rounded-full w-12 h-1.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
