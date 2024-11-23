/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SignupImage from "@/public/rb_2148889459.png";
// import { FormData as _formData } from "@/app/_types/signup-data";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";
import { useSignUp } from "@clerk/nextjs";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        telephone: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const {isLoaded, signUp, setActive} = useSignUp();

    const router = useRouter();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUpWithCredentials = async () => {
    	setIsLoading(true);
        if (!isLoaded) return;
    	try {
            await signUp.create({
                emailAddress: formData.email,
                firstName: formData.username,
                phoneNumber: formData.telephone,
                password: formData.newPassword,
            })
    	} catch (error: any) {
    		throw new Error("Error", error);
    	}
    	setIsLoading(false);
    };

    const disableBtn = () => {
        return (
            !formData?.confirmPassword ||
            !formData.newPassword ||
            !formData.email ||
            !formData.telephone ||
            !formData.username
        );
    };

    return (
        <>
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-dvh">
                    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div className="absolute inset-0">
                            <Image
                                className="object-cover sm:object-contain w-full h-full"
                                src={SignupImage}
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                        <div className="relative">
                            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                <h3 className="text-3xl font-bold text-white">
                                    Revolutionize your farming with AI,{" "}
                                    {/* <br className="hidden xl:block" /> */}
                                    gain smart insights, make better decisions
                                </h3>
                                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                                            <svg
                                                className="w-3.5 h-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-base font-medium text-white">
                                            Unlimited Access to AgroAssist
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                                            <svg
                                                className="w-3.5 h-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-base font-medium text-white">
                                            Upload & Analyze Your Crop
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                                            <svg
                                                className="w-3.5 h-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-base font-medium text-white">
                                            Plan you next planting season
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                                            <svg
                                                className="w-3.5 h-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-base font-medium text-white">
                                            No Ads, No Interruptions
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                Sign up to Cropify
                            </h2>
                            <p className="mt-2 text-base text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    title=""
                                    className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-700 focus:text-orange-500 hover:underline"
                                >
                                    Login
                                </Link>
                            </p>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="mt-8"
                            >
                                <div className="space-y-5">
                                    <div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-ceorangenter pl-3 pointer-events-none">
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
                                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type="text"
                                                name="username"
                                                onChange={handleInput}
                                                placeholder="Full Name"
                                                className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                                                required
                                            />
                                        </div>
                                    </div>
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
                                                onChange={handleInput}
                                                placeholder="Email Address"
                                                className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
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
                                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type="tel"
                                                name="telephone"
                                                onChange={handleInput}
                                                placeholder="Telephone"
                                                className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
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
                                                    showPassword1
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="newPassword"
                                                onChange={handleInput}
                                                placeholder="New Password"
                                                className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                                                required
                                            />

                                            <div
                                                onClick={() =>
                                                    setShowPassword1(
                                                        (val) => !val
                                                    )
                                                }
                                                className="absolute inset-y-0 right-2 flex items-center pl-3"
                                            >
                                                {showPassword1 ? (
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
                                                    showPassword2
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="confirmPassword"
                                                onChange={handleInput}
                                                placeholder="Confirm Password"
                                                className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                                                required
                                            />

                                            <div
                                                onClick={() =>
                                                    setShowPassword2(
                                                        (val) => !val
                                                    )
                                                }
                                                className="absolute inset-y-0 right-2 flex items-center pl-3"
                                            >
                                                {showPassword2 ? (
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
                                            type="submit"
                                            disabled={disableBtn() || isLoading}
                                            // onClick={
                                            // 	handleSignUpWithCredentials
                                            // }
                                            className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-lg focus:bg-orange-700 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 ${
                                                disableBtn()
                                                    ? "cursor-not-allowed"
                                                    : ""
                                            }`}
                                        >
                                            {isLoading ? (
                                                <span className="loading loading-spinner loading-md"></span>
                                            ) : (
                                                "Create account"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
