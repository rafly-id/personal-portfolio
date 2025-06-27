import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 3,
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === document.querySelector(".text-container"))
        .forEach((t) => t.kill());
      smoother.kill();
    };
  }, []);

  useGSAP(() => {
    gsap.from(".text", {
      opacity: 0,
      y: 10,
      stagger: {
        each: 0.2,
        amount: 1,
        ease: "power3.inOut",
      },
      scrollTrigger: {
        trigger: ".text-container",
        start: "top 30%",
        end: "150px 30%",
        scrub: 1,
        scroller: "#wrapper-smooth",
      },
    });
  });

  return (
    <section id="wrapper-smooth">
      <div id="content-smooth">
        <div className="mt-50 mb-10 max-w-2xl justify-start mx-5 tracking-tight md:ml-15 md:text-3xl md:mt-80">
          <div className="text-container">
            <p className="mb-3 md:mb-5">
              Raf portofolio.
              <span className="text"> A simple place where I</span>
              <span className="text"> organize my work,</span>
              <span className="text"> share my progress,</span>
              <span className="text"> and record my journey.</span>
            </p>
            <p className="mb-3 md:mb-5">
              <span className="text">
                It's not about showing off, but about sharing
              </span>
              <span className="text"> stories of ideas,</span>
              <span className="text"> mistakes,</span>
              <span className="text"> and small meaningful steps.</span>
            </p>
            <p className="mb-3 md:mb-5">
              <span className="text">Here, I show how I</span>
              <span className="text"> learn,</span>
              <span className="text"> create,</span>
              <span className="text"> and keep moving forward—</span>
              <span className="text">not perfect, but genuine.</span>
            </p>
            <p className="mb-3 md:mb-5 text">
              Maybe you'll find something here, maybe you won't. There's more to
              come, and I'm excited to keep going.
            </p>
            <p className="text">This is me and my journey.</p>
          </div>
        </div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </section>
  );
};

export default Home;
