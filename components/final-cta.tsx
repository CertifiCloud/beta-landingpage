import { ArrowRight, ChevronDown, Rocket } from "lucide-react";

import { faqItems, waitlistLink } from "@/lib/data";

export function FinalCta() {
  return (
    <section id="faq" className="scroll-mt-28 px-3 py-20 md:px-6 md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-3 lg:pt-4">
            {faqItems.map((item) => (
              <details key={item.question} className="glass-card group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-medium text-[var(--color-text-strong)]">{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--color-primary)] transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-[var(--color-text-soft)]">{item.answer}</p>
              </details>
            ))}
        </div>

        <div className="rounded-[2.5rem] bg-[var(--color-bg-cta)] px-8 py-12 text-[var(--color-text-on-cta)] md:px-10 md:py-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-cta)] bg-[var(--color-cta-soft)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-warning)]">
            <Rocket className="h-3.5 w-3.5" />
            Comece com mais confianca
          </span>

          <h3 className="mt-6 font-display text-4xl tracking-[-0.06em] text-[var(--color-text-on-cta)] md:text-5xl">
            Transforme estudo solto em uma jornada guiada.
          </h3>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-on-cta-soft)]">
            CloudStudy organiza o caminho, explica os conceitos dificeis com IA e
            mostra exatamente o que fazer em seguida para voce passar mais rapido.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a href={waitlistLink} className="primary-button">
              Comecar agora gratis
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-sm text-[var(--color-text-on-cta-soft)]">
              Sem cartao de credito, cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
