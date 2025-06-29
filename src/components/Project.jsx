import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current.querySelectorAll(".project-card");

    gsap.from(cards, {
      y: 100,
      height: 0,
      ease: "power3.in",
      duration: 1,
      stagger: {
        each: 0.5,
        from: "start",
      },
      scrollTrigger: {
        scroller: "#wrapper-smooth",
        trigger: containerRef.current,
        start: "top 50%",
        end: "top 50%",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <section className="min-h-screen pb-25 md:pb-50 mx-5 md:mx-20">
      <div className="mb-5 text-3xl font-oswald">
        <h1>PROJECT</h1>
      </div>
      <div className="card-container" ref={containerRef}>
        <div>
          <img
            src="./src/assets/project-1.png"
            alt="project-1"
            className="project-card h-50 md:h-100 mb-5 rounded-xl"
          />
          <div className="md:flex gap-5">
            <img
              src="./src/assets/project-1.png"
              alt="project-2"
              className="project-card h-50 md:h-100 rounded-xl"
            />
            <img
              src="./src/assets/project-1.png"
              alt="project-3"
              className="project-card h-50 md:h-100 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
