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
      <div className="flex items-center justify-between px-5 md:px-0">
        <div className="md:p-5">
          <h1 className="nav-text">Raf</h1>
        </div>
        <div className="flex md:p-5 gap-3 md:gap-10">
          <a href="#" className="nav-text Clickable px-2">
            Home
          </a>
          <a href="#" className="nav-text">
            Project
          </a>
          <a href="#" className="nav-text">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
