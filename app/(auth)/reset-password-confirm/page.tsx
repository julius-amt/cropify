/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ResetPasswordConfirm() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword1, setShowPassword1] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
	};

	return (
		<section className="py-10 h-dvh bg-gray-50 sm:py-16">
			<div className="px-4 mx-auto max-w-7xl sm:px-6">
				<div className="max-w-2xl mx-auto flex flex-col justify-center items-center">
					<h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
						Reset Your Password
					</h2>
					<p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 text-center">
						Please enter your new password below to complete the
						reset process.
					</p>
				</div>

				<div className="relative max-w-md mx-auto mt-8">
					<div className="overflow-hidden bg-white rounded-md shadow-md">
						<div className="px-4 py-6 sm:px-8 sm:py-7">
							<form onSubmit={handleSubmit}>
								<div className="space-y-5">
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
												onChange={(e) =>
													setPassword(e.target.value)
												}
												value={password}
												placeholder="New Password"
												className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600"
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
												value={confirmPassword}
												onChange={(e) =>
													setConfirmPassword(
														e.target.value
													)
												}
												placeholder="Confirm Password"
												className="block w-full py-4 pl-10 outline-none pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 caret-orange-500 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600"
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
											className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
										>
											Reset Password
										</button>
									</div>

									<div className="text-center mt-3">
										<Link
											href="/login"
											className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
										>
											Back to Login
										</Link>
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
