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
            <div className="w-full pr-4">
              <p className="font-bold pb-2">Context</p>
              <p>
                Apex Legends is a battle royale first-person shooter known for
                its fast-paced and hectic gameplay. A major factor in this is
                its interaction system; this system is used for all
                player-system interactions, such as picking up objects, building
                interactions etc.
              </p>
            </div>
            <div className="w-full pr-4">
              <p className="font-bold pb-2">Problem statement</p>
              <p>
                The interaction system in Apex currently uses one button to
                interact with all game objects. This leads to many undesired
                inputs as game objects clash with the interaction radius.
              </p>
            </div>
            <div className="w-full pr-4">
              <p className="font-bold pb-2">Value proposition </p>
              <p>
                Creating a better interaction system allows for more accurate
                inputs, leading to more fluid and consistent gameplay.
              </p>
            </div>
            <div className="w-full pr-4">
              <p className="font-bold pb-2">Team</p>
              <ul className="list-disc pl-4">
                <li className="p-1">1 interaction designer (me)</li>
              </ul>
            </div>
            <div className="w-full pr-4">
              <p className="font-bold pb-2">Functions </p>
              <ul className="list-disc pl-4">
                <li className="p-1">Interaction Design</li>
                <li className="p-1">Product Thinking</li>
                <li className="p-1">Game UX Design</li>
              </ul>
            </div>
            <div className="w-full pr-4">
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
          <div className="flex place-content-center">
            <img
              className="w-[1000px] px-10 object-contain"
              src={inter}
              alt="/"
            />
          </div>
        </div>
        <div className="lg:pb-8 mx-6 md:mx-16 lg:mx-60">
          <h2 className="font-heading text-hover-purple">
            Organizing Current Interactions
          </h2>
          <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
            One button sure does a lot of things
          </h1>
          <p className="pb-5">
            As seen in the image above, everything circled in red is
            interactable (with some missing objects such as vehicles, doors
            etc.). However, they all use the same interact button, so if these
            objects are near each other, it can create a lot of confusion.{" "}
            <span className="font-bold">
              My first objective was to try and sort these interactable objects
            </span>{" "}
            so more than one key could be utilized, helping reduce the confusion
            and frustration that can occur when trying to interact with closely
            placed objects.
          </p>
        </div>
        <div className="pb-5 mx-6 md:mx-16 lg:mx-60">
          <div className="grid grid-cols-2 gap-10">
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
          <p className="pb-5">
            After some brainstorming, I thought 2 categories (combat and
            non-combat) would be best as it separates interactable objects into
            distinct categories, and doesn't make the interaction system more
            complex than needed. I chose these categories for a couple of
            reasons: the majority of interaction conflicts occur when a combat
            and non-combat object are close together. For example, when you're
            trying to open a door and pick up a weapon instead!
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
            <p className="pb-5">
              Like most video games, finding a new keybind that's both ergonomic
              and available isn't the easiest. Luckily for us, Apex Legends
              already has a dedicated option for an alternative interact key.
              This makes the job a lot easier, as{" "}
              <span className="font-bold">
                one of the clusters can just be set to the alternate interact
                button, with the other cluster remaining on the default "e" key.{" "}
              </span>
              One possible issue with this would be the removal of the alternate
              key, requiring another alternate to fill its place. However, I
              think the benefits of having a more organized interaction system
              would justify the tradeoff of power users needing to adjust to
              another keybind.
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
            <p className="pb-5">
              This is a tricky area to balance since radii too large can lead to
              undesired inputs, and radii too small can lead to missed inputs. I
              think a{" "}
              <span className="font-bold">very minor reduction in radius</span>{" "}
              around the character model and around the crosshair, combined with
              the new interaction keys will{" "}
              <span className="font-bold">
                help reduce the current issue of undesired inputs
              </span>{" "}
              without leaning too far towards the other side of the spectrum
              where inputs are missed.
            </p>
          </div>
        </div>
        <div className="lg:pb-8 mx-6 md:mx-16 lg:mx-60">
          <h2 className="font-heading text-hover-purple">
            Learnings and Reflection
          </h2>
          <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
            Complexity is a double-edged sword
          </h1>
          <p className="pb-5">
            Sorting the interactions was definitely the hardest part of this
            process. When I was originally thinking of solutions I found myself
            overcomplicating game mechanics and trying to make things as
            specific as possible since I thought the current system was too
            simple. After looking at the logistics of how many keys you could
            reasonably allocate and the additional learning it would take to
            adapt to a new system, I realized any more than 2 categories would
            just make things worse. The problem wasn’t that the system was too
            simple, it was just that it needed a bit more clarity. Reflecting on
            the system, I think its simplicity is a huge benefit to the user
            experience, and adding an extra key doesn't take away from that, it
            just provides some additional support to the system.
          </p>
          <p>
            Sometimes it's hard to tell if what you’re looking at is actually a
            problem, or if it’s just that you’re the problem. I have over a
            thousand hours in Apex and I was still unsure about whether this was
            a real problem. This is where research comes in; talking with
            players in-game and reading Reddit posts and articles not only
            reassures that you are looking at a real pain point but also
            provides massive insight into possible solutions and the subtle
            details of why something is an issue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apex;
