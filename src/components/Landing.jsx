import React from "react";

import unboxImg from "../assets/Landing/box_unopened.png";
import overflowboxImg from "../assets/Landing/box_overflow.png";
import paperImg from "../assets/Landing/paper.png";
import craneImg from "../assets/Landing/crane.png";
import gameImg from "../assets/Landing/cartridge_default.png";
import overflowgameImg from "../assets/Landing/cartridge_overflow.png";
import unfridgeImg from "../assets/Landing/fridge_unopened.png";
import overflowfridgeImg from "../assets/Landing/fridge_overflow.png";
import shelfImg from "../assets/Landing/shelf_default.png";
import bookshelfImg from "../assets/Landing/shelf_overflow.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full h-full relative z-10">
      <div className="w-full flex place-content-center">
        <h1 className="text-lg font-headers py-8 w-[900px] flex md:hidden place-content-center text-center">
          take a look inside an object (or use the navbar) to explore my room!
        </h1>
      </div>
      <div className="hidden md:grid md:grid-cols-[18%_12%_40%_12%_18%] w-full h-full place-items-center">
        <div className="md:pb-48 pb-20 grid place-items-center">
          <div className="group relative cursor-pointer">
            <Link to="/fridge">
              <div className="z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
                <img src={unfridgeImg} alt="/" />
              </div>
              <div className="absolute top-0 left-0 z-10 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                <img src={overflowfridgeImg} alt="/" />
              </div>
            </Link>
          </div>
        </div>
        <div className="md:pb-0 pb-10 grid h-full place-items-end">
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
        <div className="pb-[72px] grid h-full place-items-center">
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
        <div className="md:pb-0 pb-10 grid h-full place-items-end">
          <div className="group relative cursor-pointer">
            <a
              href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
                <img src={paperImg} alt="/" />
              </div>
              <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                <img src={craneImg} alt="/" />
              </div>
            </a>
          </div>
        </div>
        <div className="pb-40 grid h-full place-items-center">
          <div className="group relative cursor-pointer">
            <Link to="/about">
              <div className="bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
                <img src={shelfImg} alt="/" />
              </div>
              <div className="absolute top-0 left-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                <img src={bookshelfImg} alt="/" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full place-content-center hidden md:flex">
        <h1 className="text-2xl font-headers pt-4 px-4 w-[900px] flex place-content-center">
          take a look inside an object (or use the navbar) to explore my room!
        </h1>
      </div>
      <div className="grid md:hidden w-full h-full place-items-center">
        <div className="pb-[72px] grid h-full place-items-center">
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
        <div className="md:pb-0 pb-10 grid h-full place-items-end">
          <div className="group relative cursor-pointer">
            <a
              href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
                <img src={paperImg} alt="/" />
              </div>
              <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                <img src={craneImg} alt="/" />
              </div>
            </a>
          </div>
        </div>
        <div className="md:pb-48 pb-20 grid place-items-center">
          <div className="group relative cursor-pointer">
            <Link to="/fridge">
              <div className="z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
                <img src={unfridgeImg} alt="/" />
              </div>
              <div className="absolute top-0 left-0 z-10 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                <img src={overflowfridgeImg} alt="/" />
              </div>
            </Link>
          </div>
        </div>
        <div className="md:pb-0 pb-10 grid h-full place-items-end">
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
        <div className="pb-40 grid h-full place-items-center">
          <div className="group relative cursor-pointer">
            <Link to="/about">
              <div className="bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
                <img src={shelfImg} alt="/" />
              </div>
              <div className="absolute top-0 left-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                <img src={bookshelfImg} alt="/" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
