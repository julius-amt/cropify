  

import { AdvisorContextProvider } from "@/app/_components/content/AdvisorContext"
import Weather2 from "@/app/_components/weather/Weather2"
  const Weather = ()=>{
    return(
        <AdvisorContextProvider>
            <Weather2/>
        </AdvisorContextProvider>

 
    )
  }

  export default Weather    