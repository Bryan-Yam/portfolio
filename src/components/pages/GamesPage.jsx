import React from "react";
import DarkNavbar from "../DarkNavbar";
import Footer from "../Footer";
import Games from "../Games";

const GamesPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <Games />
      <Footer />
    </>
  );
};

export default GamesPage;
