import { IoIosArrowForward } from "react-icons/io";
import { FaDiscord, FaPlay } from "react-icons/fa";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import ThemeToggleButton from "./ThemeToggleButton";
import WeatherBar from "./WeatherBar";
import Time from "./Time";

const Sidenav = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col px-5 py-1 w-40 h-svh text-sm justify-evenly">
      <button className="w-full h-22 py-2" onClick={() => navigate("/")}>
        <Logo />
      </button>
      <div className="w-full h-16 py-1  flex justify-around">
        <span className="flex gap-3 justify-center items-center text-xl hover:text-slate-200 cursor-pointer font-handwriting">
          <WeatherBar />
          <Time />
        </span>
      </div>
      <div className="w-full h-16 py-5 border-t-2 border-b-2 flex justify-around">
        <span
          className="text-xs hover:text-slate-200 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span
          className="text-xs hover:text-slate-200 cursor-pointer"
          onClick={() => navigate("/Login")}
        >
          로그인
        </span>
      </div>
      <div className="w-full h-fit py-2 border-b-2 list-none flex flex-col gap-3">
        <div
          className="w-fit px-2 hover:bg-sky-100 cursor-pointer rounded-md font-pretendard"
          onClick={() => navigate("/Profile")}
        >
          <li className="flex items-center gap-1">
            <IoIosArrowForward />
            Profile
          </li>
        </div>
        <div
          className="w-fit px-2 hover:bg-sky-100 cursor-pointer rounded-md font-pretendard"
          onClick={() => navigate("/Career")}
        >
          <li className="flex items-center gap-1">
            <IoIosArrowForward />
            Career
          </li>
        </div>
        <div
          className="w-fit px-2 hover:bg-sky-100 cursor-pointer rounded-md font-pretendard mb-10"
          onClick={() => navigate("/Project")}
        >
          <li className="flex items-center gap-1">
            <IoIosArrowForward />
            PROJECT
          </li>
        </div>
      </div>
      <div className="w-fit px-2  rounded-md font-pretendard flex justify-between items-center gap-3 list-none mx-auto ">
        <li className="text-white bg-red-600 rounded-md text-xs text-center p-2 cursor-pointer hover:bg-slate-200">
          <a href="https://www.youtube.com/@yunhokim623/videos">
            <FaPlay />
          </a>
        </li>
        <li className="text-xl cursor-pointer  bg-black rounded-md p-1 text-white hover:bg-slate-200">
          <FaXTwitter />
        </li>
        <li className="text-xl cursor-pointer rounded-md p-1 bg-indigo-500 text-white hover:bg-slate-200">
          <FaDiscord />
        </li>
      </div>
      <div className="flex justify-center items-center my-5">
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Sidenav;
