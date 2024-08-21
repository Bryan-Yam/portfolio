import React from "react";
import WiiImg from "../assets/Fridge/wii.png";
import SpotifyImg from "../assets/Fridge/spot.png";
import tonImg from "../assets/Fridge/ton.png";
import claptrapImg from "../assets/Fridge/claptrap.png";
import WhirliImg from "../assets/Fridge/whirli.png";
import frisbeeImg from "../assets/Fridge/Screenshot_20231013-214418.png";

const Photos = () => {
  return (
    <div className="w-full bg-default-bg">
      <div className="text-kinda-white mx-6 md:mx-16 lg:mx-32 place-items-center text-center">
        <h1 className="w-full font-headers text-2xl md:text-3xl lg:text-4xl py-9">
          like all great fridges, take a look at what's pinned on it.
        </h1>
      </div>
      <div className="grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mx-6 mt-6 md:mt-10 lg:mt-16 md:mx-16 lg:mx-32">
        <div className="relative w-full -rotate-2">
          <div className="w-[80px] h-[80px] border-solid border-2 border-kinda-black border-opacity-95 shadow-magnet left-auto m-auto top-8 bg-gradient-to-bl from-gray-100 to-slate-300 rounded-full relative"></div>
          <div className="bg-gradient-to-l from-slate-200 via-gray-200 to-zinc-100 mx-12 py-3 top-5">
            <div className="place-content-center flex p-4">
              <img src={SpotifyImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                i have a lot of Spotify minutes
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full rotate-2">
          <div className="w-[80px] h-[80px] border-solid border-2 border-kinda-black border-opacity-95 shadow-magnet left-auto m-auto top-8 bg-gradient-to-br from-gray-100 to-slate-300 rounded-full relative"></div>
          <div className="bg-gradient-to-tr from-zinc-100 via-gray-100 to-zinc-50 mx-12 py-3 top-5">
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
        <div className="relative w-full">
          <div className="w-[80px] h-[80px] border-solid border-2 border-kinda-black border-opacity-95 shadow-magnet left-auto m-auto top-8 bg-gradient-to-tl from-gray-100 to-slate-300 rounded-full relative"></div>
          <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 top-5">
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
        <div className="relative w-full">
          <div className="w-[80px] h-[80px] border-solid border-2 border-kinda-black border-opacity-95 shadow-magnet left-auto m-auto top-8 bg-gradient-to-tr from-gray-100 to-slate-300 rounded-full relative"></div>
          <div className="bg-gradient-to-br from-slate-100 via-gray-200 to-zinc-50 mx-12 py-3 top-5">
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
        <div className="relative w-full rotate-2">
          <div className="w-[80px] h-[80px] border-solid border-2 border-kinda-black border-opacity-95 shadow-magnet left-auto m-auto top-8 bg-gradient-to-t from-gray-100 to-slate-300 rounded-full relative"></div>
          <div className="bg-gradient-to-b from-slate-50 via-gray-300 to-zinc-50 mx-12 py-3 top-5">
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
        <div className="relative w-full -rotate-2">
          <div className="w-[80px] h-[80px] border-solid border-2 border-kinda-black border-opacity-95 shadow-magnet left-auto m-auto top-8 bg-gradient-to-b from-gray-100 to-slate-300 rounded-full relative"></div>
          <div className="bg-gradient-to-t from-slate-50 via-gray-200 to-zinc-50 mx-12 py-3 top-5">
            <div className="place-content-center flex p-4">
              <img src={frisbeeImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                I instantly threw the disc away after :(
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
