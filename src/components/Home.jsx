import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
    });
    return () => smoother.kill();
  }, []);

  useGSAP(() => {
    gsap.from(".text", {
      opacity: 0,
      y: 10,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".container",
        // pin: true,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });
  });

  return (
    <section id="wrapper-smooth">
      <div id="content-smooth">
        <div className="mt-25 mb-10 max-w-2xl justify-start mx-5 tracking-tight md:ml-15 md:text-3xl md:mt-95">
          <div className="container">
            <span className="">Raf portfolio.</span>
            <p className="mb-5 text">
              A simple place where I organize my work, share my progress, and
              record my journey.
            </p>
            <p className="mb-5 text">
              It's not about showing off, but about sharing stories of ideas,
              mistakes, and small meaningful steps.
            </p>
            <p className="mb-5 text">
              Here, I show how I learn, create, and keep moving forward—not
              perfect, but genuine.
            </p>
            <p className="mb-5 text">
              Maybe you'll find something here, maybe you won't. There's more to
              come, and I'm excited to keep going.
            </p>
            <p className="text">This is me and my journey.</p>
          </div>
          {/* <div className="flex justify-start mt-5 md:mt-10 py-5 gap-5 md:gap-15k">
            <button className="Clickable px-10 py-3 text-xl hover:rounded-xl">Button</button>
          </div> */}
        </div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </section>
  );
};

export default Home;
