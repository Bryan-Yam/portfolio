import React from "react";
import scrolling from "../assets/Spotify/scroll.png";
import mockups from "../assets/Spotify/mock.png";
import comm from "../assets/Spotify/Community Tab.png";
import main from "../assets/Spotify/main.png";

const Spotify = () => {
  return (
    <div className="bg-default-bg">
      <div className="h-full text-kinda-white font-body2 text-sm md:text-base leading-relaxed">
        <h1 className="mx-6 md:mx-24 lg:mx-60 font-headers text-2xl md:text-3xl lg:text-4xl py-5">
          Spotify Mobile - analyzing biomechanics and community features
        </h1>
        <h2 className="mx-6 md:mx-24 lg:mx-60 font-headers text-lg md:text-xl lg:text-2xl py-5">
          At a glace
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 mx-6 md:mx-24 lg:mx-60 pb-4 md:pb-10 lg:pb-16">
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Context</p>
            <p>
              Spotify is my most used mobile app and a mobile app I enjoy using.
              This case study looks into some of the pain points I’ve
              experienced using Spotify over the years and some possible
              solutions to them.
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Problem statement</p>
            <p>
              How might we improve Spotify's community and lyric features to
              create a more streamlined and cohesive experience for users?
            </p>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Value proposition </p>
            <p>
              Improving the swipe interactions improves the user experience by
              reducing frustrations caused by the ambiguity of the swipe
              function. The addition of more prominent marketplace features
              benefits Spotify and artists through increased exposure which can
              help improve sales for events and merch.
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
              <li className="p-1">Interaction Design</li>
              <li className="p-1">Brand & Product Thinking</li>
            </ul>
          </div>
          <div className="w-full pr-4">
            <p className="font-bold pb-2">Expected impacts</p>
            <ul className="list-disc pl-4">
              <li className="p-1">no ambiguity when swiping through music</li>
              <li className="p-1">
                faster response time and more lenient inputs for concurrent
                swipes
              </li>
              <li className="p-1">
                increased revenue and incentives for artists to create more
                merchandise and host events
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-6 md:mb-10 lg:mb-16 bg-landing-project">
          <div className="grid w-full items-center pb-4 md:pb-0 lg:pb-0">
            <div className="flex place-content-center py-5 px-6">
              <img className="w-[600px] object-contain" src={main} alt="/" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              User Testing and Needs Assessment
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Putting your playlist on shuffle but scrolling through all the
              songs
            </h1>
            <p className="pb-5">
              In order to do some user testing and find out the difficulty of
              swiping through music, I sat down with some of my roommates and
              just got them to try and swipe through music on Spotify with and
              without looking at the screen and looked at their thumb movements.
              The{" "}
              <span className="font-bold">
                motion of thumbs moved with a slight angle as users swiped
                quickly
              </span>
              , especially while looking away, which led to inputs in both the
              vertical and horizontal direction,{" "}
              <span className="font-bold">causing ambiguity</span> when the
              program determines whether to move to the next song or show the
              lyrics. This can be seen in the image below, where a slightly
              slanted swipe leads to the second image, where the lyric tab
              slightly pulls up instead of the third image where a new song is
              played.
            </p>
            <div className="flex place-content-center">
              <figure>
                <img className="w-[900px]" src={scrolling} alt="/" />
                <figcaption className="text-center text-sm">
                  Figure 1. Scrolling - actual outcome (middle) vs expected
                  outcome (right)
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Mockups and Prototyping
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5 md:pb-8">
              Dropping the mic (onto the screen)
            </h1>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="flex place-content-center pb-5">
                <figure>
                  <img className="w-[500px]" src={mockups} alt="/" />
                  <figcaption className="text-center text-sm">
                    Figure 2. New proposed designs
                  </figcaption>
                </figure>
              </div>
              <div>
                <p className="pb-5">
                  Using some inspiration from the desktop application, the new
                  proposed design used the same microphone icon at the bottom of
                  the screen for the mobile application for lyrics to avoid this
                  clash when swiping. This button will still pull up the same
                  lyric tab, but won’t interfere with any swiping motions done
                  by the user to change songs.
                </p>
                <p>
                  Some of the tradeoffs associated with the new design are the{" "}
                  <span className="font-bold">
                    space constraints with the addition of a new button
                  </span>{" "}
                  and a{" "}
                  <span className="font-bold">shift in functionality</span> from
                  a swipe to a button. The addition of the lyric button may
                  clash with the audio device indicator located on the left side
                  of the bar. However, since Spotify already implements a
                  scrolling text feature on this component, it can be further
                  offset to allow space for the lyric button, allowing for
                  clearer functions for lyrics without the information provided
                  by the scrolling text being compromised. The shift in
                  functionality by using a button may lead to a clash with
                  muscle memory for more experienced users, but the button is
                  justified since the{" "}
                  <span className="font-bold">
                    current system has an ambiguous function for swipes
                  </span>{" "}
                  that are not perfectly horizontal, which is{" "}
                  <span className="font-bold">
                    more detrimental in the long term
                  </span>{" "}
                  than having users adapt to a new, more streamlined system. I
                  also made a {""}
                  <a
                    className="underline"
                    href="https://www.figma.com/proto/HluiyOTedIo6LyWiaOCdeX/Spotify-Case-Study?type=design&node-id=3-7&t=qYkpLgUUg3mXTGLz-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A7&show-proto-sidebar=1&mode=design"
                    target="_blank"
                    rel="noreferrer"
                  >
                    simple prototype to show this feature, which you can see
                    here
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Marketplace and Community Features
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Putting artists in the spotlight
            </h1>
            <div className="grid md:grid-cols-2 gap-5 items-center">
              <div className="flex place-content-center pb-5">
                <figure>
                  <img className="w-[300px]" src={comm} alt="/" />
                  <figcaption className="text-center text-sm">
                    Figure 3. New community tab
                  </figcaption>
                </figure>
              </div>
              <div>
                <p className="pb-5">
                  The current system for finding merchandise and events is{" "}
                  <span className="font-bold">
                    hard to find and doesn’t provide much information
                  </span>
                  , therefore, it is proposed to have an extra tab at the bottom
                  of the screen to allow for a dedicated community space for
                  information about concerts, merchandise, and other events that
                  artists may be promoting.
                </p>
                <p className="pb-5">
                  As seen in the mockup, a{" "}
                  <span className="font-bold">
                    new community tab can feature concerts and merchandise
                  </span>{" "}
                  by artists followed by users, with additional content curated
                  based on recent listens, similar genres, and similar artists
                  just like how Spotify's current home page provides
                  recommendations for new content. Users can also bookmark
                  events and access them using the top right bookmark button,
                  and search for particular artists or events using the
                  community-specific search function at the top. The buy buttons
                  take users to websites with more information; for events and
                  concerts, this would be Ticketmaster or a dedicated event page
                  if there are multiple artists, and for merch, this would be
                  the Spotify shop.
                </p>
                <p>
                  Keeping it consistent with Spotify’s home page,{" "}
                  <span className="font-bold">
                    each horizontal section can be swiped through to expose
                    additional content
                  </span>
                  , in this case, more concerts and merch. One of the possible
                  risks of implementing these features more prominently is that
                  users who are not interested in such content may be flooded
                  with new content that they are not interested in, degrading
                  the user experience. For this reason, a new tab was proposed
                  instead of adding a horizontal section on the home page, so
                  users who would like more engagement with artists through
                  concerts and merchandise can use the new tab, while those who
                  prefer to stick to Spotify's main features can simply ignore
                  it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-60">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h2 className="font-heading text-sm md:text-base text-hover-purple">
              Learnings and Reflection
            </h2>
            <h1 className="font-headers text-lg md:text-xl lg:text-2xl pb-5">
              Body mechanics and mobile spacing are an interesting recipe
            </h1>
            <p className="pb-5">
              I found it super interesting that minor body mechanics can heavily
              factor in the practicality of a design since, in theory, swiping
              vertically and horizontally are completely different and therefore
              would not lead to any clashes, but in reality that’s not the case
              due to how our bodies naturally interact with devices. This
              insight was extremely useful in designing my projected solution
              for the lyric button.
            </p>
            <p className="pb-5">
              When designing a concept for a community tab, I found myself
              lacking space for all the features I originally wanted to input.
              For example, I was planning to include short descriptions for
              merchandise and all the upcoming event locations, but there just
              wasn’t enough space to adequately input the info without leading
              to visual clutter and an overall lack of clarity. After taking
              some time to explore other tabs on the Spotify app, I realized
              that succinct, high-level information is really all you can fit
              without overwhelming the user, and using links to pages with more
              detail is a good way to provide a comprehensive view of the
              product without showing it all at once, like how Spotify’s current
              “buy now” button for merchandise takes you to the web browser
              shop, which provides more detail about the merch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
