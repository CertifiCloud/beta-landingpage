export const companyName = "Certificloud";
export const productMark = "CloudStudy";

export const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Certificacoes", href: "#certificacoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Para quem e", href: "#para-quem-e" },
  { label: "Precos", href: "#precos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const certificationProgress = [
  {
    title: "Cloud Practitioner",
    subtitle: "Base pronta para revisao final",
    value: 92,
  },
  {
    title: "Solutions Architect",
    subtitle: "Plano em andamento com foco na prova",
    value: 78,
  },
  {
    title: "SysOps Administrator",
    subtitle: "Proxima trilha sugerida",
    value: 46,
  },
] as const;

export const problemPoints = [
  {
    index: "01",
    title: "Cursos soltos demais",
    description:
      "Voce pula entre videos, PDFs e playlists sem uma ordem clara do que estudar primeiro.",
  },
  {
    index: "02",
    title: "Revisao sem prioridade",
    description:
      "Fica dificil saber o que revisar, o que ignorar e o que realmente cai na certificacao alvo.",
  },
  {
    index: "03",
    title: "Duvidas travam o ritmo",
    description:
      "Quando aparece um conceito mais tecnico, voce perde tempo procurando respostas em varios lugares.",
  },
  {
    index: "04",
    title: "Ansiedade antes da prova",
    description:
      "Sem um painel claro de progresso, bate a sensacao de que ainda falta estudar tudo.",
  },
] as const;

export const howItWorksSteps = [
  {
    step: "Passo 1",
    title: "Escolha a certificacao AWS alvo",
    description:
      "Comece pela prova que faz sentido para voce, como Cloud Practitioner ou Solutions Architect.",
    detail: "Objetivo claro desde o primeiro dia",
  },
  {
    step: "Passo 2",
    title: "Receba um plano adaptativo",
    description:
      "CloudStudy monta uma trilha com licoes, labs e simulados no ritmo da sua rotina.",
    detail: "Estudo organizado em etapas simples",
  },
  {
    step: "Passo 3",
    title: "Pratique com simulados e IA",
    description:
      "Treine com questoes inteligentes e use o tutor de IA para destravar duvidas na hora.",
    detail: "Mais confianca antes da prova",
  },
  {
    step: "Passo 4",
    title: "Acompanhe seu progresso",
    description:
      "Veja o que ja foi consolidado, o que precisa de reforco e qual e o proximo passo.",
    detail: "Menos ansiedade, mais clareza",
  },
] as const;

export const certificationOfferCards = [
  {
    eyebrow: "Certificacao AWS",
    title: "AWS Cloud Practitioner",
    description:
      "Para construir a base em cloud, seguranca, cobranca e servicos essenciais da AWS sem se perder no comeco.",
    meta: "Ideal para iniciantes",
    accent: "primary",
  },
  {
    eyebrow: "Certificacao AWS",
    title: "AWS Solutions Architect",
    description:
      "Para dominar arquitetura, redes, armazenamento e decisoes tecnicas cobradas nas trilhas mais procuradas.",
    meta: "Trilha mais desejada",
    accent: "warning",
  },
  {
    eyebrow: "Certificacao AWS",
    title: "AWS AI Practitioner",
    description:
      "Para entrar no universo de IA na AWS com foco em fundamentos, casos de uso e servicos aplicados ao mercado.",
    meta: "Nova frente em alta",
    accent: "success",
  },
] as const;

export const benefitCards = [
  {
    title: "Revise so o que importa",
    description: "Lacunas reais sobem primeiro.",
    impact: "Mais foco na aprovacao",
  },
  {
    title: "Treinos no ponto certo",
    description: "Os simulados puxam seus pontos fracos.",
    impact: "Voce reforca o que falta",
  },
  {
    title: "IA para destravar na hora",
    description: "Perguntou, entendeu, seguiu.",
    impact: "Menos duvida no meio do estudo",
  },
  {
    title: "Rotina que cabe no seu dia",
    description: "O plano se reorganiza sem te perder.",
    impact: "Mais constancia, menos culpa",
  },
] as const;

export const resultHighlights = [
  {
    value: "100%",
    label: "foco em AWS",
  },
  {
    value: "4 etapas",
    label: "da meta ate a prova",
  },
  {
    value: "1 painel",
    label: "para ver o proximo passo",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Sai dos PDFs aleatorios e finalmente comecei a estudar com um plano diario claro. Isso fez eu manter ritmo de verdade.",
    name: "Marina Souza",
    role: "Comprou a trilha Cloud Practitioner",
  },
  {
    quote:
      "Os simulados me mostraram exatamente onde eu travava, e o tutor IA resolveu varias duvidas sem eu perder tempo procurando fora.",
    name: "Rafael Mendes",
    role: "Aluno da Solutions Architect",
  },
  {
    quote:
      "Eu tinha pouco tempo por semana. A plataforma reorganizou meu estudo e parei de me sentir atrasado toda vez que abria a trilha.",
    name: "Camila Rocha",
    role: "Profissional de suporte",
  },
  {
    quote:
      "Foi a primeira vez que consegui estudar para AWS sem me sentir perdido. Entrei para ver uma aula e acabei seguindo a semana inteira.",
    name: "Diego Alves",
    role: "Comprou a trilha Cloud Practitioner",
  },
  {
    quote:
      "Na reta final da SAA eu precisava de foco. A CloudStudy cortou o excesso e me deixou revisar so o que realmente fazia diferenca.",
    name: "Juliana Costa",
    role: "Comprou a trilha Solutions Architect",
  },
  {
    quote:
      "Entrei pela trilha de AI Practitioner e gostei porque a explicacao nao fica pesada. A sensacao e de progresso rapido desde o inicio.",
    name: "Bruno Nunes",
    role: "Aluno da AWS AI Practitioner",
  },
] as const;

export const certificationBadges = [
  "AWS Cloud Practitioner",
  "AWS Solutions Architect",
  "AWS AI Practitioner",
] as const;

export const audienceCards = [
  {
    title: "Iniciante em cloud",
    description:
      "Comece sem se perder. Voce recebe uma trilha clara, explicacoes simples e um caminho guiado desde o basico.",
    tag: "Para sair do zero com clareza",
  },
  {
    title: "Dev migrando para AWS",
    description:
      "Transforme conhecimento tecnico em preparo focado para certificacao, com labs, simulados e reforco nos temas certos.",
    tag: "Para ganhar tracao mais rapido",
  },
  {
    title: "Profissional de suporte buscando crescer",
    description:
      "Organize o estudo mesmo com agenda apertada e avance para certificacoes que abrem novas oportunidades e aumento de salario.",
    tag: "Para evoluir sem estudar sozinho",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    badge: "Entrada leve",
    tone: "warning",
    price: "R$ 0",
    period: "/7 dias",
    description:
      "Para explorar a plataforma, sentir o metodo e ver como a trilha guiada funciona por dentro.",
    highlight: "Bom para testar sem risco e descobrir se voce finalmente sai do estudo solto.",
    cta: "Testar gratis",
    featured: false,
    features: [
      "1 trilha inicial de certificacao",
      "Painel de progresso em tempo real",
      "Tutor IA com limite diario",
      "Simulado diagnostico de entrada",
    ],
  },
  {
    name: "Focus",
    badge: "Mais escolhido",
    tone: "primary",
    price: "R$ 79",
    period: "/mes",
    description:
      "Para estudar com constancia, revisar com prioridade e chegar na prova com mais confianca.",
    highlight: "Equilibrio entre organizacao, pratica e suporte para quem quer manter ritmo semanal.",
    cta: "Assinar Focus",
    featured: true,
    features: [
      "Trilhas adaptativas ilimitadas",
      "Labs e simulados inteligentes",
      "Tutor IA contextual durante o estudo",
      "Recomendacoes do proximo passo",
    ],
  },
  {
    name: "Sprint",
    badge: "Reta final",
    tone: "success",
    price: "R$ 149",
    period: "/mes",
    description:
      "Para acelerar a certificacao quando a prova ja esta no radar e voce quer revisar forte.",
    highlight: "Ideal para consolidar dominios fracos e entrar na reta final com menos ansiedade.",
    cta: "Quero acelerar",
    featured: false,
    features: [
      "Tudo do plano Focus",
      "Simulados extras por dominio AWS",
      "Planos de revisao para 14 e 30 dias",
      "Painel de prontidao para a prova",
    ],
  },
] as const;

export const pricingDisclaimer =
  "Valores ilustrativos criados apenas para apresentar a oferta na landing.";

export const faqItems = [
  {
    question: "Tenho pouco tempo por semana. Ainda vale a pena?",
    answer:
      "Sim. O plano se ajusta a sua rotina e mostra o que fazer em cada sessao, mesmo quando voce tem poucas horas disponiveis.",
  },
  {
    question: "Sou iniciante. Vou conseguir acompanhar?",
    answer:
      "Sim. A plataforma organiza o estudo em etapas progressivas e o tutor IA ajuda a explicar os conceitos mais dificeis em linguagem simples.",
  },
  {
    question: "O que esta incluido no acesso?",
    answer:
      "Voce encontra trilhas de estudo, labs, simulados, painel de progresso e tutor de IA contextual em um unico lugar.",
  },
  {
    question: "Preciso comprar outros cursos ou PDFs?",
    answer:
      "A ideia e justamente reduzir essa dependencia. CloudStudy organiza o caminho para voce estudar sem ficar pulando entre materiais soltos.",
  },
  {
    question: "Posso comecar gratis?",
    answer:
      "Sim. O CTA principal da pagina foi pensado para uma entrada sem friccao, sem cartao de credito e com liberdade para cancelar quando quiser.",
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Github", href: "#" },
] as const;

export const footerLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Certificacoes", href: "#certificacoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Para quem e", href: "#para-quem-e" },
  { label: "Precos", href: "#precos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const waitlistLink =
  "mailto:hello@certificloud.com?subject=Quero%20comecar%20gratis%20na%20CloudStudy";
