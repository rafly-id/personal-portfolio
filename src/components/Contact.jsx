import { useRef, useLayoutEffect, useCallback } from "react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { slideUpTextHover } from "../utils/gsapHover";
import { useScrollAnimation } from "../utils/scrollAnimation";

const primaryLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rafly-adriansyah-35587225b/",
    label: "LinkedIn",
  },
  { href: "https://www.instagram.com/__rafllyy/", label: "Instagram" },
  { href: "https://github.com/rafly-id", label: "GitHub" },
  { href: "mailto:muhr0417@gmail.com", label: "Email" },
];

const HoverLink = ({ href, label, onClick, external, download }) => (
  <div className="relative overflow-hidden contact-hover cursor-pointer">
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
      className="block relative"
    >
      <span className="text-default block">{label}</span>
      <span className="nav-hover absolute top-0 left-0 block opacity-0">
        {label}
      </span>
    </a>
  </div>
);

const Contact = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = slideUpTextHover({
      container: sectionRef.current,
      itemSelector: ".contact-hover",
      defaultTxtSel: ".text-default",
      hoverTxtSel: ".nav-hover",
    });
    return cleanup;
  }, []);

  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".title",
    triggerOptions: {
      start: "top bottom",
    },
  });

  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".ani",
    triggerOptions: {
      start: "center bottom",
      markers: true,
    },
    options: {
      stagger: 0.2,
    },
  });

  const handleScroll = useCallback((href) => {
    const smoother = ScrollSmoother.get();
    const element = document.querySelector(href);
    if (element) {
      smoother
        ? smoother.scrollTo(href, true, "center center")
        : element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const whatsappLink = `https://wa.me/6285974111131?text=${encodeURIComponent(
    "Halo Rafly "
  )}`;
  const cvLink = "/CV_Rafly_Adriansyah.pdf";

  return (
    <section id="contact" ref={sectionRef} className="uppercase pb-5">
      <div className="text-center mb-5 font-light text-xs md:text-sm tracking-widest">
        <h2 className="title">CONTACT</h2>
      </div>

      <h1 className="text-lg md:text-xl font-black -tracking-widest border-b pb-4 mb-12 md:mb-20 mx-5">
        LET'S TALK :
      </h1>

      <div className="flex justify-around items-center px-5 mb-12 font-oswald text-xl md:text-7xl">
        <div className="ani p-5 md:p-30 rounded-2xl">
          <HoverLink href={whatsappLink} label="WhatsApp" external />
        </div>
        <div className="ani p-5 md:p-30 rounded-2xl">
          <HoverLink href={cvLink} label="Download CV" download />
        </div>
      </div>

      <nav
        aria-label="Contact Navigation"
        className="border-t mt-5 md:mt-20 mx-5 pt-6"
      >
        <div className="flex flex-wrap justify-between items-baseline gap-y-4 text-xs md:text-sm font-light -tracking-wider">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <div className="flex items-baseline gap-2">
              <h2 className="font-semibold">LINKS</h2>
              {primaryLinks.map(({ href, label }) => (
                <div className="ani">
                  <HoverLink
                    key={href}
                    href={href}
                    label={label}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(href);
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-2">
              <h2 className="font-semibold">SOCIAL</h2>
              {socialLinks.map(({ href, label }) => (
                <div className="ani">
                  <HoverLink key={href} href={href} label={label} external />
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-right">
            <p>RAFLY ADRIANSYAH © {new Date().getFullYear()}</p>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Contact;
