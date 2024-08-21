import React from "react";
import DRDC from "../DRDC";
import DarkNavbar from "../DarkNavbar";
import Footer from "../Footer";

const DRDCPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <DRDC />
      <Footer />
    </>
  );
};

export default DRDCPage;
