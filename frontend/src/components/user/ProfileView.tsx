import { useState } from "react";
import Nav from "../Nav";

const ProfileView = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div>
      <Nav />
      <div className="mt-16 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-medium">MY ORDERS</h1>
        
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-full flex gap-2 sm:gap-4 bg-zinc-200 h-10">
          <button
            className={`rounded-full text-sm sm:text-base md:text-lg w-full transition-all duration-300 ${
              activeTab === "pending" ? "bg-black text-white" : "text-black"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={`rounded-full text-sm sm:text-base md:text-lg w-full transition-all duration-300 ${
              activeTab === "completed" ? "bg-black text-white" : "text-black"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>
        
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-3 sm:p-4 md:p-5 border rounded-lg bg-gray-100 min-h-40">
          {activeTab === "pending" ? (
            <div className="text-center sm:text-left text-sm sm:text-base">
              <p>Showing pending orders...</p>
            </div>
          ) : (
            <div className="text-center sm:text-left text-sm sm:text-base">
              <p>Showing completed orders...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;