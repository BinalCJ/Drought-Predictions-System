import React from "react";
import { ChevronRight } from "lucide-react";
import hero_bg from "../../assets/LSR-Sri-Lanka-Colombo-scaled.jpg";

const HeroSection = () => {
  return (
    <div className="relative max-h-[672px]">

<div className="absolute inset-0 bg-[#000000] to-transparent">
  <div
    className="absolute inset-0 bg-center"
    style={{
      backgroundImage: `url('${hero_bg}')`,
      backgroundBlend: "overlay",
      backgroundSize: '100% 100%', // Scales the image to 50% of its original width and height
      backgroundRepeat: 'no-repeat', // Prevents tiling if the image is smaller than the container
    }}
  />
</div>

      <div className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
      
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md flex items-center space-x-2 transition duration-300">
            <span>Check</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <ChevronRight className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default HeroSection;
