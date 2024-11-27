  
"use client"
import { AdvisorContextProvider } from "../content/AdvisorContext"
import Weather2 from "@/src/weather/Weather2"
  const Weather = ()=>{
    return(
        <AdvisorContextProvider>
            <Weather2/>
        </AdvisorContextProvider>

 
    )
  }

  export default Weather    