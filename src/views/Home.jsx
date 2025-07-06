import profile from "../assets/profile.png";

import { useRef } from "react";
import { useScrollAnimation } from "../utils/scrollAnimation";

const Home = () => {
  const sectionRef = useRef(null);

  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".fadeup",
    options: {
      stagger: 0,
    },
    triggerOptions: {
      once: true,
    }
  });

  return (
    <>
      <section className="mb-52 md:mb-80 h-full" id="home" ref={sectionRef}>
        <div className="flex justify-end items-end mb-5 fadeup">
          <img src={profile} alt="profile" className="w-xl" />
        </div>
        <div className="flex text-center justify-center">
          <h1 className="-tracking-wider text-3xl md:text-7xl max-w-full font-oswald uppercase fadeup">
            Hey. I'm Muhammad Rafly Adriansyah - a junior frontend web developer
            from indonesia
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
