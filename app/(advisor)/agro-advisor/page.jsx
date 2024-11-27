/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// pages/chat.tsx
import { useEffect, useState } from "react";
import PlantIcon from "@/public/plant.svg";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { advisorContext } from "@/app/_components/_content/AdvisorContext";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CircularProgress from "@mui/material/CircularProgress";
import Weather from "@/app/_components/weather/Weather";
import LogoutButton from "@/app/_components/LogoutButton";

export default function AgroAdvisorPage() {
    const {
        feildsValues,
        fieldValuesChange,
        postAdvisorDetails,
        aiResponse,
        showResponse,
        loading,
        getLocation,
    } = useContext(advisorContext);

    const [formData, setFormData] = useState({
        crop: "",
        soilType: "",
        soilPh: "",
        pest: "",
        disease: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
    };

    useEffect(() => {
        getLocation();
    }, []);

    const disableBtn = () => {
        return Object.values(feildsValues).includes("");
    };

    return (
        <div className="h-screen flex bg-gray-50 ">
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

            {/* Main Form Area */}
            <div className="flex-1 flex flex-col p-6">
                {showResponse ? (
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <ReactMarkdown
                            components={{
                                code({
                                    inline,
                                    className,
                                    children,
                                    ...props
                                }) {
                                    const match = /language-(\w+)/.exec(
                                        className || ""
                                    );
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={darcula}
                                            language={match[1]}
                                            {...props}
                                        >
                                            {String(children).replace(
                                                /\n$/,
                                                ""
                                            )}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {true && aiResponse}
                        </ReactMarkdown>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-2xl font-semibold mb-6">
                            Agro-Advisor Form
                        </h1>

                        <div></div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex w-full space-x-3 ">
                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Crop
                                    </label> */}
                                    <input
                                        type="text"
                                        name="crop"
                                        value={feildsValues.crop}
                                        onChange={fieldValuesChange}
                                        placeholder="Crop name"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Soil Type
                                    </label> */}
                                    <select
                                        name="soilType"
                                        value={feildsValues.soilType}
                                        onChange={fieldValuesChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="">
                                            Select Soil Type
                                        </option>
                                        <option value="clay">Clay</option>
                                        <option value="sandy">Sandy</option>
                                        <option value="loamy">Loamy</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex w-full space-x-3 ">
                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Crop stage
                                    </label> */}
                                    <input
                                        type="text"
                                        name="cropStage"
                                        value={feildsValues.cropStage}
                                        onChange={fieldValuesChange}
                                        placeholder="Crop Stage"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        key weeds
                                    </label> */}
                                    <input
                                        type="text"
                                        name="keyWeeds"
                                        value={feildsValues.pest}
                                        onChange={fieldValuesChange}
                                        placeholder="Key Weeds"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex space-x-3">
                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        SoilPH
                                    </label> */}
                                    <input
                                        type="text"
                                        name="soilPH"
                                        value={feildsValues.soilPH}
                                        onChange={fieldValuesChange}
                                        placeholder="Soin PH value"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Soil fertility
                                    </label> */}
                                    <input
                                        type="text"
                                        name="soilFertility"
                                        value={feildsValues.soilFertility}
                                        onChange={fieldValuesChange}
                                        placeholder="Soil fertility"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex space-x-3">
                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Soil moisture
                                    </label> */}
                                    <input
                                        type="text"
                                        name="soilMoisture"
                                        value={feildsValues.soilMoisture}
                                        onChange={fieldValuesChange}
                                        placeholder="Soil moisture"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Disease
                                    </label> */}
                                    <input
                                        type="text"
                                        name="disease"
                                        value={feildsValues.disease}
                                        onChange={fieldValuesChange}
                                        placeholder="Disease"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex space-x-3">
                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Pests
                                    </label> */}
                                    <input
                                        type="text"
                                        name="pests"
                                        value={feildsValues.pests}
                                        onChange={fieldValuesChange}
                                        placeholder="Pests"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div className="space-y-2 w-full"></div>
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <button
                                    type="submit"
                                    onClick={(e) => postAdvisorDetails()}
                                    disabled={disableBtn()}
                                    className="w-48 bg-orange-400 text-white py-3 rounded-lg hover:bg-green-500 transition-colors"
                                    style={{
                                        cursor: disableBtn ? "not-allowed" : "",
                                    }}
                                >
                                    {loading ? (
                                        <CircularProgress
                                            color="inherit"
                                            size={20}
                                        />
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
