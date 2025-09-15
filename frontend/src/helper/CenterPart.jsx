import mainPic from "../assets/mainPic.png"
import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll";
import Process from "./Process";

export default function CenterPart(){
    const navigate = useNavigate();
    return <div className="bg-gradient-to-b from-[#f6fef8] via-white to-white h-110 mt-15 flex">
            <div className="flex flex-col mt-20 ml-40">
                <h1 className="inline-block w-max bg-[#e8f7ee] text-[#3a955c] font-semibold py-1 px-3 rounded-full mb-1" >ServeIt — “Nourish not waste”</h1>
                <h2 className="font-bold text-6xl p-1">Rescue surplus food.</h2>
                <h3 className="font-bold text-6xl pb-4">Serve people, not bins.</h3>
                <h4 className="w-130 text-lg font-medium text-[#7c8695] mb-4">ServeIt connects homes, events, and restaurants that have extra food to nearby NGOs & volunteers in minutes — with safe handling and full transparency.</h4>
                <div className="flex gap-x-5 mb-4">
                    <button className=" 
                    bg-green-600 text-white py-2 px-4 rounded-full font-medium
                    shadow-lg transition duration-150 ease-in-out transform
                    hover:bg-green-700
                    hover:scale-95 active:bg-green-800 active:shadow-sm cursor-pointer
                    " 
                    onClick={() => {
                        navigate("/youwant")
                    }}>
                    Get Started
                    </button>

                    <Link to="process" smooth = {true} duration={500} offset={-100}
                    className="
                    border border-gray-200 py-2 px-4 rounded-full font-semibold
                    transition duration-150 ease-in-out transform
                    hover:bg-gray-100
                    hover:scale-95 active:bg-gray-200 cursor-pointer
                    ">
                    See how it works
                    </Link>

                </div>
                <div className="flex gap-x-5">
                    <h1 className="border border-gray-200 py-1 px-4 rounded-full">✅ Real‑time matching</h1>
                    <h2 className="border border-gray-200 py-1 px-4 rounded-full">🧊 FSSAI‑aligned safety</h2>
                    <h3 className="border border-gray-200 py-1 px-4 rounded-full">📍 Live tracking</h3>
                </div>
            </div>

            <div className="flex flex-col ml-auto mr-50 mt-20  bg-white p-6 rounded-3xl shadow-[0_10px_20px_-5px_rgba(134,239,172,0.3)]  min-h-[450px]">
                <img src = {mainPic} className="w-105 h-100 mb-4 rounded-3xl"></img>
                <h1 className="text-[#7c8695] font-medium">Every rescued plate counts. Join the ServeIt network today.</h1>
            </div>
    </div>
}