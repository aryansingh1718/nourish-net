import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import Process from "./Process";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border border-gray-100 flex flex-row items-center px-20 py-2">

      <div className="flex items-center ml-20">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 rounded-full mr-2 cursor-pointer shadow-[0_10px_20px_-5px_rgba(134,239,172,0.3)]"
        />
        <div className="flex flex-col">
          <h1 className="font-bold cursor-pointer">ServeIt</h1>
          <h2 className="text-gray-500 font-semibold text-sm cursor-pointer">
            "Nourish not waste"
          </h2>
        </div>
      </div>

      <div className="flex gap-x-8 ml-auto font-semibold text-lg pr-18">
        <Link to = "whyServeIt" smooth = {true} duration={500} offset={-100}
         className="cursor-pointer hover:bg-gray-100 rounded-full px-3 py-1 active:bg-gray-200 hover:scale-95 transition duration-150 ease-in-out transform"
         >Why ServeIt</Link>
        <Link to = "process" smooth = {true} duration={500} offset={-100}
         className="cursor-pointer hover:bg-gray-100 rounded-full px-3 py-1 active:bg-gray-200 hover:scale-95 transition duration-150 ease-in-out transform"
         >How it works</Link>
        <Link to = "impact" smooth = {true} duration={500} offset={-100}
         className="cursor-pointer hover:bg-gray-100 rounded-full px-3 py-1 active:bg-gray-200 hover:scale-95 transition duration-150 ease-in-out transform"
         >Impact</Link>
        <Link to = "contactUs" smooth = {true} duration={500} offset={-100}
         className="cursor-pointer hover:bg-gray-100 rounded-full px-3 py-1 active:bg-gray-200 hover:scale-95 transition duration-150 ease-in-out transform"
         >Contact</Link>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:scale-95 transition-all duration-200 active:bg-gray-200"
        onClick={() => {
          navigate("/youwant")
        }}>
          Donate Food
        </button>
      </div>
    </div>
  );
}
