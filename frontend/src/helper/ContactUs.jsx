import logo from "../assets/logo.png"
export default function ContactUs(){
    return <div>
        <div id = "contactUs" className="flex pt-12 px-30 gap-x-40">
            <div className="flex flex-col pb-20">
                <div className="flex">
                     <img
                      src={logo}
                      alt="logo"
                      className="w-10 h-10 rounded-full mr-2 shadow-[0_10px_20px_-5px_rgba(134,239,172,0.3)]"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-bold">ServeIt</h1>
                      <h2 className="text-gray-500 font-semibold text-sm">
                        "Nourish not waste"
                      </h2>
                </div>
                </div>
                
                <h1 className="w-100 text-[#7c8695] font-medium">ServeIt helps communities rescue surplus food and deliver it to people who need it — quickly, safely, and transparently.</h1>
            </div>
            <div className=" flex flex-col items-start">
                <h1 className="font-bold">Product</h1>
                <button className="text-[#7c8695] font-medium cursor-pointer">Features</button>
                <button className="text-[#7c8695] font-medium cursor-pointer">How it works</button>
                <button className="text-[#7c8695] font-medium cursor-pointer">Impact</button>
            </div>
             <div className=" flex flex-col items-start">
                <h1 className="font-bold">For</h1>
                <button className="text-[#7c8695] font-medium cursor-pointer">Donors</button>
                <button className="text-[#7c8695] font-medium cursor-pointer">NGOs</button>
                <button className="text-[#7c8695] font-medium cursor-pointer">Volunteers</button>
            </div>
             <div className=" flex flex-col items-start">
                <h1 className="font-bold">Contact</h1>
                <h1 className="text-[#7c8695] font-medium cursor-pointer">ServeIt@gmail.com</h1>
                <h2 className="text-[#7c8695] font-medium cursor-pointer">+91-7890719366</h2>
                <h3 className="text-[#7c8695] font-medium cursor-pointer">Kolkata, India</h3>
            </div>
        </div>
        <div className="flex ml-auto gap-x-200 px-30">
            <h1 className="text-[#7c8695] font-medium">© 2025 ServeIt. All rights reserved.</h1>
            <button className="text-[#7c8695] font-medium cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-2xl">Back to top ↑</button>
        </div>
    </div>
}