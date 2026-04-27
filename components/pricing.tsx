import { Check, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { pricingDisclaimer, pricingPlans, waitlistLink } from "@/lib/data";

const badgeStyles = {
  warning:
    "border-[var(--color-border-soft)] bg-[var(--color-blue-100)] text-[var(--color-text-strong)]",
  primary:
    "border-[var(--color-border-soft)] bg-[var(--color-primary-soft)] text-[var(--color-text-strong)]",
  success:
    "border-[var(--color-border-soft)] bg-[var(--color-bg-tint)] text-[var(--color-text-strong)]",
} as const;

export function Pricing() {
  return (
    <section id="precos" className="scroll-mt-28 px-3 py-14 md:px-6 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Precos"
          title="Planos simples, leitura rapida e decisao sem friccao."
          description="Estrutura de oferta pensada para converter com clareza: entrada gratuita, plano principal bem posicionado e opcao de aceleracao para reta final."
          align="center"
        />

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-4 py-2 text-xs font-medium text-[var(--color-text-soft)]">
            <Sparkles className="h-4 w-4 text-[var(--color-primary)]" />
            {pricingDisclaimer}
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-[2rem] border p-5 transition md:p-8 ${
                plan.featured
                  ? "border-[var(--color-primary)] bg-[linear-gradient(175deg,#ffffff_0%,#f1f7ff_100%)] shadow-[var(--shadow-soft)]"
                  : "border-[var(--color-border-soft)] bg-[var(--color-bg-surface)]"
              }`}
            >
              {plan.featured ? (
                <div className="mb-3 inline-flex w-fit rounded-full border border-[var(--color-primary)] bg-[linear-gradient(135deg,#2d8cff_0%,#0b2f66_100%)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white md:absolute md:left-7 md:top-0 md:mb-0 md:-translate-y-1/2">
                  Mais escolhido
                </div>
              ) : null}

              <div
                className={`inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${badgeStyles[plan.tone]}`}
              >
                {plan.badge}
              </div>

              <div className="mt-6">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                  {plan.name}
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display text-4xl tracking-[-0.08em] text-[var(--color-text-strong)] md:text-5xl">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-[var(--color-text-soft)]">{plan.period}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{plan.description}</p>
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-[var(--color-bg-soft)] px-4 py-4 text-sm font-medium leading-6 text-[var(--color-text-strong)]">
                {plan.highlight}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-soft)]">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waitlistLink}
                className={`mt-8 justify-center ${
                  plan.featured ? "primary-button" : "secondary-button"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
