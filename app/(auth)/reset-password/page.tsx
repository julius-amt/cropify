/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import ForgotPasswordGif from "@/public/Forgot password-pana.svg";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleForgotPassword = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch("/api/auth/reset-password", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});
			const data = await response.json();
			if (response.ok) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				data?.message
					? toast.success("Reset link sent to you email", {
							duration: 4000,
					  }) && router.push("/login")
					: toast.error("An error occured, try again!", {
							duration: 4000,
					  });
			}
			toast.error(data.error, {
				duration: 4000,
			});
		} catch (error) {
			console.error("Error", error);
		}
		setIsLoading(false);
	};

	return (
		<section className="py-10 h-dvh sm:h-fit bg-gray-50 sm:py-16 md:h-dvh">
			<div className="px-4 mx-auto max-w-7xl sm:px-6">
				<div className="max-w-2xl mx-auto flex flex-col justify-center items-center">
					<Image
						src={ForgotPasswordGif}
						alt=""
						width={200}
						height={200}
						className="h-[50%] w-[50%]"
					/>
					<h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
						Forgot Password?
					</h2>
					<p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 text-center">
						Please enter your registered email address, we will get
						back to you with the reset password link via your
						provided email
					</p>
				</div>

				<div className="relative max-w-md mx-auto mt-8">
					<div className="overflow-hidden bg-white rounded-md shadow-md">
						<div className="px-4 py-6 sm:px-8 sm:py-7">
							<form action="#" method="POST">
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
												placeholder="Email"
												className="block w-full py-4 pl-10 pr-4 outline-none text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 caret-orange-500"
											/>
										</div>
									</div>

									<div>
										<button
											type="button"
											disabled={!email || isLoading}
											onClick={(e: any) =>
												handleForgotPassword(e)
											}
											className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-700 focus:bg-orange-700 ${
												!email
													? "cursor-not-allowed"
													: ""
											}`}
										>
											{isLoading ? (
												<span className="loading loading-spinner loading-md"></span>
											) : (
												"Send"
											)}
										</button>
									</div>

									<div className="text-center">
										<p className="text-base text-gray-600">
											Remember you password?{" "}
											<Link
												href="/login"
												title=""
												className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-500 hover:underline"
											>
												Login
											</Link>
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
