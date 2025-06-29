import Nav from "./components/Nav";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 5,
      effects: false,
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.killAll();
      smoother.kill();
    };
  }, []);

  return (
    <>
      <Nav />
      <div id="wrapper-smooth">
        <div id="content-smooth">
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
