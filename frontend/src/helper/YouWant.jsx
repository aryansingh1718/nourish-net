import { useNavigate } from "react-router-dom"
import mainPic from "../assets/mainPic.png"

export default function YouWant(){
    const navigate = useNavigate();
    return <div className="flex text-center bg-gradient-to-b from-[#f6fef8] via-white to-white h-110 mt-5">
        <div className="mt-40 ml-50">
            <h1 className=" text-6xl font-bold mb-10">You Want To...</h1>
            <div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:scale-95 transition-all duration-200 active:bg-gray-200 mr-8"
            onClick={() => {
                navigate("/signup")
            }}>Signup</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:scale-95 transition-all duration-200 active:bg-gray-200"
            onClick={() => {
                navigate("/signin")
            }}>Signin</button>
             </div>
        </div>
        <div className="flex flex-col ml-auto mr-50 mt-20  bg-white p-6 rounded-3xl shadow-[0_10px_20px_-5px_rgba(134,239,172,0.3)]  min-h-[450px]">
            <img src = {mainPic} className="w-105 h-100 mb-4 rounded-3xl"></img>
            <h1 className="text-[#7c8695] font-medium">Every rescued plate counts. Join the ServeIt network today.</h1>
        </div>
        
    </div>
}