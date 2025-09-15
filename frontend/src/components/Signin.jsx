import { useRecoilState } from "recoil";
import { emailState,  passwordState} from "../atoms/atoms";
import mainPic from "../assets/mainPic.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signin() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [passwordShow,setPasswordShow] = useState(false);
  const [successmsg,setSuccessmsg] = useState("");
  const navigate = useNavigate();
  
  async function signin(){
    if(email.length === 0 || password.length === 0){
        setSuccessmsg("You can't leave any field empty");
        return;
    }
    try{
        const res = await axios.post("http://localhost:3000/auth/login",{
            email,
            password
        },{
             headers: {
                "Content-Type": "application/json"
            }
        });
        setSuccessmsg(res.data.message);
        console.log(res.data.message)
        localStorage.setItem("token",res.data.token);
            setTimeout(() => {
                navigate("/dashboard")
            },500)
    }
    catch(err){
        const errorMsg = err.response?.data?.error || "Something went wrong";
        setSuccessmsg(errorMsg);
        console.error(errorMsg);
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#f6fef8] via-white to-white h-110 mt-5 flex space-y-4">
      <div className="mt-40 ml-50 flex flex-col">
        <h1 className="text-4xl font-semibold mb-12 ml-10">
          ENTER YOUR CREDENTIALS
        </h1>

        <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Your Email"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

        <div className="flex pl-10 pb-5">
    <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>

        <div className="flex-1 relative">
            <input
            type={passwordShow ? "text" : "password"}
            placeholder="Set your password"
            className="w-full h-10 border border-green-600 pl-2 pr-10 focus:outline-none focus:border-green-600"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black hover:cursor-pointer"
            onClick={() => setPasswordShow(!passwordShow)}
            >
            {passwordShow ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>

        <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer ease-in-out transform hover:bg-white hover:text-black hover:scale-95 transition-all duration-150 active:bg-gray-200 ml-10 mb-4"
        onClick={signin}
        >Login</button>
        <button className="border border-gray-200 transition duration-150 ease-in-out transform hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer  hover:text-black hover:scale-95 active:bg-gray-200 ml-10 mb-4"
        onClick={() => {
            navigate("/youwant")
        }}
        >Go back</button>
        {successmsg.length ? <h1 className="ml-40 font-medium">{successmsg}</h1> : null}
      </div>

      
      <div className="flex flex-col ml-auto mr-50 mt-20 bg-white p-6 rounded-3xl shadow-[0_10px_20px_-5px_rgba(134,239,172,0.3)] min-h-[450px]">
        <img src={mainPic} className="w-105 h-100 mb-4 rounded-3xl" />
        <h1 className="text-[#7c8695] font-medium">
          Every rescued plate counts. Join the ServeIt network today.
        </h1>
      </div>
    </div>
  );
}
