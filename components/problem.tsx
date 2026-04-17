import { AlertTriangle, BookOpenText, FolderKanban, SearchCheck } from "lucide-react";

import { problemPoints } from "@/lib/data";

const icons = [FolderKanban, SearchCheck, BookOpenText, AlertTriangle];
const iconColors = [
  "bg-[var(--color-primary-soft)] text-[var(--color-primary)]",
  "bg-[var(--color-success-soft)] text-[var(--color-success)]",
  "bg-[var(--color-warning-soft)] text-[var(--color-warning)]",
  "bg-[var(--color-danger-soft)] text-[var(--color-danger)]",
] as const;

export function Problem() {
  return (
    <section id="problema" className="px-3 py-12 md:px-6 md:py-16">
      <div className="section-shell rounded-[2.5rem] bg-[var(--color-bg-tint)] px-6 py-10 md:px-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Por que estudar sozinho trava</span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemPoints.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.index} className="glass-card p-6">
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] ${iconColors[index]}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl tracking-[-0.05em] text-[var(--color-text-strong)]">
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
