import { BriefcaseBusiness, Cloud, Headphones } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { audienceCards } from "@/lib/data";

const icons = [Cloud, BriefcaseBusiness, Headphones];

export function BusinessModel() {
  return (
    <section id="para-quem-e" className="scroll-mt-28 px-3 py-14 md:px-6 md:py-24">
      <div className="section-shell rounded-[2.25rem] border border-[var(--color-border-soft)] bg-[linear-gradient(180deg,#ffffff_0%,#f3f9ff_100%)] p-5 md:p-10">
        <SectionHeading
          eyebrow="Para quem e"
          title="CloudStudy atende diferentes perfis com o mesmo foco: passar com clareza."
          description="Do iniciante ao profissional em transicao, a experiencia foi desenhada para reduzir ansiedade, aumentar consistencia e manter voce no caminho certo da certificacao."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {audienceCards.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="glass-card p-5 md:p-7">
                <span className="icon-shell">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  {item.tag}
                </div>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.05em] text-[var(--color-text-strong)] md:text-3xl">
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
