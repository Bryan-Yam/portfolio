import React from "react";
import DarkNavbar from "../DarkNavbar";
import Quest from "../Quest";
import Footer from "../Footer";

const QuestPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <Quest />
      <Footer />
    </>
  );
};

export default QuestPage;
