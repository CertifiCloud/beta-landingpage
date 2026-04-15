/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, 
  BookOpen, 
  Bot, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  XCircle, 
  AlertCircle,
  Menu,
  X,
  ChevronRight,
  Star,
  Sun,
  Moon
} from 'lucide-react';

// --- Components ---

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-immersive-bg/80 backdrop-blur-md border-b border-immersive-border h-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2.5">
            <Cloud className="w-6 h-6 text-aws-orange" />
            <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">Certificloud</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">Features</a>
            <a href="#precos" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">Preços</a>
            <a href="#faq" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">FAQ</a>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-immersive-border text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button className="px-4 py-2 text-sm font-medium text-[var(--text-main)] border border-immersive-border rounded-lg hover:bg-white/5 transition-all">
              Entrar na Waitlist
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-[var(--text-muted)]">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-muted)]">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-immersive-bg border-b border-immersive-border px-6 py-6 flex flex-col gap-4"
        >
          <a href="#features" className="text-lg text-[var(--text-muted)]">Features</a>
          <a href="#precos" className="text-lg text-[var(--text-muted)]">Preços</a>
          <a href="#faq" className="text-lg text-[var(--text-muted)]">FAQ</a>
          <button className="w-full py-3 bg-aws-orange text-black font-bold rounded-lg">
            Entrar na Waitlist
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="immersive-glow-top" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="immersive-badge"
            >
              ✨ Sua jornada para a certificação, simplificada
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="immersive-h1"
            >
              O Ecossistema Definitivo para Especialistas em AWS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-[var(--text-muted)] mb-8 leading-relaxed"
            >
              Diferente das soluções estáticas, a Certificloud oferece uma experiência de engenharia de carreira com IA e conteúdo modular para garantir sua maestria técnica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="mimo-button w-full sm:w-auto">
                Começar Agora
              </button>
              <button className="px-6 py-3 text-sm font-bold text-[var(--text-main)] border-2 border-immersive-border rounded-2xl hover:bg-white/5 transition-all">
                Ver Demonstração
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="mimo-card p-6 flex flex-col gap-5">
              <div className="flex justify-between items-center pb-4 border-b-2 border-immersive-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-bold">Skill Graph: AWS SAA-C03</div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border-2 border-immersive-border rounded-2xl p-4">
                    <div className="text-[10px] text-[var(--text-muted)] mb-2 uppercase font-black tracking-widest">COMPUTATION</div>
                    <div className="text-2xl font-black text-[var(--text-main)]">92%</div>
                    <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="w-[92%] h-full bg-aws-orange rounded-full" />
                    </div>
                  </div>
                  <div className="bg-white/5 border-2 border-immersive-border rounded-2xl p-4">
                    <div className="text-[10px] text-[var(--text-muted)] mb-2 uppercase font-black tracking-widest">STORAGE</div>
                    <div className="text-2xl font-black text-[var(--text-main)]">78%</div>
                    <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="w-[78%] h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="bg-black/5 dark:bg-black/20 rounded-2xl p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-aws-orange flex items-center justify-center shadow-lg">
                      <Bot className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-aws-orange uppercase tracking-widest">Tutor IA Contextual</div>
                      <div className="text-sm font-bold text-[var(--text-main)]">Dica de Especialista</div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    "Você dominou o <span className="text-aws-orange font-bold">S3</span> para a Practitioner. Esse progresso foi validado para a trilha de <span className="text-blue-500 font-bold">Solutions Architect</span>!"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t-2 border-immersive-border mt-12">
          {[
            {
              title: "Skill Graph",
              desc: "Representação visual em tempo real das suas habilidades AWS.",
              icon: <Zap className="w-5 h-5" />
            },
            {
              title: "Smart Simulation",
              desc: "Simulados com spaced repetition para aprovação garantida.",
              icon: <Star className="w-5 h-5" />
            },
            {
              title: "Career Pathing",
              desc: "Sugestões inteligentes para o próximo passo na sua carreira.",
              icon: <ArrowRight className="w-5 h-5" />
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-white/5 border-2 border-immersive-border rounded-2xl flex items-center justify-center text-aws-orange shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-black text-[var(--text-main)] mb-1 uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const points = [
    {
      title: "Fragmentação",
      desc: "Cursos isolados forçam você a recomeçar do zero a cada nova prova, ignorando o que você já sabe.",
      icon: <XCircle className="w-8 h-8 text-red-500" />
    },
    {
      title: "Conteúdo Estático",
      desc: "Materiais gravados que não se adaptam ao seu ritmo, dificuldades ou metas específicas.",
      icon: <AlertCircle className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Falta de Contexto",
      desc: "Você obtém a certificação, mas não consegue conectar os pontos para resolver problemas reais.",
      icon: <BookOpen className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-immersive-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4">O modelo tradicional falhou.</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">A Certificloud resolve os gargalos críticos que impedem sua evolução na Cloud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="mimo-card group"
            >
              <div className="mb-6 w-16 h-16 bg-white/5 border-2 border-immersive-border rounded-2xl flex items-center justify-center shadow-inner">
                {point.icon}
              </div>
              <h3 className="text-2xl font-black text-[var(--text-main)] mb-3 group-hover:text-aws-orange transition-colors">{point.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIFeature = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border-2 border-blue-500/20 text-xs font-bold text-blue-400 mb-6 uppercase tracking-widest">
              <Bot className="w-3 h-3" />
              Exclusivo Certificloud
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-6 leading-tight">Tutor IA Contextual.</h2>
            <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
              Não é apenas um chat. Nossa IA possui consciência contextual do vídeo ou simulado que você está visualizando, oferecendo suporte técnico preciso e imediato.
            </p>
            <ul className="space-y-4">
              {[
                "Explicações contextuais de serviços",
                "Dicas de 'pegadinhas' da prova",
                "Criação de cenários práticos na hora",
                "Suporte em tempo real enquanto você estuda"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--text-muted)]">
                  <CheckCircle className="w-5 h-5 text-aws-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="mimo-card p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-immersive-border">
                <div className="w-12 h-12 rounded-full bg-aws-orange flex items-center justify-center shadow-lg">
                  <Bot className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="text-sm font-black text-[var(--text-main)] uppercase tracking-widest">Certificloud IA</div>
                  <div className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online agora
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-black/5 dark:bg-white/10 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%] border-2 border-transparent">
                    <p className="text-sm font-bold text-[var(--text-main)]">O que é AWS Lambda?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-aws-orange/10 border-2 border-aws-orange/20 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] shadow-sm">
                    <p className="text-sm text-[var(--text-main)] leading-relaxed">
                      É um serviço <span className="text-aws-orange font-black">Serverless</span>. Você paga apenas pelo que usa, sem gerenciar servidores! 🚀
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-immersive-border flex gap-2">
                <div className="flex-1 bg-white/5 rounded-xl px-4 py-2.5 text-xs text-[var(--text-muted)] font-bold">
                  Pergunte sobre AWS...
                </div>
                <button className="w-10 h-10 bg-aws-orange rounded-xl flex items-center justify-center shadow-lg active:translate-y-1 transition-all">
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Blocos de Conhecimento",
      desc: "Conteúdo modular que valida seu progresso automaticamente entre trilhas.",
      icon: <Zap className="w-12 h-12 text-aws-orange" />
    },
    {
      title: "Trilhas Adaptativas",
      desc: "Cronogramas dinâmicos que se ajustam ao seu ritmo e disponibilidade.",
      icon: <BookOpen className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Maestria Técnica",
      desc: "Foco em AWS com profundidade técnica para o mercado de elite.",
      icon: <CheckCircle className="w-12 h-12 text-green-500" />
    }
  ];

  return (
    <section className="py-24 bg-white/5 dark:bg-zinc-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4 uppercase tracking-tighter">A Solução Certificloud</h2>
          <p className="text-[var(--text-muted)] text-lg">Aprendizado passivo transformado em jornada dinâmica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="mb-6 flex justify-center">
                <div className="mimo-card relative p-8">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-aws-orange border-2 border-black rounded-full flex items-center justify-center text-lg font-black text-black shadow-lg">
                    {i + 1}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black text-[var(--text-main)] mb-3">{step.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="precos" className="py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4">Estratégia de Monetização</h2>
          <p className="text-[var(--text-muted)] text-lg">Planos pensados para valor e eficiência.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="mimo-card flex flex-col">
            <h3 className="text-xl font-black text-[var(--text-main)] mb-2 uppercase tracking-widest">Mensal</h3>
            <div className="text-4xl font-black text-[var(--text-main)] mb-6">R$ 97<span className="text-sm font-bold text-[var(--text-muted)]">/mês</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Skill Graph Ativo</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Smart Simulation</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> IA Support 24/7</li>
            </ul>
            <button className="mimo-button w-full">
              Escolher Plano
            </button>
          </div>

          {/* Pro */}
          <div className="mimo-card border-aws-orange border-4 relative flex flex-col scale-105 shadow-xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-aws-orange rounded-full text-xs font-black text-black uppercase tracking-widest shadow-lg">
              Melhor Valor
            </div>
            <h3 className="text-xl font-black text-[var(--text-main)] mb-2 uppercase tracking-widest">Anual</h3>
            <div className="text-4xl font-black text-[var(--text-main)] mb-6">R$ 77<span className="text-sm font-bold text-[var(--text-muted)]">/mês</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Tudo do Mensal</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Career Pathing</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Atualização Contínua</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Mentorias Exclusivas</li>
            </ul>
            <button className="mimo-button w-full">
              Garantir Anual
            </button>
          </div>

          {/* Expert */}
          <div className="mimo-card flex flex-col">
            <h3 className="text-xl font-black text-[var(--text-main)] mb-2 uppercase tracking-widest">Expert</h3>
            <div className="text-4xl font-black text-[var(--text-main)] mb-6">R$ 1.997<span className="text-sm font-bold text-[var(--text-muted)]">/único</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Acesso Vitalício</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Mentorias Individuais</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[var(--text-muted)]"><CheckCircle className="w-5 h-5 text-aws-orange" /> Bússola de Carreira</li>
            </ul>
            <button className="mimo-button w-full">
              Seja um Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 border-t-2 border-immersive-border relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-aws-orange/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-8 uppercase tracking-tighter">Pronto para dominar a Cloud?</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-16">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="flex-1 px-6 py-3 bg-white/5 border-2 border-immersive-border rounded-2xl text-[var(--text-main)] font-bold placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-4 focus:ring-aws-orange/20 transition-all"
          />
          <button className="mimo-button">
            Garantir Vaga
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t-2 border-immersive-border">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-aws-orange" />
            <span className="text-2xl font-black text-[var(--text-main)] tracking-tighter">Certificloud</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-[var(--text-muted)]">
            <a href="#" className="hover:text-aws-orange transition-colors">Termos</a>
            <a href="#" className="hover:text-aws-orange transition-colors">Privacidade</a>
            <a href="#" className="hover:text-aws-orange transition-colors">Contato</a>
          </div>
          <div className="text-sm font-bold text-[var(--text-muted)] opacity-60">
            © 2026 Certificloud. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen selection:bg-aws-orange selection:text-black bg-immersive-bg transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <PainPoints />
        <AIFeature />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
