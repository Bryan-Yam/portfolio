import React from "react";

const DRDC = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2">
        <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
          AR Simulations - exploring augmented reality use cases within the
          military
        </h1>
        <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl py-5">
          At a glace
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 mx-6 md:mx-24 lg:mx-60 pb-4 md:pb-10 lg:pb-16">
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
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
              alternate visuals to help explain the process :).
            </p>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Problem statement</p>
            <p>
              How might we explore augmented reality use cases within the field
              to test its effects for pathway marking, navigation, and
              reconnaissance, measured through the accuracy of target detection
              and time of completion?
            </p>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Value proposition </p>
            <p>
              Implementing augmented reality can create safer environments for
              soldiers by providing more information, leading to higher
              confidence levels, and faster completion times for missions.
            </p>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Team</p>
            <ul className="list-disc pl-4">
              <li className="p-1">1 Level/UX Designer (me)</li>
              <li className="p-1">1 Unity Developer</li>
              <li className="p-1">2 Defence Research Scientists</li>
            </ul>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Functions </p>
            <ul className="list-disc pl-4">
              <li className="p-1">Interaction Design</li>
              <li className="p-1">Game Design (Unity)</li>
              <li className="p-1">User Interviews</li>
              <li className="p-1">Research Methods</li>
            </ul>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
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
          <div className="grid w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div className="flex place-content-center py-5">
              <img className="w-[1200px] object-contain" src="/" alt="/" />
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
            <p>
              When I joined the team, this project had been going on for about a
              year; most of the back-end was already developed, and my
              supervisors, the research scientists, had mapped out what they
              wanted to test within the experiments. My role going into this
              project was to design the different levels that would be used for
              experimentation; focusing on making these trials as realistic as
              possible, while still allowing for good data to be obtained.
            </p>
            <p>
              To get up to speed, I play-tested the current version of the
              simulation, familiarized myself with the documentation and
              research plan. Since we were running the experiment using VR
              equipment, I also looked into different ...
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Lo-Fi Mockups</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Creating a game that looks straight from the early 2000's
            </h1>
            <p>
              Now that I had the project fundamentals down, I started exploring
              my options for world building. I used free third party Unity
              assets alongside Unity's built-in terrain feature to create basic
              levels in different environments; Initially, I fleshed out 4
              different levels, each with a unique rural terrain. They varied in
              height, object density, and opacity to help test the augmented
              reality elements in a variety of situations. They contained set
              markers, different targets, and an overall path that each
              participant would follow.
            </p>
            <p>img of different levels ig</p>
            <p>
              Since these were "lo-fi" designs, the main focus was on
              functionality; making sure{" "}
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Mi-Fi Mockups</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Making the game look a bit more modern + research compatible
            </h1>
            <p>
              After getting feedback from my supervisor, I started adding the
              final, more complex assets to replace the placeholder free ones I
              had used to experiment.
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              User Testing/Interviews
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Learning the ins and outs from an actual reconnaissance soldier
            </h1>
            <p>
              Ideally, I would've done user interviews before I started
              designing any levels, but since that wasn't possible Now that I
              had ... I started exploring ...
            </p>
            <p>I had some experience with Unity before this co-op, but</p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Hi-Fi Mockups</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Adding the finishing touches and improving the realism
            </h1>
            <p>
              After compiling all the great insights I received from the
              interviews/testing and creating a list of action items, I started
              implementing them.
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Optimization</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              VR testing with motion sickness is a blessing and a curse
            </h1>
            <p>
              Optimizing the simulation, was a bit painful. I looked at aspects
              like occlusion culling, level of detail (LOD) for meshes, render
              distances etc. to try and get the best frame rate possible while
              still maintaining the integrity of each level.
            </p>
            <p>
              Since I get slight motion sickness from VR headsets, it meant a
              lot of struggling at first as I was experimenting with a variety
              of different settings; which inevitably led to low frame rates and
              weird glitches, but in the end I was confident that if I could
              make it through a trial without my head spinning, it was good to
              go.
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60">
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Maps and Grids</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Topping it off with some topography
            </h1>
            <p>
              As a fun bonus/side project, I got to work with one of the
              research scientists to create a topographic map which would be
              used within the minimap that was within the simulation.
            </p>
            <p>
              Since the terrains for all the trials were created using Unity's
              built-in terrain tool, we were able to export the terrains into
              .raw files. These .raw files were then converted to .png files to
              be processed in MatLab.
            </p>
            <p>
              Within Matlab, my supervisor processed the images into numbers
              referencing the "height" of each point in the image and we made a
              simple algorithm that parsed through the image, analyzing the
              difference between each number with a constant step size; if the
              difference was greater than the step size, it would place a dot
              for that height, and repeat on the next difference threshold. Each
              image was parsed through 4 times; one for each side, and then
              combined to create the final map.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRDC;
