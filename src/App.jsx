import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

import About from "/src/components/About";
import Contact from "/src/components/Contact";
import Home from "./views/Home";
import Nav from "./components/Nav";
import profile from "./assets/profile.png";
import Preloader from "./components/Preloader";
import Project from "/src/components/Project";
import Technologies from "/src/components/Technologies";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);
  const smootherRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const waitForStylesheets = () => {
      const links = [...document.querySelectorAll('link[rel="stylesheet"]')];
      const promises = links.map(
        (link) =>
          new Promise((resolve, reject) => {
            if (link.sheet) {
              resolve();
              return;
            }
            link.addEventListener("load", resolve);
            link.addEventListener("error", reject);
          })
      );
      return Promise.all(promises);
    };

    Promise.all([
      document.fonts.ready,
      waitForStylesheets(),
      new Promise((resolve) => {
        const img = new window.Image();
        img.src = profile;
        if (img.complete) resolve();
        else img.onload = resolve;
      }),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(() => {
      document.body.style.overflow = "";
    });
  }, []);

  useEffect(() => {
    if (isLoading) return;
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
      smootherRef.current?.kill();
      ScrollTrigger.killAll();
    };
  }, [isLoading]);

  if (isLoading) return <Preloader onComplete={() => setIsLoading(false)} />;

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
          <About />
          <Technologies />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
