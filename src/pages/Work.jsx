import WorkCard from "../components/WorkCard";
import Contact from "../components/Contact";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";

const projects = [
  {
    title: "Movie App",
    technology: ["React", "Tailwind"],
    img: project1,
    link: "https://github.com/rafly",
  },
  {
    title: "Awward App",
    technology: ["React", "Tailwind"],
    img: project2,
    link: "https://github.com/rafly",
  },
  {
    title: "Portofolio App",
    technology: ["React", "Tailwind"],
    img: project3,
    link: "https://github.com/rafly",
  },
  {
    title: "Todo App",
    technology: ["React", "Tailwind"],
    img: project4,
    link: "https://github.com/rafly",
  },
  {
    title: "Final Exam App",
    technology: ["React", "Tailwind"],
    img: project5,
    link: "https://github.com/rafly",
  },
];

const Work = () => {
  return (
    <section className="mx-5 md:mx-20 mt-20 md:mt-52">
      <div
        className="w-full mb-10 border-b py-10 grid md:grid-cols-2 items-center uppercase font-light -tracking-widest"
        id="about"
      >
        <div className="text-2xl md:text-8xl font-oswald">My Project</div>
        <div className="text-sm md:text-lg">
          Discover further information about this project, such as the project
          name, the tools and technologies behind it, a representative image,
          and a link that will take you directly to the project page or source.
        </div>
      </div>
      <div className="grid md:grid-cols-2 justify-between items-center gap-10">
        {projects.map((project, idx) => (
          <WorkCard key={project.title + idx} {...project} />
        ))}
      </div>
      <div className="mt-20">
        <Contact />
      </div>
    </section>
  );
};

export default Work;
