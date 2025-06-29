import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const texts = containerRef.current.querySelectorAll(".text");
    gsap.from(texts, {
      opacity: 0,
      y: 10,
      stagger: {
        each: 0.2,
        amount: texts.length * 0.2,
      },
      ease: "power3.inOut",
      scrollTrigger: {
        scroller: "#wrapper-smooth",
        trigger: containerRef.current,
        start: "top center",
        end: "250px center",
        scrub: 1,
      },
    });
  });

  return (
    <section
      className="pb-[100px] md:pb-[250px] md:mx-20 mx-5 -tracking-wider md:-tracking-widest"
      ref={containerRef}
    >
      <div className="text-center text-xl md:text-5xl font-black uppercase">
        <div className="mb-5 font-light text-xs md:text-sm tracking-widest">
          <h1>ABOUT</h1>
        </div>
        <span className="text"> A simple space where I</span>
        <span className="text"> organize my work,</span>
        <span className="text"> share my progress,</span>
        <span className="text"> and record my journey. </span>
        <span className="text">
          It's not about showing off, but about sharing
        </span>
        <span className="text"> stories of ideas,</span>
        <span className="text"> mistakes,</span>
        <span className="text"> and small meaningful steps.</span>
        <span className="text"> Here, I show how I</span>
        <span className="text"> learn,</span>
        <span className="text"> create,</span>
        <span className="text"> and keep moving forward—</span>
        <span className="text"> not perfect, but genuine. </span>
        <span className="text">
          Maybe you'll find something here, maybe you won't. There's more to
          come, and I'm excited to keep going.
        </span>
        <span className="text">This is me and my journey.</span>
      </div>
    </section>
  );
};

export default About;
