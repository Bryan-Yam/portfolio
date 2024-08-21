import React from "react";
import DarkNavbar from "../DarkNavbar";
import Footer from "../Footer";
import Projects from "../Projects";

const ProjectsPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <Projects />
      <Footer />
    </>
  );
};

export default ProjectsPage;
