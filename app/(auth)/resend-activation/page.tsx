/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ResendActivationLink() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// const handleSubmit = async (e: any) => {
	// 	e.preventDefault();
	// 	setIsLoading(true);
	// 	try {
	// 		const response = await fetch("/api/v1/auth/resend-activation", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({ email }),
	// 		});
	// 		if (response.ok) {
	// 			toast.success("Activation link sent successfully", {
	// 				duration: 4000,
	// 			});
	// 		} else {
	// 			toast.error(
	// 				"An error occurred, verify email and  again later.",
	// 				{ duration: 4000 }
	// 			);
	// 		}
	// 	} catch (error: any) {
	// 		throw new Error("Error:", error);
	// 	}
	// };

	return (
		<section className="py-10 h-dvh bg-gray-50 sm:py-16 lg:py-24">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
						Resend Activation Email
					</h2>
					<p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
						Need to resend the verification email? Enter your email
						address below to receive a new activation link.
					</p>
				</div>

				<div className="relative max-w-md mx-auto mt-8 md:mt-16">
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
												onChange={(e) =>
													setEmail(e.target.value)
												}
												placeholder="Email"
												className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md outline-none focus:border-orange-500 caret-orange-500"
											/>
										</div>
									</div>

									<div>
										<button
											type="submit"
											disabled={!email}
											// onClick={handleSubmit}
											className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md hover:bg-orange-700 focus:bg-orange-700 ${
												!email || isLoading
													? "cursor-not-allowed"
													: "cursor-pointer"
											}`}
										>
											Submit
										</button>
									</div>

									<div className="text-center">
										<p className="text-base text-gray-600">
											This was a mistake?{" "}
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
