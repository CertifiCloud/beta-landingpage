import { BrainCircuit, Cloud, Network, Sparkles, Star, TrendingUp } from "lucide-react";

import { certificationOfferCards } from "@/lib/data";

const icons = [Cloud, Network, BrainCircuit];

const accentStyles = {
  primary: {
    badge: "bg-[var(--color-primary-soft)] text-[var(--color-text-strong)]",
    cardGlow: "bg-[var(--color-bg-tint)]",
    chip: "bg-[var(--color-primary-soft)] text-[var(--color-text-strong)]",
  },
  warning: {
    badge: "bg-[var(--color-blue-200)] text-[var(--color-text-strong)]",
    cardGlow: "bg-[var(--color-blue-200)]",
    chip: "bg-[var(--color-blue-200)] text-[var(--color-text-strong)]",
  },
  success: {
    badge: "bg-[var(--color-bg-tint)] text-[var(--color-text-strong)]",
    cardGlow: "bg-[var(--color-bg-tint)]",
    chip: "bg-[var(--color-bg-tint)] text-[var(--color-text-strong)]",
  },
} as const;

export function Certifications() {
  return (
    <section id="certificacoes" className="scroll-mt-28 px-3 py-14 md:px-6 md:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            O que voce vai estudar
          </span>
          <h2 className="section-title mt-5 text-balance">
            As 3 certificacoes AWS com mais aderencia ao mercado.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 xl:grid-cols-3">
          {certificationOfferCards.map((item, index) => {
            const Icon = icons[index];
            const accent = accentStyles[item.accent];

            return (
              <article
                key={item.title}
                className="glass-card group relative overflow-hidden p-6 md:p-7"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-28 opacity-90 blur-3xl transition group-hover:opacity-100 ${accent.cardGlow}`}
                />

                <div className="relative flex min-h-[17rem] flex-col md:min-h-[20rem]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                      {item.eyebrow}
                    </div>
                    <div
                      className={`inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.6rem] border border-[var(--color-border-soft)] shadow-[var(--shadow-card)] ${accent.badge}`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-display text-[1.65rem] leading-[1.02] tracking-[-0.06em] text-[var(--color-text-strong)] md:text-[2rem]">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-sm text-base leading-7 md:leading-8 text-[var(--color-text-soft)]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between gap-3 rounded-[1.25rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] px-4 py-3">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-strong)]">
                        <TrendingUp className="h-4 w-4 text-[var(--color-primary)]" />
                        {item.meta}
                      </div>
                      <div
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${accent.chip}`}
                      >
                        <Star className="h-3.5 w-3.5 fill-current" />
                        Trilha guiada
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
