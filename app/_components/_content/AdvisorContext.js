"use client";
import { useState } from "react";
import { createContext } from "react";

export const advisorContext = createContext(null);

export const AdvisorContextProvider = ({ children }) => {
    const [feildsValues, setFieldsValues] = useState({
        crop: "",
        cropStage: "",
        keyWeeds: "",
        soilType: "",
        soilPH: "",
        soilFertility: "",
        soilMoisture: "",
        disease: "",
        pests: "",
    });

    const fieldValuesChange = (e) => {
        setFieldsValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const [location, setLocation] = useState({
        lon: "",
        lat: "",
    });

    const [weatherValues, setWeatherValues] = useState({
        condition: "",
        name: "",
        region: "",
        country: "",
        temp: "",
        humidity: "",
        wind: "",
    });

    const [aiResponse, setAiResponse] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [loading, setLoading] = useState(false);

    async function getLocation() {
        try {
            // Check if geolocation is supported
            if (!navigator.geolocation) {
                throw new Error("Geolocation is not supported by your browser");
            }

            // Wrap getCurrentPosition in a promise
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    timeout: 5000,
                    enableHighAccuracy: true,
                });
            })
                .then((position) => {
                    console.log("posi", position);
                    setLocation({
                        ...location,
                        lon: position.coords.longitude,
                        lat: position.coords.latitude,
                    });
                    getWeather();
                })
                .then((res) => {});
            console.log("mamam");

            // Return only latitude and longitude
            //   return {
            //     latitude: position.coords.latitude,
            //     longitude: position.coords.longitude
            //   };

            console.log(location);
        } catch (error) {
            console.log("Error getting location:", error.message);
            return null;
        }
    }

    const getWeather = async () => {
        console.log(" lo", location.lon, "lat", location.lat);
        console.log("yaw");

        try {
            if (location.lat && location.lon) {
                const response = await fetch(
                    `http://localhost:3000/api/weather?lon=${location.lon}&lat=${location.lat}`,
                    {
                        method: "get",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.ok) {
                    console.log("ok");
                    const data = await response.json();

                    console.log(" wetther", data.data);
                    setWeatherValues({
                        ...weatherValues,
                        name: data?.data?.location?.name,
                        region: data?.data?.location?.region,
                        country: data?.data?.location?.country,
                        temp: data?.data?.current?.temp_c,
                        condition: data?.data?.current?.condition.text,
                        humidity: data?.data?.current?.humidity,
                        wind: data?.data?.current?.wind_kph,
                    });
                    console.log(weatherValues);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const postAdvisorDetails = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/agro-advisor?lon=8.1&lat=1.2",
                {
                    method: "Post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        crop: "Maize",
                        cropStage: "Vegetative",
                        keyWeeds: "Elephant grass, Crabgrass",
                        spilType: "Loamy",
                        spoilPH: "6.5",
                        soilFertility: "Moderate",
                        soilMointure: "High",
                        disease: "Maize Streak Virus",
                        pests: "Armyworms, Stem borers",
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <advisorContext.Provider
            value={{
                fieldValuesChange,
                feildsValues,
                postAdvisorDetails,
                aiResponse,
                showResponse,
                loading,
                getLocation,
                getWeather,
                weatherValues,
                location,
            }}
        >
            {children}
        </advisorContext.Provider>
    );
};
