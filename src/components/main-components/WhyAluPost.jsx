import React from "react";
import { FaHeart, FaLaugh, FaMask, FaRocket } from "react-icons/fa";

const WhyAluPost = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-primary font-bold text-center mb-10">
          Why Potato Wish?
        </h2>
        {/* card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* card 1 */}
          <div className="p-5 flex flex-col items-center space-y-3 bg-white rounded-xl shadow-lg">
            <FaMask className="text-3xl text-primary" />
            <p className="text-lg font-bold text-primary">Stay Anonymous</p>
            <p className=" text-accent/70 text-center font-semibold">
              Complete mystery mode activated
            </p>
          </div>
          {/* card 2 */}
          <div className="p-5 flex flex-col items-center space-y-3 bg-white rounded-xl shadow-lg">
            <FaLaugh className="text-3xl text-primary" />
            <p className="text-lg font-bold text-primary">Pure Comedy</p>
            <p className=" text-accent/70 text-center font-semibold">
              Guaranteed confusion & laughter
            </p>
          </div>
          {/* card 3 */}
          <div className="p-5 flex flex-col items-center space-y-3 bg-white rounded-xl shadow-lg">
            <FaHeart className="text-3xl text-primary" />
            <p className="text-lg font-bold text-primary">Made with Love</p>
            <p className=" text-accent/70 text-center font-semibold">
              Each alu handpicked with care
            </p>
          </div>
          {/* card 4 */}
          <div className="p-5 flex flex-col items-center space-y-3 bg-white rounded-xl shadow-lg">
            <FaRocket className="text-3xl text-primary" />
            <p className="text-lg font-bold text-primary">Fast Delivery</p>
            <p className="text-accent/70 text-center font-semibold">
              Your alu reaches in 2-3 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAluPost;
