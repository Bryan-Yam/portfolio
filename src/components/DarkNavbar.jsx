import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const DarkNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToProduct = () => {
    if (location.pathname === "/" && location.hash === "#product") {
      // Already here, force scroll again
      const el = document.getElementById("product");
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else if (location.pathname === "/") {
      // Already on page but different hash
      navigate("#product");
    } else {
      // Navigate to homepage with hash
      navigate("/#product");
    }
    setNav(false); // close mobile menu if open
  };

  return (
    <div className="w-full h-24 pt-6 pb-6 relative z-50 bg-default-bg">
      <div className="px-16 flex justify-start items-center w-full">
        <div className="flex w-full ">
          <div className="hover:cursor-pointer pb-2 md:pb-0">
            <span
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== "/") {
                  navigate("/");
                  // Delay scrollToTop until after route change
                  setTimeout(
                    () => window.scrollTo({ top: 0, behavior: "smooth" }),
                    100
                  );
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="cursor-pointer"
            >
              <span className="text-5xl mr-2 sm:text-5xl font-productsans text-kinda-white">
                bryan
              </span>
              <span className="text-5xl mr-2 sm:text-5xl font-productsans text-goated-purple">
                yam
              </span>
            </span>
          </div>
          <ul className="hidden md:flex justify-end w-11/12">
            <li className="font-productsans text-2xl pr-5  text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
              <span onClick={handleScrollToProduct}>products</span>
            </li>
            <li className="font-productsans text-2xl pr-5  text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
              <Link to="/games">games</Link>
            </li>
            <li className="font-productsans text-2xl pr-5  text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
              <Link to="/fridge">fridge</Link>
            </li>
            <li className="font-productsans text-2xl pr-5  text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
              <Link to="/about">about</Link>
            </li>
            <li className="font-productsans text-2xl text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
              <a
                href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                resume
                <span>
                  <ArrowTopRightOnSquareIcon className="w-6" />
                </span>
              </a>
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
        <li
          className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline"
          onClick={handleScrollToProduct}
        >
          products
        </li>

        <Link to="/games">
          <li className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
            games
          </li>
        </Link>
        <Link to="/fridge">
          <li className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
            fridge
          </li>
        </Link>
        <Link to="/about">
          <li className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
            about
          </li>
        </Link>
        <li className="border-b-2 px-8 py-6 border-zinc-300 w-full text-kinda-white hover:text-hover-purple hover:cursor-pointer hover:underline">
          <a
            href="https://drive.google.com/file/d/1yOLStdYpEQDHXaq1BuoJLO1oo25H4dMw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            resume
            <span>
              <ArrowTopRightOnSquareIcon className="w-6" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DarkNavbar;
