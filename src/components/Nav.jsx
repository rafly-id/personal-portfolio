import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Nav = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    const items = navRef.current.querySelectorAll(".nav-text");
    gsap.from(items, {
      opacity: 0,
      y: 5,
      ease: "power3.in",
      stagger: {
        each: 0.1,
        from: "start",
      },
    });
  });

  return (
    <nav className="nav-fixed md:bg-transparent bg-black md:mx-5" ref={navRef}>
      <div className="flex justify-between text-sm md:text-4xl font-black uppercase">
        <div className="flex gap-2 md:gap-5">
          <h1 className="nav-text opacity-100"><a href="#">Raf</a></h1>
          <a href="#" className="nav-text opacity-50">
            About
          </a>
          <a href="#" className="nav-text opacity-50">
            Project
          </a>
          <a href="#" className="nav-text opacity-50">
            Contact
          </a>
        </div>
        <div>
          <a href="#" className="nav-text mr-5 opacity-50">Let's build</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
