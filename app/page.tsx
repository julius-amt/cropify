"use client";
import Image from "next/image";
import PlantIcon from "@/public/plant.svg";
import FarmingIllustration from "@/public/8065485.jpg";
import { useIndexContext } from "@/app/_context/index";
import Button from "./_components/Button";
import Link from "next/link";
import ChatIcon from "@/public/online-doctor-concept/3712074.jpg";
import FarmImage from "@/public/side-view-women-taking-care-plants.jpg";
import PlantScan from "@/public/smiley-woman-holding-tablet-full-shot.jpg";

const Home = () => {
    const { state } = useIndexContext();


    return (
        <div className="bg-white min-h-dvh max-h-max">
            <header className="bg-[#FCF8F1] bg-opacity-30">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
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

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <Link
                                href="#features"
                                title=""
                                className="text-lg text-black transition-all duration-200 hover:text-opacity-80 hover:text-orange-500 hover:delay-100 hover:ease-in-out hover:origin-left hover:transition-all hover:duration-200 focus:transition-colors focus:duration-200"
                            >
                                {" "}
                                Features{" "}
                            </Link>

                            <a
                                href="#"
                                title=""
                                className="text-lg text-black transition-all duration-200 hover:text-opacity-80 hover:text-orange-500 hover:delay-100 hover:ease-in-out hover:origin-left hover:transition-all hover:duration-200 focus:transition-colors focus:duration-200"
                            >
                                {" "}
                                Solutions{" "}
                            </a>

                            <a
                                href="#"
                                title=""
                                className="text-lg text-black transition-all duration-200 hover:text-opacity-80 hover:text-orange-500 hover:delay-100 hover:ease-in-out hover:origin-left hover:transition-all hover:duration-200 focus:transition-colors focus:duration-200"
                            >
                                {" "}
                                Resources{" "}
                            </a>

                            <a
                                href="#"
                                title=""
                                className="text-lg text-black transition-all duration-200 hover:text-opacity-80 hover:text-orange-500 hover:delay-100 hover:ease-in-out hover:origin-left hover:transition-all hover:duration-200 focus:transition-colors focus:duration-200"
                            >
                                {" "}
                                Pricing{" "}
                            </a>
                        </div>

                        <Link
                            href="/signup"
                            title=""
                            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-orange-500 focus:text-black focus:bg-orange-500 font-semibold text-white bg-black rounded-full"
                            role="button"
                        >
                            {" "}
                            Join Now{" "}
                        </Link>
                    </div>
                </div>
            </header>

            <section className="bg-gray-50 bg-opacity-30 py-10 sm:py-16 lg:py-20 h-dvh">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-x-20 lg:grid-cols-2">
                        <div>
                            <p className="text-lg font-semibold tracking-wider text-green-600 uppercase">
                                Lets have a chat before your next cultivation
                            </p>
                            <h1 className="mt-4 text-4xl font-mono text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                                Get expert advice for your crop & soil now
                            </h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                                Grow your vegetations fast with the right tool.
                            </p>

                            <Link href="/signup">
                                <Button
                                    content={
                                        <>
                                            Join for free
                                            <svg
                                                className="w-6 h-6 ml-8 -mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </>
                                    }
                                    className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-orange-500 rounded-full lg:mt-16 hover:bg-orange-400 focus:bg-orange-400"
                                />
                            </Link>

                            <p className="mt-5 text-gray-600">
                                Already joined us?{" "}
                                <Link
                                    href="/login"
                                    title=""
                                    className="text-black transition-all duration-200 hover:underline"
                                >
                                    Log in
                                </Link>
                            </p>
                        </div>

                        <div className="h-full w-full">
                            <Image
                                src={FarmingIllustration}
                                alt=""
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* display features */}

            <section className="bg-white" id="features">
                {/* <h1 className="text-black font-semibold leading-loose text-4xl flex justify-center items-center py-10">
                    Cropify&lsquo;s Capabilities
                </h1> */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        {/* <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto"> */}
                        <h1 className="text-9xl font-thin">
                            Grow Better with Your Farming Assistant.
                        </h1>
                        {/* </div> */}
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div>
                            <Image
                                className="w-full mx-auto"
                                src={ChatIcon}
                                alt=""
                                width={400}
                                height={300}
                            />

                            <div className="w-full max-w-md mx-auto xl:max-w-xl flex flex-col items-center justify-center">
                                <Link href="#">
                                    <Button
                                        content={
                                            <>
                                                AgroAssist
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-7 ml-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                    />
                                                </svg>
                                            </>
                                        }
                                        className="text-2xl font-medium text-center text-white rounded-full bg-orange-500 w-max flex items-center justify-center px-5 py-4 my-3 cursor-pointer hover:bg-orange-400"
                                    />
                                </Link>

                                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                                    Smart farming, powered by AI — your trusted
                                    farming assistant.
                                </p>

                                <div className="flex items-center justify-center mt-10 space-x-3">
                                    <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                                    <div className="bg-orange-300 rounded-full w-12 h-1.5"></div>

                                    <div className="bg-orange-200 rounded-full w-12 h-1.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gray-50 ">
                        <div className="relative">
                            <Image
                                className="w-full mx-auto object-cover h-full"
                                src={FarmImage}
                                alt=""
                                width={1000}
                                height={1000}
                            />

                            <div className="absolute bottom-3 right-3">
                                <Link href="#">
                                    <Button
                                        content={
                                            <>
                                                AgroAdvisor
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-7 ml-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                    />
                                                </svg>
                                            </>
                                        }
                                        className="text-2xl font-medium text-center text-white rounded-full bg-orange-500 w-max flex items-center justify-center px-5 py-4 my-3 cursor-pointer hover:bg-orange-400"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <h1 className="text-9xl font-thin">
                            <strong className="text-9xl font-extralight text-gray-950 bg-[#bcf0b5] p-1">
                                {" "}
                                Want to maximize Yields?
                            </strong>{" "}
                            Find the Best Time to Plant Your Crops!
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <h1 className="text-9xl font-thin">
                            Upload crop photos, get instant insights, and
                            protect your harvest.
                        </h1>
                    </div>

                    <div className="bg-gray-50">
                        <div className="relative">
                            <Image
                                className="w-full mx-auto object-cover h-full"
                                src={PlantScan}
                                alt=""
                                width={400}
                                height={300}
                            />

                            <div className="absolute bottom-3 right-3">
                                <Link href="/agro-scan">
                                    <Button
                                        content={
                                            <>
                                                AgroScan
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-7 ml-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                    />
                                                </svg>
                                            </>
                                        }
                                        className="text-2xl font-medium text-center text-white rounded-full bg-orange-500 w-max flex items-center justify-center px-5 py-4 my-3 cursor-pointer hover:bg-orange-400"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="">
                <section className="py-5 bg-white sm:pt-16">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[80%]">
                        <div className="grid grid-cols-2 gap-y-12 gap-x-4 xl:gap-x-8">
                            <div className="xl:pr-8">
                                <div className="flex-shrink-0">
                                    <a href="#" title="" className="flex gap-2">
                                        <Image
                                            className="w-auto h-8"
                                            src={PlantIcon}
                                            alt=""
                                            width={160}
                                            height={40}
                                        />
                                        <h1 className="font-bold text-2xl">
                                            CROPIFY
                                        </h1>
                                    </a>
                                </div>

                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-green-600 rounded-md hover:bg-green-700 focus:bg-green-700 mt-7"
                                >
                                    <svg
                                        className="w-6 h-6 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    Start Chat now
                                </a>
                            </div>

                            <div className="flex flex-col justify-start items-center">
                                <p className="font-bold text-gray-900 text-3xl">
                                    Company
                                </p>

                                <ul className="mt-6 flex gap-4">
                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-500 focus:text-orange-500"
                                        >
                                            {" "}
                                            About{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-500 focus:text-orange-500"
                                        >
                                            {" "}
                                            Features{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-500 focus:text-orange-500"
                                        >
                                            {" "}
                                            Works{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-500 focus:text-orange-500"
                                        >
                                            {" "}
                                            Career{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr className="mt-16 mb-10 border-gray-200" />

                        <div className="sm:flex sm:items-center sm:justify-between">
                            <p className="text-sm text-gray-600">
                                © Copyright 2024, All Rights Reserved by
                                Postcraft
                            </p>

                            <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-500 hover:text-white focus:text-white hover:bg-orange-500 hover:border-orange-500 focus:border-orange-500"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-500 hover:text-white focus:text-white hover:bg-orange-500 hover:border-orange-500 focus:border-orange-500"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-500 hover:text-white focus:text-white hover:bg-orange-500 hover:border-orange-500 focus:border-orange-500"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                            <circle
                                                cx="16.806"
                                                cy="7.207"
                                                r="1.078"
                                            ></circle>
                                            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-500 hover:text-white focus:text-white hover:bg-orange-500 hover:border-orange-500 focus:border-orange-500"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Home;
