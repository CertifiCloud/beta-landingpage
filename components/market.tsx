import { CheckCircle2, Quote, ShieldCheck, Star } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { certificationBadges, resultHighlights, testimonials } from "@/lib/data";

const avatarStyles = [
  "bg-[var(--color-primary-soft)] text-[var(--color-text-strong)]",
  "bg-[var(--color-blue-200)] text-[var(--color-text-strong)]",
  "bg-[var(--color-bg-tint)] text-[var(--color-text-strong)]",
  "bg-[var(--color-blue-100)] text-[var(--color-text-strong)]",
] as const;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Market() {
  const splitIndex = Math.ceil(testimonials.length / 2);
  const testimonialRows = [testimonials.slice(0, splitIndex), testimonials.slice(splitIndex)];

  return (
    <section id="resultados" className="scroll-mt-28 px-3 py-14 md:px-6 md:py-24">
      <div className="section-shell rounded-[2.5rem] border border-[var(--color-border-soft)] bg-[linear-gradient(180deg,#eaf3ff_0%,#f7fbff_100%)] p-8 md:p-10">
        <SectionHeading
          eyebrow="Resultados e prova social"
          title="Uma vitrine que transmite confianca em segundos."
          description="A secao reforca posicionamento, mostra sinais de autoridade e facilita a decisao para quem acabou de conhecer o CloudStudy."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {resultHighlights.map((item) => (
            <div key={item.label} className="glass-card p-6 text-center">
              <div className="font-display text-4xl tracking-[-0.06em] text-[var(--color-text-strong)]">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-[var(--color-text-soft)]">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {certificationBadges.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-bg-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-strong)]"
            >
              <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          {testimonialRows.map((row, rowIndex) => (
            <div key={rowIndex} className="review-marquee">
              <div
                className="review-marquee-track"
                style={{
                  animationDuration: rowIndex === 0 ? "34s" : "40s",
                  animationDirection: rowIndex === 0 ? "normal" : "reverse",
                }}
              >
                {Array.from({ length: 2 }).map((_, copyIndex) => (
                  <div
                    key={copyIndex}
                    className="review-marquee-group"
                    aria-hidden={copyIndex === 1}
                  >
                    {row.map((item, itemIndex) => (
                      <article
                        key={`${item.name}-${copyIndex}`}
                        className="glass-card w-full shrink-0 p-5 md:w-[24rem] md:p-6"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-1 text-[var(--color-primary)]">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Star key={index} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-soft)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-soft)]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-success)]" />
                            Aluno verificado
                          </div>
                        </div>

                        <p className="mt-5 min-h-[7rem] text-sm leading-7 text-[var(--color-text)] md:min-h-[8.5rem]">
                          "{item.quote}"
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <div
                            className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold ${
                              avatarStyles[itemIndex % avatarStyles.length]
                            }`}
                          >
                            {getInitials(item.name)}
                          </div>
                          <div>
                            <div className="font-medium text-[var(--color-text-strong)]">{item.name}</div>
                            <div className="mt-1 text-sm text-[var(--color-text-soft)]">{item.role}</div>
                          </div>
                          <Quote className="ml-auto h-5 w-5 text-[var(--color-primary)]" />
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
