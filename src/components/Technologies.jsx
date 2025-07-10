import { useRef } from "react";
import { useScrollAnimation } from "../utils/scrollAnimation";

const Technologies = () => {
  const containerRef = useRef(null);

  useScrollAnimation({
    ref: containerRef,
    itemSelector: ".title",
    triggerOptions: {
      start: "top center",
    },
  });

  useScrollAnimation({
    ref: containerRef,
    itemSelector: ".text",
    triggerOptions: {
      toggleAction: "play none none none",
    },
  });

  const tech = {
    "Languages & Frameworks": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
    "Tools & Platforms": [
      "Git",
      "Vite",
      "Vercel",
      "Appwrite",
      "TMDB API",
      "GSAP",
      "React Router Dom",
      "Node.js",
    ],
    Databases: ["SQL", "MongoDB"],
  };

  return (
    <section
      className="pb-[100px] md:pb-[250px] md:mx-20 mx-5 -tracking-wider md:-tracking-widest"
      ref={containerRef}
      id="technologies"
    >
      <div className="text-center text-xl md:text-5xl font-black uppercase">
        {Object.entries(tech).map(([category, items]) => (
          <div key={category}>
            <div className="mb-5 font-light text-xs md:text-sm tracking-widest">
              <h1 className="title">{category}</h1>
            </div>
            <div className="text mb-5">
              {items.join(" / ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
