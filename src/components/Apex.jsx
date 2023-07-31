import React from "react";
import inter from "../assets/Apex/apex.png";
import settings from "../assets/Apex/settings.png";
import radii from "../assets/Apex/radii.png";

const Apex = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <div className="mx-6 md:mx-24 lg:mx-60 ">
          <h1 className="font-headers text-2xl md:text-3xl lg:text-4xl py-5">
            Apex Legends - an interaction system case study
          </h1>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60 pb-4 md:pb-10 lg:pb-16">
          <h2 className="font-headers text-lg md:text-xl lg:text-2xl py-5">
            At a glace
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 ">
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Context</p>
              <p>
                Apex Legends is a battle royale first-person shooter known for
                its fast-paced and hectic gameplay. A major factor in this is
                its interaction system; this system is used for all
                player-system interactions, such as picking up objects, building
                interactions etc.
              </p>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Problem statement</p>
              <p>
                The interaction system in Apex currently uses one button to
                interact with all game objects. This leads to many undesired
                inputs as game objects clash with the interaction radius.
              </p>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Value proposition </p>
              <p>
                Creating a better interaction system allows for more accurate
                inputs, leading to more fluid and consistent gameplay.
              </p>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Team</p>
              <ul className="list-disc pl-4">
                <li className="p-1">1 interaction designer (me)</li>
              </ul>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Functions </p>
              <ul className="list-disc pl-4">
                <li className="p-1">Interaction Design</li>
                <li className="p-1">Product Thinking</li>
                <li className="p-1">Game UX Design</li>
              </ul>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Expected impacts</p>
              <ul className="list-disc pl-4">
                <li className="p-1">improved game clarity</li>
                <li className="p-1">higher skill expression</li>
                <li className="p-1">less frustrating system interactions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-3-gray py-9 mb-4 md:mb-10 lg:mb-16">
          <div className="w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div>
              <img
                className="w-full px-96 object-contain"
                src={inter}
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="lg:pb-8 mx-6 md:mx-16 lg:mx-60">
          <h2 className="font-heading text-hover-purple">
            Organizing Current Interactions
          </h2>
          <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
            One button sure does a lot of things
          </h1>
          <p className="pb-2">
            As seen in the image above, everything circled in red is
            interactable (with some missing objects such as vehicles, doors
            etc.). However, they all use the same interact button, so if these
            objects are near each other, it can create a lot of confusion. My
            first objective was to try and sort these interactable objects so
            more than one key could be utilised, helping reduce the confusion
            and frustration that can occur when trying to interact with closely
            placed objects.
          </p>
        </div>
        <div className="lg:pb-8 mx-6 md:mx-16 lg:mx-60">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex justify-end">
              <div>
                <h1 className="font-bold pb-2">Combat</h1>
                <ul className="list-disc pl-4">
                  <li className="p-1">Weapons</li>
                  <li className="p-1">Ammo</li>
                  <li className="p-1">Ordnance</li>
                  <li className="p-1">Death Boxes</li>
                  <li className="p-1">Revives/Respawns</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-start">
              <div>
                <h1 className="font-bold pb-2">Non-Combat</h1>
                <ul className="list-disc pl-4">
                  <li className="p-1">Doors</li>
                  <li className="p-1">Banner Collection</li>
                  <li className="p-1">Beacons</li>
                  <li className="p-1">Ziplines</li>
                  <li className="p-1">Vehicles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pb-8 mx-6 md:mx-16 lg:mx-60">
          <p className="pb-4">
            After some brainstorming, I thought 2 categories (combat and
            non-combat) would be best as it separates interactable objects into
            distinct categories, and doesn't make the interaction system more
            complex than needed. I chose these categories for a couple reasons:
            the majority of interaction conflicts occur when a combat and
            non-combat object are close together. For example, when you're
            trying to open a door and pick up a weapon instead.
          </p>
        </div>
        <div className="lg:pb-8 mx-6 md:mx-16 lg:mx-60">
          <h2 className="font-heading text-hover-purple">
            Implementation of New Clusters
          </h2>
          <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
            Finding a home for our new interactions
          </h1>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img className="object-contain p-6" src={settings} alt="/" />
            <p className="pb-4">
              Like most video games, finding a new keybind that's both ergonomic
              and available isn't the easiest. Luckily for us, Apex Legends
              already has a dedicated option for an alternative interact key.
              This makes the job a lot easier, as one of the clusters can just
              be set to the alternate interact button, with the other cluster
              remaining on the default "e" key. One possible issue with this
              would be the removal of the alternate key, requiring another
              alternate to fill its place. However, I think the benefits of
              having more organized
            </p>
          </div>
        </div>
        <div className="lg:pb-8 mx-6 md:mx-16 lg:mx-60">
          <h2 className="font-heading text-hover-purple">
            Decreasing the Radii
          </h2>
          <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
            What happens when objects in the same cluster are close together?
          </h1>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img className="object-contain p-6" src={radii} alt="/" />
            <p className="pb-4">
              Regrouping the objects solves half of our issue, decreasing the
              interaction radius for both the character model and the crosshair.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Apex;
