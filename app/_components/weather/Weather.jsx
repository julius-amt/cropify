import { AdvisorContextProvider } from "@/app/_components/_content/AdvisorContext";
import Weather2 from "@/app/_components/weather/Weather2";

const Weather = () => {
    return (
        <AdvisorContextProvider>
            <Weather2 />
        </AdvisorContextProvider>
    );
};

export default Weather;
