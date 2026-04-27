"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { navLinks, waitlistLink } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto max-w-6xl">
        <div className="nav-shell">
          <div className="flex items-center justify-between gap-6 px-4 py-3 md:px-6">
            <Link href="#top" className="shrink-0">
              <BrandMark compact />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={waitlistLink}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-5 py-3 text-sm font-medium text-[var(--color-text-strong)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Falar com o time
              </a>
              <a href={waitlistLink} className="primary-button px-5 py-3 text-sm">
                Comecar gratis
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-[var(--color-text-strong)] lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen ? (
            <div className="border-t border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-4 py-4 lg:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] px-4 py-3 text-sm font-medium text-[var(--color-text-strong)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={waitlistLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-5 py-3 text-sm font-medium text-[var(--color-text-strong)]"
                >
                  Falar com o time
                </a>
                <a href={waitlistLink} className="primary-button justify-center px-5 py-3 text-sm">
                  Comecar gratis
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
