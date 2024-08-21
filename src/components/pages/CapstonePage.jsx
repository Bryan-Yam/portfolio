import React from "react";
import DarkNavbar from "../DarkNavbar";
import Capstone from "../Capstone";
import Footer from "../Footer";

const CRMPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <Capstone />
      <Footer />
    </>
  );
};

export default CRMPage;
