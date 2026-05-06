"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { CloudStudyIntro } from "./CloudStudyIntro";

const SESSION_KEY = "cloudstudy-intro-played";

export function IntroGate({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    let alreadyPlayed: string | null = null;

    try {
      alreadyPlayed = sessionStorage.getItem(SESSION_KEY);
    } catch {
      alreadyPlayed = SESSION_KEY;
    }

    if (alreadyPlayed) {
      return () => {
        root.style.overflow = previousHtmlOverflow;
        body.style.overflow = previousBodyOverflow;
      };
    }

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    setShowIntro(true);

    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // Sem armazenamento disponivel, apenas fecha a intro.
      }
      setShowIntro(false);
      root.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    }, prefersReducedMotion ? 700 : 1700);

    return () => {
      window.clearTimeout(timer);
      root.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [prefersReducedMotion]);

  return (
    <>
      {showIntro ? <CloudStudyIntro /> : null}
      {children}
    </>
  );
}
