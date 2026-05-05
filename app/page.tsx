import Image from "next/image";

import { LaunchLeadForm } from "../components/launch-lead-form";
import { ScrollScrubVideo } from "../components/ScrollScrubVideo";

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

const navItems = [
  { href: "#publico", label: "Público" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#lancamento", label: "Lançamento" },
] as const;

export default function HomePage() {
  return (
    <main className="page-shell min-h-screen bg-[var(--color-bg-body)] text-[var(--color-text)]">
      <header className="site-header">
        <div className="section-shell">
          <div className="site-header__bar">
            <a href="#top" className="site-header__brand" aria-label="CloudStudy">
              <Image
                src="/Logo-CloudStudy (1).png"
                alt="CloudStudy"
                width={900}
                height={600}
                className="h-auto w-[170px] md:w-[210px]"
                priority
              />
            </a>

            <nav aria-label="Navegação principal" className="site-header__nav">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="site-header__pill">
                  {item.label}
                </a>
              ))}
            </nav>

            <a href="#lancamento" className="primary-button rounded-full px-5 py-3 text-sm font-semibold text-white">
              Entrar na lista
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="section-shell pb-20 pt-6 md:pb-24 md:pt-8">
        <div className="hero-surface grid gap-12 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:px-14">
          <div className="hero-copy max-w-xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/90">
            STARTUP BRASILEIRA
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.08em] text-white md:text-6xl md:leading-[0.95]">
            O futuro do estudo AWS começa aqui.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
            Uma plataforma brasileira criada para transformar aprendizado em evolução contínua.
          </p>
          <a
            href="#lancamento"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B2A6F] shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition hover:translate-y-[-1px]"
          >
            Entrar na lista
          </a>
          </div>

          <div className="hero-media soft-panel aspect-[16/10] overflow-hidden rounded-[2.85rem] lg:aspect-[1.55/1]">
            <Image
              src={image4}
              alt="Xícara com marca da CloudStudy ao lado de anotações."
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section id="publico" className="section-shell py-12 md:py-16">
        <div className="section-tint mx-auto max-w-5xl px-6 py-10 text-center md:px-10 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Posicionamento
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-[var(--color-accent-dark)] md:text-5xl md:leading-[0.98]">
              Construída no Brasil para organizar o estudo AWS com mais clareza.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              A CloudStudy nasce com ambição de ser a referência brasileira para quem quer estudar
              certificações AWS com estrutura, continuidade e uma experiência pensada desde o início
              para esse objetivo.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="section-shell grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <div
              className="pointer-events-none absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle at 30% 40%, rgba(20,121,255,0.12), transparent 50%)",
              }}
            />
            <div className="relative max-w-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1479FF]">
                INTELIGÊNCIA ARTIFICIAL
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-[#0B2A6F] md:text-5xl md:leading-[0.98]">
                Um tutor 24/7 que estuda com você.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
                Você não estuda sozinho. A CloudStudy terá um tutor de IA disponível 24 horas por dia,
                que te acompanha na preparação, explica conteúdos, resolve dúvidas e te guia com base
                em experiências reais de provas AWS.
              </p>
              <a
                href="#lancamento"
                className="secondary-button mt-7 inline-flex rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[#0B2A6F] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Falar com o tutor
              </a>
            </div>
          </div>

          <div className="relative h-[700px] w-full">
            <ScrollScrubVideo src="/robo-scrub.mp4" />
          </div>
        </div>
      </section>

      <section id="certificacoes" className="section-shell py-12 md:py-16">
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
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-[var(--color-accent-dark)] md:text-5xl md:leading-[0.98]">
              E se sua preparação tivesse um sistema?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              Em vez de abrir materiais aleatórios, você seguiria uma trilha que entende sua meta,
              mede seus pontos fracos e ajusta o próximo passo.
            </p>

            <ul className="mt-8 space-y-3">
              {systemBullets.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FBFF_100%)] px-4 py-4 text-base text-slate-900 shadow-[0_8px_24px_rgba(20,121,255,0.05)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section-shell py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="max-w-xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Como a CloudStudy entra
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-[var(--color-accent-dark)] md:text-5xl md:leading-[0.98]">
              A CloudStudy organiza sua jornada AWS.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              Você escolhe a certificação. A plataforma monta a trilha. A IA ajuda a manter o estudo
              claro, prático e contínuo.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {flowSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FBFF_100%)] px-5 py-5 shadow-[0_8px_24px_rgba(20,121,255,0.05)]"
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

      <section id="lancamento" className="section-shell pb-20 pt-12 md:pb-24 md:pt-16">
        <div className="soft-panel grid gap-8 p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="max-w-sm">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Lista de espera
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-[var(--color-accent-dark)] md:text-5xl md:leading-[0.98]">
              Entre na lista de espera.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-text-soft)]">
              Receba novidades do lançamento e acesso antecipado quando a primeira versão estiver pronta.
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
