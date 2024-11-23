"use client";
// pages/chat.tsx
import { useState } from "react";
import PlantIcon from "@/public/plant.svg";
import Image from "next/image";
import Link from "next/link";

export default function AgroAdvisorPage() {
    const [formData, setFormData] = useState({
        crop: "",
        soilType: "",
        soilPh: "",
        pest: "",
        disease: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
    };

    return (
        <div className="h-screen flex bg-gray-50 ">
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

                    <button className="w-full bg-orange-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                        + New Form
                    </button>

                    <div className="mt-4 relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:border-orange-400"
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
                                        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
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
                                        <span className="text-gray-700">
                                            {item}
                                        </span>
                                        <span className="ml-auto text-gray-400 text-sm">
                                            8
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar Buttons */}
                <div className="flex items-center flex-col space-y-3">
                    <Link href="/chat" className="w-[80%]">
                        <button className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                            AgroAssist
                        </button>
                    </Link>
                    <Link href="/agro-scan" className="w-[80%]">
                        <button className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                            AgroScan
                        </button>
                    </Link>
                </div>

                {/* User Profile */}
                <div className="p-4 border-t">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="flex-1">
                            <div className="font-medium">Julius Markwei</div>
                            <div className="text-sm text-gray-500">
                                Pro Plan
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Form Area */}
            <div className="flex-1 flex flex-col p-6">
                <h1 className="text-2xl font-semibold mb-6">
                    Agro-Advisor Form
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex w-full space-x-3 ">
                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Crop
                            </label>
                            <input
                                type="text"
                                name="crop"
                                value={formData.crop}
                                onChange={handleChange}
                                placeholder="Enter crop name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Soil Type
                            </label>
                            <select
                                name="soilType"
                                value={formData.soilType}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select soil type</option>
                                <option value="clay">Clay</option>
                                <option value="sandy">Sandy</option>
                                <option value="loamy">Loamy</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex w-full space-x-3 ">
                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Soil pH
                            </label>
                            <input
                                type="text"
                                name="soilPh"
                                value={formData.soilPh}
                                onChange={handleChange}
                                placeholder="Enter soil pH value"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Pest
                            </label>
                            <input
                                type="text"
                                name="pest"
                                value={formData.pest}
                                onChange={handleChange}
                                placeholder="Enter pest name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    <div className="w-full flex space-x-3">
                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Disease
                            </label>
                            <input
                                type="text"
                                name="disease"
                                value={formData.disease}
                                onChange={handleChange}
                                placeholder="Enter disease name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Disease
                            </label>
                            <input
                                type="text"
                                name="disease"
                                value={formData.disease}
                                onChange={handleChange}
                                placeholder="Enter disease name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    <div className="w-full flex space-x-3">
                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Disease
                            </label>
                            <input
                                type="text"
                                name="disease"
                                value={formData.disease}
                                onChange={handleChange}
                                placeholder="Enter disease name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Disease
                            </label>
                            <input
                                type="text"
                                name="disease"
                                value={formData.disease}
                                onChange={handleChange}
                                placeholder="Enter disease name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-green-500 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
