import React from "react";
import Typewriter from "typewriter-effect";

const DeletingText = () => {
  return (
    <div className="w-full h-[100px] pt-10 md:pb-10 md:pt-0 grid place-items-center text-2xl md:text-3xl font-custom">
      <Typewriter
        options={{
          skipAddStyles: true,
          strings: [
            "click an object to get started",
            "each one has a little hover too!",
            "you can also use the navbar",
            "or you can keep reading this text",
            "regardless, thanks for visiting my website",
            "i really appreciate it",
            "this is the last line",
            "okay, i lied",
            "seriously though, this is the last one",
          ],
          autoStart: true,
          loop: true,
          delay: 10,
          deleteSpeed: 20,
          pauseFor: 1400,
        }}
      />
    </div>
  );
};

export default DeletingText;
