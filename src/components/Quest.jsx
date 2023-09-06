import React from "react";
import questImg from "../assets/questport.png";
import all from "../assets/Quest/all.png";
import wiki from "../assets/Quest/wiki.png";
import loo from "../assets/Quest/loo.png";
import myap from "../assets/Quest/myap.png";
import currenthome from "../assets/Quest/currenthome.png";
import currentpage from "../assets/Quest/currentpage.png";
import components from "../assets/Quest/Components.jpg";
import frames from "../assets/Quest/Frames.jpg";
import IA from "../assets/Quest/IA.png";
import prototype from "../assets/Quest/proto.png";

const Quest = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
          Quest Redesign - streamlining Waterloo's information portal
        </h1>
        <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl py-5">
          At a glace
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 mx-6 md:mx-24 lg:mx-60 pb-4 md:pb-10 lg:pb-16">
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Context</p>
            <p>
              Quest is the student information platform used by the University
              of Waterloo which deals with all aspects of student information
              such as finances, personal information and courses. This case
              study highlights my proposed design to improve the Quest user
              experience.
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Problem statement</p>
            <p>
              How might we improve students’ confidence by streamlining the
              Quest experience, which will be evaluated by the completion time
              for multi-step processes and the number of clicks needed to
              complete a process?
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Value proposition </p>
            <p>
              Improving the Quest experience allows students to find information
              more easily and complete tasks more efficiently, making the
              website more accessible. This can improve students’ confidence in
              completing these processes and reduce inquiries for extra
              clarification to UW staff.
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Team</p>
            <ul className="list-disc pl-4">
              <li className="p-1">1 product designer (me)</li>
            </ul>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Functions </p>
            <ul className="list-disc pl-4">
              <li className="p-1">Accessibility</li>

              <li className="p-1">Visual design</li>
              <li className="p-1">Prototyping</li>
              <li className="p-1">Product thinking</li>
            </ul>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Expected impacts</p>
            <ul className="list-disc pl-4">
              <li className="p-1">
                faster and more efficient completion times for tasks
              </li>
              <li className="p-1">
                streamlined processes cause less confusion for students
              </li>
              <li className="p-1">
                reduced inquiry load on University of Waterloo employees
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-landing-project mb-4 md:mb-10 lg:mb-16">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div>
              <img
                className="w-full px-8 object-contain"
                src={questImg}
                alt="/"
              />
            </div>
            <div>
              <img className="w-full px-8 object-contain" src={all} alt="/" />
            </div>
          </div>
          <div className="w-full text-center pb-6">
            <a
              href="https://www.figma.com/proto/lVxSasslGYiqtjt4zPX6L0/Quest-Redesign?type=design&node-id=2-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-sm md:text-base lg:text-lg"
            >
              view the full prototype here
            </a>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <h2 className="font-heading text-hover-purple">
            User and Brand Research and Competitive Analysis
          </h2>
          <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
            How do we display a wealth of information in a digestible way?
          </h1>
          <p className="pb-5">
            Research was done to gain a better{" "}
            <span className="font-bold">
              {" "}
              understanding of users, their needs, as well as the guidelines of
              the university
            </span>
            . Students are the University of Waterloo were asked about how they
            would describe their experience using the Quest information system,
            and any pain points they experience when completing various tasks. I
            also looked at the University’s Multi-Year Accessibility Plan to
            understand the vision of the university with respect to its
            platforms.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center pb-4 md:pb-10 lg:pb-16">
            <div className="w-full pr-4 pb-5 md:pb-0">
              <figure>
                <img
                  className="w-full h-80 px-8 object-contain"
                  src={myap}
                  alt="/"
                />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 1. Waterloo's accessibility plan
                </figcaption>
              </figure>
              <h2 className="font-bold pb-2"> Key Insights</h2>
              <ul className="list-disc pl-4">
                <li className="p-1">
                  The majority of students use a single Quest session to perform
                  multiple tasks, streamlining performance for multiple tasks is
                  essential.
                </li>
                <li className="p-1">
                  Ensuring consistency across Waterloo websites makes the entire
                  Waterloo online platform experience smoother for users
                </li>
              </ul>
            </div>
            <div className="w-full pr-4 pb-5 md:pb-0">
              <figure>
                <img
                  className="w-full h-80 px-8 object-scale-down"
                  src={loo}
                  alt="/"
                />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 2. Waterloo's home page
                </figcaption>
              </figure>
              <h2 className="font-bold pb-2"> Key Insights</h2>
              <ul className="list-disc pl-4">
                <li className="p-1">
                  Links to other areas have good features for accessibility,
                  such as a change of background colour on hover and adequately
                  sized buttons
                </li>
                <li className="p-1">
                  Good contrast and use of headings throughout the website make
                  the text easy to read
                </li>
              </ul>
            </div>
            <div className="w-full pr-4 pb-5 md:pb-0">
              <figure>
                <img
                  className="w-full h-80 px-8 object-scale-down"
                  src={wiki}
                  alt="/"
                />
                <figcaption className="pb-4 text-center text-sm">
                  Figure 3. Wikipedia content page
                </figcaption>
              </figure>
              <h2 className="font-bold pb-2"> Key Insights</h2>
              <ul className="list-disc pl-4">
                <li className="p-1">
                  Related information is grouped together with clear separators,
                  a very simple layout, but highly effective
                </li>
                <li className="p-1">
                  Utilizes the sidebar to link to other areas of the site, in
                  comparison to Quest which uses it for objects on the page
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Website Breakdown and Analysis
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Going on a "quest" through the current website
            </h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-0 justify-items-center lg:pb-16">
              <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
                <figure>
                  <img
                    className="w-full object-contain"
                    src={currenthome}
                    alt="/"
                  />
                  <figcaption className="pb-4 text-center text-sm">
                    Figure 4. Quest home page
                  </figcaption>
                </figure>
              </div>
              <div className="w-full pr-4 pb-8 md:pb-0 lg:pb-0">
                <figure>
                  <img
                    className="w-full object-contain pb-0"
                    src={currentpage}
                    alt="/"
                  />
                  <figcaption className="pb-4 text-center text-sm">
                    Figure 5. Quest content page
                  </figcaption>
                </figure>
              </div>
            </div>
            <p className="w-full text-center italic pb-5">
              "Alex is a first-year student who needs to be able to unenroll in
              some courses and become a part-time student because they are
              looking to extend their co-op term."
            </p>
            <p className="pb-5">
              When looking at the main menu for Quest through the lens of our
              user journey above, some key features stand out. Although the nine
              core buttons provide good access to their specified links, for a
              first-year student, there may be some confusion when they cannot
              find exactly what they are looking for, in this case, it is not
              entirely clear where the unenroll function would be on this page.
              The different coloured boxes also link to common areas, which do
              not have much overlap,{" "}
              <span className="font-bold">
                {" "}
                leading to more clicks and a higher chance of user error.
              </span>
            </p>
          </div>
          <div className="lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Mockups and Prototypes
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Putting it all together to finish the "quest"
            </h1>
            <div className="pb-5">
              <p className="">
                After compiling insights from the user journey walkthrough and
                my preliminary research, I also mapped out the information
                architecture of the site, as well as a baseline for the new
                information architecture in the new design. My goal was to{" "}
                <span className="font-bold">
                  reduce the amount of sections seen on the landing page and
                  allow users to navigate through the different sections
                </span>
                , in comparison to the current design where the sections are
                distinctly separated. Next, I designed the basic components for
                the mockups. I tried to incorporate the University of Waterloo's
                typography and colours as much as possible in order to keep the
                new design consistent with other websites as noted within
                Waterloo's guidelines.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center gap-8 pr-4 pb-8 md:pb-12 lg:pb-18">
              <figure>
                <img className="w-full object-contain" src={IA} alt="/" />
                <figcaption className="pt-4 text-center text-sm">
                  Figure 6. Quest information architecture
                </figcaption>
              </figure>
              <figure>
                <img
                  className="w-full object-contain"
                  src={components}
                  alt="/"
                />
                <figcaption className="pt-4 text-center text-sm">
                  Figure 7. New mockup components
                </figcaption>
              </figure>
            </div>
            <div className="pb-4 md:pb-10 lg:pb-16">
              <p>
                Once the components were finished, I created a twelve-column
                grid to help place the content, with multiples of eight used for
                margins and padding. I had to create some extra variants of the
                basic cards to account for the more complex information fields,
                but all in all, this was a pretty smooth process. Once that was
                done, all that was left to do was add in the prototype wires for
                the finished high-fidelity prototype.
              </p>
            </div>
            <div className="md:mx-40 lg:mx-64 pr-4 pb-4 md:pb-8 lg:pb-12">
              <figure>
                <img className="w-full object-contain" src={frames} alt="/" />
                <figcaption className="pt-4 text-center text-sm">
                  Figure 8. New quest mockups
                </figcaption>
              </figure>
            </div>
            <div className="md:mx-40 lg:mx-64 pr-4 pb-4 md:pb-8 lg:pb-12">
              <figure>
                <img
                  className="w-full object-contain"
                  src={prototype}
                  alt="/"
                />
                <figcaption className="pt-4 text-center text-sm">
                  Figure 9. Finished prototype
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="pb-4 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-hover-purple">
              Learnings, Reflections, and Considerations
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              The balancing beam of information
            </h1>
            <p className="pb-5">
              A setback of this design is that it requires scrolling whereas the
              current Quest tabs do not. This means some information is hidden
              when you arrive on a page, especially on some of the longer pages.
              In order to mitigate this setback, the sidebar contains in-page
              links to help users quickly reach the information that may not
              appear at the top of the page. The implementation of the in-page
              links as well as the improved information flow gained from
              scrolling through boxes with dedicated functions is a worthwhile
              tradeoff for some initially hidden information. However, a next
              step could be to look into additional functions that could aid the
              in-page links so that initially hidden information is even easier
              to locate.
            </p>
            <p className="pb-5">
              Something I really enjoyed about this project was the noticeable
              visual difference between the current and proposed designs, most
              of the tabs contained the same amount of information, but
              spreading it out more evenly across the page and providing ample
              padding for page elements made it a lot easier to read and process
              information. Working towards finding a balance between the amount
              and detail of information was an essential part of the entire
              process.
            </p>
            <p>
              One of the major issues with the current Quest design was the lack
              of accessibility for users. Implementing an accessibility-centred
              approach was extremely useful for the final proposed design
              because when I was deciding between different solutions, asking
              myself which one would be easier for the majority of users was a
              question I often asked, and answering it not only helped justify
              my decisions but helped spark ideas for other elements on the
              page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
