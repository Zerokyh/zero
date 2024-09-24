import { Outlet } from "react-router-dom";

import Sidenav from "./Sidenav";
import useThemeStore from "../store/store";

const LayoutZero = () => {
  const { theme } = useThemeStore();
  return (
    <>
      <div
        className={`w-svw h-svh flex ${
          theme === "Light" ? "bg-white text-black" : "bg-darkmode text-white"
        }`}
      >
        <Sidenav />
        <main
          style={{ width: "calc(100vw - 160px)" }}
          className="h-full flex justify-center items-center font-pretendard"
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutZero;
