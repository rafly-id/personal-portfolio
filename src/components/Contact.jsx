import { useCallback, useLayoutEffect, useRef } from "react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { slideUpTextHover } from "../utils/gsapHover";

const Contact = () => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (!navRef.current) return;
    const cleanup = slideUpTextHover({
      container: navRef.current,
      itemSelector: ".contact-hover",
      defaultTxtSel: ".text-default",
      hoverTxtSel: ".nav-hover",
    });
    return cleanup;
  }, []);

  const handleScroll = useCallback((target) => {
    const smoother = ScrollSmoother.get();
    const element = document.querySelector(target);

    if (smoother && element) {
      smoother.scrollTo(target, true, "center center");
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const handleBackToTop = useCallback(() => {
    handleScroll("#home");
  }, [handleScroll]);

  const primaryLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/__rafllyy/", label: "Instagram" },
    {
      href: "https://www.linkedin.com/in/rafly-adriansyah-35587225b/",
      label: "LinkedIn",
    },
    { href: "https://github.com/rafly-id", label: "GitHub" },
    { href: "mailto:muhr0417@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="pb-[25px] md:pb-[50px] uppercase">
      <h1 className="text-xs font-light mb-2 ml-5">Contact</h1>

      <nav ref={navRef} aria-label="Contact Navigation" className="border-t">
        <div className="flex justify-between items-center mx-5 mt-5 text-xs md:text-sm font-light -tracking-wider">
          <div className="flex flex-col space-y-2">
            {primaryLinks.map(({ href, label }) => (
              <div
                key={href}
                className="relative overflow-hidden contact-hover cursor-pointer"
              >
                <a
                  href={href}
                  className="block relative"
                  onClick={(e) => {
                    if (href.startsWith("#")) {
                      e.preventDefault();
                      handleScroll(href);
                    }
                  }}
                >
                  <span className="text-default block">{label}</span>
                  <span className="nav-hover absolute top-0 left-0 block opacity-0">
                    {label}
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="font-light text-xs md:text-sm">Build with me</span>
            <div className="relative overflow-hidden contact-hover cursor-pointer">
              <a
                href="mailto:muhr0417@gmail.com"
                className="block relative text-2xl md:text-4xl font-black -tracking-widest hover:underline"
              >
                <span className="text-default block">Let's Chat</span>
                <span className="nav-hover absolute top-0 left-0 block opacity-0">
                  Let's Chat
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-1 mt-4 md:mt-0 text-xs md:text-sm">
            {socialLinks.map(({ href, label }) => (
              <div
                key={href}
                className="relative overflow-hidden contact-hover cursor-pointer"
              >
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block relative hover:underline"
                >
                  <span className="text-default block">{label}</span>
                  <span className="nav-hover absolute top-0 left-0 block opacity-0">
                    {label}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Kembali ke atas halaman"
            className="text-6xl md:text-9xl font-black -tracking-widest hover:underline"
          >
            Back To Top
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Contact;
