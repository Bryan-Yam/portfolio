import React from "react";
import DarkNavbar from "../DarkNavbar";
import TFTset from "../TFTset";
import Footer from "../Footer";

const TFTSetPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <TFTset />
      <Footer />
    </>
  );
};

export default TFTSetPage;
