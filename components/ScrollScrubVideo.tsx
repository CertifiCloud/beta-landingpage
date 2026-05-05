"use client";

import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ScrollScrubVideoProps = {
  src: string;
  className?: string;
};

export function ScrollScrubVideo({ src, className }: ScrollScrubVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastProgress = useRef(0);
  const directionRef = useRef<"down" | "up">("down");
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 82%", "end 62%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const video = videoRef.current;

    if (latest > lastProgress.current) {
      directionRef.current = "down";
    } else {
      directionRef.current = "up";
    }

    lastProgress.current = latest;

    if (!video || !duration || !ready) {
      return;
    }

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      const clamped = Math.min(Math.max(latest, 0.03), 0.72);
      const raw = (clamped - 0.03) / 0.69;

      let adjusted;

      if (directionRef.current === "down") {
        adjusted = Math.pow(raw, 0.32);
      } else {
        adjusted = Math.pow(raw, 1.55);
      }

      const smoothed = adjusted * 0.85 + raw * 0.15;

      video.currentTime = smoothed * duration;
    });
  });

  return (
    <div ref={containerRef} className={`relative h-full w-full ${className ?? ""}`}>
      <div className="sticky top-[12vh] flex h-[70vh] w-full items-center justify-center">
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-[14%] -z-10 rounded-full bg-blue-500/18 blur-3xl" />
          <video
            ref={videoRef}
            src={src}
            muted
            playsInline
            preload="auto"
            className="h-auto max-h-[640px] w-full max-w-[520px] object-contain mix-blend-multiply [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]"
            onLoadedMetadata={(event) => {
              const video = event.currentTarget;
              video.pause();
              video.currentTime = 0;
              setDuration(video.duration);
              setReady(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
