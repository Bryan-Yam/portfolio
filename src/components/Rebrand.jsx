import React from "react";
import colours from "../assets/Rebrand/lab colours.png";
import pscope from "../assets/Rebrand/projectscope.png";
import explore from "../assets/Rebrand/initial explore.png";
import inspo from "../assets/Rebrand/inspo.png";
import typo from "../assets/Rebrand/typo.png";
import finalst from "../assets/Rebrand/finalstyle.png";
import infoarch from "../assets/Rebrand/Info Arch.png";
import logo from "../assets/Rebrand/logos.png";
import title from "../assets/Rebrand/title.png";
import web from "../assets/Rebrand/websitemock.png";
import proto from "../assets/Rebrand/proto.png";

const Rebrand = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <div>
          <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
            Lab Rebrand - revamping WSIB's innovation lab identity
          </h1>
          <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl pb-5">
            At a glace
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 md:gap-8 mx-6 md:mx-24 lg:mx-60 pb-6 md:pb-10 lg:pb-16">
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Context</p>
              <p>
                The scope of the project included the redesign of brand assets,
                the website, internal and external slide decks, and social media
                across the entire innovation lab.
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Problem statement</p>
              <p>
                How might we revamp the Lab's brand to better reflect its
                values, projects, and environment while still staying rooted as
                a part of corporate WSIB?
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Value proposition </p>
              <p>
                Rebranding the lab allows external parties to better grasp the
                lab's values, projects, and environment. Internally, it helps
                build cohesion across lab assets by setting clear guidelines for
                use cases and styles.
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
              <img className="w-[1200px] object-contain" src={title} alt="/" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Research and Project Scoping
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Analyzing current perceptions and determining the vision of the
              lab
            </h1>
            <p className="pb-5">
              First thing on the agenda was figuring out the best way to
              approach the rebrand. Who better than the head of the lab to get
              that info! The design team spoke with the lab's innovation
              activator about{" "}
              <span className="font-bold">
                the vision, goals, and constraints for this project
              </span>
              . We also sent out a survey to current members and alumni of the
              lab to capture insights about their experience with lab's brand,
              both during their time at the lab and when applying. We compiled
              and documented our findings and listed the key insights that would
              define success for this project.
            </p>
            <div>
              <p className="font-bold text-sm md:text-lg pb-2 w-full text-center">
                Key Insights
              </p>
              <div className="grid pb-4 md:pb-8 lg:pb-12">
                <div className="flex justify-center">
                  <div className="grid gap-2">
                    <p>
                      <span className="italic font-bold">Long lasting</span> -
                      ensuring a timeless design that is future forward
                    </p>
                    <p>
                      <span className="italic font-bold">
                        Tethered to corporate
                      </span>{" "}
                      - recognizable that the lab is still apart of WSIB
                    </p>
                    <p>
                      <span className="italic font-bold">Sustainable</span> -
                      easy management of assets and visuals that can be scaled
                      across cohorts
                    </p>
                    <p>
                      <span className="italic font-bold">Cohesion</span> -
                      consistency and clarity across all internal and external
                      facing lab material
                    </p>
                    <p>
                      <span className="italic font-bold">Vision</span> -
                      expressing the lab's presence as creative, logical, and
                      collaborative
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <p>
                After sorting out the milestones the team planned to achieve, we
                ordered them based on priority and developed a Gantt chart to
                document and track our progress, as well as noting sprint
                periods and establishing weekly syncs (noted with the red flags)
                to provide updates to our stakeholders and gain feedback.
              </p>
            </div>
            <figure>
              <img src={pscope} alt="/" />
              <figcaption className="text-center text-sm">
                Figure 1. Project timeline
              </figcaption>
            </figure>
          </div>
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Initial Explorations and Brainstorming
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Exploring any and every design, all at once
            </h1>
            <p className="pb-5">
              The first course of action was to explore; we looked at other
              innovation labs, different brand aesthetics, WSIB and other
              insurance boards, and compiled everything in a (slightly messy)
              Figma page. We put notes on areas that we thought would fit the
              lab's vision and highlighted any parts that we found interesting
              and worth diving into further.
            </p>
            <div className="flex place-content-center">
              <figure className="object-contain">
                <img src={inspo} alt="/" />
                <figcaption className="text-center text-sm">
                  Figure 2. Initial inspiration board
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Typography, Iconography, and Colours
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Laying the foundation and building blocks of the rebrand
            </h1>
            <p className="pb-5">
              After compiling our initial explorations and sorting them out into
              sections we thought worked well together, we started working on{" "}
              {""}
              <span className="font-bold">
                establishing the typography, iconography and colours
              </span>
              . The design team compiled a variety of variants for each
              respective section and began testing them in combinations to see
              what stuck. After a lot of deliberations, mixing and matching, we
              decided on our final typography, iconography, and colours.
            </p>
            <p className="pb-5">
              Iconography was the easiest to decide, to keep things organized
              and easier for future cohorts, we went with Google Material Design
              Icons; they're sustainable, have many different variants and meet
              universal standards for icons. For the typography,{" "}
              <span className="font-bold">
                we chose to have 3 fonts; 2 sans-serif and 1 serif
              </span>
              . Originally, the plan was to have 3 sans-serif fonts, but we
              found that having a serif option was great for adding emphasis and
              giving our designs an overall "flair". We chose Mulish for the
              body font, as it's the main font of corporate WSIB, and paired it
              alongside Figtree (regular) and Fraunces (soft, bolded) for the
              headers.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[800px]" src={typo} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 3. Potential typography choices
                </figcaption>
              </figure>
            </div>
            <p className="pb-5">
              Determining colours definitely took the longest; we went through
              many different colour schemes but ultimately decided on a{" "}
              <span className="font-bold">
                palette that was loosely based on the primary colours of
                corporate WSIB
              </span>
              . We looked at WSIB's colour palette and looked at different
              tints, shades, and tones to create new primary colours for the
              lab. We settled on variants of blue as the lab's main colour, as
              it was easier to work with for colour and contrast accessibility
              in comparison to green. Afterwards, we paired up the blues with
              secondary colours and accents for light and dark modes to give the
              lab its own unique look, while still maintaining rooted within
              WSIB. We also examined the colour contrast for different pairings
              to {""}
              <span className="font-bold">
                ensure all use cases met WCAG AA or AAA standards.
              </span>
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[800px]" src={colours} alt="/" />
                <figcaption className="text-center text-sm">
                  Figure 4. Process of adapting WSIB's colour palette to the new
                  lab colours
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Visuals, Logos, and Styles
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Mixing it all together to create a mosaic for the ages (hopefully)
            </h1>
            <p className="pb-5">
              In my opinion, the hardest part of the rebrand was finalizing the
              overall visuals and style to be implemented. We explored many
              different visual styles (neobrutalism, metamodernism, minimalism,
              to name a few), and ultimately decided on a pastel-picasso style,
              with some bauhaus and moving line accents.
            </p>
            <div className="flex place-content-center">
              <figure className="w-[900px] object-contain">
                <img src={explore} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 5. Brainstorming and explorations of different styles
                </figcaption>
              </figure>
            </div>
            <p className="pb-5">
              Ultimately, we decided on a{" "}
              <span className="font-bold">
                pastel-picasso style, with some bauhaus and dynamic line accents
              </span>
              , as we felt they captured the lab's values really well; the
              dynamic lines show that the lab is always in motion, whether that
              be the projects and proof of concepts we develop, our sprints, or
              the overall growth that happens in the lab. The bauhaus tiles show
              how the lab often starts with abstract ideas and concepts and
              works make them unified, and the pastel-picasso aesthetics
              demonstrate the lab's playful side, because{" "}
              <span className="font-bold">
                innovation starts with curiosity and, well, having fun!
              </span>
            </p>
            <div className="flex place-content-center">
              <figure className="object-contain">
                <img className="w-[1200px]" src={finalst} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 6. Final style and aesthetics
                </figcaption>
              </figure>
            </div>
            <p className="pb-5">
              Logo ideation was a bit difficult due to some restrictions; the
              logo needed to work alongside the corporate WSIB logo, so visual
              balance and sizing of elements was really important.{" "}
              <span className="font-bold">We decided to have two logos;</span>{" "}
              one that would only be paired with the corporate WSIB logo, and an
              alternate one that could be used with the corporate logo, or as a
              standalone.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[1200px]" src={logo} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 7. Logo ideation
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">Brand Assets</h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Creating a home for our designs
            </h1>
            <p className="pb-5">
              With the styling and visuals complete, next on the agenda was to
              create a new website and other brand assets to match. Since we did
              most of the lo-fi/exploration work earlier, we had a good idea of
              what we wanted for the hi-fi mockups. First, we sorted out the
              information architecture for the new site using feedback from our
              earlier survey.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[1200px]" src={infoarch} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 8. Proposed information architecture and content
                </figcaption>
              </figure>
            </div>
            <p className="pb-5">
              Afterwards, we drafted some different designs for each of the
              pages and made some final touches to develop our completed mockups
              for desktop, tablet, and mobile views. After completing the
              prototypes for the designs, we finished the lab rebrand!
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[1200px]" src={web} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 9. Landing page ideation (left) and final designs
                  (right)
                </figcaption>
              </figure>
            </div>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[1200px]" src={proto} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 10. Final prototypes for desktop, tablet and mobile
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Next Steps, Reflection, and Learnings
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Looking back and wrapping up (a present for the next cohort)
            </h1>
            <p className="pb-5">
              After cleaning up our Figma pages, documentation, and style
              guides, the team also looked into low/no-code solutions such as
              Framer and Webflow to lessen the burden on our development team.
              Leveraging low/no-code solutions had a lot of benefits: it would
              allow the design team to cover the majority of work to maintain
              the website, such as pushing updates to projects and cohorts, as
              well as allow the possibility to create proof of concepts without
              needing extensive resources from the development team. The next
              steps we noted were making the designs live, as well as
              implementing the new sections of the website that were listed in
              the information architecture.
            </p>
            <p className="pb-5">
              Reflecting back on this project, it definitely had a lot of
              firsts; the team had a lot of creative freedom and the ability to
              explore different designs; I thought we did quite well in general,
              but one thing I would've done differently would be to establish
              what we wanted out of the designs at first and then explored what
              features and styles we could use afterwards. I think we did a
              really good job at justifying the final decisions we made, but we
              often had a variety of designs first, and then tried to pick and
              choose aspects and see if we could fit certain themes to them, by
              having a more definitive list I think we could've differentiated
              the more feasible designs faster which would've also helped when
              we were deliberating which direction to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rebrand;
