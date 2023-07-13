import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const DarkNavbar = () => {
  const [nav, setNav] = useState(false);
  const [product, setProduct] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClickProduct = () => setProduct(!product);
  return (
    <div className="w-full h-24 pt-6 pb-6 relative z-50 bg-default-bg">
      <div className="px-16 flex justify-start items-center w-full">
        <div className="flex w-full ">
          <div className="hover:cursor-pointer pb-2 md:pb-0">
            <Link to="/portfolio">
              <span className="text-5xl mr-2 sm:text-5xl font-productsans text-kinda-white">
                bryan
              </span>
              <span className="text-5xl mr-2 sm:text-5xl font-productsans text-goated-purple">
                yam
              </span>
            </Link>
          </div>
          <ul className="hidden md:flex justify-end w-11/12">
            <li className="font-productsans text-2xl pr-5 text-kinda-white group">
              <div className="group-hover:hidden">projects</div>
              <div className="hidden group-hover:block">
                <div>
                  <Link
                    className=" hover:text-hover-purple hover:cursor-pointer"
                    to="/product"
                  >
                    product
                  </Link>
                </div>
                <div>
                  <Link
                    className=" hover:text-hover-purple hover:cursor-pointer"
                    to="/games"
                  >
                    games
                  </Link>
                </div>
              </div>
            </li>
            <li className="font-productsans text-2xl pr-5  text-kinda-white hover:text-hover-purple hover:cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </li>
            <li className="font-productsans text-2xl pr-5  text-kinda-white hover:text-hover-purple hover:cursor-pointer">
              <Link to="/fridge">fridge</Link>
            </li>
            <li className="font-productsans text-2xl text-kinda-white hover:text-hover-purple hover:cursor-pointer">
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden justify-center" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-10 text-kinda-white cursor-pointer" />
          ) : (
            <XMarkIcon className="w-10 text-kinda-white cursor-pointer" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute w-full bg-default-bg border-b-2 border-zinc-300 font-productsans text-2xl text-kinda-white"
        }
      >
        <li className="border-b-2 border-zinc-300">
          <div
            className="md:hidden w-full px-8 py-6"
            onClick={handleClickProduct}
          >
            {!product ? (
              <div className="hover:cursor-pointer hover:text-hover-purple">
                projects
              </div>
            ) : (
              <div>
                <div className="hover:cursor-pointer">projects</div>
                <div>
                  <Link
                    className=" hover:text-hover-purple hover:cursor-pointer pl-4 text-lg"
                    to="/product"
                  >
                    product
                  </Link>
                </div>
                <div>
                  <Link
                    className=" hover:text-hover-purple hover:cursor-pointer pl-4 text-lg"
                    to="/games"
                  >
                    games
                  </Link>
                </div>
              </div>
            )}
          </div>
        </li>
        <a
          href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <li className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer">
            resume
          </li>
        </a>
        <Link to="/fridge">
          <li className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer">
            fridge
          </li>
        </Link>
        <Link to="/about">
          <li className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer">
            about
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DarkNavbar;
