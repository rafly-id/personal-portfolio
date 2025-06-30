import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import ScrollSmoother from "gsap/ScrollSmoother";

const Nav = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    const items = navRef.current.querySelectorAll(".nav-text");
    gsap.from(items, {
      opacity: 0,
      y: 5,
      ease: "power2.inOut",
      stagger: { each: 0.1, from: "start" },
    });
  }, []);

  useEffect(() => {
    const items = navRef.current.querySelectorAll(".nav-text:not(.nav-hover)");

    items.forEach((item) => {
      const defaultTxt = item.querySelector(".text-default");
      const hoverTxt = item.querySelector(".nav-hover");

      const tl = gsap.timeline({ paused: true });
      tl.to(
        defaultTxt,
        { yPercent: -100, opacity: 0, duration: 0.3, ease: "power2.inOut" },
        0
      ).fromTo(
        hoverTxt,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.3, ease: "power2.inOut" },
        0
      );

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });

    // cleanup
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const handleScroll = (target) => {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(target, true, "center center");
  };

  const NavLink = ({ href, label, active = false }) => {
    const extraClasses = active ? "nav-hover" : "";
    const defaultOpacity = active ? "opacity-100" : "opacity-30";

    return (
      <div
        className={`nav-text relative overflow-hidden cursor-pointer ${extraClasses}`}
      >
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(href);
          }}
          className="block"
        >
          <span className={`text-default block ${defaultOpacity}`}>
            {label}
          </span>
          {!active && (
            <span className="nav-hover absolute top-0 left-0 block opacity-0">
              {label}
            </span>
          )}
        </a>
      </div>
    );
  };

  return (
    <nav className="nav-fixed md:bg-transparent bg-black md:mx-5" ref={navRef}>
      <div className="flex justify-between text-sm md:text-4xl font-black uppercase">
        <div className="flex gap-2 md:gap-5">
          <NavLink href="#home" label="Raf" active />
          <NavLink href="#about" label="About" />
          <NavLink href="#project" label="Project" />
          <NavLink href="#contact" label="Contact" />
        </div>
        <div className="mr-5">
          <NavLink href="#contact" label="Let's build" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
