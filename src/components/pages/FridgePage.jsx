import React from "react";
import DarkNavbar from "../DarkNavbar";
import Footer from "../Footer";
import Photos from "../Photos";

const FridgePage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <Photos />
      <Footer />
    </>
  );
};

export default FridgePage;
