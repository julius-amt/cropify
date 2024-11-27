
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { advisorContext } from '../content/AdvisorContext'

const Weather2 = () => {


    const {
        getWeather,
        weatherValues, 
        getLocation,
        location
    } = useContext(advisorContext)

    useEffect(()=>{
        getLocation()
    }, [])



    useEffect(() => {
        if (location.lat && location.lon) {
          console.log("Location updated:", location);
          getWeather(location.lon, location.lat);
        }
      }, [location]);
    

  return (
    <div className="bg-white text-black p-4 w-64 rounded-lg shadow-md">
    
        <div className="mb-3">
            <p className="text-lg font-semibold">{weatherValues.name}</p>
            <p className="text-sm text-gray-400">{weatherValues.region}, {weatherValues.country}</p>
        </div>

        
        <div className="mb-3">
            <p className="text-md">{weatherValues.condition}</p>
            <p className="text-2xl font-bold">{weatherValues.temp}°C</p>
        </div>

        
        <div className="text-sm text-gray-400">
            <p>Humidity: {weatherValues.humidity}</p>
            <p>Wind: {weatherValues.wind}</p>
        </div>
    </div>

  )
}

export default Weather2
