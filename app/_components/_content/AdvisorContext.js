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

        // console.log(feildsValues)
    };

    const [coordinates, setCoordinates] = useState({
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
        icon: "",
    });

    const [advisorResponse, setAdvisorResponse] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [loading, setLoading] = useState(false);

    async function getLocation() {
        try {
            // Check if geolocation is supported
            if (!navigator.geolocation) {
                throw new Error("Geolocation is not supported by your browser");
            }

            // Use promise with async/await to get geolocation
            const response = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    timeout: 20000,
                    enableHighAccuracy: true,
                    maximumAge: 0,
                });
            });

            // Once coordinates is received, log it and set the coordinates
            const { latitude, longitude } = response.coords;

            // Set the coordinates using the coordinates
            setCoordinates({
                lon: longitude,
                lat: latitude,
            });
        } catch (error) {
            console.log("Error getting coordinates:", error.message);
            return null;
        }
    }

    const getWeather = async () => {
        try {
            if (coordinates.lat && coordinates.lon) {
                console.log("Coordinates:", coordinates);
                const response = await fetch(
                    `/api/weather?lon=${coordinates.lon}&lat=${coordinates.lat}`,
                    {
                        method: "get",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();

                    setWeatherValues({
                        ...weatherValues,
                        name: data?.data?.location?.name,
                        region: data?.data?.location?.region,
                        country: data?.data?.location?.country,
                        temp: data?.data?.current?.temp_c,
                        condition: data?.data?.current?.condition.text,
                        humidity: data?.data?.current?.humidity,
                        wind: data?.data?.current?.wind_kph,
                        icon: data?.data?.current?.condition.icon,
                    });
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const returnToForms = ()=>{
        setShowResponse(!showResponse)
        console.log("click")
    }

    const postAdvisorDetails = async (lat, lon) => {
        console.log("lat", lat, "my ", lon);
        try {
            setLoading(true);
            const response = await fetch(
                `/api/agro-advisor?lon=${-0.2012}&lat=${5.5486}`,
                {
                    method: "Post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    // body: JSON.stringify({
                    //     crop: "Maize",
                    //     cropStage: "Vegetative",
                    //     keyWeeds: "Elephant grass, Crabgrass",
                    //     spilType: "Loamy",
                    //     spoilPH: "6.5",
                    //     soilFertility: "Moderate",
                    //     soilMointure: "High",
                    //     disease: "Maize Streak Virus",
                    //     pests: "Armyworms, Stem borers",
                    // }),
                    body: JSON.stringify({
                        crop: feildsValues.crop,
                        cropStage: feildsValues.cropStage,
                        keyWeeds: feildsValues.keyWeeds,
                        spilType: feildsValues.soilType,
                        spoilPH: feildsValues.soilPH,
                        soilFertility: feildsValues.soilFertility,
                        soilMointure: feildsValues.soilMoisture,
                        disease: feildsValues.disease,
                        pests: feildsValues.pests,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            if (response.ok) {
                const data = await response.json();
                setAdvisorResponse(data?.data?.data?.content);
                console.log("crop", data?.data?.data?.content)
                setLoading(false);
                setShowResponse(true)
                setFieldsValues({
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
            }
            const data1 = await response.json();

            console.log(data1);
            const data = await response.json();
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
                advisorResponse,
                showResponse,
                loading,
                getLocation,
                getWeather,
                weatherValues,
                coordinates,
                returnToForms
            }}
        >
            {children}
        </advisorContext.Provider>
    );
};
