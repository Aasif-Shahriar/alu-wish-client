import React from "react";

const Pricing = ({ prices }) => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-primary font-bold mb-8 text-center">
          Choose Your Alu Adventure
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((plan) => (
            <div
              key={plan.id}
              className={`card bg-primary/5 border border-primary/20 shadow-sm transform transition-transform duration-300 ${
                plan.popular
                  ? "bg-yellow-100 border-amber-400 scale-[1.05] py-8"
                  : "py-6"
              }`}
            >
              <div className="card-body flex flex-col">
                {plan.popular && (
                  <span className="bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full self-center mb-3">
                    ⭐ Most Popular
                  </span>
                )}
                <div className="text-center text-primary">
                  <h2 className="text-3xl font-bold mb-3">{plan.name}</h2>
                  <p className="text-4xl font-bold">৳{plan.price}</p>
                </div>

                <ul className="mt-6 flex flex-col gap-2 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-[16px] font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button
                    className={`btn btn-primary btn-block ${
                      plan.popular
                        ? "bg-amber-600 border-0 hover:bg-amber-700"
                        : ""
                    }`}
                  >
                    <a href="https://wa.me/message/VVVYSIQ6OO3JL1" target="_blank">Send {plan.name}</a>
                    
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
