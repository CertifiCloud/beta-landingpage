import Image from "next/image";

import { LaunchLeadForm } from "../components/launch-lead-form";

import image3 from "../Image3.png";
import image4 from "../Image4.png";

const systemBullets = [
  "Plano adaptativo",
  "Simulados com diagnóstico",
  "Tutor IA contextual",
] as const;

const launchCertifications = [
  {
    description: "Fundamentos de cloud e AWS para iniciar sua jornada.",
    image: "/cert-cloud-practitioner.png",
    title: "Cloud Practitioner",
  },
  {
    description: "Introdução prática à IA generativa, modelos e serviços AWS.",
    image: "/cert-ai-practitioner.png",
    title: "AI Practitioner",
  },
  {
    description:
      "Arquitetura de soluções escaláveis e preparação para a certificação associate.",
    image: "/cert-solutions-architect.png",
    title: "Solutions Architect",
  },
] as const;

const navItems = [
  { href: "#posicionamento", label: "Posicionamento" },
  { href: "#tutor-ia", label: "Tutor IA" },
  { href: "#sistema", label: "Sistema" },
  { href: "#certificacoes", label: "Certificações" },
] as const;

export default function HomePage() {
  return (
    <main className="page-shell min-h-screen overflow-x-clip bg-[var(--color-bg-body)] text-[var(--color-text)]">
      <header className="site-header">
        <div className="section-shell">
          <div className="site-header__bar">
            <a href="#top" className="site-header__brand" aria-label="CloudStudy">
              <Image
                src="/logo-blue-sem-fundo.png"
                alt="CloudStudy"
                width={900}
                height={600}
                className="h-auto w-[150px] sm:w-[170px] md:w-[210px]"
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

            <a
              href="#lista-de-espera"
              className="primary-button shrink-0 whitespace-nowrap rounded-full px-4 py-3 text-xs font-semibold text-white sm:px-5 sm:text-sm"
            >
              Entrar na lista
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="section-shell pb-16 pt-6 md:pb-24 md:pt-8">
        <div className="hero-surface grid gap-12 px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:px-14">
          <div className="hero-copy max-w-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/90">
              STARTUP BRASILEIRA
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl md:text-6xl md:leading-[0.95]">
              O futuro do estudo AWS começa aqui.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 sm:text-lg md:text-xl">
              Uma plataforma brasileira criada para transformar aprendizado em evolução contínua.
            </p>
            <a
              href="#lista-de-espera"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B2A6F] shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition hover:translate-y-[-1px]"
            >
              Entrar na lista
            </a>
          </div>

          <div className="hero-media soft-panel aspect-[16/10] overflow-hidden rounded-[2.2rem] sm:rounded-[2.85rem] lg:aspect-[1.55/1]">
            <Image
              src={image4}
              alt="Xícara com marca da CloudStudy ao lado de anotações."
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section id="posicionamento" className="section-shell py-12 md:py-16">
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

      <section id="tutor-ia" className="relative overflow-hidden bg-white">
        <div className="section-shell grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-12 md:py-24 lg:gap-20">
          <div className="max-w-xl">
            <div
              className="pointer-events-none absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, rgba(20,121,255,0.12), transparent 50%)",
              }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[linear-gradient(165deg,#eef6ff_0%,#ffffff_100%)] p-4 shadow-[0_22px_58px_rgba(20,121,255,0.14)] md:p-6">
              <Image
                src="/robo-novo.png"
                alt="Tutor IA da CloudStudy."
                width={820}
                height={820}
                className="mentor-robot-image h-full w-full rounded-[1.3rem] object-cover"
                priority
              />
              <div className="mentor-robot-badge mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
                Mentor IA com Experiência real em certificações AWS
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-blue-100 bg-[linear-gradient(155deg,#ffffff_0%,#f4f9ff_52%,#e8f2ff_100%)] p-5 shadow-[0_24px_64px_rgba(20,121,255,0.18)] md:p-6">
              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(20,121,255,0.24)_0%,rgba(20,121,255,0)_72%)] blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.24)_0%,rgba(56,189,248,0)_72%)] blur-2xl" />
              <div className="rounded-[1.35rem] border border-white/70 bg-white/85 p-4 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1479FF]">
                  Exemplo de conversa
                </div>
                <div className="mt-3 grid gap-2.5">
                  <div className="max-w-[92%] rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm leading-6 text-slate-700">
                    Tenho 45 minutos por dia. Como você prioriza com base na memória real do fundador?
                  </div>
                  <div className="ml-auto max-w-[95%] rounded-2xl border border-blue-100 bg-blue-50/80 px-3 py-2.5 text-sm leading-6 text-slate-700">
                    Eu uso os padrões das aprovações AWS do fundador: no CLF-C02, começamos por domínios de maior peso e revisão ativa curta.
                  </div>
                  <div className="max-w-[92%] rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm leading-6 text-slate-700">
                    E para as outras trilhas, você mantém essa lógica?
                  </div>
                  <div className="ml-auto max-w-[95%] rounded-2xl border border-blue-100 bg-blue-50/80 px-3 py-2.5 text-sm leading-6 text-slate-700">
                    Sim. A memória de estudo real do fundador vira plano prático: foco por domínio, simulado guiado e correção com reforço do erro recorrente.
                  </div>
                </div>
              </div>

              <div className="relative mt-4 grid grid-cols-2 gap-3 text-xs font-semibold sm:text-sm">
                <div className="rounded-xl border border-blue-100 bg-white/85 px-3 py-3 text-slate-700">
                  Revisões inteligentes
                </div>
                <div className="rounded-xl border border-blue-100 bg-white/85 px-3 py-3 text-slate-700">
                  Plano personalizado
                </div>
                <div className="rounded-xl border border-blue-100 bg-white/85 px-3 py-3 text-slate-700">
                  Diagnóstico contínuo
                </div>
                <div className="rounded-xl border border-blue-100 bg-white/85 px-3 py-3 text-slate-700">
                  Feedback imediato
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sistema" className="section-shell py-12 md:py-16">
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

      <section id="certificacoes" className="section-shell py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center justify-center text-center md:mb-16">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Como a CloudStudy entra
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-[var(--color-accent-dark)] md:text-5xl md:leading-[0.98]">
              Certificações disponíveis no lançamento.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-soft)]">
              Comece sua preparação com trilhas estruturadas para as certificações mais procuradas da AWS.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {launchCertifications.map((certification) => (
              <article
                key={certification.title}
                className="group flex flex-col items-center rounded-[28px] border border-blue-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(244,249,255,0.92)_100%)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(20,121,255,0.12)]"
              >
                <div className="mb-8 flex h-[180px] w-full items-center justify-center rounded-[24px] bg-gradient-to-b from-[#F8FBFF] to-white px-4 pt-4">
                  <Image
                    src={certification.image}
                    alt={certification.title}
                    width={150}
                    height={150}
                    className="mx-auto h-[140px] w-auto object-contain"
                  />
                </div>

                <h3 className="text-center text-xl font-semibold tracking-[-0.04em] text-slate-950">
                  {certification.title}
                </h3>
                <p className="mt-3 text-center text-base leading-7 text-[var(--color-text-soft)]">
                  {certification.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lista-de-espera" className="section-shell pb-20 pt-12 md:pb-24 md:pt-16">
        <div className="soft-panel grid gap-8 p-5 sm:p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
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

      <footer className="border-t border-blue-100 bg-[#EEF3FA]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
          <p className="text-center text-sm text-slate-600 md:text-left">
            © 2026 CloudStudy. Todos os direitos reservados.
          </p>

          <Image
            src="/logo-blue-sem-fundo.png"
            alt="CloudStudy"
            width={170}
            height={52}
            className="h-auto w-[150px] md:w-[170px]"
          />

          <a
            href="https://www.linkedin.com/company/cloudstudy-ai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CloudStudy no LinkedIn"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white p-3 text-[#0A66C2] transition hover:border-blue-300 hover:bg-blue-50"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zM9 9h3.83v1.64h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.55c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H9z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
