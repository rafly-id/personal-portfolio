import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  useGSAP(() => {
    gsap.from(".nav-text", {
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
    <nav className="nav-fixed py-5 bg-black/50 md:bg-transparent">
      <div className="flex-center justify-between px-5 md:px-0">
        <div className="md:p-5">
          <h1 className="nav-text opacity-100">Raf</h1>
        </div>
        <div className="flex md:p-5 gap-3 md:gap-10">
          <a href="#" className="nav-text Clickable px-2 opacity-100">
            Home
          </a>
          <a href="#" className="nav-text opacity-100">
            Project
          </a>
          <a href="#" className="nav-text opacity-100">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
