import React from "react";
import titleimg from "../assets/Capstone/titleimg.png";
import clockimg from "../assets/Capstone/clock.png";
import designimg from "../assets/Capstone/designs.png";

const Capstone = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <div>
          <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
            Synapsync - integrating cognitive assessments with neuro-imaging
            tools in real time
          </h1>
          <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl pb-5">
            At a glace
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 md:gap-8 mx-6 md:mx-24 lg:mx-60 pb-6 md:pb-10 lg:pb-16">
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Context</p>
              <p>
                Nuero-digenerative diseases are becoming more prevelant as the
                global population ages. This capstone project aims to introduce
                more objective measures to assist medical professionals for
                detection and prevention of these types of diseases and
                disorders.
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Problem statement</p>
              <p>
                How might we create a robust and easy to use system that allows
                medical professionals the ability to assess physiological and
                psychological health synchronously?
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Value proposition </p>
              <p>
                {" "}
                Creating a system that can help medical professionals better
                understand and analyze cognitive disorders will lead to
                healthier lives in society.
              </p>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Team</p>
              <ul className="list-disc pl-4">
                <li className="p-1">5 classmates (including me)</li>
              </ul>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Functions </p>
              <ul className="list-disc pl-4">
                <li className="p-1">Accessibility</li>
                <li className="p-1">Visual Design</li>
                <li className="p-1">Mockups and Prototyping</li>
                <li className="p-1">Frontend Development</li>
              </ul>
            </div>
            <div className="w-full pr-0 md:pr-4">
              <p className="font-bold pb-2">Expected impacts</p>
              <ul className="list-disc pl-4">
                <li className="p-1">
                  further research and development in the neuroscience space
                </li>
                <li className="p-1">
                  establish a database for any correlations between
                  physiological and psychological health
                </li>
                <li className="p-1">
                  promote a more proactive apporach to cognitive disorder care
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-10 lg:mb-16 bg-landing-project">
          <div className="grid w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div className="flex place-content-center py-5">
              <img
                className="w-[1200px] object-contain"
                src={titleimg}
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Background and Preparation
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Neuroscience is hard, who would've thought?
            </h1>
            <p className="pb-5">
              To begin our capstone, we performed research about neuroimaging
              tools and cognitive assessments so we could get a basic
              understanding about the current state of the medical field in
              these areas. The consensus was that
              <span className="font-bold">
                {" "}
                cognitive disorder diagnosis is usually subjective and hard to
                identify
              </span>{" "}
              until symptoms become quite severe. The image below shows a clock
              test, which is a test that can be used to help identify these
              disorders.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[1000px]" src={clockimg} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 1. Clock test example
                </figcaption>
              </figure>
            </div>
            <p className="pb-5 text-center">This brought up questions like:</p>
            <div className=" grid md:grid-cols-3 pb-5 italic">
              <p>"How can this be standardized?"</p>
              <p>"What about individuals with fine motor issues?"</p>
              <p>
                "Who decides what a pass is, or how to differentiate between
                fails?"
              </p>
            </div>

            <p className="pb-5">
              Thus, our initial plan was to create a product that would
              implement task-based neuroimaging to help provide more data to
              medical professionals. This concept had been done in research
              settings, but was often expensive and time consuming, meaning it
              was not yet practical for clinical use. This would combine the use
              of these cognitive assessments while also having objective metrics
              from a neuro-imaging tool. Obviously, no one on the team had
              enough medical expertise to decide the specifics on what we should
              implement, so the next step was to ask the experts for their
              opinions.
            </p>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              User Research Interviews
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Learning about current trends and practices from the experts
            </h1>
            <p className="pb-5">
              Luckily for the team, we were able to collaborate with one of the
              professors in the health fauclty, who happened to have expertise
              with cognitive assessments and neuro-imaging tools, specifially
              fNIRs, or functional near-infrared spectroscopy. After our
              preliminary research, we reached out to other medical
              professionals to learn more and to gain insights about their
              current wants and needs, and what would be beneficial in their
              eyes with our initial idea. The team spoke to a combination of
              psychologists, medical researchers, and hospital staff about our
              proposed idea.
            </p>
            <div>
              <p className="font-bold text-sm md:text-lg pb-2 w-full text-center">
                Key Insights
              </p>
              <div className="grid pb-4 md:pb-8 lg:pb-12">
                <div className="flex justify-center">
                  <div className="grid gap-2">
                    <p>
                      <span className="italic font-bold">
                        Hesitation to rely on automated technology
                      </span>{" "}
                      - since our product would involve automating signals
                      processing to ensure timely results for medical
                      professionals, our users noted the importance of knowing
                      exactly what would be going on so they could feel
                      confident using it
                    </p>
                    <p>
                      <span className="italic font-bold">The human aspect</span>{" "}
                      - human connection and discretion is exetremely important
                      in medicine, it was important for users to be able to
                      still interact with their patients as they could pick up
                      nauances that a machine may miss
                    </p>
                    <p>
                      <span className="italic font-bold">Legality</span> -
                      making diagnoses in Canada is actually a protected act,
                      therefore our product would need to stray away from
                      mentioning anything about diagnosis, we wanted to focus on
                      the aspect of just providing medical professionals more
                      information to inform their decision making
                    </p>
                    <p>
                      <span className="italic font-bold">
                        Time and accuracy
                      </span>{" "}
                      - we had many concerns about the time it would take to
                      complete the process, as well as the accuracy of data
                      obtained, we wanted to create a product that would
                      eventually be usable in a reasonable duration for a
                      medical appointment (30-60 minutes)
                    </p>
                  </div>
                </div>
              </div>
              <p className="pb-5">
                With all these insights noted, we scoped our project and decided
                to focus on{" "}
                <span className="font-bold">
                  1 cognitve assessment, the flanker task, and 1 neuro-imaging
                  tool, the fNIR.
                </span>{" "}
                Below are some (very) brief descriptions of these methods if you
                are interested.
              </p>
              <div className=" grid md:grid-cols-2 gap-4 pb-5 italic">
                <div>
                  <p className="md:text-lg font-bold">Flanker Task</p>
                  <p>
                    A cognitive assessment that gets participants to identify a
                    character in a series of other characters. Sometimes the
                    character is congruent to the other characters, and
                    sometimes it is incongruent. The idea is that the
                    incongruent patterns will require more thinking, and thus
                    active the brain more.
                  </p>
                </div>
                <div>
                  <p className="md:text-lg font-bold">fNIRs</p>
                  <p>
                    A neuro-imaging device that uses light to detect blood
                    oxygenation in the brain. The idea is that if your brain is
                    more active, it'll use more oxygen, and the machine will
                    detect these changes as the light bounces off your blood
                    vessels.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Prototyping, Development and Synchronization
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Making (Figma) frames, scanning brains and creating domains
            </h1>
            <p className="pb-5">
              To design our software, we used a load of different technologies,
              the list includes Figma, Node.js, Supabase, and MATLAB to name a
              few, which is basically a long way of saying that synchornizing
              everything was a challenge to say the least. Each member of the
              team had their respective specialties, but we made sure to keep
              everyone in the loop so we could confidently bring everything
              together at the end.
            </p>
            <p className="pb-5">
              Our final web app consisted of 3 main parts: the flanker task, the
              management system for users, and the signals processing for the
              fNIR data. Thankfully, I did not have to deal with any of the
              signals processing work needed to read the raw data from the fNIR.
              I was responsible for aiding with the front-end designs, as well
              as the front-end code with respective to the visual styling of all
              the elements.
            </p>

            <div className="flex place-content-center">
              <figure>
                <img className="w-[1000px]" src={designimg} alt="/" />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 2. Figma designs for the management system
                </figcaption>
              </figure>
            </div>
            <p className="pb-5">
              As noted by our users, we aimed to create a web app that was not
              only robust and easy to use, but also allowed medical
              practitioners the ability to customize the tasks to their liking.
              This includes an entire configuration panel, as well as a data
              visualization tab that allows them to filter out different
              signals, and identify any correlations between a participants
              cognitive assessment behaviour and their brain oxygenation levels.
            </p>
            <p className="pb-5">
              <span className="font-bold">Disclaimer:</span> This project has
              the possibility of continuing, so out of safety I've left out some
              of the designs, as well as the code.
            </p>
          </div>

          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Learnings and Reflection
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Working in an area out of your league
            </h1>
            <p className="pb-5">
              The biggest challenge of this project was definitely working to
              create a product for such a specialized and knowledgable group of
              individuals. We were lucky to have many resources throughout our
              process so we would know if something veered off track, or if
              something did not make sense in a medical context that we were
              just not aware of at the time. This saved the team a bunch of time
              and resources, and allowed us to be more confident making
              decisions and implementing features.
            </p>
            <p className="pb-5">
              Another personal challenge I faced was working more with the
              front-end in this project in comparison to my other projects. I
              wanted to learn more about the development process for the
              front-end data display, so I worked with my team members who were
              more experienced with coding to learn about best practices, and
              eventually helped implement a light/dark mode for different
              elements to improve the accessibility of the product. It was nice
              to fully flesh out my designs and see the code that was used to go
              from Figma to the web. It gave me a more comprenhensive view on
              component design and a look into a developer's mind on how
              elements in Figma should be laid out to make their lives as easy
              as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capstone;
