import React from "react";
import apexImg from "../assets/Apex/apex.png";
import tftImg from "../assets/tft-case.png";
import setImg from "../assets/tft-set.png";
import unboxImg from "../assets/box_unopened_tp.png";
import overflowboxImg from "../assets/box_overflow_tp.png";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div className="bg-default-bg min-h-screen md:px-48 px-10">
      <div className="text-kinda-white md:mx-24 lg:mx-56 mx-10 place-items-center text-center">
        <h1 className="font-headers font-normal text-2xl md:text-3xl lg:text-4xl py-9">
          thanks for picking up my game, feel free to load up a save.
        </h1>
      </div>
      <div className="w-full mt-6 md:mt-10 lg:mt-16 pb-5 md:pb-10 rounded-3xl bg-game-bg">
        <div>
          <h1 className="font-heading text-kinda-white text-center py-10 text-3xl md:text-4xl">
            SELECT A SAVE
          </h1>
        </div>
        <Link to="/damagenumbers">
          <div className="cursor-pointer grid md:flex border-4 bg-default-bg text-hover-purple text-opacity-60 hover:text-opacity-90 border-hover-purple border-opacity-40 hover:border-opacity-90 mx-5 md:mx-16 rounded-lg place-items-center mb-6 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 duration-300">
            <div className="p-4 md:p-5 md:w-[550px] md:h-[250px]">
              <img
                className="rounded-md border border-kinda-black"
                src={tftImg}
                alt="/"
              />
            </div>
            <div className="md:pl-10 p-5 w-full">
              <p className="text-3xl pb-4">
                File 1 - Teamfight Tactics: Damage Numbers
              </p>
              <p className="text-kinda-gray text-xl pb-6">
                Last Save: August 2022
              </p>
              <p className="text-kinda-gray pb-12">
                Apex Legends has a lot of interactions, this save looks at how
                we might simplify
              </p>
              <p className="text-kinda-gray font-sans">
                Tags: Auto Chess, Figma, GIMP, Strategy, User Flows
              </p>
            </div>
          </div>
        </Link>
        <Link to="/apex">
          <div className="cursor-pointer grid md:flex border-4 bg-default-bg border-hover-purple text-hover-purple text-opacity-60 hover:text-opacity-90 border-opacity-40 hover:border-opacity-90 mx-5 md:mx-16 rounded-lg place-items-center mb-6 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 duration-300">
            <div className="p-4 md:p-5 md:w-[550px] md:h-[250px]">
              <img
                className="rounded-md border border-kinda-black"
                src={apexImg}
                alt="/"
              />
            </div>
            <div className="md:pl-10 p-5 w-full">
              <p className="text-3xl pb-4">
                File 2 - Apex Legends: Interaction Systems
              </p>
              <p className="text-kinda-gray text-xl pb-6">
                Last Save: July 2022
              </p>
              <p className="text-kinda-gray pb-12">
                Apex Legends has a lot of interactions, but is there a way to
                make them even better?
              </p>
              <p className="text-kinda-gray font-sans">
                Tags: Battle Royale, FPS, User Experience, Multiplayer, Systems
                Thinking
              </p>
            </div>
          </div>
        </Link>
        <Link to="/setdesign">
          <div className="cursor-pointer grid md:flex border-4 bg-default-bg border-hover-purple border-opacity-40 text-hover-purple text-opacity-60 hover:text-opacity-90 hover:border-opacity-90 mx-5 md:mx-16 rounded-lg place-items-center mb-6 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 duration-300">
            <div className="p-4 md:p-5 md:w-[550px] md:h-[250px]">
              <img
                className="rounded-md border border-kinda-black"
                src={setImg}
                alt="/"
              />
            </div>
            <div className="md:pl-10 p-5 w-full">
              <p className="text-3xl pb-4">
                File 3 - Teamfight Tactics: Set Concept
              </p>
              <p className="text-kinda-gray text-xl pb-6">
                Last Save: August 2022
              </p>
              <p className="text-kinda-gray pb-12">
                Designing a new TFT set concept called "Into the Wilderness".
              </p>
              <p className="text-kinda-gray font-sans">
                Tags: Auto Chess, Game Design, Strategy, Iconography, Product
                Thinking, GIMP
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="text-kinda-white md:mx-24 lg:mx-56 mx-10 place-items-center text-center">
        <h1 className="w-full font-sans font-light text-2xl md:text-3xl py-9">
          looking for products? check out what's in my box!
        </h1>
      </div>
      <div className="flex w-full justify-center">
        <div className="group relative cursor-pointer">
          <Link to="/product">
            <div className="transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
              <img src={unboxImg} alt="/" />
            </div>
            <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
              <img src={overflowboxImg} alt="/" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
