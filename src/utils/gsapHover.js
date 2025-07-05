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

    const onMouseEnter = () => {
      tl.play();
      onEnter?.(item, tl);
    };
    const onMouseLeave = () => {
      tl.reverse();
      onLeave?.(item, tl);
      tl.eventCallback("onReverseComplete", () => {
        gsap.set([defaultTxt, hoverTxt], { clearProps: "transform,opacity" });
      });
    };
    item.addEventListener("mouseenter", onMouseEnter);
    item.addEventListener("mouseleave", onMouseLeave);

    item._onMouseEnter = onMouseEnter;
    item._onMouseLeave = onMouseLeave;
  });

  return () => {
    items.forEach((item) => {
      if (item._onMouseEnter)
        item.removeEventListener("mouseenter", item._onMouseEnter);
      if (item._onMouseLeave)
        item.removeEventListener("mouseleave", item._onMouseLeave);
      delete item._onMouseEnter;
      delete item._onMouseLeave;
    });
  };
}

export function slideUpTextWithBgHover({
  container,
  itemSelector,
  defaultTxtSel,
  hoverTxtSel,
  overlaySel, // selector overlay
  textColor = "#d3d0d7",
  bgColor = "#000",
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

    const onMouseEnter = () => {
      tlBg.play();
      tlText.play();
    };
    const onMouseLeave = () => {
      tlBg.reverse();
      tlText.reverse();
    };
    item.addEventListener("mouseenter", onMouseEnter);
    item.addEventListener("mouseleave", onMouseLeave);

    item._onMouseEnter = onMouseEnter;
    item._onMouseLeave = onMouseLeave;
  });

  return () => {
    items.forEach((item) => {
      if (item._onMouseEnter)
        item.removeEventListener("mouseenter", item._onMouseEnter);
      if (item._onMouseLeave)
        item.removeEventListener("mouseleave", item._onMouseLeave);
      delete item._onMouseEnter;
      delete item._onMouseLeave;
    });
  };
}
