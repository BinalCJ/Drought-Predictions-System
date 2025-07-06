import React from 'react';
import { Sun } from 'lucide-react';

const DisastersSection = () => {
  // Sample data for disaster cards
  const disasters = [1, 2, 3, 4]; // Representing 4 cards

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="w-full sm:w-64 bg-blue-100 rounded-lg p-4 h-[887px]">
          <div className="h-full relative">
            {/* Dot at bottom */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Disasters</h1>
              <p className="text-sm text-gray-600 max-w-2xl">
                We decided to fully redesign our living platform to increase you to purchase converter results from the comfort of your own home.
              </p>
            </div>
            <div className="w-20 h-20">
              <Sun className="w-full h-full text-yellow-400" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6">
            {disasters.map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                {/* Main Card */}
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg h-48 border border-gray-200"></div>
                </div>
                
                {/* Side Info */}
                <div className="flex flex-col gap-2 w-full md:w-32">
                  <div className="h-8 bg-blue-100 rounded-full"></div>
                  <div className="h-8 bg-blue-100 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisastersSection;