import { useRef, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { slideUpTextWithBgHover } from "/src/utils/gsapHover";
import { useScrollAnimation } from "../utils/scrollAnimation";

import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";

const projects = [
  {
    id: 1,
    label: "Movie App",
    url: "https://rafly-id-try-movie-app.vercel.app/",
    img: project1,
  },
  {
    id: 2,
    label: "Awward App",
    url: "https://rafly-id-awwward.vercel.app/",
    img: project2,
  },
  {
    id: 3,
    label: "Portfolio App",
    url: "https://raf-personal-portfolio.vercel.app/",
    img: project3,
  },
  {
    id: 4,
    label: "Todo App",
    url: "https://id-camp-todoapps.vercel.app/",
    img: project4,
  },
  {
    id: 5,
    label: "Final Exam App",
    url: "https://web-client-uas-raflylucky.vercel.app/",
    img: project5,
  },
];

export default function Project() {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".project-item",
  });

  useLayoutEffect(() => {
    const cleanupHover = slideUpTextWithBgHover({
      container: sectionRef.current,
      itemSelector: ".project-item",
      defaultTxtSel: ".text-default",
      hoverTxtSel: ".project-hover",
      overlaySel: ".bg-overlay",
      textColor: "#d3d0d7",
      bgColor: "#212121",
    });

    gsap.set(previewRef.current, { autoAlpha: 0, x: 0, y: 0 });

    return () => {
      cleanupHover();
      gsap.killTweensOf(previewRef.current);
    };
  }, []);

  const onMouseEnter = useCallback((e, imgUrl) => {
    const el = previewRef.current;
    gsap.set(el, { backgroundImage: `url(${imgUrl})` });
    gsap.to(el, {
      duration: 0.3,
      autoAlpha: 1,
      x: e.clientX + 10,
      y: e.clientY + 10,
      ease: "power3.out",
    });
  }, []);

  const onMouseMove = useCallback((e) => {
    gsap.to(previewRef.current, {
      duration: 0.1,
      x: e.clientX + 10,
      y: e.clientY + 10,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    gsap.to(previewRef.current, { duration: 0.2, autoAlpha: 0 });
  }, []);

  const previewPortal = createPortal(
    <div
      ref={previewRef}
      className="fixed w-80 h-40 bg-center bg-cover pointer-events-none z-50 filter grayscale"
      style={{ top: 0, left: 0 }}
    />,
    document.body
  );

  return (
    <>
      {previewPortal}
      <section ref={sectionRef} className="pb-[100px] md:pb-[250px] w-full" id="project">
        <div className="text-xl md:text-5xl font-black uppercase">
          <div className="text-xs font-light mb-2 ml-5">
            <h1>project</h1>
          </div>
          <div>
            {projects.map(({ id, label, url, img }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item relative flex border-b py-3 md:py-5 justify-between cursor-pointer overflow-hidden"
                onMouseEnter={(e) => onMouseEnter(e, img)}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
              >
                <div className="bg-overlay"></div>
                <div className="project-text relative overflow-hidden z-10">
                  <span className="text-default block">{label}</span>
                  <span className="project-hover absolute top-0 left-0 block">
                    {label}
                  </span>
                </div>
                <div className="project-text relative overflow-hidden z-10">
                  <span className="text-default block">project</span>
                  <span className="project-hover absolute top-0 left-0 block">
                    See Site
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
