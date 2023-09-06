import React from "react";
import Rebrand from "../Rebrand";
import DarkNavbar from "../DarkNavbar";
import Footer from "../Footer";

const RebrandPage = () => {
  return (
    <>
      <div className="sticky top-0">
        <DarkNavbar />
      </div>
      <Rebrand />
      <Footer />
    </>
  );
};

export default RebrandPage;
