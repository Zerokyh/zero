import { create } from "zustand";

type Theme = "Light" | "Dark";

type WeatherType = "Loading" | "Clouds" | "Rain" | "Clear" | "Snow" | "Mist";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: "Light" | "Dark") => void;
  weather: WeatherType;
  setWeather: (weather: WeatherType) => void;
};

const useThemeStore = create<ThemeState>((set) => ({
  theme: "Light",
  setTheme: (theme) => set({ theme }),
  weather: "Loading",
  setWeather: (weather) => set({ weather }),
}));

export default useThemeStore;
