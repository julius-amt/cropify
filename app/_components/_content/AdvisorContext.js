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
            value={{ fieldValuesChange, feildsValues, postAdvisorDetails }}
        >
            {children}
        </advisorContext.Provider>
    );
};
