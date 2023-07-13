import React from "react";

const CRM = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2">
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
                data points while still maintaining ...?
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
                <li className="p-1">asdasd</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Background and Context
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Getting up to speed in a dash(board)
            </h1>
            <p className="pb-5">
              Our team joined this project about halfway into it's projected
              timeline, so we were carrying over work from the previous cohort.
              We got up to speed reading the
            </p>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Usability Testing
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Looking into ease of use and ...
            </h1>
            <p className="pb-5">
              Since the previous cohort already completed the mi-fi mockups, we
              prepared different prototypes for usability testing. Two methods
              were used for testing: user interviews, and an asynchronous test
              using Maze.
            </p>
            <p className="pb-5">img of maze</p>
            <p className="pb-5">Some key points listed from our users were:</p>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Mockups and Prototyping
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Applying our insights from our testing, we made some final touches
              to the dashboard. Users noted a couple of key features that
            </h1>
            <p className="pb-5">img of prototype mockups</p>
            <p className="pb-5">
              core points was gaining insight on whether the dashboard was
              intuitive to use, and if employees preferred their current system
              ...
            </p>
          </div>
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Handoff
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Creating the live version
            </h1>
            <p className="pb-5">
              After wrapping up the final mockups and prototype. The design team
              gathered all our resources and prepared handoff to the development
              team. We noted a list of the interactions, such as hover states,
              scroll features and animations. We also noted the additional
              features that were not possible in the prototype due to Figma
              limitations, such as having anchor links for the sidebar alongside
              the hover states. Once the developers completed the live version,
              the PoC was sent to our stakeholders, marking the end of the
              project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRM;
