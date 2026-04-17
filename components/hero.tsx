import { ArrowRight, BrainCircuit, CalendarDays, Sparkles } from "lucide-react";

import { certificationProgress, waitlistLink } from "@/lib/data";

const progressColors = [
  "var(--color-success)",
  "var(--color-primary)",
  "var(--color-warning)",
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-3 pb-20 pt-32 md:px-6 md:pb-28 md:pt-36">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            CloudStudy para certificacoes AWS
          </span>

          <h1 className="hero-title mt-6 text-balance">
            Sua jornada para a certificacao AWS, guiada passo a passo.
          </h1>

          <p className="section-copy mt-6 max-w-2xl text-lg">
            CloudStudy organiza o estudo em trilhas adaptativas com IA, simulados
            inteligentes e um painel que mostra exatamente o que fazer em seguida.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={waitlistLink} className="primary-button">
              Comecar agora gratis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#como-funciona" className="secondary-button">
              Ver como funciona
            </a>
          </div>

          <p className="mt-3 text-sm text-[var(--color-muted-strong)]">
            Sem cartao de credito, cancele quando quiser.
          </p>
        </div>

        <div className="glass-panel overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] px-6 py-5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[var(--color-danger)]" />
              <span className="h-3 w-3 rounded-full bg-[var(--color-warning)]" />
              <span className="h-3 w-3 rounded-full bg-[var(--color-success)]" />
            </div>
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
              Painel do aluno
            </div>
          </div>

          <div className="space-y-4 p-6">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
                      Certificacao alvo
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[var(--color-text-strong)]">
                      AWS Solutions Architect
                    </div>
                  </div>
                  <span className="data-pill">SAA-C03</span>
                </div>

                <div className="mt-5 rounded-[1.25rem] bg-[var(--color-bg-soft)] p-4">
                  <div className="flex items-center gap-3 text-sm text-[var(--color-text-strong)]">
                    <CalendarDays className="h-4 w-4 text-[var(--color-primary)]" />
                    Hoje: IAM, VPC e 1 simulado guiado
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[var(--color-bg-cta)] p-5 text-[var(--color-text-on-cta)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-cta-soft)] text-[var(--color-warning)]">
                    <BrainCircuit className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-warning)]">
                      Tutor IA
                    </div>
                    <div className="mt-1 text-sm text-[var(--color-text-on-cta-soft)]">
                      "Explique S3 x EBS sem jargao"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] p-5">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
                Progresso em tempo real
              </div>

              <div className="mt-5 space-y-4">
                {certificationProgress.map((item, index) => (
                  <div key={item.title}>
                    <div className="mb-2 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-[var(--color-text-strong)]">{item.title}</div>
                        <div className="text-xs text-[var(--color-muted-strong)]">{item.subtitle}</div>
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-text-strong)]">{item.value}%</div>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-bg-soft)]">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${item.value}%`,
                          backgroundColor: progressColors[index],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
