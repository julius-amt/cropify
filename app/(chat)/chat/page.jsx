/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect } from "react";
import Image from "next/image";
import PlantIcon from "@/public/plant.svg";
import Link from "next/link";
import { chatContext } from "@/app/_components/_content/ChatContent";
import { useContext } from "react";
import MarkdownRenderer from "@/app/_components/MarkDownRenderer";
import LogoutButton from "@/app/_components/LogoutButton";
import Weather from "@/app/_components/weather/Weather";
import AiImage from "@/public/ai.png";
import CircularProgress from "@mui/material/CircularProgress";

export default function ChatPage() {
    const {
        getUserMessage,
        postMessage,
        fetchChat,
        chats,
        sending,
        userMessage,
        sentMessage,
        handleKeyPress
    } = useContext(chatContext);

    useEffect(() => {
        fetchChat();
    }, []);

    return (
        <div className="h-screen flex bg-gray-50">
            {/* Sidebar */}
            <div className="w-80 bg-white border-r flex flex-col h-full">
                <div className="p-4 border-b flex-grow flex flex-col">
                    <div className="flex-shrink-0 py-5 flex-grow">
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

                    {/* Chat List */}
                    <div className="flex items-center flex-col space-y-3 gap-10 justify-center">
                        <Weather />
                        <div className="flex-1 overflow-y-auto flex flex-col gap-4 w-full justify-center items-center">
                            <Link
                                href="#"
                                className="w-[80%]"
                                title="Feature will arrive in future version"
                            >
                                <button className="w-full bg-orange-500  text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all hover:transition-all hover:duration-150 hover:delay-200 cursor-not-allowed">
                                    AgroScan
                                </button>
                            </Link>
                            <Link href="/agro-advisor" className="w-[80%]">
                                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:transition-all hover:duration-150 hover:delay-200 transition-colors">
                                    AgroAdvisor
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>{" "}
                {/* User Profile */}
                <div className="p-4 border-t flex">
                    <div className="flex items-center space-x-3 flex-grow">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="flex-1">
                            <div className="font-medium">User Name</div>
                            <div className="text-sm text-gray-500">
                                Pro Plan
                            </div>
                        </div>
                    </div>

                    <LogoutButton />
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}

                <div className="h-16 border-b bg-white flex items-center justify-between px-6">
                    <div className="flex items-center space-x-4">
                        <h1 className="font-semibold text-lg ml-5">
                            Agro-Assist
                        </h1>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {!chats ? (
                        <h3 className="text-gray-700 font-medium text-2xl">
                            Loading...
                        </h3>
                    ) : (
                        chats?.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col space-y-6"
                                >
                                    <div className="flex space-x-4">
                                        <div className="flex-1 ml-[40%]">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <p className="text-gray-800">
                                                    {data?.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center">
                                            <span className="text-white font-semibold">
                                                <Image
                                                    src={AiImage}
                                                    alt=""
                                                    width={50}
                                                    height={50}
                                                />
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="bg-white p-4 rounded-lg shadow-sm mr-[30%]">
                                                <p className="text-gray-800">
                                                    <MarkdownRenderer
                                                        content={
                                                            data?.aiResponse
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}

                    {sending && (
                        <div className="flex space-x-4 ml-[40%]">
                            {/* <div className="w-8 h-8 rounded-lg bg-green-600 flex-shrink-0 flex items-center justify-center">
                                <span className="text-white font-semibold">
                                    C
                                </span>
                            </div> */}
                            <div className="flex-1">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <p className="text-gray-800">
                                        {sentMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-white">
                    <div className="max-w-4xl mx-auto relative">
                        <input
                            type="text"
                            // value={prompt}
                            // onChange={(e) => setPrompt(e.target.value)}
                            onChange={getUserMessage}
                            placeholder="Enter a prompt here..."
                            className="w-full pr-12 pl-4 py-3 rounded-lg border focus:outline-none focus:border-green-500"
                        />
                        <button
                            className={`absolute right-2 top-2 p-2 ${!sending ? "bg-orange-500 text-white rounded-lg" : ""} hover:bg-green-600`}
                            onClick={() => {postMessage(); handleKeyPress();}}
                            disabled={sending}
                        >
                            {
                                !sending ?(
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
                                ):(
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                )
                            }
                           
                             
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
