import electrify from "../assets/electrify.png"
import safety from "../assets/safety.png"
import graph from "../assets/graph.png"

export default function WhyServeIt(){
    return <div id = "whyServeIt" className="flex flex-col pt-50 pb-30 ml-40">
        <h1 className="text-[#3a955c] font-bold text-sm">WHY SERVEIT</h1>
        <h2 className="font-bold text-4xl mb-3">Fast, safe, and transparent food redistribution</h2>
        <h3 className="text-[#7c8695] font-medium text-lg w-160 mb-4">Designed for donors, NGOs, and volunteers to coordinate effortlessly — with trust built in at every step.</h3>
        <div className="flex pt-3 gap-x-5">
            <div className="flex flex-col border border-gray-200 px-5 py-3 rounded-3xl shadow-lg">
                <img src = {electrify} className="w-12 h-12 rounded-2xl"></img>
                <h1 className="font-bold text-2xl mb-4">Real‑time matching</h1>
                <h2 className="w-90 text-[#7c8695] font-medium pb-7">Smart matching pairs donations with the closest NGOs & volunteers to reduce time-to-pickup.</h2>
            </div>
            <div className="flex flex-col border border-gray-200 px-5 py-3 rounded-3xl shadow-lg">
                <img src = {safety} className="w-12 h-12 rounded-2xl"></img>
                <h1 className="font-bold text-2xl mb-4">Safety first</h1>
                <h2 className="w-90 text-[#7c8695] font-medium pb-7">Guided checklists align with food safety practices (temp, packing, transit) to keep food safe.</h2>
            </div>
            <div className="flex flex-col border border-gray-200 px-5 py-3 rounded-3xl shadow-lg">
                <img src = {graph} className="w-12 h-12 rounded-2xl"></img>
                <h1 className="font-bold text-2xl mb-4">Transparent impact</h1>
                <h2 className="w-90 text-[#7c8695] font-medium pb-7">See meals served, food weight, and CO₂e saved — export ready for reports & grants.</h2>
            </div>
        </div>
    </div>
}