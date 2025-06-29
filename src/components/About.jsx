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
        end: "150px center",
        scrub: 1,
      },
    });
  });

  return (
    <section
      className="pb-25 md:pb-50 mx-5 tracking-tight text-xl md:text-3xl"
      ref={containerRef}
    >
      <div className="max-w-2xl md:ml-15">
        <div className="mb-5 text-3xl font-oswald">
          <h1>RAF PORTOFOLIO</h1>
        </div>
        <p className="mb-3 md:mb-5">
          <span className="text"> A simple space where I</span>
          <span className="text"> organize my work,</span>
          <span className="text"> share my progress,</span>
          <span className="text"> and record my journey.</span>
        </p>
        <p className="mb-3 md:mb-5">
          <span className="text">
            It's not about showing off, but about sharing
          </span>
          <span className="text"> stories of ideas,</span>
          <span className="text"> mistakes,</span>
          <span className="text"> and small meaningful steps.</span>
        </p>
        <p className="mb-3 md:mb-5">
          <span className="text">Here, I show how I</span>
          <span className="text"> learn,</span>
          <span className="text"> create,</span>
          <span className="text"> and keep moving forward—</span>
          <span className="text">not perfect, but genuine.</span>
        </p>
        <p className="mb-3 md:mb-5 text">
          Maybe you'll find something here, maybe you won't. There's more to
          come, and I'm excited to keep going.
        </p>
        <p className="text">This is me and my journey.</p>
      </div>
    </section>
  );
};

export default About;
