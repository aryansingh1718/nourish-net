export default function Process() {
  return (
    <div id = "process" className="flex flex-col ml-40 pb-30">
      <h1 className="text-[#3a955c] font-bold text-sm">PROCESS</h1>
      <h2 className="font-bold text-4xl mb-3">How ServeIt works</h2>

      <div className="flex pt-3 gap-x-5">

        <div className="relative flex flex-col border border-gray-200 px-5 py-6 rounded-3xl shadow-sm">
          <div className="absolute -top-4 left-5 w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-bold shadow-md">
            1
          </div>
          <h1 className="font-bold text-2xl mb-4 mt-2">List surplus</h1>
          <h2 className="w-60 text-[#7c8695] font-medium">
            Donor enters food type, servings, and ready-by time. App suggests safe packing.
          </h2>
        </div>

        <div className="relative flex flex-col border border-gray-200 px-5 py-6 rounded-3xl shadow-sm">
          <div className="absolute -top-4 left-5 w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-bold shadow-md">
            2
          </div>
          <h1 className="font-bold text-2xl mb-4 mt-2">Auto-match</h1>
          <h2 className="w-60 text-[#7c8695] font-medium">
            Nearby NGO/volunteer accepts. You see ETA and contact details instantly.
          </h2>
        </div>

        <div className="relative flex flex-col border border-gray-200 px-5 py-6 rounded-3xl shadow-sm">
          <div className="absolute -top-4 left-5 w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-bold shadow-md">
            3
          </div>
          <h1 className="font-bold text-2xl mb-4 mt-2">Pickup & verify</h1>
          <h2 className="w-60 text-[#7c8695] font-medium">
            Pickup with QR check-in and basic temperature notes for accountability.
          </h2>
        </div>

        <div className="relative flex flex-col border border-gray-200 px-5 py-6 rounded-3xl shadow-sm">
          <div className="absolute -top-4 left-5 w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-bold shadow-md">
            4
          </div>
          <h1 className="font-bold text-2xl mb-4 mt-2">Track impact</h1>
          <h2 className="w-60 text-[#7c8695] font-medium">
            Get a delivery photo and metrics — meals served and waste avoided.
          </h2>
        </div>
      </div>
    </div>
  );
}
