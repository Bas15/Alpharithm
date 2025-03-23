const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    "Market Prediction",
    "Finance",
    "Analytics",
    "Content Generation",
    "Customer Support",
  ];

  return (
    <div className="flex gap-4 justify-center px-3 lg:px-0">
      <div className="border border-text2 p-0.5 rounded-xl">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 mx-0.5 
              ${
                activeTab === tab
                  ? "bg-btnprimary1 text-white"
                  : "text-text2 hover:bg-gray-200"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
