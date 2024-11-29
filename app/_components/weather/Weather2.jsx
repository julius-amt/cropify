/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useContext } from "react";
import { advisorContext } from "@/app/_components/_content/AdvisorContext";
import Image from "next/image";

const Weather2 = () => {
    const { getWeather, weatherValues, getLocation, coordinates } =
        useContext(advisorContext);

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        getWeather();
    }, [coordinates]);

    return (
        <div className="bg-white h-60 text-black p-4 w-64 rounded-lg shadow-md">
            {weatherValues.icon ? (
                <>
                    <Image
                        src={`https:${weatherValues?.icon}`}
                        alt="Weather icon"
                        width={50}
                        height={50}
                    />
                    <div className="mb-3">
                        <p className="text-lg font-semibold">
                            {weatherValues?.name}
                        </p>
                        <p className="text-sm text-gray-400">
                            {weatherValues?.region}, {weatherValues?.country}
                        </p>
                    </div>

                    <div className="mb-3">
                        <p className="text-md">{weatherValues?.condition}</p>
                        <p className="text-2xl font-bold">
                            {weatherValues?.temp}°C
                        </p>
                    </div>

                    <div className="text-sm text-gray-400">
                        <p>Humidity: {weatherValues?.humidity}</p>
                        <p>Wind: {weatherValues?.wind}</p>
                    </div>
                </>
            ) : (
                <span className="loading loading-spinner loading-lg text-gray-500 flex items-center justify-between h-full m-auto"></span>
            )}
        </div>
    );
};

export default Weather2;
