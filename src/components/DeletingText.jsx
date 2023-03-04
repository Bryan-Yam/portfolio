import React from "react";
import Typewriter from "typewriter-effect";

const DeletingText = () => {
  return (
    <div className="w-full h-[100px] pt-10 md:pb-10 md:pt-0 grid place-items-center text-2xl md:text-3xl font-custom">
      <Typewriter
        options={{
          skipAddStyles: true,
          strings: [
            "i wonder what's in the box?",
            "wow, it's a mess in here",
            "if you're reading this, please click an object",
            "this is the last line",
            "okay, i lied",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default DeletingText;
