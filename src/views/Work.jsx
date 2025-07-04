import { useRef } from "react";

import WorkCard from "../components/WorkCard";
import Contact from "../components/Contact";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";

import { useScrollAnimation } from "../utils/scrollAnimation";

const projects = [
  {
    title: "Movie App",
    technology: ["React", "Tailwind", "Appwrite", "Vite", "Vercel"],
    img: project1,
    link: "https://rafly-id-try-movie-app.vercel.app/",
  },
  {
    title: "Awward App",
    technology: ["React", "Tailwind", "GSAP", "Vite", "Vercel"],
    img: project2,
    link: "https://rafly-id-awwward.vercel.app/",
  },
  {
    title: "Portofolio App",
    technology: ["React", "Tailwind", "GSAP", "Vite", "Vercel"],
    img: project3,
    link: "https://raf-personal-portfolio.vercel.app/",
  },
  {
    title: "Todo App",
    technology: ["HTML", "CSS", "Javascript"],
    img: project4,
    link: "https://id-camp-todoapps.vercel.app/",
  },
  {
    title: "Final Exam App",
    technology: ["HTML", "CSS"],
    img: project5,
    link: "https://web-client-uas-raflylucky.vercel.app/",
  },
];

const Work = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const xValue = window.innerWidth >= 768 ? 100 : 10;
  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".text-ani",
    options: {
      x: xValue,
      y: 0,
      duration: 2,
    }
  });

  return (
    <>
      <section className="mx-5 mt-10 md:mt-40" ref={sectionRef}>
        <div
          className="w-full mb-10 border-b py-10 grid md:grid-cols-2 items-center uppercase font-light -tracking-wider"
          id="about"
        >
          <div className="text-ani text-5xl md:text-9xl font-oswald -tracking-wider">
            My Project
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2" ref={containerRef}>
          {projects.map((project, idx) => (
            <WorkCard key={project.title + idx} {...project} />
          ))}
        </div>
      </section>
      <div className="mt-20 pb-10 md:pb-40">
        <Contact />
      </div>
    </>
  );
};

export default Work;
