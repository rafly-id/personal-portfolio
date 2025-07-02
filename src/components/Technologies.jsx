import { useRef } from "react";
import { useScrollAnimation } from "../utils/scrollAnimation";

const Technologies = () => {
  const containerRef = useRef(null);
  useScrollAnimation({
    ref: containerRef,
    itemSelector: ".text",
    triggerOptions: {
      toggleAction: "play none none none"
    }
  });

  return (
    <section
      className="pb-[100px] md:pb-[250px] md:mx-20 mx-5 -tracking-wider md:-tracking-widest"
      ref={containerRef}
      id="technologies"
    >
      <div className="text-center text-xl md:text-5xl font-black uppercase">
        <div className="mb-5 font-light text-xs md:text-sm tracking-widest">
          <h1>Technologies</h1>
        </div>
        <div className="text">
          Javascript / Tailwindcss / React / GSAP / Vercel / GIT
        </div>
      </div>
    </section>
  );
};

export default Technologies;
