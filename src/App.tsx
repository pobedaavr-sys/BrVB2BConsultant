/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  BarChart3, 
  Users, 
  Settings, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Gamepad2, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Search,
  Target,
  Rocket
} from "lucide-react";

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`section-gap ${className}`}>
    <div className="container-custom">
      {children}
    </div>
  </section>
);

const Card = ({ title, description, result, icon: Icon, className = "" }: { title: string, description: string, result?: string, icon?: any, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`premium-card ${className}`}
  >
    {Icon && <Icon className="w-5 h-5 text-brand-blue mb-3" />}
    <h3 className="text-sm font-bold text-brand-blue mb-2 uppercase tracking-tight leading-tight">{title}</h3>
    <p className="text-[12px] text-slate-600 leading-relaxed mb-2">{description}</p>
    {result && <p className="text-[11px] font-bold text-brand-accent/70 border-t border-slate-50 pt-2">{result}</p>}
  </motion.div>
);

const StatCard = ({ value, label, m = "", n = "" }: { value: string, label: string, m?: string, n?: string }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col justify-center">
    <div className="flex items-baseline gap-1">
      {n && <span className="text-[10px] font-bold text-slate-400 uppercase mr-0.5">{n}</span>}
      <span className="text-xl font-bold text-brand-blue">{value}</span>
      {m && <span className="text-[8px] font-bold text-slate-400 uppercase ml-0.5">{m}</span>}
    </div>
    <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 font-bold leading-tight">{label}</p>
  </div>
);

export default function App() {
  const handleTelegramContact = () => {
    const deepLink = "tg://resolve?domain=BRV_Roman&text=Здравствуйте!%20Хочу%20обсудить%20вашу%20помощь%20для%20нашей%20компании.";
    const fallbackLink = "https://t.me/BRV_Roman";
    
    // Attempt to open deep link
    window.location.href = deepLink;
    
    // Fallback: if Telegram doesn't handle the deep link, open the web version in a new tab after a brief delay
    setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.open(fallbackLink, '_blank', 'noopener,noreferrer');
      }
    }, 1000);
  };

  return (
    <div className="font-sans selection:bg-brand-blue selection:text-white bg-brand-gray">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container-custom h-14 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tighter text-brand-blue">Роман Беляев</div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-500">
            <a href="#services" className="hover:text-brand-blue transition-colors">Экспертиза</a>
            <a href="#results" className="hover:text-brand-blue transition-colors">Результаты</a>
            <a href="#process" className="hover:text-brand-blue transition-colors">Алгоритм</a>
          </div>
          <button 
            onClick={handleTelegramContact}
            className="bg-brand-blue text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-all"
          >
            Обсудить задачу
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-24 pb-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-6 text-brand-blue tracking-tight text-balance">
                Навожу порядок в людях, процессах, продукте и управлении
              </h1>
              <p className="border-l-2 border-brand-blue/20 pl-6 text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl font-light">
                Помогаю собственникам и компаниям разобраться, где бизнес теряет деньги, время, управляемость и качество, а затем собрать рабочую систему изменений — от диагностики и структуры до автоматизации, AI и внедрения.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={handleTelegramContact}
                  className="bg-brand-blue text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-all shadow-lg shadow-brand-blue/10"
                >
                  Обсудить задачу
                </button>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">
                  Соединяю бизнес, людей, процессы и IT в понятный результат.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 self-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white"
            >
              <img 
                src="https://raw.githubusercontent.com/pobedaavr-sys/karierakons/main/IMG_0106.jpg" 
                alt="Роман Беляев" 
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-blue">B2B Consultant</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <StatCard value="250+" label="Экономический эффект" m="Млн руб." />
          <StatCard value="1600+" label="Стратегических разборов" />
          <StatCard value="12" label="AI-Решений и ботов" m="GPTs" />
          <StatCard value="1530" label="Сотрудников в контуре" n="до" />
        </div>
      </Section>

      {/* Role Intro Block */}
      <Section className="bg-white border-y border-slate-100 py-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="w-10 h-1 bg-brand-blue"></div>
            <p className="text-sm font-medium leading-relaxed text-slate-700">
              Я подключаюсь к бизнесу тогда, когда компании нужен не просто совет, а человек, который поможет разобраться в ситуации и собрать систему.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-1 bg-brand-blue/40"></div>
            <p className="text-sm font-medium leading-relaxed text-slate-700">
              Смотрю на компанию как управленец: через людей, процессы, продукт, продажи, клиентский путь, автоматизацию и экономический эффект.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-1 bg-brand-blue/20"></div>
            <p className="text-sm font-medium leading-relaxed text-slate-700">
              Помогаю понять, что нужно пересобрать, что можно усилить, а что действительно стоит автоматизировать.
            </p>
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section id="services">
        <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-3">
          <h2 className="text-lg font-bold text-brand-blue uppercase tracking-tight">Чем могу быть полезен</h2>
          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">8 Ключевых компетенций</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card 
            icon={Search}
            title="Стратегия и управление" 
            description="Диагностика бизнеса, сборка логики изменений, поиск узких мест." 
            result="Хаос в понятную систему управления."
          />
          <Card 
            icon={Users}
            title="HR и команда" 
            description="Найм, роли, профили должностей, мотивация, адаптация." 
            result="Люди как управляемая система."
          />
          <Card 
            icon={TrendingUp}
            title="Продажи и продукт" 
            description="Доупаковка продукта, логика продаж, customer development." 
            result="Усиление коммерческого результата."
          />
          <Card 
            icon={ShieldCheck}
            title="Контроль качества" 
            description="Стандарты, инструкции, адаптация, воспроизводимость." 
            result="Результат без зависимости от случая."
          />
          <Card 
            icon={GraduationCap}
            title="Внутренняя академия" 
            description="Треки развития, кадровый резерв, обучение под задачи бизнеса." 
            result="Знания как система роста сотрудников."
          />
          <Card 
            icon={Cpu}
            title="IT, автоматизация и AI" 
            description="Оцифровка пути клиента, выбор точек автоматизации, ТЗ, внедрение." 
            result="Бизнес и IT без лишней сложности."
          />
          <Card 
            icon={Globe}
            title="PR / GR / внешний контур" 
            description="Площадки, мероприятий, связи, отраслевой и госконтур." 
            result="Усиление внешней позиции компании."
          />
          <Card 
            icon={Gamepad2}
            title="Бизнес-игры и стратсессии" 
            description="Игровые и фасилитационные форматы для решения задач." 
            result="Инструмент командной сборки."
          />
        </div>
      </Section>

      {/* Results Section */}
      <Section id="results" className="bg-slate-900 text-white rounded-3xl py-12 px-8 my-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">Результаты в деталях</h2>
          <p className="text-sm font-light text-slate-400 leading-relaxed">
            Не просто консультирую, а довожу изменения до результата. Ниже — часть цифр, которые это подтверждают.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { v: "1600+", l: "Разборов" },
            { v: "250+", m: "Млн р.", l: "Эффект" },
            { v: "12", l: "GPTs & Ботов" },
            { v: "800k+", m: "Р.", l: "Сэкономлено" },
            { v: "+20%", l: "Рост NPS" },
            { v: "+70%", l: "Качество сессий" },
            { v: "25%", l: "Меньше издержек" },
            { v: "30%", l: "Рост выработки" },
            { v: "10x", l: "Рост базы" },
            { v: "99+", m: "Млн р.", l: "Тендеры" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-white">{item.v}</span>
                {item.m && <span className="text-[8px] font-bold text-white/40">{item.m}</span>}
              </div>
              <p className="text-[8px] uppercase tracking-widest text-white/50 mt-1 font-bold">{item.l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Trust Section */}
      <Section className="bg-slate-50/50">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue uppercase tracking-tight mb-2">Почему мне доверяют сложные задачи</h2>
          <p className="text-sm text-slate-500 font-medium">Не про абстрактную экспертизу, а про масштаб, результат и практику в реальном бизнесе.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { 
              t: "Управленческий масштаб", 
              d: "Работал с компаниями, где важны управляемость и конечный результат.",
              f: "20+ лет опыта, P&L 85+ млн ₽/мес, до 1530 чел. в контуре."
            },
            { 
              t: "Доказанный результат", 
              d: "Ориентируюсь не на красивые решения, а на измеримый эффект для бизнеса.",
              f: "250+ млн ₽ эффекта, -25% издержек, +30% производительности."
            },
            { 
              t: "Опыт в разных нишах", 
              d: "Быстро вхожу в новый контекст и понимаю логику продукта и рынка.",
              f: "Недвижимость, медицина, ритейл, производство, HoReCa и др."
            },
            { 
              t: "Практика разборов", 
              d: "Понимаю реальные запросы бизнеса через работу с сотнями руководителей.",
              f: "1600+ стратегических и диагностических разборов с собственниками."
            },
            { 
              t: "Игровые и стратсессии", 
              d: "Авторские игровые форматы для обучения и решения бизнес-задач.",
              f: "76 игр за 2025–26 гг., 1100+ участников из городов России."
            },
            { 
              t: "Бизнес + AI + внедрение", 
              d: "Соединяю процессы и AI-решения в единую рабочую систему.",
              f: "12 GPTs, 8 ботов, внедрение CRM, LMS и AI-симуляторов."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="text-[13px] font-extrabold text-brand-blue uppercase tracking-tight mb-2 border-b border-slate-50 pb-2">{item.t}</h4>
                <p className="text-[12px] text-slate-600 leading-relaxed mb-4">{item.d}</p>
              </div>
              <div className="text-[10px] font-bold text-brand-accent/80 uppercase tracking-tighter bg-slate-50 px-3 py-2 rounded-lg border border-slate-100/50">
                {item.f}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-white border-y border-slate-100">
        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">Алгоритм работы</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Диагностика", d: "Аудит процессов и поиск точек слива." },
            { n: "02", t: "Карта узких мест", d: "Проектирование логики изменений." },
            { n: "03", t: "Пересборка & IT", d: "Внедрение инструментов и AI-решений." },
            { n: "04", t: "Сопровождение", d: "Запуск системы и доводка до результата." }
          ].map((step, i) => (
            <div key={i} className="relative group p-4">
              <div className="text-3xl font-bold opacity-10 mb-3 group-hover:text-brand-blue group-hover:opacity-100 transition-all">{step.n}</div>
              <h3 className="text-sm font-bold mb-2">{step.t}</h3>
              <p className="text-[11px] text-slate-500 leading-snug">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8 mb-16">
            <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed">
              Если вам нужен человек, который поможет разобраться в хаосе, собрать логику изменений и довести её до результата — давайте обсудим вашу задачу.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button 
                onClick={handleTelegramContact}
                className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                Связаться со мной
                <ArrowRight size={14} />
              </button>
              <button 
                onClick={handleTelegramContact}
                className="border border-slate-700 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all"
              >
                Оставить запрос
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-widest font-bold text-slate-500">
            <span>© 2024 Роман Беляев</span>
            <div className="flex gap-8">
              <a 
                href="https://t.me/BRV_Roman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
