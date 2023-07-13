import React from "react";
import WiiImg from "../assets/Fridge/wii.png";
import SpotifyImg from "../assets/Fridge/spot.png";
import tonImg from "../assets/Fridge/ton.png";
import claptrapImg from "../assets/Fridge/claptrap.png";
import WhirliImg from "../assets/Fridge/whirli.png";
import frisbeeImg from "../assets/Fridge/frisbee.png";

const Photos = () => {
  return (
    <div className="w-full bg-default-bg">
      <div className="text-kinda-white mx-6 md:mx-16 lg:mx-32 place-items-center text-center">
        <h1 className="w-full font-headers text-2xl md:text-3xl lg:text-4xl py-9">
          like all great fridges, take a look at what's pinned on it.
        </h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mx-6 mt-6 md:mt-10 lg:mt-16 md:mx-16 lg:mx-32">
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 h-fit drop-shadow-2xl">
          <div className="place-content-center flex p-4">
            <img src={SpotifyImg} alt="/" />
          </div>
          <div>
            <p className="text-2xl font-handwriting text-center w-full p-2">
              i have a lot of Spotify minutes
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 h-fit drop-shadow-2xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={claptrapImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                model of Claptrap from Borderlands
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 h-fit drop-shadow-2xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={WiiImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                the closest i'll get to a perfect bowling game
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 h-fit drop-shadow-2xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={WhirliImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                it's like a fan, but with extra steps
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 h-fit drop-shadow-2xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={tonImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                my friend bit my tonkatsu
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 h-fit drop-shadow-2xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={frisbeeImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                frisbee adventures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
