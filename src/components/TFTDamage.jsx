import React from "react";
import breakdown from "../assets/TFT Case/breakdown.jpg";

const TFTDamage = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
          Teamfight Tactics - damage numbers and information flow
        </h1>
        <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl py-5">
          At a glace
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 mx-6 md:mx-24 lg:mx-60 pb-4 md:pb-10 lg:pb-16">
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Context</p>
            <p>
              As a strategy game, TFT requires players to process a wealth of
              information, and use it to make key decisions in a short amount of
              time. Due to this, the amount, availability, and quality of
              information given is fundamental to making the player experience
              for TFT fun yet challenging; too little and you are left feeling
              overwhelmed and lost, but too much and it feels stale and
              predictable.
            </p>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Problem statement</p>
            <p>
              How might we implement explicit damage numbers into TFT while
              still maintaining a consistent and concise information flow for
              players?
            </p>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Value proposition </p>
            <p>
              Providing damage numbers to players, fundamental gameplay
              knowledge is more accessible for new players and it also allows
              more advanced players to determine possible damage numbers quickly
              so they can utilize their time for other important aspects such as
              rerolling and positioning.
            </p>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Team</p>
            <ul className="list-disc pl-4">
              <li className="p-1">1 UX/UI designer (me)</li>
            </ul>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Functions </p>
            <ul className="list-disc pl-4">
              <li className="p-1">Visual Spacing</li>
              <li className="p-1">Interaction Design</li>
              <li className="p-1">Game Design</li>
            </ul>
          </div>
          <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
            <p className="font-bold pb-2">Expected impacts</p>
            <ul className="list-disc pl-4">
              <li className="p-1">improved game clarity</li>
              <li className="p-1">better time utilization for players</li>
              <li className="p-1">more fluid gameplay</li>
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
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Background
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              The fundamentals of Teamfight Tactics (feel free to skip if you're
              familiar with the game)
            </h1>
            <p className="pb-5">
              Teamfight Tactics, or TFT, is an auto-chess-style strategy game
              based on the MOBA (multiplayer online battle arena) League of
              Legends. Fundamental information about the game: 1. You start at
              100 health points and battle 7 other players (or little legends)
              until one is left standing. 2. Throughout the game, you obtain
              currency which allows you to buy units. 3. Health points are lost
              when you lose a battle; this occurs when the opponent's units slay
              all of your units. 4. Damage taken is calculated based on the
              stage of the game (later stages deal more damage) and the number
              of units your opponent has left (each unit alive deals an
              additional 2 health points). 5. You are given approximately 30
              seconds in between each battle, so it’s important to make moves
              quickly.
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Game Breakdown and Analysis
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              When you have too much information for the screen, what do you do?
            </h1>
            <p className="pb-5">
              Analyzing the information flow of the game is important for
              determining if anything should be removed or moved with the
              addition of damage numbers. For this case study, the focus will
              only be on the PC version of TFT, since it is more common among
              the player base and the mobile version has its own set of
              challenges due to a decreased screen size and tech specs.
            </p>
            <div className="flex place-content-center pb-5">
              <figure>
                <img className="w-[1200px]" src={breakdown} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 1. TFT screen breakdown
                </figcaption>
              </figure>
            </div>
            <p>Orange</p>
            <p>
              - relevant information for understanding the pace of the game
              through the large health point values of the seven opponents - the
              minimap in the bottom right could be seen as slightly redundant as
              you can click on the player tabs above to see other boards. It
              also doesn’t provide a lot of useful information → provides the
              opportunity to see who is battling who which could be useful in
              niche situations, but overall this could be seen as too much
              information.
            </p>
            <p>Red</p>
            <p>
              - information provided is specific and concise as it gives the
              number needed for the synergy to take effect/improve; hovering
              over a specific synergy also shows more detail about it - items
              are similar in fashion, highlighting shows possible combinations
              as well as their effects, but does not clutter the screen if not
              highlighted and only shows the needed info (i.e. what the item or
              item component is) - overall, high-level information is always
              provided, and more specific info can be found by hovering over
              specific objects
            </p>
            <p>Blue</p>
            <p>
              - the champion shop does an excellent job at providing a lot of
              information without overloading the player - lots of information
              is condensed when not hovered over, for example, champions in the
              shop show the basic aspects needed to understand what they are
              (name, cost, synergies) and hovering over each champion gives more
              detail about what they actually do. They are also coloured-coded
              with the probabilities above to show how rare it is for said unit
              to appear. - The gold on the side of the board (in this case,
              loaves of bread) are good visual indicators for which increment
              you and your opponents are at for interest (every 10 gold saved
              gets you an additional +1 gold next turn, each loaf of bread
              represents that a 10 gold threshold has been reached) This
              information is pretty important for more advanced gameplay as it
              shows the relative economy of other players.
            </p>
            <p>Green</p>
            <p>
              - the stage progression uses icons to display what occurs at each
              part of the stage (in this case, battle → battle → battle → item
              carousel → battle → augment selection + battle → PvE) - the timer
              bar is a bit redundant since there’s a digital timer in the top
              right of the bar, but visually it can be glanced at it give a
              rough indication of the time left
            </p>
            <p>Yellow</p>
            <p>
              - the large counter on the board makes it easy to know how many
              units you have + how many units are on your board - hexes (the
              spots champions stand on) are only highlighted when you move a
              champion which helps reduce visual clutter when looking at other
              parts of the screen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TFTDamage;
