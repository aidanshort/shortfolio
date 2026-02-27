"use client";

import { useEffect, useRef, useState } from "react";
import type { PropsWithChildren } from "react";

type ScrollFadeSectionProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

const MIN_OPACITY = 0.55;
const MAX_OPACITY = 1;

export default function ScrollFadeSection({
  id,
  className,
  children,
}: ScrollFadeSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(MAX_OPACITY);

  useEffect(() => {
    let frameId = 0;

    const updateOpacity = () => {
      const node = sectionRef.current;
      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      const normalizedDistance = Math.min(distanceFromCenter / viewportCenter, 1);
      const nextOpacity =
        MAX_OPACITY - normalizedDistance * (MAX_OPACITY - MIN_OPACITY);

      setOpacity(nextOpacity);
    };

    const onScrollOrResize = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(updateOpacity);
    };

    updateOpacity();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const layer = Math.round(opacity * 10);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative transition-opacity duration-200 ease-out ${className ?? ""}`}
      style={{ opacity, zIndex: layer }}
    >
      {children}
    </section>
  );
}
