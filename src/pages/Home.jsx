import About from "/src/components/About";
import Technologies from "/src/components/Technologies";
import Project from "/src/components/Project";
import Contact from "/src/components/Contact";

import { useRef } from "react";
import { useScrollAnimation } from "../utils/scrollAnimation";

const Home = () => {
  const sectionRef = useRef(null);

  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".fadeup",
  });

  return (
    <>
      <section className="mb-52 md:mb-80" id="home" ref={sectionRef}>
        <div className="flex justify-end items-end mb-5 fadeup">
          <img src="./src/assets/profile.jpeg" alt="profile" className="w-xl" />
        </div>
        <div className="flex text-center justify-center">
          <h1 className="-tracking-wider text-3xl md:text-7xl max-w-full font-oswald uppercase fadeup">
            Hey. I'm Muhammad Rafly Adriansyah - a junior frontend web developer
            from indonesia
          </h1>
        </div>
      </section>
      <About />
      <Technologies />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
