import React from "react";
import Typewriter from "typewriter-effect";

const DeletingText = () => {
  return (
    <div className="w-full h-fit pt-5 pb-0 md:pb-5 md:pt-0 grid place-items-center text-2xl md:text-3xl font-headers italic">
      <div className="md:flex hidden items-start">
        <h1 className="not-italic">hi there! i'm bryan,&nbsp;</h1>
        <Typewriter
          options={{
            skipAddStyles: true,
            strings: [
              "a product designer based out of toronto.",
              "a systems design engineering student.",
              "an accessible design enthusiast.",
              "a frisbee player for UW.",
              "a mediocre video and board game player.",
              "an avid dark mode enjoyer.",
              "contrary to popular belief, not an actual yam.",
            ],
            autoStart: true,
            loop: true,
            delay: 13,
            deleteSpeed: 4,
            pauseFor: 2500,
          }}
        />
      </div>
      <h1 className="not-italic md:hidden">hi there! i'm bryan,&nbsp;</h1>
      <div className="md:hidden text-center h-[50px]">
        <Typewriter
          options={{
            skipAddStyles: true,
            strings: [
              "a product designer based out of toronto.",
              "a systems design engineering student.",
              "an accessible design enthusiast.",
              "a frisbee player for UW.",
              "a mediocre video and board game player.",
              "an avid dark mode enjoyer.",
              "contrary to popular belief, not an actual yam",
            ],
            autoStart: true,
            loop: true,
            delay: 13,
            deleteSpeed: 4,
            pauseFor: 2500,
          }}
        />
      </div>
    </div>
  );
};

export default DeletingText;
