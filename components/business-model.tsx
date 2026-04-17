import { BriefcaseBusiness, Cloud, Headphones } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { audienceCards } from "@/lib/data";

const icons = [Cloud, BriefcaseBusiness, Headphones];

export function BusinessModel() {
  return (
    <section id="para-quem-e" className="scroll-mt-28 px-3 py-20 md:px-6 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Para quem e"
          title="CloudStudy ajuda em diferentes momentos da jornada."
          description="Seja no primeiro contato com cloud ou na busca pela proxima certificacao, a proposta e sempre a mesma: estudar com direcao e menos ansiedade."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {audienceCards.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="glass-card p-7">
                <span className="icon-shell">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  {item.tag}
                </div>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.05em] text-[var(--color-text-strong)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
