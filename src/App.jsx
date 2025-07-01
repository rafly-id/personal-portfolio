import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Work from "./pages/Work";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 5,
      effects: false,
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
    });
    setTimeout(() => ScrollTrigger.refresh(), 100);

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

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
      smoother.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full
          bg-white/25 backdrop-blur-sm
          z-[9999] pointer-events-none
          transform -translate-x-1/2 -translate-y-1/2"
      />
      <div id="wrapper-smooth">
        <div id="content-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
