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
      bgColor: "#ffffff",
      textColor: "#000000",
    });
    return cleanup;
  }, []);

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
          {[
            "Movie App",
            "Awward App",
            "Portofolio App",
            "Todo App",
            "Final Exam App",
          ].map((label) => (
            <div
              key={label}
              className="project-item relative flex border-b py-3 md:py-5 justify-between cursor-pointer overflow-hidden"
            >
              <div className="bg-overlay"></div>

              <div className="project-text relative overflow-hidden z-10">
                <span className="text-default block">{label}</span>
                <span className="project-hover absolute top-0 left-0 block">
                  {label}
                </span>
              </div>

              <div className="project-text relative overflow-hidden z-10">
                <span className="text-default block">project</span>
                <span className="project-hover absolute top-0 left-0 block">
                  See Site
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
