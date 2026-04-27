import { BrainCircuit, CheckCircle2, GraduationCap, Route } from "lucide-react";

import { howItWorksSteps } from "@/lib/data";

const stepIcons = [GraduationCap, Route, BrainCircuit, CheckCircle2];

export function Solution() {
  return (
    <section id="como-funciona" className="scroll-mt-28 px-3 py-14 md:px-6 md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="section-title mt-5">Do objetivo a aprovacao, em 4 passos claros.</h2>
          <p className="section-copy mt-5">
            A jornada foi desenhada para reduzir o caos do estudo solto e mostrar, todos os
            dias, o que vale mais a pena fazer em seguida.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {howItWorksSteps.map((item, index) => {
              const Icon = stepIcons[index];

              return (
                <article key={item.step} className="glass-card p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="icon-shell">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-[linear-gradient(135deg,#2d8cff_0%,#0b2f66_100%)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-[-0.05em] text-[var(--color-text-strong)] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{item.description}</p>
                  <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">{item.detail}</div>
                </article>
              );
            })}
          </div>

          <div className="glass-panel p-4 md:p-6">
            <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] p-5">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
                Exemplo de operacao semanal
              </div>
              <div className="mt-4 text-xl font-semibold tracking-[-0.05em] text-[var(--color-text-strong)] md:text-2xl">
                Seu plano da semana
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Licao 1: IAM sem enrolacao",
                  "Lab guiado: Amazon S3 na pratica",
                  "Simulado adaptativo com 20 questoes",
                  "Revisao final com o tutor IA",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[1.15rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-4 py-3"
                  >
                    <span className="text-sm text-[var(--color-text)]">{item}</span>
                    <span className="text-sm font-semibold text-[var(--color-primary)]">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] p-5">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
                  Proximo passo
                </div>
                <div className="mt-3 text-base font-semibold tracking-[-0.03em] text-[var(--color-text-strong)] md:text-lg">
                  Reforcar VPC e subir o simulado final
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[linear-gradient(170deg,#0b2f66_0%,#071a39_100%)] p-5">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-on-cta-soft)]">
                  Nivel de confianca
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">78%</div>
                <div className="mt-2 text-sm text-[var(--color-text-on-cta-soft)]">
                  Rumo a primeira tentativa com mais seguranca
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
