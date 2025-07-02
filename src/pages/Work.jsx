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
    link: "https://github.com/rafly", // belum
  },
  {
    title: "Portofolio App",
    technology: ["React", "Tailwind", "GSAP", "Vite", "Vercel"],
    img: project3,
    link: "https://github.com/rafly", // belum
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
  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".text-ani",
  });

  return (
    <>
      <section className="mx-5 md:mx-20 mt-10 md:mt-20" ref={sectionRef}>
        <div
          className="w-full mb-10 border-b py-10 grid md:grid-cols-2 items-center uppercase font-light -tracking-wider"
          id="about"
        >
          <div className="text-ani text-2xl md:text-8xl font-oswald">
            My Project
          </div>
          <div className="text-ani text-sm md:text-lg">
            Discover further information about this project, such as the project
            name, the tools and technologies behind it, a representative image,
            and a link that will take you directly to the project page or
            source.
          </div>
        </div>
        <div
          className="grid md:grid-cols-2 justify-between items-center gap-10"
          ref={containerRef}
        >
          {projects.map((project, idx) => (
            <WorkCard key={project.title + idx} {...project} />
          ))}
        </div>
      </section>
      <div className="mt-20 pb-10 md:pb-20">
        <Contact />
      </div>
    </>
  );
};

export default Work;
