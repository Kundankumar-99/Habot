import React, { useState } from "react";
import Iconlist from "./IconList";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-5xl w-full h-[250px] mx-auto px-4 ">
      <div className="flex w-4/5 px-4 gap-8">
        <button
          className={`py-2  w-1/2 px-4 font-bold text-[26px]  focus:outline-none ${
            activeTab === "tab1"
              ? " border-b-4 border-b-[#EB7150] text-[#EB7150]"
              : "border-transparent border-b-4"
          }`}
          onClick={() => handleTabClick("tab1")}
        >
          Buyer
        </button>

        <button
          className={`py-2 w-1/2 px-4 font-bold text-[26px]   focus:outline-none ${
            activeTab === "tab2"
              ? "text-[#EB7150] border-b-4 border-b-[#EB7150]"
              : "border-transparent border-b-4"
          }`}
          onClick={() => handleTabClick("tab2")}
        >
          Supplier
        </button>
      </div>

      {/* Tab content based on activeTab state */}
      <div className="mt-4 flex flex-col ">
        <div className=" p-4 min-h-[150px] w-full">
          {activeTab === "tab1" && (
            <div className="p-4 ">
              <div className="flex flex-col gap-4">
                {" "}
                <Iconlist text="Post your requirement" />
                <Iconlist text="Sit back for multiple suppliers to contact you." />
                <Iconlist text="Choose among the suppliers based on the ratings and reviews." />{" "}
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="p-4 ">
              <div className="flex flex-col gap-4 ">
                {" "}
                <Iconlist text="Complete your profile and get verified." />
                <Iconlist text="Select service tags for relevant opportunities" />
                <Iconlist text="Reach out to buyers and expand your business" />{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
