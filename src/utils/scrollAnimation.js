import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation({
  ref,
  itemSelector = ".animate-item",
  gsapVars = {},
  varsFn,
  triggerOptions = {},
  options = {},
}) {
  useGSAP(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(itemSelector);
    if (!items.length) return;

    const animationVars = varsFn ? varsFn(items) : gsapVars;

    const smoother = ScrollSmoother.get();
    const scrollerOption = smoother
      ? { scroller: "#wrapper-smooth" }
      : {};

    const anim = gsap.from(items, {
      opacity: 0,
      y: 25,
      duration: 1,
      stagger: 0.5,
      ease: "power2.inOut",
      ...options,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "top center",
        ...scrollerOption,
        ...triggerOptions,
      },
      ...animationVars,
    });

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);
}
