import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useGSAP(() => {
    gsap.from(".project-card", {
      y: 100,
      ease: "power3.in",
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
      },
      scrollTrigger: {
        scroller: "#wrapper-smooth",
        trigger: ".card-container",
        start: "top 50%",
        end: "top 50%",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <section className="min-h-screen pb-25 md:pb-50 mx-5 md:mx-20">
      <div className="mb-5 text-7xl font-oswald">
        <h1>PROJECT</h1>
      </div>
      <div className="card-container">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-5">
          <div className="col-span-2">
            <img
              src="./src/assets/project-1.png"
              alt="project-1"
              className="project-card h-50 md:h-100"
            />
          </div>
          <img
            src="./src/assets/project-1.png"
            alt="project-2"
            className="project-card"
            />
          <img
            src="./src/assets/project-1.png"
            alt="project-3"
            className="project-card"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
