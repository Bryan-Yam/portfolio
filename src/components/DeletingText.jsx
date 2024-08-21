import React from "react";
import Typewriter from "typewriter-effect";

const DeletingText = () => {
  return (
    <div className="w-full h-fit pt-5 pb-0 md:pb-5 md:pt-0 grid place-items-center text-2xl md:text-3xl font-headers italic">
      <div className="w-full md:grid-cols-[44%_56%] md:grid hidden gap-0">
        <div className="w-full flex place-content-end">
          <h1 className="not-italic w-auto">hi there! i'm bryan,&nbsp;</h1>
        </div>
        <div className="w-full items-start">
          <Typewriter
            options={{
              skipAddStyles: true,
              strings: [
                "a product designer based out of toronto.",
                "contrary to popular belief, not an actual yam.",
                "an accessible design enthusiast.",
                "a systems design engineering student.",
                "a frisbee player for UW.",
                "a mediocre video and board game player.",
                "an avid dark mode enjoyer.",
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
      <h1 className="not-italic md:hidden">hi there! i'm bryan,&nbsp;</h1>
      <div className="md:hidden text-center h-[50px]">
        <Typewriter
          options={{
            skipAddStyles: true,
            strings: [
              "a product designer based out of toronto.",
              "an accessible design enthusiast.",
              "contrary to popular belief, not an actual yam.",
              "a systems design engineering student.",
              "a frisbee player for UW.",
              "a mediocre video and board game player.",
              "an avid dark mode enjoyer.",
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
