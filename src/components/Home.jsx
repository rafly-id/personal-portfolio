import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
    });

    ScrollTrigger.create({
      trigger: "#nav",
      start: "top top",
      pin: true,
      pinSpacing: false,
      scroller: "#wrapper-smooth",
      pinType: "transform",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      smoother.kill();
    };
  }, []);

  useGSAP(() => {
    gsap.from(".text", {
      opacity: 0,
      y: 10,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  });

  return (
    <>
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
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
};

export default Home;
