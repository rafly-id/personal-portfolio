import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
    const element = document.querySelector(target);

    if (smoother && element) {
      smoother.scrollTo(target, true, "center center");
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const NavLink = ({ href, label }) => {
    const isAnchor = href.startsWith("#");
    const isMailto = href.startsWith("mailto:");

    if (isAnchor) {
      return (
        <div className="nav-text relative overflow-hidden cursor-pointer">
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(href);
            }}
            className="block"
          >
            <span className="text-default block opacity-80">{label}</span>
            <span className="nav-hover absolute top-0 left-0 block opacity-0">
              {label}
            </span>
          </a>
        </div>
      );
    }

    return (
      <div className="nav-text relative overflow-hidden cursor-pointer">
        <a
          href={href}
          className="block"
          target={isMailto ? undefined : "_blank"}
          rel={isMailto ? undefined : "noopener noreferrer"}
        >
          <span className="text-default block opacity-80">{label}</span>
          <span className="nav-hover absolute top-0 left-0 block opacity-0">
            {label}
          </span>
        </a>
      </div>
    );
  };

  return (
    <nav
      className="nav-fixed bg-hitam text-putih px-2 md:px-5 py-1 -tracking-widest"
      ref={navRef}
    >
      <div className="flex justify-between text-xl md:text-4xl font-black uppercase">
        <div className="flex gap-2 md:gap-5">
          <NavLink href="#home" label="Raf" />
          <NavLink href="#about" label="About" />
          <NavLink href="#project" label="Project" />
          <NavLink href="#contact" label="Contact" />
        </div>
        <NavLink href="mailto:muhr0417@gmail.com" label="Let's build" />
      </div>
    </nav>
  );
};

export default Nav;
