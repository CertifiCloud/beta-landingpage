"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { CloudStudyIntro } from "./CloudStudyIntro";

const SESSION_KEY = "cloudstudy-intro-played";

export function IntroGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY);

    if (alreadyPlayed) {
      setReady(true);
      return () => {
        root.style.overflow = previousHtmlOverflow;
        body.style.overflow = previousBodyOverflow;
      };
    }

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    setShowIntro(true);

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setShowIntro(false);
      setReady(true);
      root.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    }, prefersReducedMotion ? 700 : 1700);

    return () => {
      window.clearTimeout(timer);
      root.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [prefersReducedMotion]);

  if (!ready && !showIntro) {
    return null;
  }

  return (
    <>
      {showIntro ? <CloudStudyIntro /> : null}
      {ready ? children : null}
    </>
  );
}
