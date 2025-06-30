import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    ctxRef.current = gsap.context(() => {
      gsap.utils.toArray(".project-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            y: -5,
            backgroundColor: "#d3d0d7",
            color: "#000000",
            duration: 0.5,
            ease: "power3.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            backgroundColor: "transparent",
            color: "inherit",
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        });
      });
    });

    return () => ctxRef.current.revert();
  }, []);

  return (
    <section className="w-full" id="project">
      <div className="text-xl md:text-5xl font-black uppercase">
        <div className="text-xs font-light mb-2 ml-5">
          <h1>project</h1>
        </div>
        <div>
          <div className="project-item flex border-y py-3 md:py-5 justify-between cursor-pointer">
            <h1 className="ml-5">Movie App</h1>
            <h1 className="mr-5">project</h1>
          </div>
          <div className="project-item flex border-b py-3 md:py-5 justify-between cursor-pointer">
            <h1 className="ml-5">Awward App</h1>
            <h1 className="mr-5">project</h1>
          </div>
          <div className="project-item flex border-b py-3 md:py-5 justify-between cursor-pointer">
            <h1 className="ml-5">Portofolio App</h1>
            <h1 className="mr-5">project</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
