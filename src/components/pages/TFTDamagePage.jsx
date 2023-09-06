import React from "react";
import DarkNavbar from "../DarkNavbar";
import TFTDamage from "../TFTDamage";
import Footer from "../Footer";

const TFTDamagePage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <TFTDamage />
      <Footer />
    </>
  );
};

export default TFTDamagePage;
