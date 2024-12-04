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
import ToolTip from "@/app/_components/ToolTip";
import Button from "@/app/_components/Button";

export default function AgroAdvisorPage() {
    const {
        feildsValues,
        fieldValuesChange,
        postAdvisorDetails,
        advisorResponse,
        showResponse,
        loading,
        getLocation,
        location,
        returnToForms,
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
        const requiredFields = ["crop", "cropStage", "soilType"];
        return !requiredFields.every((field) => feildsValues[field]);
    };

    // make a request to get user information
    const [isLoadingUserData, setIsLoadingUserData] = useState(false);
    const [userData, setUserData] = useState(null);

    const getUserInfo = async () => {
        setIsLoadingUserData(true);
        try {
            const response = await fetch("/api/auth/users/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            } else {
                setUserData("Mr. User");
            }
        } catch (error) {}
        setIsLoadingUserData(false);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

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
                            {/* <Link
                                href="#"
                                className="w-[80%]"
                                title="Feature will arrive in future version"
                            >
                                <button className="w-full bg-orange-500  text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all hover:transition-all hover:duration-150 hover:delay-200 cursor-not-allowed">
                                    AgroScan
                                </button>
                            </Link> */}
                            <Link href="/chat" className="w-[80%]">
                                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:transition-all hover:duration-150 hover:delay-200 transition-colors">
                                    AgroAssist
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
                            <div className="font-medium">
                                {isLoadingUserData ? (
                                    <div className="w-16 h-4"></div>
                                ) : (
                                    userData?.username?.toUpperCase()
                                )}
                            </div>
                        </div>
                    </div>

                    <LogoutButton />
                </div>
            </div>

            {/* Main Form Area */}

            <div className="flex-1 flex flex-col p-6">
                {!showResponse ? null : (
                    <button
                        className="font-medium text-center text-white rounded-full bg-orange-500 w-max flex items-start justify-start my-3 cursor-pointer hover:bg-orange-400"
                        onClick={returnToForms}
                        title="Back to form"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-7 p-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                )}
                {showResponse ? (
                    <>
                        <h1 className="text-3xl font-medium py-3">
                            AgroAdvisor Response
                        </h1>
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
                                            <code
                                                className={className}
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        );
                                    },
                                }}
                            >
                                {true && advisorResponse}
                            </ReactMarkdown>
                        </div>
                    </>
                ) : (
                    <div>
                        <h1 className="text-2xl font-semibold mb-6">
                            Agro-Advisor Form
                        </h1>

                        <div></div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex w-full space-x-3">
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="crop"
                                        value={feildsValues.crop}
                                        onChange={fieldValuesChange}
                                        placeholder="Crop name"
                                        required
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* Tooltip Icon */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2 group">
                                        <ToolTip message="Enter the name of the crop being cultivated (e.g., Rice, Maize, Wheat, Tomatoes)." />
                                    </div>
                                </div>

                                <div className="space-y-2 w-full">
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Soil Type
                                    </label> */}
                                    <select
                                        name="soilType"
                                        value={feildsValues.soilType}
                                        required
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

                            <div className="flex w-full space-x-3">
                                {/* Crop Stage Input with Tooltip */}
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="cropStage"
                                        required
                                        value={feildsValues.cropStage}
                                        onChange={fieldValuesChange}
                                        placeholder="Crop Stage"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* Tooltip Component */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2">
                                        <ToolTip message="Specify the stage of crop growth (e.g., seedling, flowering)." />
                                    </div>
                                </div>

                                {/* Key Weeds Input with ToolTip */}
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="keyWeeds"
                                        value={feildsValues.keyWeeds}
                                        onChange={fieldValuesChange}
                                        placeholder="Key Weeds"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* ToolTip Component */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2">
                                        <ToolTip message="Enter the names of significant weeds affecting the crop." />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex space-x-3">
                                {/* Soil PH Input with Tooltip */}
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="soilPH"
                                        value={feildsValues.soilPH}
                                        onChange={fieldValuesChange}
                                        placeholder="Soil PH value"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* Tooltip Component */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2">
                                        <ToolTip message="Enter the pH value of the soil (e.g., 5.5, 7.0)." />
                                    </div>
                                </div>

                                {/* Soil Fertility Input with ToolTip */}
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="soilFertility"
                                        value={feildsValues.soilFertility}
                                        onChange={fieldValuesChange}
                                        placeholder="Soil Fertility"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* ToolTip Component */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2">
                                        <ToolTip message="Indicate soil fertility level (e.g., low, medium, high)." />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex space-x-3">
                                {/* Soil Moisture Input with Tooltip */}
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="soilMoisture"
                                        value={feildsValues.soilMoisture}
                                        onChange={fieldValuesChange}
                                        placeholder="Soil Moisture"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* Tooltip Component */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2">
                                        <ToolTip message="Enter soil moisture level (e.g., 20%, 50%, 80%)." />
                                    </div>
                                </div>

                                {/* Disease Input with ToolTip */}
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="disease"
                                        value={feildsValues.disease}
                                        onChange={fieldValuesChange}
                                        placeholder="Disease"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* ToolTip Component */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2">
                                        <ToolTip message="Specify the disease affecting the crop, if any (e.g., Blight, Rust, Powdery Mildew, Downy Mildew, Leaf Spot, Black Rot, Fusarium Wilt, Anthracnose)." />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex space-x-3">
                                {/* Pests Input with Tooltip */}
                                <div className="space-y-2 w-full relative">
                                    <input
                                        type="text"
                                        name="pests"
                                        value={feildsValues.pests}
                                        onChange={fieldValuesChange}
                                        placeholder="Pests"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    {/* Tooltip Component */}
                                    <div className="absolute top-[35%] right-3 transform -translate-y-1/2">
                                        <ToolTip message="Enter pests affecting crops (e.g., Aphids, Armyworms, Whiteflies, Cutworms, Grasshoppers, Spider Mites, Root Nematodes)." />
                                    </div>
                                </div>

                                {/* Empty Div for Alignment */}
                                <div className="space-y-2 w-full"></div>
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <button
                                    type="submit"
                                    onClick={(e) =>
                                        postAdvisorDetails(5.5486, -0.2012)
                                    }
                                    disabled={disableBtn()}
                                    className="w-48 bg-orange-400 text-white py-3 rounded-lg hover:bg-green-500 transition-colors"
                                    style={{
                                        cursor: disableBtn()
                                            ? "not-allowed"
                                            : "pointer",
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
