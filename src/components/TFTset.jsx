import React from "react";
import onecost from "../assets/TFT Set/1cost.png";
import twocost from "../assets/TFT Set/2cost.png";
import threecost from "../assets/TFT Set/3cost.png";
import fourcost from "../assets/TFT Set/4cost.png";
import ghost from "../assets/TFT Set/ghost.png";
import afterlife from "../assets/TFT Set/afterlife.png";
import snake from "../assets/TFT Set/snake.png";
import bass from "../assets/TFT Set/bass.png";
import claw from "../assets/TFT Set/claw.png";
import beast from "../assets/TFT Set/beast.png";
import crystal from "../assets/TFT Set/crystal.png";
import Crystaline from "../assets/TFT Set/cry.png";
import scope from "../assets/TFT Set/scope.png";
import deadeye from "../assets/TFT Set/deadeye.png";
import map from "../assets/TFT Set/map.png";
import explore from "../assets/TFT Set/explorer.png";
import cloak from "../assets/TFT Set/cloak.png";
import sand from "../assets/TFT Set/sand.png";
import bill from "../assets/TFT Set/bill.png";
import six from "../assets/TFT Set/sixth.png";
import bee from "../assets/TFT Set/bee.png";
import sting from "../assets/TFT Set/sting.png";
import leaf from "../assets/TFT Set/leaf.png";
import vert from "../assets/TFT Set/vert.png";
import boom from "../assets/TFT Set/boom.png";
import art from "../assets/TFT Set/art.png";
import hood from "../assets/TFT Set/ass.png";
import ass from "../assets/TFT Set/assassin.png";
import fist from "../assets/TFT Set/fist.png";
import brawl from "../assets/TFT Set/brawler.png";
import knife from "../assets/TFT Set/knife.png";
import cut from "../assets/TFT Set/cut.png";
import evo from "../assets/TFT Set/evo.png";
import evok from "../assets/TFT Set/evok.png";
import rook from "../assets/TFT Set/rook.png";
import fort from "../assets/TFT Set/fort.png";
import hat from "../assets/TFT Set/hat.png";
import mage from "../assets/TFT Set/mage.png";
import mys from "../assets/TFT Set/mys.png";
import mystic from "../assets/TFT Set/mystic.png";
import hook from "../assets/TFT Set/hook.png";
import scally from "../assets/TFT Set/scally.png";
import axe from "../assets/TFT Set/axe.png";
import slay from "../assets/TFT Set/slay.png";
import thorn from "../assets/TFT Set/thorn.png";
import vile from "../assets/TFT Set/vile.png";
import irelia from "../assets/TFT Set/irelia.png";
import surge from "../assets/TFT Set/surge.png";
import shovel from "../assets/TFT Set/shovel.png";
import sion from "../assets/TFT Set/sion.png";
import yorick from "../assets/TFT Set/yorick.png";
import ziggs from "../assets/TFT Set/ziggs.png";
import udyr from "../assets/TFT Set/udyr.png";
import urgot from "../assets/TFT Set/urgot.png";
import hex from "../assets/TFT Set/hex.png";
import chem from "../assets/TFT Set/chem.png";
import elder from "../assets/TFT Set/elder.png";
import emp from "../assets/TFT Set/emp.png";
import cam from "../assets/TFT Set/cam.png";
import cloud from "../assets/TFT Set/cloud.png";
import mountain from "../assets/TFT Set/mount.png";
import stalk from "../assets/TFT Set/stalking.png";

const TFTset = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed mb-4 md:mb-8 lg:mb-12">
        <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
          TFT Set Concept - Into the Wilderness!
        </h1>
        <p className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl py-5">
          Context and Overview
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 pb-4">
          If you've never played Teamfight Tactics (I'll refer to it as TFT for
          shorthand) before, don't worry. The paragraph below should give you a
          rough idea of what a set is.
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 italic pb-4">
          Essentially, a set in TFT maps out the framework for the game. For
          example, in chess, you have certain pieces (knight, rook, bishop etc.)
          that move certain ways (in an L, vertical and horizontal, diagonal
          etc.). If I were to change the pieces and the way they move, I'd have
          a new "set" for chess. For example, if I replaced the pawn with a
          piece called the jester, which can move diagonally and in an L, I've
          added a new piece, but the basic fundamentals of chess are still
          present, like checks, promotions etc. The same logic applies for TFT,
          this set concept includes new champions with new abilities and traits
          in order to create a new gameplay experience, while still keeping the
          fundamental concepts of TFT.
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60">
          I'll be using this whole chess analogy throughout this showcase to
          hopefully provide more context about all the different aspects!
        </p>
      </div>
      <div className="h-full text-kinda-white font-body2 pb-4 md:pb-10 lg:pb-16">
        <p className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl">
          Champions - 1 to 4 costs
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60">In general:</p>
        <p className="mx-6 md:mx-24 lg:mx-60 italic text-hover-purple pb-2">
          1 costs are similar to pawns
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 italic text-hover-purple pb-2">
          2 and 3 costs are similar to minor pieces
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 italic text-hover-purple pb-5">
          4 costs are similar to rooks and occassionally queens
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4 mx-4 md:mx-10 lg:mx-16">
          <img className="w-full object-contain" src={onecost} alt="/" />
          <img className="w-full object-contain" src={twocost} alt="/" />
          <img className="w-full object-contain" src={threecost} alt="/" />
          <img className="w-full object-contain" src={fourcost} alt="/" />
        </div>
      </div>
      <div className="h-full text-kinda-white font-body2 pb-4 md:pb-10 lg:pb-16">
        <p className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl">
          Champions - 5 costs
        </p>
        <div className="sm:flex-none mx-6 md:mx-24 lg:mx-60 pb-5">
          <p className="italic">
            <span className="italic text-hover-purple">
              similar to rooks/queens in chess
            </span>
            , since they're generally the strongest units, they'll get a more
            detailed explanation
          </p>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-60 grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={irelia} alt="" />
            </div>
            <div>
              <div className="px-10">
                <p className="pb-4 text-lg">Ability: Flawless Duet</p>
                <p className="pb-4">
                  Irelia sends a blade to the closest and farthest enemies
                  within 3 hexes. Once both blades have been placed, they fly
                  toward each other and converge, afterwards dealing magic
                  damage to all enemies within a line between them, stunning
                  them and marking them as Unsteady.
                </p>
              </div>
              <div className="px-10 text-lg pb-4">
                <p>Special Trait: Surge</p>
              </div>
              <div className="w-full px-10 grid grid-cols-[25%_75%]">
                <div className="flex">
                  <img className=" object-contain pr-2" src={surge} alt="" />
                </div>
                <div>
                  <p>
                    Every 2 seconds, Irelia dashes towards the nearest enemy,
                    dealing an additional 10% of their health as magic damage.
                    If the enemy is unseady, deal true damage instead, dash
                    again, and gain 5 mana.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={sion} alt="" />
            </div>
            <div>
              <div className="px-10">
                <p className="pb-4 text-lg">Ability: Unstoppable Onslaught</p>
                <p className="pb-4">
                  Sion charges towards the farthest enemy, knocking aside all
                  other enemies and dealing damage. At the end of his charge, he
                  leaps forward, slamming the ground beneath him, dealing magic
                  damage and stunning impacted enemies.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={udyr} alt="" />
            </div>
            <div>
              <div className="px-10">
                <p className="pb-4 text-lg">Ability: Wingborne Storm</p>
                <p className="pb-4">
                  Udyr summons a blizzard around himself for 4 seconds that
                  deals magic damage every 0.5 seconds to nearby enemies and
                  slows their movement and attack speed.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={urgot} alt="" />
            </div>
            <div>
              <div className="px-10">
                <p className="pb-4 text-lg">Ability: Fear Beyond Death</p>
                <p className="pb-4">
                  Urgot fires a chem-drill at the lowest percent health enemy,
                  dealing physical damage and leashing them for 4 seconds. If
                  the enemy’s health lowers past %, Urgot pulls them in,
                  executing them and gaining 40 mana. Enemies near Urgot are
                  stunned with fear after an execution.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={yorick} alt="" />
            </div>
            <div>
              <div className="px-10">
                <p className="pb-4 text-lg">Ability: Dark Procession</p>
                <p className="pb-4">
                  Yorick summons a ring of spirits for 5 seconds at the center
                  of the board, pulling in the closest ally and enemy and
                  knocking aside all other allies and enemies. Units within the
                  ring deal and take increased damage. While the ring is active,
                  Yorick stops attacking and heals allies for a pecentage of all
                  damage done in the ring.
                </p>
              </div>
              <div className="px-10 text-lg pb-4">
                <p>Special Trait: Gravedigger</p>
              </div>
              <div className="w-full px-10 grid grid-cols-[25%_75%]">
                <div className="flex justify-center">
                  <img className=" object-contain pr-2" src={shovel} alt="" />
                </div>
                <div>
                  <p>
                    After 8 seconds, if at least two allies have died, summon
                    the madien of the mist. The Madien cannot die while inside
                    Yorick’s ring.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={ziggs} alt="" />
            </div>
            <div>
              <div className="px-10">
                <p className="pb-4 text-lg">Ability: Satchel Charge</p>
                <p className="pb-4">
                  Ziggs hurls charges to two random enemies, remaining there for
                  1 second. Afterwards, the charges explode to deal magic damage
                  to nearby enemies and knock them away from the center of the
                  explosion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full text-kinda-white font-body2 pb-4 md:pb-10 lg:pb-16">
        <p className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl">
          Classes and Genera
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 italic text-hover-purple pb-5">
          similar to the different possible moves in chess
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 pb-4">
          Keeping the whole wilderness/biology thing going, the two trait
          sections are listed as Classes and Genera. Now I know that doesn't
          really make sense from a biological perspective due to how traits are
          assigned, but bear with me here. (yes that bear joke was intentional
          [ly bad])
        </p>
      </div>
      <div className="h-full text-kinda-white font-body2 pb-4 md:pb-10 lg:pb-16">
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={ghost} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Afterlife</h1>
              <p className="pb-2">
                Afterlife units gain ability power, armor, and magic resist.
                Each death during combat increases this bonus individually. When
                an Afterlife ally dies, it blesses all remaining Afterlife
                allies with its bonus stats, split equally among remaining
                allies.
              </p>
              <p>(2) +15 resistances and AP; additional +1 per death</p>
              <p>(4) +25 resistances and AP; additional +2 per death</p>
              <p>(6) +35 resistances and AP; additional +3 per death</p>
              <p>(8) +45 resistances and AP; additional +5 per death</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={afterlife} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={snake} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Basilisk</h1>
              <p className="pb-2">
                When Basilisks are isolated in a line, they gain bonus movement
                speed and attack speed.
              </p>
              <p>(3) +10% movement speed and 10% attack speed</p>
              <p>(5) +20% movement speed and 20% attack speed</p>
              <p>(7) +35% movement speed and 35% attack speed</p>
              <p>(9) +50% movement speed and 50% attack speed</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={bass} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={claw} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Beast</h1>
              <p className="pb-2">
                Beasts gain additional Attack Damage and Ability Power. Use the
                Bonetooth Necklace Item to choose a main hunter. The main hunter
                gains double stats.
              </p>
              <p>(3) +10 AD, +15 AP</p>
              <p>(5) +20 AD, +30 AP</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={beast} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={crystal} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Crystaline</h1>
              <p className="pb-2">
                Summon a mine cart at the end of your bench. Each round, a
                moveable crystal spawns on your board. If the crystal remains
                alive at the end of combat, it is added to your mine cart.
                Crystaline champions gain stats based on the amount of cystals
                you have.
              </p>
              <p>(3) +1 Ability Power, +15 Health per crystal</p>
              <p>(6) +3 Ability Power, +35 Health per crystal</p>
              <p>(9) +8 Ability Power, +75 Health per crystal </p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={Crystaline} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={scope} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Deadeye</h1>
              <p className="pb-2">
                Deadeyes mark their enemies with their abilities, causing
                subsequent deadeye attacks or abilities to deal additional magic
                damage for the duration of the mark.
              </p>
              <p>(2) marked for 2 seconds, 5% bonus damage </p>
              <p>(3) marked for 3 seconds, 7.5% bonus damage</p>
              <p>(4) marked for 4 seconds, 12.5% bonus damage</p>
              <p>(5) marked for 6 seconds, 15% bonus damage</p>
              <p>(7) marked indefinitely, 25% bonus damage </p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={deadeye} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={map} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Explorer</h1>
              <p className="pb-2">
                Explorers traverse the wilderness and discover loot. At the end
                of each combat, the journey counter is reduced by one, when the
                counter hits zero, they drop a bag filled with what they have
                collected and the counter resets.
              </p>
              <p>(2) 2-combat journey </p>
              <p>(4) 3-combat journey</p>
              <p>(6) 4-combat journey</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={explore} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={cloak} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Sandshroud</h1>
              <p className="pb-2">
                Sandshroud units gain bonus ability power when shielded. Bonus
                ability power applies to shield casts as well.
              </p>
              <p>(2) +20 Ability Power</p>
              <p>(4) +40 Ability Power</p>
              <p>(6) +60 Ability Power</p>
              <p>(8) +100 Ability Power</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={sand} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={bill} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Sixth Sense</h1>
              <p className="pb-2">
                Sixth Sense units transcend, gaining additional bonuses.
              </p>
              <p>(1) Regenerate 3 mana per second</p>
              <p>(2) Additionally gain 30 armor and magic resist</p>
              <p>
                (3) Additionally gain immunity from crowd control for 8 seconds
                at the start of combat
              </p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={six} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={bee} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Stinger</h1>
              <p className="pb-2">
                Stingers apply a stack of poison with every attack. At 10
                stacks, enemies are poisoned and take magic damage over 8
                seconds. Poison deals:
              </p>
              <p>(2) 5% of unit’s maximum Health </p>
              <p>(4) 15% of unit’s maximum Health </p>
              <p>(6) 30% of unit’s maximum Health </p>
              <p>(8) 45% of unit’s maximum Health </p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={sting} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={leaf} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Class: Vertoxin</h1>
              <p className="pb-2">
                Vertoxins summon an additional ally. This ally gains bonus stats
                per star level of Vertoxin units.
              </p>
              <p>(3) Summon Ivern, additional 5% stats per star level</p>
              <p>(5) Summon Zyra, additional 10% stats per star level</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={vert} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={boom} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Artillery</h1>
              <p className="pb-2">
                Innate: Gain +2 attack hex range. Artillery units gain bonus
                attack speed for each hex between themselves and their target.
              </p>
              <p>(2) +2 attack damage</p>
              <p>(3) +5 attack damage</p>
              <p>(4) +10 attack damage</p>
              <p>(5) +15 attack damage</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={art} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={hood} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Assassin</h1>
              <p className="pb-2">
                Innate: Before combat starts, Assassins leap to the enemy
                backline. Assassins' spells can Critical strike critically
                strike and they gain bonus critical strike damage and bonus
                critical strike chance.
              </p>
              <p>(2) +15% crit chance and +20% crit damage </p>
              <p>(4) +30% crit chance and +40% crit damage </p>
              <p>(6) +45% crit chance and +60% crit damage</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={ass} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={fist} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Brawler</h1>
              <p className="pb-2">
                Brawlers gain additional maximum health and attack damage.
              </p>
              <p>(2) +400 health and 10 attack damage</p>
              <p>(4) +700 health and 20 attack damage</p>
              <p>(6) +1100 health and 40 attack damage</p>
              <p>(8) +1500 health and 90 attack damage</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={brawl} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={knife} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Cutthroat</h1>
              <p className="pb-2">
                Cutthroats cause enemies to bleed at low health, dealing
                additional physical damage over 5 seconds and reducing healing
                by 20%.
              </p>
              <p>(2) At 25% health, 10% max health bleed</p>
              <p>(4) At 45% health, 20% max health bleed</p>
              <p>(6) At 65% health, 35% max health bleed</p>
              <p>(8) At 85% health, 50% max health bleed</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={cut} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={evo} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Evoker</h1>
              <p className="pb-2">
                Gain mana whenever an ally or enemy casts an ability.
              </p>
              <p>(2) 3 mana</p>
              <p>(4) 6 mana</p>
              <p>(6) 10 mana</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={evok} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={rook} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Fortified</h1>
              <p className="pb-2">
                Fortified units gain a shield equivalent to a percentage of
                their max health at the beginning of combat and at fifty percent
                health.
              </p>
              <p>(2) 20% at full, 10% at fifty</p>
              <p>(4) 35% at full, 15% at fifty</p>
              <p>(6) 50% at full, 25% at fifty</p>
              <p>(8) 100% at full, 50% at fifty</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={fort} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={hat} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Mage</h1>
              <p className="pb-2">
                Mages cast their spells twice and have modified ability power.
              </p>
              <p>(3) 75% of Ability Power</p>
              <p>(5) 100% of Ability Power</p>
              <p>(7) 125% of Ability Power</p>
              <p>(9) 150% of Ability Power</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={mage} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={mys} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Mystic</h1>
              <p className="pb-2">All allies gain bonus magic resistance.</p>
              <p>(2) +50 magic resist</p>
              <p>(3) +100 magic resist</p>
              <p>(4) +175 magic resist</p>
              <p>(5) +300 magic resist</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={mystic} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={hook} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Scallywag</h1>
              <p className="pb-2">
                Scallywags deal extra damage but take increased damage.
              </p>
              <p>(3) +5% damage done, +5% damage taken</p>
              <p>(5) +15% damage done, +12.5% damage taken</p>
              <p>(7) +25% damage done, +17.5% damage taken</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={scally} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={axe} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Slayer</h1>
              <p className="pb-2">
                Slayers gain omnivamp based on their missing health.
              </p>
              <p>(2) 20% omnivamp, 50% missing health</p>
              <p>(4) 30% omnivamp, 40% missing health</p>
              <p>(6) 40% omnivamp, 30% missing health</p>
              <p>(8) 50% omnivamp, 10% missing health</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={slay} alt="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-6 md:mx-24 lg:mx-60 gap-12 pb-6 md:pb-8 lg:pb-12">
          <div className="w-full">
            <div className="w-full text-center flex justify-center">
              <img className="w-16 pb-4" src={thorn} alt="/" />
            </div>
            <div>
              <h1 className="pb-4 text-xl">Genus: Vilethorn</h1>
              <p className="pb-2">
                Vilethorns ignore armor and magic resist for their attacks.{" "}
              </p>
              <p>(3) 15% of resists</p>
              <p>(5) 30% of resists</p>
              <p>(7) 50% of resists</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-full object-contain" src={vile} alt="/" />
          </div>
        </div>
      </div>
      <div className="h-full text-kinda-white font-body2 pb-4 md:pb-10 lg:pb-16">
        <p className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl">
          Set Mechanic - Something's in the air!
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 italic text-hover-purple pb-5">
          similar to implementing a chess variation, like no-castling, fog of
          war etc.
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 pb-4">
          This last section might be a little confusing, so I'll provide a bit
          more context about TFT. Stages in TFT are pretty similar to moves in
          chess; at the beginning, there's not many moves you can do and the
          game becomes harder and harder the more moves you make. Now imagine
          after every 10 moves, one of your pawns automatically becomes a queen,
          regardless of its position on the board. This is somewhat the idea of
          a set mechanic, it provides everyone in the game with a buff to make
          the game more exciting.
        </p>
        <p className="mx-6 md:mx-24 lg:mx-60 pb-4">
          At Stage 2-4, 3 out of 8 dragons shown below will appear will appear
          around the carousel, indicating possible dragon buffs for the game. At
          2-7 PvE (krugs), a final dragon will be selected and shown on each
          player's board, granting its buff to the entire lobby for the rest of
          the game.
        </p>
        <div className="mx-6 md:mx-24 lg:mx-60 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={mountain} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Mountain Dragon</p>
                <p className="pb-4">
                  Grants +30 armor and magic resist for all units. Gain a target
                  dummy.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={cloud} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Cloud Dragon</p>
                <p className="pb-4">
                  Grants +5% movement speed and +5% attack speed for all units.
                  Your little legend also moves faster.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={chem} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Chemtech Dragon</p>
                <p className="pb-4">
                  Grants +30 ability power and +20 attack damage for all units.
                  Gain one reforger and one completed item.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={hex} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Hextech Dragon</p>
                <p className="pb-4">
                  Grants +100 health and +10 mana for all units. Gain one
                  hextech remover and one completed item.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={cam} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Camavoran Dragon</p>
                <p className="pb-4">
                  Gain one tomb of traits and 3 item components.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={stalk} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Stalking Dragon</p>
                <p className="pb-4">Gain 2 Thief’s Gloves.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={emp} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Empyrean</p>
                <p className="pb-4">
                  Gain a Neeko’s Help, a lucky dice, and 10 gold
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-96" src={elder} alt="" />
            </div>
            <div>
              <div className="px-10 text-center">
                <p className="pb-4 text-lg">Elder Dragon</p>
                <p className="pb-4">
                  Grant 3 random bonuses from other dragons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TFTset;
