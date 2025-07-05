import {
  useRef,
  useLayoutEffect,
  useCallback,
  useState,
  useEffect,
} from "react";

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

const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const onTouch = () => {
      setIsTouch(true);
      window.removeEventListener("touchstart", onTouch, { passive: true });
    };
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () =>
      window.removeEventListener("touchstart", onTouch, { passive: true });
  }, []);
  return isTouch;
};

export default function Project() {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const isTouchDevice = useIsTouchDevice();

  const quickToFunctions = useRef({ x: null, y: null });

  useScrollAnimation({
    ref: sectionRef,
    itemSelector: ".project-item",
    options: {
      stagger: 0.2,
    },
  });

  useLayoutEffect(() => {
    if (!isTouchDevice) {
      const cleanupHover = slideUpTextWithBgHover({
        container: sectionRef.current,
        itemSelector: ".project-item",
        defaultTxtSel: ".text-default",
        hoverTxtSel: ".project-hover",
        overlaySel: ".bg-overlay",
        textColor: "#d3d0d7",
        bgColor: "#212121",
      });

      gsap.set(previewRef.current, { autoAlpha: 0 });

      quickToFunctions.current.x = gsap.quickTo(previewRef.current, "x", {
        duration: 0.5,
        ease: "power3",
      });
      quickToFunctions.current.y = gsap.quickTo(previewRef.current, "y", {
        duration: 0.5,
        ease: "power3",
      });

      return () => {
        cleanupHover();
        gsap.killTweensOf(previewRef.current);
      };
    }
  }, [isTouchDevice]);

  const onMouseEnter = useCallback((imgUrl) => {
    const el = previewRef.current;
    gsap.killTweensOf(el, "autoAlpha");
    gsap.set(el, { backgroundImage: `url(${imgUrl})` });
    gsap.to(el, { duration: 0.3, autoAlpha: 1, ease: "power3.out" });
  }, []);

  const onMouseMove = useCallback((e) => {
    const previewElement = previewRef.current;
    if (!previewElement || !quickToFunctions.current.x) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const previewWidth = previewElement.offsetWidth;
    const previewHeight = previewElement.offsetHeight;
    const margin = 15;

    let targetX = clientX + margin;
    if (targetX + previewWidth > innerWidth) {
      targetX = clientX - previewWidth - margin;
    }

    let targetY = clientY + margin;
    if (targetY + previewHeight > innerHeight) {
      targetY = clientY - previewHeight - margin;
    }

    quickToFunctions.current.x(targetX);
    quickToFunctions.current.y(targetY);
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = previewRef.current;
    gsap.killTweensOf(el, "autoAlpha");
    gsap.to(el, { duration: 0.2, autoAlpha: 0 });
  }, []);

  const previewPortal =
    !isTouchDevice &&
    createPortal(
      <div
        ref={previewRef}
        className="fixed w-96 h-48 bg-center bg-cover pointer-events-none z-50 filter grayscale"
        style={{ top: 0, left: 0 }}
      />,
      document.body
    );

  return (
    <>
      {previewPortal}
      <section
        ref={sectionRef}
        className="pb-[100px] md:pb-[250px] w-full"
        id="project"
      >
        <div className="text-xl md:text-5xl font-black uppercase">
          <div className="text-center mb-5 font-light text-xs md:text-sm tracking-widest">
            <h2>project</h2>
          </div>
          <div>
            {projects.map(({ id, label, url, img }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item relative flex border-b py-3 md:py-5 justify-between cursor-pointer overflow-hidden"
                {...(!isTouchDevice && {
                  onMouseEnter: () => onMouseEnter(img),
                  onMouseMove: onMouseMove,
                  onMouseLeave: onMouseLeave,
                })}
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
