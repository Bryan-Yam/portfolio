import React from "react";
import breakdown from "../assets/TFT Case/breakdown.jpg";
import final from "../assets/TFT Case/final.png";

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
          <div className="w-full pr-4">
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
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Problem statement</p>
            <p>
              How might we implement explicit damage numbers into TFT while
              still maintaining a consistent and concise information flow for
              players?
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Value proposition </p>
            <p>
              Providing damage numbers to players, fundamental gameplay
              knowledge is more accessible for new players and it also allows
              more advanced players to determine possible damage numbers quickly
              so they can utilize their time for other important aspects such as
              rerolling and positioning.
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Team</p>
            <ul className="list-disc pl-4">
              <li className="p-1">1 UI/UX designer (me)</li>
            </ul>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Functions </p>
            <ul className="list-disc pl-4">
              <li className="p-1">Visual Spacing</li>
              <li className="p-1">Interaction Design</li>
              <li className="p-1">Game Design</li>
            </ul>
          </div>
          <div className="w-full pr-4">
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
              <img
                className="object-contain w-[1000px] px-10"
                src={final}
                alt="/"
              />
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
              Legends. Here's some fundamental information about the game to
              help you understand this case study better:
            </p>
            <div className="grid">
              <div className="flex justify-center md:mx-24 lg:mx-48">
                <div className="grid gap-2">
                  <p>
                    1. You start the game at 100 health points and battle 7
                    other players (or little legends) until one is left
                    standing.
                  </p>
                  <p>
                    2. Throughout the game, you obtain currency which allows you
                    to buy units, which fight on your behalf against the other 7
                    players in the game.
                  </p>
                  <p>
                    3. Health points are lost when you lose a battle; this
                    occurs when the opponent's units slay all of your units.
                  </p>
                  <p>
                    4. Damage taken is calculated based on the stage of the game
                    and the number of remaining units your opponent has left
                    after slaying all your units.
                  </p>
                  <p>
                    5. You are given approximately 30 seconds in between each
                    battle to prepare your units, so it’s important to make
                    moves quickly. Each stage has 5 battles, with damage
                    increasing as the stage number gets higher.
                  </p>
                </div>
              </div>
            </div>
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
              challenges due to a decrease in screen size and tech specs.
            </p>
            <div className="flex place-content-center pb-5">
              <figure>
                <img className="w-[1200px]" src={breakdown} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 1. TFT screen breakdown
                </figcaption>
              </figure>
            </div>
            <p className="pb-5">
              After looking at the screen above, I compiled some key insights
              about each main section of the game, as well as an overall summary
              of how information is structured and presented.
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 justify-items-center">
              <div className="w-full pr-4">
                <h2 className="font-bold pb-2 text-orange-400"> Orange</h2>
                <ul className="list-disc pl-4">
                  <li className="p-1">
                    Compiles all other player data for the user on the right of
                    the screen.
                  </li>
                  <li className="p-1">
                    Minimap at the bottom of the group is slightly redundant as
                    it conveys the same information as the icons above.
                  </li>
                </ul>
              </div>
              <div className="w-full pr-4">
                <h2 className="font-bold pb-2 text-red-400"> Red</h2>
                <ul className="list-disc pl-4">
                  <li className="p-1">
                    Provides vital information about trait bonuses and items on
                    the left of the screen.
                  </li>
                  <li className="p-1">
                    Utilizes tooltips to convey more detailed information, and
                    allows users to pick and choose which areas they need more
                    info for depending on the situation.
                  </li>
                </ul>
              </div>
              <div className="w-full pr-4">
                <h2 className="font-bold pb-2 text-cyan-400"> Blue</h2>
                <ul className="list-disc pl-4">
                  <li className="p-1">
                    Summarizes the key features a player can perform in a turn;
                    buying XP, refreshing the shop, and buying champions.
                  </li>
                  <li className="p-1">
                    Uses detailed icons to avoid text clutter, which can also
                    allow users to process information more easily.
                  </li>
                </ul>
              </div>
              <div className="w-full pr-4">
                <h2 className="font-bold pb-2 text-lime-400"> Green</h2>
                <ul className="list-disc pl-4">
                  <li className="p-1">
                    Contains all related information about stage progression and
                    round types.
                  </li>
                  <li className="p-1">
                    Similar to the blue section, heavily relies on icon usage to
                    convey information quickly.
                  </li>
                </ul>
              </div>
              <div className="w-full pr-4">
                <h2 className="font-bold pb-2 text-amber-400"> Yellow</h2>
                <ul className="list-disc pl-4">
                  <li className="p-1">
                    The largest portion of the screen, however, only shows
                    detailed UI when the user interacts with the section. For
                    example, only when you select a unit on the board do all
                    hexes highlight to show a player where that unit can be
                    placed.
                  </li>
                </ul>
              </div>
              <div className="w-full pr-4">
                <h2 className="font-bold pb-2"> Overall Insights</h2>
                <ul className="list-disc pl-4">
                  <li className="p-1">
                    In general, each section has a defined purpose, and only
                    contains information relevant to said purpose.
                  </li>
                  <li className="p-1">
                    Each section displays the minimum amount of high-level
                    information needed; allowing users to gain more detailed
                    info by interacting with a particular section.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Implementation
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Finding the perfect fit for the new module
            </h1>
            <p className="pb-5">
              Next, there needs to be a spot where the{" "}
              <span className="font-bold">
                damage numbers can go that makes sense both from a visual and
                gameplay perspective.{" "}
              </span>
              Following the observations made above, the most optimal place for
              damage numbers would be at the top of the screen (green section)
              since damage numbers are determined by the stage number and the
              number of units your opponent has left on the board.
            </p>
            <p className="pb-5">
              Originally I was looking at placing the damage numbers under the
              timer to keep things symmetrical at the top, but doing so may
              clash with the bench on the other side of the board, which could
              both cause the player to lose information about the opponent and
              cause a lot of visual conflicts due to the lack of space and some
              champions being larger than others. Because of that, the option I
              decided to go with was following the layout of the probability tab
              in the bottom champion shop and creating a parallelogram that
              could connect to the left side of the stage/timer bar.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[1200px]" src={final} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 2. TFT screen with damage indicator at the top of the
                  screen
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Learnings and Reflection
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Tiny pain points and the importance of groupings
            </h1>
            <p className="pb-5">
              I spent a lot of time trying to think about what to look at for
              TFT and it was quite difficult at first, which I couldn’t believe
              since I play TFT so often. A lot of initial ideas were based on
              frustrations due to bugs, or really specific occurrences that
              wouldn’t be super meaningful to the majority of players. After a
              while (and through playing some TFT), I realized that you are
              never explicitly told how much damage you will take, and as
              someone who has played hundreds of games of TFT, I still don’t
              completely know the damage numbers for each stage, so I figured
              that a little panel that you help you do the math would be useful,
              especially for newer players who have more important things to
              learn about the game. It helped me understand that small pain
              points can make a world of difference and that solving them is
              just as important as bigger issues.
            </p>
            <p>
              One thing that really impressed me about the TFT information flow
              is how well everything is organized and presented despite the
              massive amount of information on the screen. For example, gold is
              heavily tied to champions so they are located directly together at
              the bottom of the screen. Wherever you look, related information
              is always placed together on the screen and further information is
              only available when you hover over something, meaning you won’t
              get distracted by a wall of text across the screen when you need
              to look at other factors for your board. It’s something that is
              really nuanced which I had never really noticed throughout all my
              games of TFT, but after analyzing the game screen a bit more I
              came to this realization and I think it really helped me justify
              my decisions for the placement of the damage indicator module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TFTDamage;
