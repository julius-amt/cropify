"use client";

import { useState } from "react";
import Image from "next/image";
import PlantIcon from "@/public/plant.svg";
import Link from "next/link";
import Weather from "@/src/weather/Weather"

export default function ChatPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [isUploading, setIsUploading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(true);
    const [analysisResult, setAnalysisResult] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedImage) return;

        setIsUploading(true);
        try {
            // Add your upload logic here
            const formData = new FormData();
            formData.append("image", selectedImage);

            // Example upload code - replace with your actual API endpoint
            // const response = await fetch('/api/upload', {
            //   method: 'POST',
            //   body: formData,
            // });

            console.log("Uploading image:", selectedImage);
            // Simulate upload delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Handle success
            alert("Image uploaded successfully!");
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Upload failed. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleAnalyze = async () => {
        if (!selectedImage) return;

        try {
            console.log("Analyzing image:", selectedImage);
            // Add your analysis logic here
            setAnalysisResult("Sample analysis result");
        } catch (error) {
            console.error("Analysis failed:", error);
            alert("Analysis failed. Please try again.");
        }
    };

    const handleSubmit = async () => {
        if (!selectedImage || !analysisResult) return;

        setIsSubmitting(true);
        try {
            // Add your submit logic here
            const formData = new FormData();
            formData.append("image", selectedImage);
            formData.append("analysis", analysisResult);

            console.log("Submitting data:", {
                image: selectedImage,
                analysis: analysisResult,
            });
            // Simulate submission delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Handle success
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                    <button className="w-full bg-orange-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                        + New Form
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
                <div className="flex-1 overflow-y-auto flex justify-center items-center">
                     <Weather/>
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
                    <h1 className="font-semibold">Image Analysis</h1>
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

                {/* Image Upload Area */}
                <div className="flex-1 my-52 overflow-y-auto p-6 items-center justify-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                            <div className="space-y-4 text-center">
                                {imagePreview ? (
                                    <>
                                        <div className="relative w-full h-96 mb-6">
                                            <Image
                                                src={imagePreview}
                                                alt="Uploaded preview"
                                                fill
                                                className="object-contain rounded-lg"
                                            />
                                            <button
                                                onClick={() => {
                                                    setSelectedImage(null);
                                                    setImagePreview("");
                                                    setAnalysisResult(null);
                                                }}
                                                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                            >
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
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex justify-center space-x-4">
                                            <button
                                                onClick={handleUpload}
                                                disabled={isUploading}
                                                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed flex items-center"
                                            >
                                                {isUploading ? (
                                                    <>
                                                        <svg
                                                            className="animate-spin h-5 w-5 mr-2"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                                fill="none"
                                                            />
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            />
                                                        </svg>
                                                        <span>
                                                            Uploading...
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span>Upload</span>
                                                )}
                                            </button>
                                            <button
                                                onClick={handleAnalyze}
                                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                            >
                                                Analyze
                                            </button>
                                            <button
                                                onClick={handleSubmit}
                                                disabled={
                                                    isSubmitting ||
                                                    !analysisResult
                                                }
                                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className="animate-spin h-5 w-5 mr-2"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                                fill="none"
                                                            />
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            />
                                                        </svg>
                                                        <span>
                                                            Submitting...
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span>Submit</span>
                                                )}
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <div className="text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-semibold text-xl text-green-600 hover:text-green-500"
                                            >
                                                <span>Upload an image</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleImageUpload}
                                                    accept="image/*"
                                                />
                                            </label>
                                            <p className="mt-2 text-lg">
                                                or drag and drop
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
