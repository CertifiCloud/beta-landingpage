"use client";

import { useCallback, useLayoutEffect, useState } from "react";

import { CloudStudyIntro } from "./CloudStudyIntro";

type IntroPhase = "playing" | "complete";

export function IntroGate({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<IntroPhase>("playing");
  const isContentVisible = phase === "complete";
  const shouldShowIntro = phase !== "complete";

  const completeIntro = useCallback(() => {
    setPhase("complete");
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (phase === "complete") {
      root.style.overflow = "";
      body.style.overflow = "";
      return;
    }

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
  }, [phase]);

  return (
    <>
      <noscript>
        <style>{`.cloudstudy-intro-overlay{display:none !important}.cloudstudy-intro-content{opacity:1 !important;pointer-events:auto !important}`}</style>
      </noscript>
      {shouldShowIntro ? <CloudStudyIntro onComplete={completeIntro} /> : null}
      <div
        className={`cloudstudy-intro-content transition-opacity duration-500 ${
          isContentVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isContentVisible}
      >
        {children}
      </div>
    </>
  );
}
