import React from "react";
import LandingN from "../LandingN";
import DarkNavbar from "../DarkNavbar";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <LandingN />
      <Footer />
    </>
  );
};

export default LandingPage;
