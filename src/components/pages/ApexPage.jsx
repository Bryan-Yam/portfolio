import React from "react";
import DarkNavbar from "../DarkNavbar";
import Footer from "../Footer";
import Apex from "../Apex";

const ApexPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <Apex />
      <Footer />
    </>
  );
};

export default ApexPage;
