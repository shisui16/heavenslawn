import { useState } from "react";

const tabs = ["About", "Resume", "Portfolio", "Blog", "Contact"];

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="flex space-x-4 mb-6 border-b border-gray-700 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1 rounded-md transition duration-200 ${
            activeTab === tab
              ? "bg-yellow-500 text-black font-semibold"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
