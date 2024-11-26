interface WeatherCondition {
    text: string;
}

interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
}

interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    condition: WeatherCondition;
    wind_kph: number;
    wind_mph: number;
    wind_dir: string;
    wind_degree: number;
    humidity: number;
    cloud: number;
    precip_mm: number;
    precip_in: number;
    uv: number;
    pressure_mb: number;
    pressure_in: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    dewpoint_c: number;
    dewpoint_f: number;
    gust_kph: number;
    gust_mph: number;
}

export interface WeatherData {
    data: {
        location: Location;
        current: CurrentWeather;
    };
}
