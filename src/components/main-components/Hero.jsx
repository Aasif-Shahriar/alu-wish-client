import React from "react";
import { FaPlay, FaTelegramPlane } from "react-icons/fa";
import heroImg from "../../assets/images/potato-logo.png";
import video1 from "../../assets/videos/video1.mp4";

const Hero = () => {

  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 min-h-screen pt-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-7">
          <h2 className="text-3xl md:text-6xl font-bold text-center text-accent max-w-[900px]">
            Send a Mysterious <span className="text-[#fa3d00]">Alu</span> to{" "}
            Anyone!
          </h2>
          <p className="text-xl md:text-3xl font-semibold text-accent/80 text-center">
            The most ridiculous way to surprise your friends, confuse your
            enemies, or just spread some potato-powered chaos. 100% anonymous,
            100% hilarious!
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <button
              className="flex  items-center gap-2 text-xl font-semibold py-4
             px-6 bg-primary text-base-100 rounded-full hover:bg-amber-950 cursor-pointer transition-all duration-300"
            >
              <FaTelegramPlane />
              Send Anonymous Alu
            </button>
            <div>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <div>
                    <video src={video1} controls></video>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-primary">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="flex items-center gap-2 text-xl font-semibold py-4
             px-6 text-primary rounded-full hover:bg-primary hover:text-white cursor-pointer transition-all duration-300 border-2"
              >
                <FaPlay />
                Watch How It Works
              </button>
            </div>
          </div>
          <div>
            <img
              src={heroImg}
              alt="potato_logo"
              className="w-[350px] h-[350px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
