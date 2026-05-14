"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type CloudStudyIntroProps = {
  onComplete: () => void;
};

const ROBOT_PLAYBACK_RATE = 1.35;

export function CloudStudyIntro({ onComplete }: CloudStudyIntroProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasCompletedRef = useRef(false);
  const safetyTimerRef = useRef<number | null>(null);

  const clearSafetyTimer = () => {
    if (safetyTimerRef.current !== null) {
      window.clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  };

  const completeIntro = () => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    clearSafetyTimer();
    onComplete();
  };

  useEffect(() => {
    if (!prefersReducedMotion) return;

    const timer = window.setTimeout(() => {
      completeIntro();
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    return () => {
      clearSafetyTimer();
    };
  }, []);

  return (
    <motion.div
      className="cloudstudy-intro-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      aria-hidden="true"
    >
      <div className="w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-transparent">
        <video
          autoPlay
          muted
          playsInline
          className="block h-full w-full rounded-[1.5rem] object-cover"
          onEnded={completeIntro}
          onError={completeIntro}
          onLoadedMetadata={(event) => {
            if (prefersReducedMotion) return;

            const video = event.currentTarget;
            video.playbackRate = ROBOT_PLAYBACK_RATE;

            clearSafetyTimer();
            const duration = Number.isFinite(video.duration) ? video.duration : 0;
            const expectedMs = duration > 0 ? (duration / ROBOT_PLAYBACK_RATE) * 1000 : 7000;

            // Fallback de segurança com folga para nunca cortar o final da intro.
            safetyTimerRef.current = window.setTimeout(() => {
              completeIntro();
            }, Math.ceil(expectedMs + 1500));
          }}
        >
          <source src="/robo-da-maldade.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
}
