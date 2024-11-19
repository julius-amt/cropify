import Image from "next/image";
import PlantIcon from "@/public/plant.svg";
import HomeImage from "@/public/home-image.jpeg";

const Home = () => {
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

                        <button
                            type="button"
                            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                        >
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 8h16M4 16h16"
                                ></path>
                            </svg>

                            <svg
                                className="hidden w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <a
                                href="#"
                                title=""
                                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                            >
                                {" "}
                                Features{" "}
                            </a>

                            <a
                                href="#"
                                title=""
                                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                            >
                                {" "}
                                Solutions{" "}
                            </a>

                            <a
                                href="#"
                                title=""
                                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                            >
                                {" "}
                                Resources{" "}
                            </a>

                            <a
                                href="#"
                                title=""
                                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                            >
                                {" "}
                                Pricing{" "}
                            </a>
                        </div>

                        <a
                            href="#"
                            title=""
                            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                            role="button"
                        >
                            {" "}
                            Join Now{" "}
                        </a>
                    </div>
                </div>
            </header>

            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                                Lets have a chat before your next cultivation
                            </p>
                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                                Get expert advice for your crop & soil now
                            </h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                                Grow your vegetations fast with the right tool.
                            </p>

                            <a
                                href="#"
                                title=""
                                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                                role="button"
                            >
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
                            </a>

                            <p className="mt-5 text-gray-600">
                                Already joined us?{" "}
                                <a
                                    href="#"
                                    title=""
                                    className="text-black transition-all duration-200 hover:underline"
                                >
                                    Log in
                                </a>
                            </p>
                        </div>

                        <div className="h-full w-full rounded-full">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FarmBot_Genesis_different_crops_being_grown_together.jpg/1280px-FarmBot_Genesis_different_crops_being_grown_together.jpg"
                                alt=""
                                width={100}
                                height={100}
                                className="rounded w-full h-full blur-sm object-fill"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* display features */}
            <section className="bg-white">
                {/* <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                Sign in to Celebration
                            </h2>
                            <p className="mt-2 text-base text-gray-600">
                                Don’t have an account?{" "}
                                <a
                                    href="#"
                                    title=""
                                    className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                                >
                                    Create a free account
                                </a>
                            </p>

                            <form action="#" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            {" "}
                                            Email address{" "}
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name=""
                                                id=""
                                                placeholder="Enter email to get started"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label className="text-base font-medium text-gray-900">
                                                {" "}
                                                Password{" "}
                                            </label>

                                            <a
                                                href="#"
                                                title=""
                                                className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                                            >
                                                {" "}
                                                Forgot password?{" "}
                                            </a>
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                name=""
                                                id=""
                                                placeholder="Enter your password"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                        >
                                            Log in
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg
                                            className="w-6 h-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </div>
                                    Sign in with Google
                                </button>

                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg
                                            className="w-6 h-6 text-[#2563EB]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </div>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div>
                            <img
                                className="w-full mx-auto"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
                                alt=""
                            />

                            <div className="w-full max-w-md mx-auto xl:max-w-xl">
                                <h3 className="text-2xl font-bold text-center text-black">
                                    Design your own card
                                </h3>
                                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis.
                                </p>

                                <div className="flex items-center justify-center mt-10 space-x-3">
                                    <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                                    <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                                    <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
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
                                    className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    Start Live Chat
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
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            About{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Features{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Works{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Career{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="lg:col-span-2">
                                <p className="text-base font-semibold text-gray-900">
                                    Help
                                </p>

                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Customer Support{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Delivery Details{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Terms & Conditions{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Privacy Policy{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
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
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
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
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
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
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
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
                                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* <div
                        className="w-full h-[20vh] bg-[#f1f2f1e3] flex flex-col justify-center items-center text-gray-700"
                    >
                        <h1>
                            Join the future of intelligent agriculture with
                            Cropify AI!{" "}
                        </h1>
                        <p>
                            Embrace our cutting-edge technology and transform
                            your farming operations into a sustainable,
                            efficient, and prosperous venture. ower of AI in
                            agriculture today! 🌐
                        </p>
                    </div> */}
            </footer>
        </div>
    );
};

export default Home;
