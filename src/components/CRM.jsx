import React from "react";
import land from "../assets/CRM/land.png";

const CRM = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <div>
          <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
            Customer Relationship Management Dashboard - compiling data into one
            cohesive platform
          </h1>
          <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl py-5">
            At a glace
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 mx-6 md:mx-24 lg:mx-60 pb-4 md:pb-10 lg:pb-16">
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Context</p>
              <p>
                Corporate WSIB approached the innovation lab to create a
                dashboard experience that compiled information about employers
                to create an easier experience for WSIB employees. Currently,
                this information is found from a variety of different sources
                such spreadsheets and other software applications.
              </p>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Problem statement</p>
              <p>
                How might we create a CRM dashboard that compiles a variety of
                data fields while still providing users a familiar and simple
                experience?
              </p>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Value proposition </p>
              <p>
                Creating one unified dashboard for employer information allows
                WSIB employees to quickly identify all aspects of an employer,
                creating a streamlined flow for handling core processes, and
                faster completion times when assisting employers.
              </p>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Team</p>
              <ul className="list-disc pl-4">
                <li className="p-1">5 designers (including me)</li>
                <li className="p-1">4 developers</li>
              </ul>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Functions </p>
              <ul className="list-disc pl-4">
                <li className="p-1">Accessibility</li>
                <li className="p-1">Visual design</li>
                <li className="p-1">Usability Testing</li>
                <li className="p-1">Interaction Design</li>
                <li className="p-1">Mockups and Prototyping</li>
              </ul>
            </div>
            <div className="w-full pr-4 pb-4 md:pb-0 lg:pb-0">
              <p className="font-bold pb-2">Expected impacts</p>
              <ul className="list-disc pl-4">
                <li className="p-1">
                  less confusion and contradicting data between different teams
                  in WSIB
                </li>
                <li className="p-1">
                  quicker task completion times for WSIB employees
                </li>
                <li className="p-1">
                  simplified experience through the use of one comprehensive
                  platform
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-10 lg:mb-16 bg-landing-project">
          <div className="grid w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div className="flex place-content-center pt-10">
              <img className="object-contain" src={land} alt="/" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Background and Preparation
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Getting up to speed in a dash(board)
            </h1>
            <p className="pb-5">
              Our team joined this project about halfway into it's projected
              timeline, so we were carrying over work from the previous cohort.
              We got up to speed with the project timelines, mockups, and
              documentation. Our first task was to prepare the mockups that were
              created for usability testing. We had interview sessions planned
              with different teams within corporate WSIB to gain insight about
              different aspects of the dashboard, such as it's ease of use,
              features, and overall opinion of the structure and content.
            </p>
            <p> img of proto</p>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Usability Testing
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              The challenge of conflicting opinions
            </h1>
            <p className="pb-5">
              We planned to perform two methods of testing: user interviews, and
              an asynchronous testing session using Maze. Our interviews had
              more qualitative questions, as we could easily prompt users on
              specific areas and have more time to learn about their thought
              process and pain points. For the Maze session, we focused heavily
              on KPIs such as the completion time and error rate, as well as
              looking at heat maps to analyze key areas in the dashboard.
            </p>
            <p className="pb-5">img of maze</p>
            <div>
              <p className="font-bold text-sm md:text-lg pb-2 w-full text-center">
                Key Insights
              </p>
              <div className="grid">
                <div className="flex justify-center">
                  <div className="grid gap-2">
                    <p>
                      1. Some categories should be regrouped together to better
                      reflect the content within them. For example, placing the
                      company address alongside its general information.
                    </p>
                    <p>
                      2. The search bar should have more functionality, and is
                      sometimes ambiguous when on other pages, such as the
                      glossary or a company's profile.
                    </p>
                    <p>
                      3. A majority of user's struggled to locate a company that
                      had similar names within our Maze testing.
                    </p>
                    <p>
                      4. The search bar should allow for other search options
                      outside of the 3 current options: name, address, and ID.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Mockups, Prototyping, and Handoff
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Taking it live! (after implementing some improvements)
            </h1>
            <p className="pb-5">img of prototype mockups</p>
            <p className="pb-5">
              Applying our insights from our testing, we made some final touches
              to the dashboard. Users noted a couple of key features that core
              points was gaining insight on whether the dashboard was intuitive
              to use, and if employees preferred their current system ...
            </p>
            <p>
              After wrapping up the final mockups and prototype. The design team
              gathered all our resources and prepared for handoff to the
              development team. We noted a list of the interactions, such as
              hover states, scroll features and animations. We also noted the
              additional features that were not possible in the prototype due to
              Figma limitations, such as having anchor links for the sidebar
              alongside the hover states. Once the developers completed the live
              version, the PoC was sent to our stakeholders, marking the end of
              the project.
            </p>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Learnings and Reflection
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              How do you make everyone happy?
            </h1>
            <p className="pb-5">
              Reflecting on this project, the short answer is that you can't,
              but I learned that listening to all sides has immense value in
              itself, even if you can't feasibly implement everything you
              capture. For example, one of the biggest pain points we found when
              performing our usability tests was a simple issue but hard to
              solve; each team had their own terms for the same pieces of
              information, so which terms would we go with? We had many
              different ideas; using the glossary to highlight synonyms, having
              the different terms appear on the dashboard itself, and seeing if
              one term could be standardized across different teams. Eventually,
              we looked at the frequency and use cases for the terms for each of
              the teams; since we were compiling a wealth of data, we found
              areas that some teams rarely interacted with and decided on naming
              conventions that matched the team who used the data the most.
              Furthermore, we also leveraged our glossary to have alternative
              names. It wasn't a perfect solution, but we wouldn't have realized
              this pain point if we didn't consider the opinions of each of the
              teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRM;
