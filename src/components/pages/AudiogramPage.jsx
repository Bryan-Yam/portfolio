import React from "react";
import DarkNavbar from "../DarkNavbar";
import Audiogram from "../Audiogram";
import Footer from "../Footer";

const AudiogramPage = () => {
  <>
    <div className="sticky top-0 z-50">
      <DarkNavbar />
    </div>
    <Audiogram />
    <Footer />
  </>;
};

export default AudiogramPage;
