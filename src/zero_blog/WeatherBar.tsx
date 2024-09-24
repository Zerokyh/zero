import { useEffect, useState } from "react";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherSunny,
} from "react-icons/ti";
import { RiMistFill } from "react-icons/ri";
import { FiLoader } from "react-icons/fi";
import useThemeStore from "../store/store";

const weatherIcons = {
  Loading: FiLoader,
  Clouds: TiWeatherCloudy,
  Rain: TiWeatherDownpour,
  Clear: TiWeatherSunny,
  Snow: TiWeatherSnow,
  Mist: RiMistFill,
};

const WeatherBar = () => {
  const weather = useThemeStore((state) => state.weather);
  const setWeather = useThemeStore((state) => state.setWeather);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(() => true);
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=37.51&lon=126.72&appid=9998fff123311f5cc4fcfb9e129b4982"
        );
        const result = await response.json();
        const currentWeather = result.weather[0].main;
        const weatherType =
          currentWeather === "Clear"
            ? "Clear"
            : currentWeather === "Clouds"
            ? "Clouds"
            : currentWeather === "Rain"
            ? "Rain"
            : currentWeather === "Snow"
            ? "Snow"
            : currentWeather === "Mist"
            ? "Mist"
            : "Loading";
        setWeather(weatherType);
      } catch (error) {
        console.error("Failed to fetch wather data", error);
      }
      setLoading(() => false);
    };

    fetchWeatherData();
  }, []);
  const WeatherIcon = weatherIcons[loading ? "Loading" : weather];

  return (
    <div className="text-xl">
      <WeatherIcon />
    </div>
  );
};

export default WeatherBar;
