import { useRef } from "react";
import { useScrollAnimation } from "../utils/scrollAnimation";

const aboutTexts = [
  "This site is",
  "A simple space where I ",
  "organize my work, ",
  "share my progress, ",
  "and record my journey. ",
  "It's not about showing off, but about sharing ",
  "stories of ideas, ",
  "mistakes, ",
  "and small meaningful steps. ",
  "Here, I show how I ",
  "learn, ",
  "create, ",
  "and keep moving forward—",
  "not perfect, but genuine. ",
  "Maybe you'll find something here, maybe you won't. There's more to come, and I'm excited to keep going.",
  "This is me and my journey.",
];

const About = () => {
  const containerRef = useRef(null);

  useScrollAnimation({
    ref: containerRef,
    itemSelector: ".text",
    varsFn: (texts) => ({
      opacity: 0.1,
      y: 10,
      stagger: {
        each: 0.2,
        amount: texts.length * 0.2,
      },
    }),
    triggerOptions: {
      start: "top center",
      end: "250px center",
      scrub: 1,
      toggleAction: "play none reverse none"
    },
  });

  return (
    <section
      className="pb-[100px] md:pb-[250px] md:mx-20 mx-5 -tracking-wider md:-tracking-widest"
      ref={containerRef}
      id="about"
    >
      <div className="text-center text-xl md:text-5xl font-black uppercase">
        <div className="mb-5 font-light text-xs md:text-sm tracking-widest">
          <h1>ABOUT</h1>
        </div>
        {aboutTexts.map((text, index) => (
          <span className="text" key={index}>
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
