import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { slideUpTextHover } from "/src/utils/gsapHover";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const navRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    const items = navRef.current.querySelectorAll(".nav-text");
    gsap.from(items, {
      opacity: 0,
      y: 5,
      ease: "power2.inOut",
      stagger: { each: 0.1, from: "start" },
    });
  }, [location.pathname]);

  useEffect(() => {
    const cleanup = slideUpTextHover({
      container: navRef.current,
      itemSelector: ".nav-text:not(.nav-hover)",
      defaultTxtSel: ".text-default",
      hoverTxtSel: ".nav-hover",
    });
    return cleanup;
  }, [location.pathname]);

  const handleScroll = (target) => {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(target, true, "center center");
  };

  const NavLink = ({ href, label }) => {
    const isRoute = href.startsWith("/");
    const isAnchor = href.startsWith("#");
    const isMailto = href.startsWith("mailto:");
    const isActiveRoute = isRoute && location.pathname === href;
    const extraClasses = isActiveRoute ? "nav-hover" : "";
    const defaultOpacity = isActiveRoute ? "opacity-100" : "opacity-30";

    if (isRoute) {
      return (
        <div
          className={`nav-text relative overflow-hidden cursor-pointer ${extraClasses}`}
        >
          <Link to={href} className="block">
            <span className={`text-default block ${defaultOpacity}`}>
              {label}
            </span>
            {!isActiveRoute && (
              <span className="nav-hover absolute top-0 left-0 block opacity-0">
                {label}
              </span>
            )}
          </Link>
        </div>
      );
    }

    if (isAnchor) {
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
            {!extraClasses && (
              <span className="nav-hover absolute top-0 left-0 block opacity-0">
                {label}
              </span>
            )}
          </a>
        </div>
      );
    }

    // External dan mailto: biarkan default browser menangani
    return (
      <div
        className={`nav-text relative overflow-hidden cursor-pointer ${extraClasses}`}
      >
        <a
          href={href}
          className="block"
          target={isMailto ? undefined : "_blank"}
          rel={isMailto ? undefined : "noopener noreferrer"}
        >
          <span className={`text-default block ${defaultOpacity}`}>
            {label}
          </span>
          {!extraClasses && (
            <span className="nav-hover absolute top-0 left-0 block opacity-0">
              {label}
            </span>
          )}
        </a>
      </div>
    );
  };

  return (
    <nav
      className="nav-fixed bg-hitam text-putih px-5 -tracking-widest"
      ref={navRef}
    >
      <div className="flex justify-between text-sm md:text-4xl font-black uppercase">
        <div className="flex gap-2 md:gap-5">
          <NavLink href="/" label="Raf" />
          <NavLink href="/work" label="Project" />
          <NavLink href="#contact" label="Contact" />
        </div>
        <NavLink href="mailto:muhr0417@gmail.com" label="Let's build" />
      </div>
    </nav>
  );
};

export default Nav;
