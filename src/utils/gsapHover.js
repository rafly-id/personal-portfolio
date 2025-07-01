import gsap from "gsap";

export function slideUpTextHover({
  container, // DOM element parent container
  itemSelector, // selector tiap item
  defaultTxtSel, // selector teks default
  hoverTxtSel, // selector teks hover
  onEnter, // optional callback tambahan di mouseenter
  onLeave, // optional callback tambahan di mouseleave
  ease = "power3.out",
  durationText = 0.3,
}) {
  const items = container.querySelectorAll(itemSelector);
  items.forEach((item) => {
    const defaultTxt = item.querySelector(defaultTxtSel);
    const hoverTxt = item.querySelector(hoverTxtSel);

    const tl = gsap
      .timeline({ paused: true })
      .to(
        defaultTxt,
        {
          yPercent: -100,
          opacity: 0,
          duration: durationText,
          ease,
        },
        0
      )
      .fromTo(
        hoverTxt,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: durationText, ease },
        0
      );

    item.addEventListener("mouseenter", () => {
      tl.play();
      onEnter?.(item, tl);
    });
    item.addEventListener("mouseleave", () => {
      tl.reverse();
      onLeave?.(item, tl);
      tl.eventCallback("onReverseComplete", () => {
        gsap.set([defaultTxt, hoverTxt], { clearProps: "transform,opacity" });
      });
    });
  });

  // cleanup: return function untuk remove listener
  return () => {
    items.forEach((item) => {
      item.removeEventListener("mouseenter", () => {});
      item.removeEventListener("mouseleave", () => {});
    });
  };
}

export function slideUpTextWithBgHover({
  container,
  itemSelector,
  defaultTxtSel,
  hoverTxtSel,
  overlaySel, // selector overlay
  bgColor = "#d3d0d7",
  textColor = "#000",
  ease = "power2.inOut",
  durationBg = 0.3,
  durationText = 0.3,
}) {
  const items = container.querySelectorAll(itemSelector);
  items.forEach((item) => {
    const overlay = item.querySelector(overlaySel);
    const defaultTxt = item.querySelectorAll(defaultTxtSel);
    const hoverTxt = item.querySelectorAll(hoverTxtSel);

    // bg + container color timeline
    const tlBg = gsap
      .timeline({ paused: true })
      .fromTo(
        overlay,
        { yPercent: 100 },
        { yPercent: 0, duration: durationBg, ease },
        0
      )
      .to(
        item,
        {
          backgroundColor: bgColor,
          color: textColor,
          duration: durationBg,
          ease,
        },
        0
      );

    // text timeline
    const tlText = gsap
      .timeline({ paused: true })
      .to(
        defaultTxt,
        {
          yPercent: -100,
          opacity: 0,
          duration: durationText,
          ease,
        },
        0
      )
      .fromTo(
        hoverTxt,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: durationText, ease },
        0
      );

    item.addEventListener("mouseenter", () => {
      tlBg.play();
      tlText.play();
    });
    item.addEventListener("mouseleave", () => {
      tlBg.reverse();
      tlText.reverse();
    });
  });

  return () => {
    items.forEach((item) => {
      item.removeEventListener("mouseenter", () => {});
      item.removeEventListener("mouseleave", () => {});
    });
  };
}
