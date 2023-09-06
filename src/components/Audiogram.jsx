import React from "react";

const Audiogram = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <div>
          <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
            Audiogram - creating an online form experience with an automated
            form reader
          </h1>
          <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl pb-5">
            At a glace
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 md:gap-8 mx-6 md:mx-24 lg:mx-60 pb-6 md:pb-10 lg:pb-16">
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Context</p>
              <p>
                Corporate WSIB approached the lab to help digitalize their
                physical hearing assessment form. This online form would include
                all the features of the standard hearing assessment, with an
                additional feature to scan completed forms and autofill the
                online fields.
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Problem statement</p>
              <p>
                How might we create a digital form experience that caters to the
                specialized needs of audiologists?
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Value proposition </p>
              <p>
                Rebranding the lab allows external parties to get a better grasp
                of the lab's values, projects, and environment. Internally, it
                helps build cohesion across lab assets by setting clear
                guidelines for use cases and styles.
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Team</p>
              <ul className="list-disc pl-4">
                <li className="p-1">5 designers (including me)</li>
                <li className="p-1">
                  2 supervisors (our design lead and the lab's innovation
                  activator)
                </li>
              </ul>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Functions </p>
              <ul className="list-disc pl-4">
                <li className="p-1">Accessibility</li>
                <li className="p-1">Visual Design</li>
                <li className="p-1">Brand Identity</li>
                <li className="p-1">Mockups and Prototyping</li>
              </ul>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Expected impacts</p>
              <ul className="list-disc pl-4">
                <li className="p-1">
                  a brand that better showcases the lab and its values
                </li>
                <li className="p-1">
                  easier to identify the lab's work and social presence
                </li>
                <li className="p-1">
                  sets precedent for future material to maintain consistency
                  across the lab
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-10 lg:mb-16 bg-landing-project">
          <div className="grid w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div className="flex place-content-center py-5">
              <img className="w-[1200px] object-contain" src="/" alt="/" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Research and Project Scoping
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audiogram;
