import React from "react";
import profileImg from "../assets/profilepic.jpg";

const BookSection = () => {
  return (
    <div className="w-full bg-default">
      <div className="text-kinda-white mx-10 md:mx-48 place-items-center text-center">
        <h1 className="w-full font-sans font-light text-3xl md:text-4xl py-9">
          thanks for picking up my book, feel free to take a glance through it
        </h1>
      </div>
      <div className="text-kinda-white border-4 border-zinc-300 mx-10 md:mx-32 grid md:grid-cols-2 gap-x-8 bg-black">
        <div className="w-full h-full border-zinc-300 p-10 md:border-r-2 border-b-2 md:border-b-0  bg-kinda-black">
          <div className="grid grid-cols-[10%_90%] place-items-center">
            <h1 className="w-full text-left pb-4">903</h1>
            <h1 className="w-full text-center pb-4 italic">Autobiography</h1>
          </div>
          <h1 className="text-left text-2xl pb-4 font-sans">
            Hi there, I'm Bryan!
          </h1>
          <h1 className="text-left text-xl pb-4 font-sans">
            A product designer, systems design engineering student, and avid
            dark mode enjoyer.
          </h1>
          <p className="text-left text-md pb-4 font-sans">
            I like leveraging design tools to create meaningful experiences for
            others. There's always been a euphoric and satisfying feeling when a
            design feels right that I can't replicate anywhere else, so I enjoy
            making things in hopes that others can achieve that feeling too.
            Design can also uniquely connect people; it can elicit emotions from
            people around the globe, non-verbally, and I find that aspect
            fascinating. There's also a unique blend of technical
            problem-solving and creativity that UX design, in particular, brings
            that I really enjoy.
          </p>
          <p className="text-left text-md pb-4 font-sans">
            Outside of designing things, I play a lot of sports and video games.
            I also really enjoy listening to music, doing origami and cooking.
          </p>
          <img src={profileImg} alt="/"></img>
          <p className="w-full">
            ^ That's me. I don't particularly like cameras so I apologize for
            the bad picture.
          </p>
        </div>
        <div className="w-full h-full md:border-l-2 border-zinc-300 p-10 bg-kinda-black">
          <div className="grid grid-cols-[90%_10%] place-items-center">
            <h1 className="w-full text-center pb-4 italic">Bryan Yam</h1>
            <h1 className="w-full text-right pb-4">904</h1>
          </div>
          <h1 className="text-2xl pb-4">
            FAQs (that aren't actually asked frequently)
          </h1>
          <p className="font-sans pb-2 text-lg">
            What inspired/how did you make your website?
          </p>
          <p className="font-sans pb-4 text-md">
            As cliché as it sounds, I just wanted to include things that I
            thought made me, me. I started with the idea of having a box with
            all my stuff in it, and it kind of went from there. As for how it
            was made, all the designs and artwork were done in Figma, and it's
            built using React and Tailwind CSS.
          </p>
          <p className="font-sans pb-2 text-lg"> What's your favourite game?</p>
          <p className="font-sans pb-4 text-md">
            Childhood me would say Pokemon Emerald. You may think it's Teamfight
            Tactics since I have a bunch of projects about it, but it's actually
            Hollow Knight. I enjoyed everything about that game: mechanics, art
            style, music, design, and story; it all worked together extremely
            well and I would recommend it to anyone regardless if you normally
            play games or not. (TFT is a close second though)
          </p>
          <p className="font-sans pb-2 text-lg">
            Why did you pick Systems Design Engineering?
          </p>
          <p className="font-sans pb-4 text-md">
            I wanted to go into engineering because I liked math and science
            (how naïve of high school me) and it had "design" in the name, so it
            felt like a pretty good match to me. I also had a friend in the
            program who vouched for it.
          </p>
          <p className="font-sans pb-2 text-lg">
            Do you like Systems Design Engineering?
          </p>
          <p className="font-sans pb-4 text-md">
            Yes and No. There are some truly extraordinary people in this
            program that I am grateful I met and I have enjoyed the majority of
            the design courses. On the other hand, there are a bunch of courses
            you have to take purely because "engineering" is in the program
            name, even though they don't relate to what most students tend to do
            in the future. (like our single thermodynamics course, even though I
            liked it, or linear algebra II, that one I did not like as much)
          </p>
          <p className="font-sans pb-2 text-lg">
            Favourite course in university so far?
          </p>
          <p className="font-sans pb-4 text-md">
            Thermodynamics. (No, that was not a typo, I don't really understand
            this choice either)
          </p>
          <p className="font-sans pb-2 text-lg">
            What are you staring at in the picture?
          </p>
          <p className="font-sans pb-4 text-md">Honestly, I have no clue.</p>

          <p>
            Can't find what you're looking for? Shoot me an
            <a href="/" className="hover-pointer text-text-purple">
              {" "}
              email
            </a>{" "}
            and we can chat about it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
