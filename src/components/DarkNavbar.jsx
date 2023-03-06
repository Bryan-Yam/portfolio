import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const DarkNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-auto pt-6 pb-6 relative z-50 bg-black">
      <div className="px-16 flex justify-start items-center w-full h-full">
        <div className="flex items-center w-full">
          <div className="hover:cursor-pointer">
            <Link to="/portfolio">
              <span className="text-5xl mr-2 sm:text-5xl font-heading text-kinda-white">
                bryan
              </span>
              <span className="text-5xl mr-2 sm:text-5xl font-heading text-goated-purple">
                yam
              </span>
            </Link>
          </div>
          <ul className="hidden md:flex justify-end w-11/12">
            <li className="font-heading text-2xl text-kinda-white hover:text-hover-purple hover:cursor-pointer">
              <Link to="/product">projects</Link>
            </li>
            <li className="font-heading text-2xl text-kinda-white hover:text-hover-purple hover:cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </li>
            <li className="font-heading text-2xl text-kinda-white hover:text-hover-purple hover:cursor-pointer">
              <Link to="/fridge">fridge</Link>
            </li>
            <li className="font-heading text-2xl text-kinda-white hover:text-hover-purple hover:cursor-pointer">
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-10 text-kinda-white" />
          ) : (
            <XMarkIcon className="w-10 text-kinda-white" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute w-full px-8 bg-black"}>
        <Link to="/product">
          <li className="border-b-2 border-zinc-300 w-full font-heading text-lg text-kinda-white hover:text-hover-purple hover:cursor-pointer">
            projects
          </li>
        </Link>
        <a
          href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <li className="border-b-2 border-zinc-300 w-full font-heading text-lg text-kinda-white hover:text-hover-purple hover:cursor-pointer">
            resume
          </li>
        </a>
        <Link to="/fridge">
          <li className="border-b-2 border-zinc-300 w-full font-heading text-lg text-kinda-white hover:text-hover-purple hover:cursor-pointer">
            fridge
          </li>
        </Link>
        <Link to="/about">
          <li className="border-b-2 border-zinc-300 w-full font-heading text-lg text-kinda-white hover:text-hover-purple hover:cursor-pointer">
            about
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DarkNavbar;
