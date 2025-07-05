import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

import Nav from "./components/Nav";
import Home from "./views/Home";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const cursorRef = useRef(null);
  const smootherRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    smootherRef.current = ScrollSmoother.create({
      smooth: 5,
      effects: false,
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
    });
    setTimeout(() => ScrollTrigger.refresh(), 100);

    const cursor = cursorRef.current;
    if (!cursor) return;
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      smootherRef.current.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <Nav />
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full
          bg-black/25 backdrop-blur-sm
          z-[9999] pointer-events-none
          transform -translate-x-1/2 -translate-y-1/2"
      />
      <div id="wrapper-smooth">
        <div id="content-smooth">
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
