import React from "react";
import WiiImg from "../assets/wii.png";
import SpotifyImg from "../assets/spot.png";
import WhirliImg from "../assets/whirligig.jpg";

const Photos = () => {
  return (
    <div className="w-full bg-default">
      <div className="text-kinda-white mx-48 place-items-center text-center">
        <h1 className="w-full font-sans font-light text-3xl md:text-4xl py-9">
          unfortunately, i don’t have any food, but maybe i have something
          better.
        </h1>
        <p className="w-full font-sans font-light text-xl md:text-2xl pb-12">
          like all great fridges, take a look at some achievements that couldn’t
          make the cut anywhere else.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-3 w-full">
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 bg-opacity-80 backdrop-filter backdrop-blur-sm mx-12 py-3 h-fit drop-shadow-3xl">
          <div className="place-content-center flex p-4">
            <img src={SpotifyImg} alt="/" />
          </div>
          <div>
            <p className="text-2xl font-handwriting text-center w-full p-2">
              i have a lot of Spotify minutes
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 bg-opacity-80 backdrop-filter backdrop-blur-sm mx-12 py-3 h-fit drop-shadow-3xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={SpotifyImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                i have a lot of Spotify minut
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 bg-opacity-80 backdrop-filter backdrop-blur-sm mx-12 py-3 h-fit drop-shadow-3xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={WiiImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                my perfect game of Wii Sports bowling
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-50 bg-opacity-80 backdrop-filter backdrop-blur-sm mx-12 py-3 h-fit drop-shadow-3xl">
          <div>
            <div className="place-content-center flex p-4">
              <img src={WhirliImg} alt="/" />
            </div>
            <div>
              <p className="text-2xl font-handwriting text-center w-full p-2">
                this is the thing that spins in the wind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
