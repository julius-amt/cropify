"use client";
// pages/chat.tsx
import { useState } from "react";
import Image from "next/image";
import PlantIcon from "@/public/plant.svg";
import Link from "next/link";

export default function ChatPage() {
    const [prompt, setPrompt] = useState("");

    return (
        <div className="h-screen flex bg-gray-50">
            {/* Sidebar */}
            <div className="w-80 bg-white border-r flex flex-col h-full">
                <div className="p-4 border-b">
                <div className="flex-shrink-0 py-5">
                        <a href="#" title="" className="flex gap-2">
                            <Image
                                className="w-auto h-8"
                                src={PlantIcon}
                                alt=""
                                width={160}
                                height={40}
                            />
                            <h1 className="font-bold text-2xl">CROPIFY</h1>
                        </a>
                    </div>

                    <button className="w-full font-bold bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:rounded-full hover:transition-all hover:duration-150 hover:delay-200  transition-colors">
                        + New Chat
                    </button>

                    <div className="mt-4 relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                        <svg
                            className="w-4 h-4 absolute left-2.5 top-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-2">
                        <div className="space-y-1">
                            {["Folder", "Favorite", "Archive"].map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2 px-3 py-2 hover:bg-green-400 rounded-lg cursor-pointer hover:text-white"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500 hover:text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            />
                                        </svg>
                                        <span className="">
                                            {item}
                                        </span>
                                        <span className="ml-auto ">
                                            8
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center flex-col space-y-3 ">
                  <Link href="/agroscan" className="w-[80%]">
                    <button className="w-full bg-orange-500  text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:rounded-full transition-all hover:transition-all hover:duration-150 hover:delay-200">
                        AgroScan
                    </button>
                  </Link>
                  <Link href="/agroadvisor" className="w-[80%]">
                    <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:rounded-full hover:transition-all hover:duration-150 hover:delay-200 transition-colors">
                        AgroAdvisor
                    </button>
                  </Link>
                </div>

                {/* User Profile */}
                <div className="p-4 border-t">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="flex-1">
                            <div className="font-medium">User Name</div>
                            <div className="text-sm text-gray-500">
                                Pro Plan
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="h-16 border-b bg-white flex items-center justify-between px-6">
                    <h1 className="font-semibold text-lg">Agro-Assist</h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="flex space-x-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                        <div className="flex-1">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-gray-800">
                                    Write a 100-character meta description for
                                    my blog post about digital marketing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-green-600 flex-shrink-0 flex items-center justify-center">
                            <span className="text-white font-semibold">C</span>
                        </div>
                        <div className="flex-1">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-gray-800">
                                    Master the art of digital marketing with
                                    expert strategies for online success. Unlock
                                    growth now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-white">
                    <div className="max-w-4xl mx-auto relative">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Enter a prompt here..."
                            className="w-full pr-12 pl-4 py-3 rounded-lg border focus:outline-none focus:border-indigo-500"
                        />
                        <button className="absolute right-2 top-2 p-2 bg-orange-500 text-white rounded-lg hover:bg-green-600">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="text-center mt-2 text-xs text-gray-500">
                        ChatAI has the potential to generate incorrect
                        information
                    </div>
                </div>
            </div>
        </div>
    );
}
