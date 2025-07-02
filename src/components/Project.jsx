import { useRef, useLayoutEffect } from "react";
import { slideUpTextWithBgHover } from "/src/utils/gsapHover";
import { useScrollAnimation } from "../utils/scrollAnimation";

export default function Project() {
  const sectionRef = useRef(null);

  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".project-item",
  });

  useLayoutEffect(() => {
    const cleanup = slideUpTextWithBgHover({
      container: sectionRef.current,
      itemSelector: ".project-item",
      defaultTxtSel: ".text-default",
      hoverTxtSel: ".project-hover",
      overlaySel: ".bg-overlay",
      textColor: "#ffffff",
      bgColor: "#000000",
    });
    return cleanup;
  }, []);

  const projects = [
    { label: "Movie App", url: "https://rafly-id-try-movie-app.vercel.app/" },
    { label: "Awward App", url: "https://example.com/awward" }, // belum
    { label: "Portofolio App", url: "https://example.com/portofolio" }, // belum
    { label: "Todo App", url: "https://id-camp-todoapps.vercel.app/" },
    { label: "Final Exam App", url: "https://web-client-uas-raflylucky.vercel.app/" },
  ];

  return (
    <section
      ref={sectionRef}
      className="pb-[100px] md:pb-[250px] w-full"
      id="project"
    >
      <div className="text-xl md:text-5xl font-black uppercase">
        <div className="text-xs font-light mb-2 ml-5">
          <h1>project</h1>
        </div>
        <div>
          {projects.map((project) => (
            <a
              key={project.label}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item relative flex border-b py-3 md:py-5 justify-between cursor-pointer overflow-hidden"
            >
              <div className="bg-overlay"></div>

              <div className="project-text relative overflow-hidden z-10">
                <span className="text-default block">{project.label}</span>
                <span className="project-hover absolute top-0 left-0 block">
                  {project.label}
                </span>
              </div>

              <div className="project-text relative overflow-hidden z-10">
                <span className="text-default block">project</span>
                <span className="project-hover absolute top-0 left-0 block">
                  See Site
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
