import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function DashboardTopbar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border border-gray-100 flex items-center px-20 py-2">

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

      <div className="flex gap-x-10 ml-auto font-semibold text-lg pr-4">

        <button className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:scale-95 transition-all duration-200 active:bg-gray-200"
        onClick={() => {
          navigate("/sellFood")
        }}>
          Sell Food
        </button>

        <button className="border border-gray-200 py-2 px-4 rounded-full font-semibold transition duration-150 ease-in-out transform hover:bg-gray-100 hover:scale-95 active:bg-gray-200 cursor-pointer"
        onClick={() => {
          navigate("/buyFood")
        }}>
          Buy Food
        </button>

        <div className="flex flex-col items-center hover:cursor-pointer hover:bg-gray-100 px-3 rounded-2xl"
        onClick={() => {
            navigate("/getProfile")
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
            </svg>
            <h1>Your profile</h1>
        </div>
      </div>
    </div>
  );
}
