import React from "react";
import DarkNavbar from "../DarkNavbar";
import CRM from "../CRM";
import Footer from "../Footer";

const CRMPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <CRM />
      <Footer />
    </>
  );
};

export default CRMPage;
