// App.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Nav from "./components/Nav";
import Home from "./components/Home";

// register plugin sekali
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 3,
      effects: true,
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll();
      smoother.kill();
    };
  }, []);

  return (
    <>
      <Nav />
      <section id="wrapper-smooth">
        <div id="content-smooth">
          <Home />
        </div>
      </section>
    </>
  );
};

export default App;
