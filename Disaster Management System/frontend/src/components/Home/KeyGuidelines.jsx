import React from 'react';
import { Laptop, Smartphone, Bus, RotateCcw } from 'lucide-react';

const KeyGuidelines = () => {
  const guidelines = [
    { icon: <Laptop className="w-6 h-6" />, title: "Desktop Guidelines" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Guidelines" },
    { icon: <Bus className="w-6 h-6" />, title: "Transport Guidelines" },
    { icon: <RotateCcw className="w-6 h-6" />, title: "Process Guidelines" },
  ];

  return (
    <div className="bg-gray-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-normal text-white mb-12 text-center">
          Key Guidelines
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guidelines.map((guideline, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg aspect-square flex flex-col"
            >
              {/* Icon Container */}
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                {guideline.icon}
              </div>

              {/* Content can be added here */}
              <div className="flex-1">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyGuidelines;