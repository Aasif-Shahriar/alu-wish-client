import React from "react";
import { FaLocationDot, FaPenToSquare } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <h2 className="text-4xl font-bold text-primary text-center">
          How Does This Madness Work?
        </h2>
        <p className="text-xl text-center text-accent/70 font-semibold">
          Three simple steps to potato-powered chaos
        </p>
        {/* card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="bg-[#fa3d00]/5 hover:bg-[#fa3d00]/10 transition-all duration-300 hover:shadow-lg rounded-2xl p-6 w-full text-center shadow-sm">
            {/* Step Circle */}
            <div className="w-15 h-15 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold mb-4">
              1
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Write Your Message
            </h3>

            {/* Description */}
            <p className="text-accent/70 mb-4 font-semibold leading-relaxed">
              Craft your mysterious, funny, or completely random message. We'll
              write it on a card that goes with your alu. Keep them guessing!
            </p>

            {/* Icon */}
            <div className="flex justify-center">
              <FaPenToSquare className="text-4xl text-base-200" />
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 hover:shadow-lg rounded-2xl p-6 w-full text-center shadow-sm">
            {/* Step Circle */}
            <div className="w-15 h-15 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold mb-4">
              2
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Choose Your Victim
            </h3>

            {/* Description */}
            <p className="text-accent/70 mb-4 font-semibold leading-relaxed">
              Enter their address, pick anonymous delivery, and decide if you
              want to reveal yourself or stay forever mysterious. The power is
              yours!
            </p>

            {/* Icon */}
            <div className="flex justify-center">
              <FaLocationDot className="text-4xl text-base-200" />
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-[#fa3d00]/5 hover:bg-[#fa3d00]/10 transition-all duration-300 hover:shadow-lg rounded-2xl p-6 w-full text-center shadow-sm">
            {/* Step Circle */}
            <div className="w-15 h-15 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold mb-4">
              3
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Watch the Magic

            </h3>

            {/* Description */}
            <p className="text-accent/70 mb-4 font-semibold leading-relaxed">
             We carefully select a premium alu, attach your message, and ship it with love. Your friend gets the most confusing package ever!


            </p>

            {/* Icon */}
            <div className="flex justify-center">
              <TbTruckDelivery className="text-4xl text-base-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
