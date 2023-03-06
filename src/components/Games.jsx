import React from "react";
import apexImg from "../assets/apex.png";
import tftImg from "../assets/tft-case.png";
import setImg from "../assets/tft-set.png";
import unboxImg from "../assets/box_unopened_tp.png";
import overflowboxImg from "../assets/box_overflow_tp.png";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div className="bg-default min-h-screen md:px-48 px-10">
      <div className="text-kinda-white md:mx-24 lg:mx-56 mx-10 place-items-center text-center">
        <h1 className="w-full font-sans font-light text-3xl md:text-4xl py-9">
          thanks for picking up my game, why don't you load it up and see what's
          on it?
        </h1>
      </div>
      <div className="w-full pb-5 md:pb-10 rounded-3xl bg-kinda-white">
        <div>
          <h1 className="font-custom text-kinda-black text-center py-10 text-3xl md:text-4xl animate-pulse">
            SELECT A SAVE
          </h1>
        </div>
        <a
          href="https://marmalade-catcher-f3f.notion.site/Teamfight-Tactics-analyzing-information-flow-a-case-study-353bdf91a806462f82f0c97a4feb8efa"
          target="_blank"
          rel="noreferrer"
        >
          <div className="grid md:flex border-4 bg-french-gray border-kinda-black mx-5 md:mx-16 rounded-lg place-items-center mb-6 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 duration-300 cursor-pointer">
            <div className="p-4 md:p-5 md:w-[550px] md:h-[250px]">
              <img
                className="rounded-md border border-kinda-black"
                src={tftImg}
                alt="/"
              />
            </div>
            <div className="md:pl-10 p-5 w-full">
              <p className="text-3xl text-ice-blue pb-4">
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
        </a>
        <a
          href="https://marmalade-catcher-f3f.notion.site/Apex-Legends-an-interaction-system-case-study-7873e1ca91134bf88d1f237e133dc493"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer grid md:flex border-4 bg-french-gray border-kinda-black mx-5 md:mx-16 rounded-lg place-items-center mb-6 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 duration-300">
            <div className="p-4 md:p-5 md:w-[550px] md:h-[250px]">
              <img
                className="rounded-md border border-kinda-black"
                src={apexImg}
                alt="/"
              />
            </div>
            <div className="md:pl-10 p-5 w-full">
              <p className="text-3xl text-ice-blue pb-4">
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
        </a>
        <div className="grid md:flex border-4 bg-french-gray border-kinda-black mx-5 md:mx-16 rounded-lg place-items-center mb-4 ">
          <div className="p-4 md:p-5 md:w-[550px] md:h-[250px]">
            <img
              className="rounded-md border border-kinda-black"
              src={setImg}
              alt="/"
            />
          </div>
          <div className="md:pl-10 p-5 w-full">
            <p className="text-3xl text-ice-blue pb-4">
              File 3 - Teamfight Tactics: Set Concept
            </p>
            <p className="text-kinda-gray text-xl pb-6">
              Last Save: August 2022
            </p>
            <p className="text-kinda-gray pb-12">
              Designing a new TFT set concept. ERROR: file corrupted (coming
              soon)
            </p>
            <p className="text-kinda-gray font-sans">
              Tags: Auto Chess, Game Design, Strategy, Iconography, Product
              Thinking, GIMP
            </p>
          </div>
        </div>
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
