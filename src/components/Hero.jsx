import React, { useState, useEffect } from "react";

const Hero = ({ lines, animationDuration = 1000, pauseDuration = 3000 }) => {
  const [frame, setFrame] = useState(0);
  const totalFrames = lines.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % totalFrames);
    }, animationDuration + pauseDuration);

    return () => clearInterval(interval);
  }, [animationDuration, pauseDuration, totalFrames]);

  return (
    <div className="overflow-hidden select-none text-white font-headers italic text-left text-xl md:text-2xl lg:text-3xl leading-snug h-20">
      <div
        className="flex flex-col transition-transform ease-in-out will-change-transform"
        style={{
          transform: `translateY(-${frame * 5}rem)`, // 5rem matches h-20
          transitionDuration: `${animationDuration}ms`,
        }}
      >
        {lines.map((line, i) => {
          const opacity =
            i === frame ? 1 : i === (frame + 1) % lines.length ? 0.3 : 0;

          return (
            <div
              key={i}
              className="h-20 flex items-start break-words transition-opacity duration-500 ease-in-out"
              style={{ opacity }}
            >
              {line}
            </div>
          );
        })}

        {/* Duplicate first line for seamless looping */}
        <div
          className="h-20 flex items-start break-words transition-opacity duration-500 ease-in-out"
          style={{ opacity: frame === lines.length - 1 ? 0.3 : 0 }}
        >
          {lines[0]}
        </div>
      </div>
    </div>
  );
};

export default Hero;
