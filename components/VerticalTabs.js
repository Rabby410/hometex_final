import { useState } from "react";

const VerticalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-row">
      <div className="w-1/3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === index ? "bg-gray-300" : "bg-gray-100"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="w-2/3 px-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default VerticalTabs;
