import React from "react";
import topo from "../assets/DRDC/topo.png";
import twothousand from "../assets/DRDC/2000.png";
import comp from "../assets/DRDC/comp.png";
import trail from "../assets/DRDC/trail.png";
import daynight from "../assets/DRDC/daynight.png";

const DRDC = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
          AR Simulations - exploring augmented reality use cases within the
          military
        </h1>
        <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl py-5">
          At a glace
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 mx-6 md:mx-24 lg:mx-60 pb-4 md:pb-10 lg:pb-16">
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Context</p>
            <p>
              During my time at Defence Research and Development Canada, I
              worked on a research experiment examining the effects and use
              cases of augmented reality within the field.
            </p>
            <p className="pt-2">
              <span className="font-bold">Note:</span> Due to the sensitive
              nature of the visuals in this project, I won't be showing any
              images from the actual simulation. Instead, I created some
              alternate visuals using Figma to help explain the process :).
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Problem statement</p>
            <p>
              How might we explore augmented reality use cases within the field
              to test its effects for pathway marking, navigation, and
              reconnaissance, measured through the accuracy of target detection
              and time of completion?
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Value proposition </p>
            <p>
              Implementing augmented reality can create safer environments for
              soldiers by providing more information, leading to higher
              confidence levels, and faster completion times for missions.
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Team</p>
            <ul className="list-disc pl-4">
              <li className="p-1">1 level/UX designer (me)</li>
              <li className="p-1">1 Unity developer</li>
              <li className="p-1">2 defence research scientists</li>
            </ul>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Functions </p>
            <ul className="list-disc pl-4">
              <li className="p-1">Interaction Design</li>
              <li className="p-1">Game/Level Design (Unity)</li>
              <li className="p-1">User Interviews</li>
              <li className="p-1">Research Methods</li>
            </ul>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Expected impacts</p>
            <ul className="list-disc pl-4">
              <li className="p-1">
                more accurate identification of potential targets and threats
              </li>
              <li className="p-1">faster completion times for recon trials</li>
              <li className="p-1">
                easier navigation while moving between markers
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-6 md:mb-10 lg:mb-16 bg-landing-project">
          <div className="grid md:grid-cols-2 gap-2 px-16 w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div className="flex place-content-center py-16">
              <img className="w-full object-contain" src={comp} alt="/" />
            </div>
            <div className="flex place-content-center pb-16 md:py-16">
              <img className="w-full object-contain" src={trail} alt="/" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Initial Research and Project Scoping
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Getting up to speed to create "unity"
            </h1>
            <p className="pb-5 leading-relaxed">
              When I joined the team, this project had been going on for about a
              year; most of the back end was already developed, and my
              supervisors, the research scientists, had mapped out what they
              wanted to test within the experiments.{" "}
              <span className="font-bold">
                My role going into this project was to design the different
                levels that would be used for experimentation
              </span>
              ; focusing on making these trials as realistic as possible, while
              still allowing for good data to be obtained.
            </p>
            <p className="leading-relaxed">
              To get up to speed, I play-tested the current version of the
              simulation, and familiarized myself with the documentation and
              research plan. Since we were running the experiment using VR, I
              also set up some VR equipment so I could run tests on my designs
              later on and see what the participants would see. The team set a
              1km x 1km restriction for each level since our in-game model was
              created to mimic a walking pace. Each level would have guide
              markers for participants to follow as well as hidden targets that
              would need to be identified as they progressed through the
              terrain.
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Lo-Fi Mockups</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Creating a game that looks straight from the early 2000's
            </h1>
            <p className="pb-5 leading-relaxed">
              Now that I had the project fundamentals down, I started exploring
              my options for world-building. I used free third-party Unity
              assets alongside Unity's built-in terrain feature to create basic
              levels in different environments; Initially,{" "}
              <span className="font-bold">
                {" "}
                I fleshed out 4 different levels, each with a unique rural
                terrain.
              </span>{" "}
              They varied in height, object density, and opacity to help test
              the augmented reality elements in a variety of situations. They
              contained set markers, different targets, and an overall path that
              each participant would follow.
            </p>
            <p className="leading-relaxed pb-5">
              Since these were "lo-fi" designs, the{" "}
              <span className="font-bold">
                {" "}
                main focus was on functionality
              </span>
              ; making sure the game rendered all the different environment
              aspects properly (my very first design had some floating trees and
              places where you could fall off the map), and that the built-in
              data readers were getting accurate information while users were
              walking through and completing tasks.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[800px]" src={twothousand} alt="/" />
                <figcaption className="text-center text-sm">
                  Figure 1. Image from Counter Strike that accurately represents
                  the visuals of the lo-fi mockups
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Mi-Fi Mockups</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Making the game look a bit more modern + research compatible
            </h1>
            <p className="pb-5 leading-relaxed">
              After getting feedback from my supervisor, I started adding the
              final, more complex AAA assets to replace the free placeholders I
              had used to experiment. The most important piece of feedback I got
              was to make sure{" "}
              <span className="font-bold">
                my designs were standardized to ensure they didn't influence the
                data
              </span>
              . I was in the Air Cadet program for about 6 years, but most of my
              experience with military scenarios still came from video games, so
              my perception of what to include in each level was very skewed. I
              definitely needed to tone down some of the features in my designs.
              For example, in one of the lo-fi mockups I put a mountain to
              scale, but this would've led to way too many variables to account
              for and I worked to scale back any aspects that I thought would
              deter from the main objective of the simulation, which was to
              accurately identify targets and follow a set path.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[1000px]" src={trail} alt="/" />
                <figcaption className="text-center text-sm">
                  Figure 2. The basic structure for a level; with a main pathway
                  (white line) and targets that would need to be identified (red
                  circles)
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              User Testing/Interviews
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Learning the ins and outs from actual reconnaissance soldiers
            </h1>
            <p className="pb-5 leading-relaxed">
              Ideally, I would've done user interviews before I started
              designing any levels, but since that wasn't possible, I decided to
              use these sessions as both a place to{" "}
              <span className="font-bold">
                {" "}
                gather information about real field operations, as well as for
                usability testing.{" "}
              </span>
              These sessions were my favourite part of the project; not only did
              I get a lot of great feedback about my designs and small nuances
              that would help with the realism, but I also learned a lot about
              the field and how operations ran. There were a lot of really cool
              stories and it definitely helped me not only understand the
              physical environments they worked in, but also the psychological
              aspects of missions.
            </p>
            <div>
              <p className="font-bold text-sm md:text-lg pb-2 w-full text-center">
                Key Insights
              </p>
              <div className="grid">
                <div className="flex justify-center md:mx-24 lg:mx-48">
                  <div className="grid gap-2">
                    <p>
                      1. Movement is heavily based on the terrain; the more
                      cover is better.
                    </p>
                    <p>
                      2. Target distance is essential for realism; the larger
                      the target, the further it should be.
                    </p>
                    <p>
                      3. Waypoint markers should be placed at a roughly equal
                      distance and within areas that are intuitive to traverse.
                    </p>
                    <p>
                      4. There are certain patterns that soldiers tend to follow
                      in the field, using these patterns would help make our
                      participants more comfortable and would bring more focus
                      to the goals of the experiment, rather than analyzing
                      their walking patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Hi-Fi Mockups</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Adding the finishing touches
            </h1>
            <p className="pb-5 leading-relaxed">
              After compiling all the great insights I received from the
              interviews/testing and creating a list of action items, I started
              implementing them. I added some better tree line structure to
              match the pathways; as you can imagine, if you're trying not to be
              seen and looking for targets, using cover would be smart and
              making the trial markers reflect that helped with the realism.
            </p>
            <p className="pb-5 leading-relaxed">
              <span className="font-bold">
                The last major design addition was the ability to set
                environmental factors.
              </span>{" "}
              Using a Unity environment pack, I set up some variables that could
              be adjusted to test each level at different times of the day, and
              different types of weather. In total, I designed 32 levels over 8
              different terrain types; 4 different paths and target locations
              for each type of terrain.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img src={daynight} alt="/" />
                <figcaption className="text-center text-sm">
                  Figure 3. Examples of day and night cycles from the
                  environment pack used
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Optimization</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              VR testing with motion sickness is a blessing and a curse
            </h1>
            <p className="pb-5 leading-relaxed">
              Optimizing the simulation was a bit painful. I looked at aspects
              like occlusion culling, level of detail (LOD) for meshes, render
              distances etc. to try and{" "}
              <span className="font-bold">
                get the best frame rate possible while still maintaining the
                visual integrity of each level
              </span>
              . I had a few things going on my side; the testing environment was
              using RTX 3090s, so the frame rates I was getting on my end would
              be increased for the actual simulation. I also incorporated fog to
              help lessen the amount of objects that needed to be rendered.
            </p>
            <p className="leading-relaxed">
              Since I get slight motion sickness from VR headsets, it meant a
              lot of struggling at first as I was experimenting with a variety
              of different settings; which inevitably led to low frame rates and
              weird glitches, but in the end I was confident that if I could
              make it through a trial without my head spinning, it was good to
              go!
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Maps and Grids</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Topping it off with some topography
            </h1>
            <p className="pb-5 leading-relaxed">
              As a fun bonus/side project, I got to work with one of the
              research scientists to
              <span className="font-bold">
                {" "}
                create topographic maps that be used within the minimap
              </span>{" "}
              that was within the simulation. Since the terrains for all the
              trials were created using Unity's built-in terrain tool, we were
              able to export the terrains into .raw files. These .raw files were
              then converted to .png files to be processed in MatLab.
            </p>
            <p className="pb-5">
              Within Matlab, my supervisor processed the images into numbers
              referencing the "height" of each point in the image and we made a
              simple algorithm that parsed through the image, analyzing the
              difference between each number with a constant step size; if the
              difference was greater than the step size, it would place a dot
              for that height, and repeat on the next difference threshold. Each
              image was parsed 4 times; one for each side, and then combined to
              create the final map.
            </p>
            <div className="flex place-content-center pb-5">
              <figure>
                <img className="w-[800px]" src={topo} alt="/" />
                <figcaption className="text-center text-sm">
                  Figure 4. Processing the terrain into topographic maps
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Learnings and Reflection
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Creating a user experience that doesn't compromise experimental
              standardization
            </h1>
            <p className="pb-5 leading-relaxed">
              One of the biggest challenges of designing game levels for
              research purposes was the balance needed between user experience
              and collecting good research data. In an ideal state, I would be
              able to cater features to users but that would lead to the
              addition of too many variables, potentially compromising the data.
              This meant I had to find the sweet spot where the flow of the
              simulation and its tasks were intuitive, and the data being
              collected was also able to be used effectively and gather actual
              results.
            </p>
            <p className="leading-relaxed">
              The user interviews and testing were also an essential part of the
              project, not only due to the great insights I received, but also
              because of the empathy aspect. After the sessions, I felt like I
              knew a lot more about the psychology around field operations and
              thus did my best to make the experience as enjoyable as possible
              while not breaking the immersion of the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRDC;
