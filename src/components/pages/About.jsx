import React from "react";
import DarkNavbar from "../DarkNavbar";
import BookSection from "../BookSection";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <BookSection />
      <Footer />
    </>
  );
};

export default About;
