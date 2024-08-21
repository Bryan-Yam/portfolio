import React from "react";
import DeletingText from "../DeletingText";
import Landing from "../Landing";
import Navbar from "../Navbar";

const LandingPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <DeletingText />
      <Landing />
    </>
  );
};

export default LandingPage;
