import axios from "axios";
import { useEffect, useState } from "react";
import mainPic from "../assets/mainPic.png"

export default function GetProfile() {
  const token = localStorage.getItem("token");
  const [user,setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/auth/profile", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          },
        });
        const user = res.data
        setUser(user)
        console.log(JSON.stringify(user, null, 2));
      } catch (e) {
        console.log(e.response?.data?.error);
      }
    };

    fetchProfile();
  }, []);

  return <div className="bg-gradient-to-b from-[#f6fef8] via-white to-white h-110 flex">
    <div className="flex flex-col items-center ml-60 mt-20 border-2 border-[#3a955c] shadow-[0_10px_20px_-5px_rgba(134,239,172,0.3)] rounded-4xl w-120 h-110">
        <h1 className="font-bold text-5xl mb-10">HELLO {user.role}</h1>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-25">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
            </svg>
            <h2 className="font-bold text-3xl mb-5">{user.name}</h2>
            <h3 className="font-semibold text-2xl mb-5">{user.email}</h3>
            <h4 className="font-medium text-xl mb-3 text-gray-500">Role: {user.role}</h4>
            <h5 className="font-medium text-xl text-gray-500"> Profile created on: {new Date(user.createdAt).toLocaleDateString("en-GB")}</h5>

    </div>
    <div className="flex flex-col ml-auto mr-50 mt-20  bg-white p-6 rounded-3xl shadow-[0_10px_20px_-5px_rgba(134,239,172,0.3)]  min-h-[450px]">
            <img src = {mainPic} className="w-105 h-100 mb-4 rounded-3xl"></img>
            <h1 className="text-[#7c8695] font-medium">Every rescued plate counts. Join the ServeIt network today.</h1>
    </div>
  </div>;
}
