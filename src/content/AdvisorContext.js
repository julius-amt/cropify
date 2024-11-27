"use client"
import { useState } from "react";
import { createContext } from "react";



export const advisorContext = createContext(null);

export const AdvisorContextProvider = ({children}) =>{
    const [feildsValues, setFieldsValues] = useState({
        crop:"", 
        cropStage:"",
        keyWeeds:"",
        soilType:"",
        soilPH:"",
        soilFertility:"",
        soilMoisture:"",
        disease:"",
        pests:'',
    })

    const [aiResponse, setAiResponse] = useState("")

    const [showResponse, setShowResponse] = useState(false)
    const [loading, setLoading] = useState(false)

    const [location, setLocation] = useState({
        lon:"",
        lat:""
    })

    const [weatherValues, setWeatherValues] = useState({
        condition:"",
        name:"",
        region:"",
        country:"",
        temp:"",
        humidity:"",
        wind:""
    })



    const fieldValuesChange = (e) => {
        setFieldsValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));

        // setFieldsValues({...feildsValues, [e.target.name]: e.target.value})

        console.log(feildsValues)
    };

    // async function getLocation() {
    //     try {
    //       // Check if geolocation is supported
    //       if (!navigator.geolocation) {
    //         throw new Error('Geolocation is not supported by your browser');
    //       }
      
    //       // Wrap getCurrentPosition in a promise
    //       const position = await new Promise((resolve, reject) => {
    //         navigator.geolocation.getCurrentPosition(resolve, reject, {
    //           timeout: 5000,
    //           enableHighAccuracy: true
    //         });
    //       })
    //       .then((position)=>{
    //         console.log("posi", position)
    //         setLocation({...location, lon: position.coords.longitude, lat: position.coords.latitude})
    //         getWeather()
    //       })
    //       .then((res)=>{
            
    //       })
    //       console.log("mamam")
          
    //       // Return only latitude and longitude
    //     //   return {
    //     //     latitude: position.coords.latitude,
    //     //     longitude: position.coords.longitude
    //     //   };
        
    //     console.log(location)
    //     } catch (error) {
    //       console.log('Error getting location:', error.message);
    //       return null;
    //     }
    //   }

    async function getLocation() {
        try {
            if (!navigator.geolocation) {
                throw new Error('Geolocation is not supported by your browser');
            }
    
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    timeout: 5000,
                    enableHighAccuracy: true,
                });
            });
    
            const { longitude, latitude } = position.coords;
    
            // Update state with location coordinates
            setLocation({ lon: longitude, lat: latitude });
    
            // Call getWeather with the updated coordinates directly
            await getWeather(longitude, latitude);
        } catch (error) {
            console.log('Error getting location:', error.message);
        }
    }

    //   const getWeather = async()=>{
    //     console.log(" lo", location.lon, "lat", location.lat )
    //     console.log("yaw")
       
    //    try {
    //         if(location.lat && location.lon){
    //             const response = await fetch(`http://localhost:3000/api/weather?lon=${location.lon}&lat=${location.lat}`, {
    //                 method: "get",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 }})
                    
    //                 if(response.ok){
    //                     console.log("ok")
    //                     const data = await response.json()
                    
    //                      console.log(" wetther", data.data)
    //                      setWeatherValues({
    //                         ...weatherValues,
    //                         name: data?.data?.location?.name,
    //                         region: data?.data?.location?.region,
    //                         country: data?.data?.location?.country,
    //                         temp: data?.data?.current?.temp_c,
    //                         condition: data?.data?.current?.condition.text,
    //                         humidity:data?.data?.current?.humidity,
    //                         wind:data?.data?.current?.wind_kph

    //                      })

    //                      console.log(weatherValues)
    //                 }
                    
                    
    //         }

    //    } catch (error) {
    //      console.log(error)
    //    }

    //   }

    const getWeather = async (lon, lat) => {
        console.log("Longitude:", lon, "Latitude:", lat);
    
        try {
            if (lat && lon) {
                const response = await fetch(
                    `http://localhost:3000/api/weather?lon=${lon}&lat=${lat}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
    
                if (response.ok) {
                    const data = await response.json();
                    console.log("Weather data:", data.data);
    
                    setWeatherValues({
                        name: data?.data?.location?.name,
                        region: data?.data?.location?.region,
                        country: data?.data?.location?.country,
                        temp: data?.data?.current?.temp_c,
                        condition: data?.data?.current?.condition.text,
                        humidity: data?.data?.current?.humidity,
                        wind: data?.data?.current?.wind_kph,
                    });
    
                    console.log("Updated Weather Values:", weatherValues);
                }
            }
        } catch (error) {
            console.log("Error fetching weather data:", error);
        }
    };




    const postAdvisorDetails = async() =>{
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:3000/api/agro-advisor?lon=${location.lon}&lat=${location.lat}`, {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    crop: feildsValues.crop,
                    cropStage: feildsValues.cropStage,
                    keyWeeds: feildsValues.keyWeeds,
                    spilType: feildsValues.soilType,
                    spoilPH: feildsValues.soilPH,
                    soilFertility: feildsValues.soilFertility,
                    soilMointure: feildsValues.soilMoisture,
                    disease: feildsValues.disease,
                    pests: feildsValues.pests
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            if(response.ok){
                setFieldsValues({
                    crop:"", 
                    cropStage:"",
                    keyWeeds:"",
                    soilType:"",
                    soilPH:"",
                    soilFertility:"",
                    soilMoisture:"",
                    disease:"",
                    pests:''
                })
                const data = await response.json()
                setAiResponse(data?.data?.data?.content)
                setShowResponse(true)
                setLoading(false)
            }
    
        } catch (error) {
            console.log("Error:", error);
        }
    }
    
    return(
        <advisorContext.Provider 
        value={{fieldValuesChange, 
                feildsValues,
                postAdvisorDetails, 
                aiResponse, 
                showResponse, 
                loading,
                getLocation,
                getWeather,
                weatherValues,
                location
                }}>
            {children}
        </advisorContext.Provider>
    )
}