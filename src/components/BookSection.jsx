import React from "react";
import profileImg from "../assets/profilepic.jpg";

const BookSection = () => {
  return (
    <div className="w-full bg-default-bg">
      <div className="text-kinda-white mx-6 md:mx-16 lg:mx-32 place-items-center text-center">
        <h1 className="font-headers text-2xl md:text-3xl lg:text-4xl py-9">
          thanks for picking up my book, feel free to take a glance through it.
        </h1>
      </div>
      <div className="text-kinda-white leading-relaxed border-4 border-zinc-300 mt-6 md:mt-10 lg:mt-16 lg:mx-32 mx-6 md:mx-10 grid custom:grid-cols-2 gap-x-8">
        <div className="w-full h-full border-zinc-300 p-10 md:border-r-2 border-b-2 custom:border-b-0  bg-book-bg">
          <div className="grid grid-cols-[10%_90%] place-items-center">
            <h1 className="w-full text-left text-sm md:text-base pb-4">903</h1>
            <h1 className="w-full text-center text-sm md:text-base pb-4 italic">
              The Difference Between Sweet Potatoes and Yams
            </h1>
          </div>
          <div>
            <h1 className="text-2xl py-6 font-sans">Hi there, I'm Bryan!</h1>
            <div className="w-full flex place-content-center pb-5">
              <img
                className="object-contain w-96"
                src={profileImg}
                alt="/"
              ></img>
            </div>
            <p className="text-left text-md pb-4 font-sans">
              I leverage design tools to create meaningful experiences for
              others. There's always been a really satisfying feeling when a
              design feels right that I can't seem to replicate anywhere else,
              so I design products in hopes that others can achieve that feeling
              too. Design also connects people; it can elicit emotions from
              people around the globe, sometimes non-verbally, and I find that
              aspect fascinating. There's also a unique blend of technical
              problem-solving and creativity that UX design, in particular,
              brings that I really enjoy.
            </p>
            <p className="text-left text-md font-sans">
              Outside of designing things, I play a lot of sports, mainly
              ultimate frisbee, volleyball and soccer, and video games. I also
              really enjoy listening to music, doing origami and cooking.
            </p>
          </div>
        </div>
        <div className="w-full h-full md:border-l-2 border-zinc-300 p-10 bg-book-bg">
          <div className="grid grid-cols-[90%_10%] place-items-center">
            <h1 className="w-full text-center pb-4 text-sm md:text-base italic">
              Bryan Yam
            </h1>
            <h1 className="w-full text-right text-sm md:text-base pb-4">904</h1>
          </div>
          <h1 className="text-2xl pb-4">
            FAQs (that aren't actually asked frequently)
          </h1>
          <p className="font-sans pb-2 text-lg italic">
            What inspired/how did you make your website?
          </p>
          <p className="font-sans pb-6 text-base">
            As cliché as it sounds, I just wanted to include things that I
            thought made me, me. I started with the idea of having a box with
            all my stuff in it, and it kind of went from there. As for how it
            was made, all the designs and artwork were done in Figma, and it's
            built using React and Tailwind CSS.
          </p>
          <p className="font-sans pb-2 text-lg italic">
            What's your favourite game?
          </p>
          <p className="font-sans pb-6 text-md">
            Hollow Knight. I enjoyed everything about that game: mechanics, art
            style, music, design, and story; it all worked together extremely
            well and I would recommend it to anyone regardless if you normally
            play games or not. (TFT is a close second though)
          </p>
          <p className="font-sans pb-2 text-lg italic">
            Why Systems Design? Do you like it?
          </p>
          <p className="font-sans pb-4 text-md">
            I wanted to go into engineering because I liked math and science
            (how naïve of high school me) and it had "design" in the name, so it
            felt like a pretty good match to me. I also had a friend in the
            program who vouched for it, and I was fortunate enough to get
            accepted.
          </p>
          <p className="font-sans pb-6 text-md">
            In terms of whether I enjoy the program, I'm a bit ambivalent. There
            are some truly extraordinary people in this program that I am
            grateful I met, but there are some courses that are required purely
            because "engineering" is in the program name, even though they don't
            really relate to what most students tend to do in the future, for
            example, linear algebra 2. For me personally, linear algebra 1 was
            more than enough &#128517;.
          </p>
          <p className="font-sans pb-2 text-lg italic">
            Favourite course in university so far?
          </p>
          <p className="font-sans pb-6 text-md">
            Thermodynamics. (No, that was not a typo, I don't really understand
            this choice either)
          </p>

          <p>
            Can't find what you're looking for? Shoot me an
            <a
              href="mailto:bryanyam808@gmail.com"
              className="hover-pointer text-text-purple"
            >
              {" "}
              email
            </a>{" "}
            and we can chat about it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
