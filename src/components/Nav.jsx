import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { slideUpTextHover } from "/src/utils/gsapHover";

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
    const cleanup = slideUpTextHover({
      container: navRef.current,
      itemSelector: ".nav-text:not(.nav-hover)",
      defaultTxtSel: ".text-default",
      hoverTxtSel: ".nav-hover",
    });
    return cleanup;
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
