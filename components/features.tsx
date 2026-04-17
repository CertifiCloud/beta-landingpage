import {
  BrainCircuit,
  CalendarClock,
  ScanSearch,
  Sparkles,
  StretchHorizontal,
  Target,
  TimerReset,
} from "lucide-react";

import { benefitCards } from "@/lib/data";

const icons = [TimerReset, ScanSearch, BrainCircuit, CalendarClock];
const cardBadges = ["Revisao", "Simulado", "Tutor IA", "Rotina"] as const;
const quickHighlights = [
  { label: "Menos conteudo solto", icon: Sparkles },
  { label: "Mais clareza", icon: Target },
  { label: "Ritmo constante", icon: StretchHorizontal },
] as const;

export function Features() {
  return (
    <section id="beneficios" className="scroll-mt-28 px-3 py-20 md:px-6 md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Beneficios</span>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {quickHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-5 py-5 text-left"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-[var(--color-text-strong)]">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm font-medium text-[var(--color-text-soft)]">
            Menos ruido. Mais direcao para estudar.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {benefitCards.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="glass-card overflow-hidden p-0">
                <div className="flex items-center justify-between border-b border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] px-6 py-4">
                  <span className="icon-shell shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                    {cardBadges[index]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-[-0.05em] text-[var(--color-text-strong)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
                    {item.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-soft)] px-3 py-2 text-sm font-medium text-[var(--color-primary)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    {item.impact}
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
