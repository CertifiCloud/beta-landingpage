import Image from "next/image";

import { LaunchLeadForm } from "@/components/launch-lead-form";

import image1 from "../Image1.png";
import image3 from "../Image3.png";
import image4 from "../Image4.png";

const systemBullets = [
  "Plano adaptativo",
  "Simulados com diagnóstico",
  "Tutor IA contextual",
] as const;

const flowSteps = [
  "Escolha sua certificação",
  "Receba uma trilha",
  "Pratique com simulados",
  "Ajuste o plano com IA",
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-body)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)]">
        <div className="section-shell flex items-center justify-between py-5">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-950">
            CloudStudy
          </a>
          <a
            href="#lancamento"
            className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white"
          >
            Entrar na lista
          </a>
        </div>
      </header>

      <section
        id="top"
        className="section-shell grid gap-12 pb-20 pt-12 md:pb-24 md:pt-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"
      >
        <div className="max-w-xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Pre-launch
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.08em] text-slate-950 md:text-6xl md:leading-[0.95]">
            Você não precisa estudar AWS no escuro.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--color-text-soft)]">
            A CloudStudy é uma startup brasileira, criada por dois brasileiros para se
            tornar o portal oficial de estudos para certificações AWS, com uma jornada
            clara e guiada por IA.
          </p>
          <a
            href="#proposta"
            className="mt-8 inline-flex rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Ver a proposta
          </a>
        </div>

        <div className="soft-panel aspect-[16/10] overflow-hidden rounded-[2.75rem] lg:aspect-[1.55/1]">
          <Image
            src={image4}
            alt="Xícara com marca da CloudStudy ao lado de anotações."
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Posicionamento
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-5xl md:leading-[0.98]">
            Construída no Brasil para organizar o estudo AWS com mais clareza.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
            A CloudStudy nasce com ambição de ser a referência brasileira para quem quer
            estudar certificações AWS com estrutura, continuidade e uma experiência pensada
            desde o início para esse objetivo.
          </p>
        </div>
      </section>

      <section id="proposta" className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="soft-panel aspect-[16/10] overflow-hidden">
            <Image
              src={image3}
              alt="Painel da CloudStudy exibido em monitor widescreen."
              className="h-full w-full object-cover"
            />
          </div>

          <div className="max-w-md">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              A virada
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-5xl md:leading-[0.98]">
              E se sua preparação tivesse um sistema?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              Em vez de abrir materiais aleatórios, você seguiria uma trilha que entende sua
              meta, mede seus pontos fracos e ajusta o próximo passo.
            </p>

            <ul className="mt-8 space-y-3">
              {systemBullets.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.2rem] border border-[var(--color-border)] bg-white px-4 py-4 text-base text-slate-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="max-w-xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Como a CloudStudy entra
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-5xl md:leading-[0.98]">
              A CloudStudy organiza sua jornada AWS.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              Você escolhe a certificação. A plataforma monta a trilha. A IA ajuda a manter
              o estudo claro, prático e contínuo.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {flowSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.2rem] border border-[var(--color-border)] bg-white px-5 py-5"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  0{index + 1}
                </div>
                <div className="mt-3 text-lg font-semibold text-slate-950">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Pré-lançamento
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-5xl md:leading-[0.98]">
              Estamos construindo a primeira versão.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              A CloudStudy ainda está em desenvolvimento. A lista de espera será usada para
              convidar os primeiros usuários, validar a experiência e liberar acesso
              antecipado.
            </p>
          </div>

          <div className="soft-panel aspect-[4/3] overflow-hidden">
            <Image
              src={image1}
              alt="Notebook com marca da CloudStudy ao lado de uma mochila."
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="lancamento" className="section-shell pb-20 pt-12 md:pb-24 md:pt-16">
        <div className="soft-panel grid gap-8 p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="max-w-sm">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Lista de espera
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-5xl md:leading-[0.98]">
              Entre na lista de espera.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-text-soft)]">
              Receba novidades do lançamento e acesso antecipado quando a primeira versão
              estiver pronta.
            </p>
          </div>

          <LaunchLeadForm
            title="Quero acesso antecipado"
            buttonLabel="Quero acesso antecipado"
            helperText="Pré-lançamento. Sem spam."
            source="landing_pre_launch"
            tone="light"
            className="rounded-[1.5rem]"
          />
        </div>
      </section>

      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="section-shell flex flex-col gap-2 text-sm text-[var(--color-text-soft)] md:flex-row md:items-center md:justify-between">
          <div className="font-semibold text-slate-950">CloudStudy</div>
        </div>
      </footer>
    </main>
  );
}
