import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ duration = 3, onComplete }) => {
  const countRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };
    const tl = gsap.timeline();

    tl.to(counter, {
      value: 100,
      duration,
      roundProps: 'value',
      ease: 'power1.out',
      onUpdate: () => {
        countRef.current.textContent = `${counter.value}%`;
      },
    })
    .to(loaderRef.current, {
      y: '-100vh',
      duration: 1,
      ease: 'power2.inOut',
      onComplete: onComplete,
    });

    return () => tl.kill();
  }, [duration, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-hitam text-putih"
    >
      <span ref={countRef} className="text-4xl font-bold">0%</span>
    </div>
  );
};

export default Preloader;
