import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { certificationProgress, waitlistLink } from "@/lib/data";

const progressColors = [
  "linear-gradient(90deg, #2d8cff 0%, #0b2f66 100%)",
  "linear-gradient(90deg, #5bb0ff 0%, #2d8cff 100%)",
  "linear-gradient(90deg, #0b2f66 0%, #06172f 100%)",
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-3 pb-14 pt-20 md:px-6 md:pb-28 md:pt-36">
      <div className="section-shell grid items-center gap-10 md:gap-12 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            CloudStudy para certificacoes AWS
          </span>

          <h1 className="hero-title mt-6 text-balance">
            Sua preparação AWS
            <span className="bg-[linear-gradient(135deg,#2d8cff_0%,#0b2f66_100%)] bg-clip-text text-transparent">
              {" "}
              com direcionamento claro.
            </span>
          </h1>

          <p className="section-copy mt-5 max-w-2xl text-base md:mt-6 md:text-lg">
            CloudStudy organiza sua preparacao em trilhas adaptativas, simulados inteligentes
            e um painel que mostra com clareza o proximo passo para voce passar em AWS.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a href={waitlistLink} className="primary-button sm:w-auto">
              Comecar agora gratis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#como-funciona" className="secondary-button sm:w-auto">
              Ver como funciona
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2.5 md:mt-7 md:gap-3">
            {[
              "Sem cartao de credito",
              "Trilha guiada por IA",
              "Foco total em AWS",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-3 py-1.5 text-[0.68rem] font-medium text-[var(--color-text-soft)] md:text-xs"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] px-6 py-5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[var(--color-danger)]" />
              <span className="h-3 w-3 rounded-full bg-[var(--color-warning)]" />
              <span className="h-3 w-3 rounded-full bg-[var(--color-success)]" />
            </div>
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
              Painel CloudStudy
            </div>
          </div>

          <div className="space-y-4 p-4 md:p-6">
            <div className="grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
                      Certificacao alvo
                    </div>
                    <div className="mt-2 text-xl font-semibold tracking-[-0.05em] text-[var(--color-text-strong)] md:text-2xl">
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

              <div className="rounded-[1.5rem] bg-[linear-gradient(165deg,#0b2f66_0%,#071a39_100%)] p-5 text-[var(--color-text-on-cta)]">
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

                <div className="mt-5 rounded-2xl border border-[var(--color-border-cta)] bg-[var(--color-cta-soft)] px-3 py-2 text-xs text-[var(--color-text-on-cta-soft)]">
                  Resposta contextual em segundos
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
                  Progresso em tempo real
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-text-strong)]">
                  <TrendingUp className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                  Evolucao semanal
                </div>
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
                          background: progressColors[index],
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
