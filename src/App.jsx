import Nav from "./components/Nav";
import Home from "./pages/Home";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

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
        </div>
      </div>
    </>
  );
};

export default App;
