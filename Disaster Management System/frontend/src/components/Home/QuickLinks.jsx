import React from "react";
import {
  ArrowLeftRight,
  ChevronRight,
  ChevronLeft,
  ArrowRightLeft,
} from "lucide-react";

const QuickLinks = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[D0D5DD] p-4 sm:p-6 lg:p-8">
      <h2 className="text-gray-700 text-xl font-semibold mb-4">Quick Links</h2>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* First Button */}
          <button className="flex items-center justify-center p-4 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
            <ArrowLeftRight className="w-5 h-5 text-blue-600" />
          </button>

          {/* Second Button */}
          <button className="flex items-center justify-center p-4 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Third Button */}
          <button className="flex items-center justify-center p-4 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Fourth Button */}
          <button className="flex items-center justify-center p-4 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
            <ArrowRightLeft className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
