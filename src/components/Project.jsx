import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    ctxRef.current = gsap.context(() => {
      gsap.utils.toArray(".project-item").forEach((item) => {
        const overlay = item.querySelector(".bg-overlay");
        const textDefault = item.querySelectorAll(".text-default");
        const textHover = item.querySelectorAll(".project-hover");

        const tlBg = gsap
          .timeline({ paused: true })
          .fromTo(
            overlay,
            { yPercent: 100 },
            { yPercent: 0, duration: 0.5, ease: "power2.inOut" },
            0
          )
          .to(
            item,
            {
              backgroundColor: "#ffffff",
              color: "#000000",
              duration: 0.5,
              ease: "power2.inOut",
            },
            0
          );

        const tlText = gsap
          .timeline({ paused: true })
          .to(
            textDefault,
            { yPercent: -100, opacity: 0, duration: 0.5, ease: "power2.inOut" },
            0
          )
          .fromTo(
            textHover,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" },
            0
          );

        item.addEventListener("mouseenter", () => {
          tlBg.play();
          tlText.play();
        });

        item.addEventListener("mouseleave", () => {
          tlBg.reverse();
          tlText.reverse();
        });
      });
    });

    return () => ctxRef.current.revert();
  }, []);

  return (
    <section className="pb-[100px] md:pb-[250px] w-full" id="project">
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
                  See Site
                </span>
              </div>

              <div className="project-text relative overflow-hidden z-10">
                <span className="text-default block">project</span>
                <span className="project-hover absolute top-0 left-0 block">
                  project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
