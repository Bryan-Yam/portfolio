import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import rebrand from "../assets/rebrandheader.png";
import drdc from "../assets/drdc.png";
import gameImg from "../assets/cartridge_default_tp.png";
import overflowgameImg from "../assets/cartridge_dark_tp.png";
import crmImg from "../assets/crmlanding.png";
import capstoneImg from "../assets/capstone.png";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const LandingN = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#product") {
      const timeout = setTimeout(() => {
        const el = document.getElementById("product");
        if (el) {
          const yOffset = -100;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100); // 100ms delay

      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <div className="w-full bg-default-bg">
      <div className="text-kinda-white mx-6 md:mx-16 lg:mx-40 py-16 md:py-24 lg:py-36 font-headers">
        <div className="font-headers">
          <h1 className="pb-8 text-3xl md:text-4xl lg:text-5xl">hi there!</h1>
          <p className="text-2xl md:text-3xl lg:text-4xl">
            i'm bryan — i use design to make everyday experiences simpler and
            more accessible. i believe good design connects people, regardless
            of the medium, and creating those connections is what inspires me.
          </p>
          <div className="flex flex-wrap gap-3 items-start pt-8 md:pt-10 lg:pt-16">
            <p className="text-xl md:text-2xl lg:text-3xl italic whitespace-nowrap text-left">
              fun facts - i
            </p>
            <div className="flex-1 min-w-0">
              <Hero
                lines={[
                  "make a lot of niche prototypes in Figma",
                  "unfortunately am not related to the vegetable",
                  "play frisbee competitively",
                  "am partially ambidextrous",
                ]}
                animationDuration={500}
                pauseDuration={3000}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="product"
        className="text-kinda-white mx-6 md:mx-16 lg:mx-32 place-items-center text-center"
      >
        <h1 className="font-headers text-2xl md:text-3xl lg:text-4xl py-9">
          here are some cool things i've done — see if anything catches your eye
        </h1>
      </div>
      <div class="flex items-center justify-center mx-6 mt-6 md:mt-10 lg:mt-16 mb-10 md:mx-16 md:mb-32 lg:mx-32 lg:mb-20">
        <div class="grid grid-cols-1 gap-8 md:gap-8 lg:gap-16 md:grid-cols-2 lg:grid-cols-2 lg:px-40">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30 rounded-2xl">
            <Link to="/rebrand">
              <div class="h-full w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                  src={rebrand}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/90 group-hover:to-black/100"></div>
              <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="text-2xl font-headers md:text-2xl lg:text-3xl text-kinda-white pb-4">
                  Lab Rebrand
                </h1>
                <p class="mb-3 text-lg md:text-base italic font-body2 font-thin text-kinda-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  revamping WSIB's innovation lab identity
                </p>
                <button class="font-body2 rounded-full text-kinda-white hover:text-black  py-2 px-5 text-sm bg-kinda-black border-2 hover:bg-kinda-gray border-kinda-gray hover:border-default-bg">
                  See more
                </button>
              </div>
            </Link>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30 rounded-2xl">
            <Link to="/capstone">
              <div class="h-full w-full">
                <img
                  className="h-full w-full transition-transform duration-500 group-hover:scale-125"
                  src={capstoneImg}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/90 group-hover:to-black/100"></div>
              <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="text-2xl font-headers md:text-2xl lg:text-3xl text-kinda-white pb-4">
                  Synapsync
                </h1>
                <p class="mb-3 text-lg md:text-base italic font-body2 font-thin text-kinda-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  integrating cognitive assessments with neuroimaging tools in
                  real-time
                </p>
                <button class="font-body2 rounded-full text-kinda-white hover:text-black  py-2 px-5 text-sm bg-kinda-black border-2 hover:bg-kinda-gray border-kinda-gray hover:border-default-bg">
                  See more
                </button>
              </div>
            </Link>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30 rounded-2xl">
            <Link to="/drdc">
              <div class="h-full w-full">
                <img
                  className="h-full w-full transition-transform duration-500 group-hover:scale-125"
                  src={drdc}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/90 group-hover:to-black/100"></div>
              <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="text-2xl font-headers md:text-2xl lg:text-3xl text-kinda-white pb-4">
                  Augmented Reality Simulation
                </h1>
                <p class="mb-3 text-lg md:text-base italic font-body2 font-thin text-kinda-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  exploring augmented reality use cases within the military
                </p>
                <button class="font-body2 rounded-full text-kinda-white hover:text-black  py-2 px-5 text-sm bg-kinda-black border-2 hover:bg-kinda-gray border-kinda-gray hover:border-default-bg">
                  See more
                </button>
              </div>
            </Link>
          </div>

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30 rounded-2xl">
            <Link to="/crm">
              <div class="h-full w-full">
                <img
                  className="h-full w-full transition-transform duration-500 group-hover:scale-125"
                  src={crmImg}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/90 group-hover:to-black/100"></div>
              <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="text-2xl font-headers md:text-2xl lg:text-3xl text-kinda-white pb-4">
                  CRM Dashboard
                </h1>
                <p class="mb-3 text-lg md:text-base italic font-body2 font-thin text-kinda-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  compiling data into one cohesive platform
                </p>
                <button class="font-body2 rounded-full text-kinda-white hover:text-black  py-2 px-5 text-sm bg-kinda-black border-2 hover:bg-kinda-gray border-kinda-gray hover:border-default-bg">
                  See more
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-kinda-white mx-6 md:mx-16 lg:mx-32 place-items-center text-center">
        <h1 className="w-full font-sans font-light text-2xl md:text-3xl lg:text-4xl py-9">
          looking for game-oriented design? boot up my cartridge.
        </h1>
      </div>
      <div className="flex justify-center mx-6 md:mx-16 lg:mx-32">
        <div className="group relative cursor-pointer">
          <Link to="/games">
            <div className="transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
              <img src={gameImg} alt="/" />
            </div>
            <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
              <img src={overflowgameImg} alt="/" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingN;
