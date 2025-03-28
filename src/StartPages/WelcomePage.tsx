import React from "react";

interface WelcomePageProps {
  setActiveTab: (tabId: string) => void;
}

interface Feature {
  title: string;
  tabId: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setActiveTab }) => {
  const features: Feature[] = [
    {
      title: "Smart Questions",
      tabId: "interview",
    },
    {
      title: "Easy Management",
      tabId: "history",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 p-6">
      <div className="flex flex-col items-center justify-center space-y-8 max-w-2xl text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 dark:from-blue-300 dark:via-purple-400 dark:to-pink-500">
          Interview Master Pro
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Your intelligent companion for conducting perfect interviews
        </p>

         {/* Features Section */}
        <div className="flex flex-col items-center justify-center gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(feature.tabId)}
              className="relative bg-white dark:bg-gray-800 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-transform duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-gray-500/50 max-w-xs w-full"
            >
              {/* Feature Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-300 mb-3">
                {feature.title}
              </h3>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;