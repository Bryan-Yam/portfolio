import React from "react";
import DarkNavbar from "../DarkNavbar";
import Spotify from "../Spotify";
import Footer from "../Footer";

const SpotifyPage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <DarkNavbar />
      </div>
      <Spotify />
      <Footer />
    </>
  );
};

export default SpotifyPage;
