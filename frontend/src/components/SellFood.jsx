import { useRecoilState } from "recoil";
import mainPic from "../assets/mainPic.png"
import { foodCategoryState, foodDescriptionState, foodExpiryState, foodLocationState, foodNameState, foodPriceState, foodProviderState, foodQuantityState } from "../atoms/atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SellFood(){

    const [foodName,setFoodName] = useRecoilState(foodNameState);
    const [foodPrice,setFoodPrice] = useRecoilState(foodPriceState);
    const [foodCategory,setFoodCategory] = useRecoilState(foodCategoryState);
    const [foodDescription,setFoodDescription] = useRecoilState(foodDescriptionState);
    const [foodExpiry,setFoodExpiry] = useRecoilState(foodExpiryState);
    const [foodLocation,setFoodLocation] = useRecoilState(foodLocationState);
    const [foodQuantity,setFoodQuantity] = useRecoilState(foodQuantityState);
    const [foodProvider,setFoodProvider] = useRecoilState(foodProviderState);
    const [successmsg,setSuccessmsg] = useState("");
    const navigate = useNavigate();

    async function donateFood(){
        
      if(foodName.length === 0 || foodPrice === 0 || foodCategory.length === 0 || foodExpiry.length === 0 || foodLocation.length === 0 || foodQuantity === 0 || foodProvider.length === 0){
        setSuccessmsg("Required fields missing")
      }
      try{
        const res = await axios.post("http://localhost:3000/food/add",{
        name: foodName,
        price: foodPrice,
        category: foodCategory,
        description: foodDescription,
        expiryTime: foodExpiry,
        location: foodLocation,
        quantity: foodQuantity,
        provider: foodProvider
      },{
         headers: {
                "Content-Type": "application/json"
            }
      })
      setSuccessmsg(res.data.message);
      console.log(res.data.message);
      const food = res.data.food;
      console.log(food);
      setTimeout(() => {
                navigate("/dashboard")
            },500)
      }
      catch(e){
        const errorMsg = e.response?.data?.error || "Something went wrong";
        setSuccessmsg(errorMsg);
        console.error(errorMsg);
      }
     
    }

    return (
    <div className="bg-gradient-to-b from-[#f6fef8] via-white to-white h-110 mt-5 flex space-y-4">
      <div className="mt-5 ml-50 flex flex-col">
        <h1 className="text-2xl font-semibold mb-10 ml-10 w-130"    >
          CONTRIBUTE TO THE ENVIRONMENT BY NOT WASTING FOOD
        </h1>

        <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Provider"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodProvider(e.target.value)}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

         <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Food name"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodName(e.target.value)}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

        <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Category"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodCategory(e.target.value)}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

        <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Quantity"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodQuantity(Number(e.target.value))}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

        <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Expiry"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodExpiry(e.target.value)}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

        <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Price"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodPrice(Number(e.target.value))}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

         <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Location"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodLocation(e.target.value)}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

         <div className="flex pl-10 pb-5">
          <div className="w-8 h-10 bg-green-600 rounded-l-3xl"></div>
          <input
            type="text"
            placeholder="Description"
            className="flex-1 h-10 border border-green-600 pl-2 focus:outline-none focus:border-green-600"
            onChange={(e) => setFoodDescription(e.target.value)}
          />
          <div className="w-8 h-10 bg-green-600 rounded-r-3xl"></div>
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer ease-in-out transform hover:bg-white hover:text-black hover:scale-95 transition-all duration-150 active:bg-gray-200 ml-10 mb-4"
        onClick={donateFood}
        >Donate </button>
        <button className="border border-gray-200 transition duration-150 ease-in-out transform hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer  hover:text-black hover:scale-95 active:bg-gray-200 ml-10 mb-4"
        >Go back</button>
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