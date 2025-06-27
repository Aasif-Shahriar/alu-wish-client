import React from "react";
import { FaGift, FaRocket } from "react-icons/fa";

const Ready = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Ready to Spread Some Potato Magic?
        </h2>
        <p className="max-w-8/12 mx-auto font-medium text-xl md:text-2xl my-5 text-center">
          Join thousands of pranksters who've already sent mysterious alus. Your
          friends are waiting to be confused!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <button
            className="flex  items-center gap-2 text-xl font-semibold py-4
                    px-6 bg-white text-accent rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-300"
          >
            <FaRocket />
            <a href="https://wa.me/message/VVVYSIQ6OO3JL1" target="_blank">
              Send Your First Alu
            </a>
          </button>
          <button
            className="flex items-center gap-2 text-xl font-semibold py-4
             px-6 text-white rounded-full hover:bg-white hover:text-accent cursor-pointer transition-all duration-300 border-2 border-white"
          >
            <FaGift />
            Browse Gift Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
