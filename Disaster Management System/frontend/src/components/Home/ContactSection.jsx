import React, { useState } from "react";
import { Phone, Plus, Minus } from "lucide-react";

const ContactSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* FAQ Question */}
      <div className="mb-12">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-left text-gray-800 hover:text-gray-600"
        >
          <span className="text-lg">
            Is there a dedicated iOS or Android mobile app I can download?
          </span>
          {isExpanded ? (
            <Minus className="w-6 h-6 text-gray-400" />
          ) : (
            <Plus className="w-6 h-6 text-gray-400" />
          )}
        </button>

        {/* Answer can be added here if needed */}
        {isExpanded && (
          <div className="mt-4 text-gray-600">
            {/* Add your answer content here */}
          </div>
        )}
      </div>

      {/* Contact Us Section */}
      <div className="bg-gray-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl text-gray-700 mb-4">Contact Us</h2>

        <p className="text-gray-600 mb-8">
          Get in touch with support team to for any questions or to report any
          issues on your order.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md inline-flex items-center justify-center space-x-2 transition duration-200">
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
