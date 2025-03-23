import { useState } from "react";
import Tabs from "./Tabs";
import Slides from "./Slides";

const AIModelsSection = () => {
  const [activeTab, setActiveTab] = useState("Market Prediction");

  return (
    <section className="py-16 bg-white">
      {/* Title & Description */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-semibold text-primary1 md:text-5xl">
          AI Models tailored for your business needs
        </h1>
        <p className="mt-2 text-text2">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Slides */}
      <Slides activeTab={activeTab} />
    </section>
  );
};

export default AIModelsSection;
