import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  TrendingUp, 
  Building2, 
  Users, 
  Heart,
  CheckCircle2,
  Shield,
  Clock,
  PiggyBank,
  Activity,
  Pill,
  Smartphone,
  Zap
} from 'lucide-react';

interface EffectCardProps {
  title: string;
  icon: React.ElementType;
  color: string;
  effects: string[];
}

function EffectCard({ title, icon: Icon, color, effects }: EffectCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-6">{title}</h3>
      <ul className="space-y-4">
        {effects.map((effect, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-slate-600 leading-relaxed">{effect}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExpectedEffects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  const effectsData = [
    {
      title: 'Для работодателя',
      icon: Building2,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-500',
      effects: [
        'Снижение производственного травматизма за счёт раннего выявления стресс-факторов (РОФЭС)',
        'Снижение профессиональных и стресс-индуцированных заболеваний',
        'Рост производительности труда за счёт улучшения физического и психического состояния сотрудников (АВР-051)',
        'Экономия на страховых взносах и снижение выплат по больничным листам'
      ]
    },
    {
      title: 'Для системы здравоохранения',
      icon: Heart,
      color: 'bg-gradient-to-br from-rose-500 to-pink-500',
      effects: [
        'Достижение целевых показателей Концепции (снижение смертности от БСК на 18,2%)',
        'Снижение медикаментозной нагрузки на население',
        'Разгрузка первичного звена (поликлиник) за счёт автоматизации записи и обработки вызовов (TWIN)',
        'Получение объективных данных о состоянии здоровья работающего населения для планирования профилактических мероприятий'
      ]
    },
    {
      title: 'Для работника',
      icon: Users,
      color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      effects: [
        'Удобный цифровой сервис для записи и получения напоминаний (TWIN)',
        'Доступ к немедикаментозным методам коррекции давления и противодействия стрессу (АВР-051)',
        'Инструмент самоконтроля для оценки уровня стресса и эффективности отдыха (РОФЭС)'
      ]
    }
  ];

  const keyMetrics = [
    { icon: Activity, label: 'Снижение травматизма', value: 'За счёт раннего выявления' },
    { icon: PiggyBank, label: 'Экономия', value: 'Страховые взносы и больничные' },
    { icon: Pill, label: 'Медикаментозная нагрузка', value: 'Существенное снижение' },
    { icon: Clock, label: 'Разгрузка поликлиник', value: 'Автоматизация процессов' },
    { icon: Smartphone, label: 'Удобство', value: 'Цифровой сервис 24/7' },
    { icon: Zap, label: 'Производительность', value: 'Рост за счёт здоровья' },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-sm font-medium text-emerald-700 mb-6">
            <TrendingUp className="w-4 h-4" />
            Раздел 4
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Ожидаемые эффекты от интеграции
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Комплексный подход приносит выгоды всем участникам экосистемы
          </p>
        </div>

        {/* Effects Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {effectsData.map((data, idx) => (
            <EffectCard key={idx} {...data} />
          ))}
        </div>

        {/* Key Metrics */}
        <div className={`bg-white rounded-2xl p-8 shadow-card border border-slate-100 transition-all duration-700 delay-500 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h3 className="text-xl font-bold text-slate-800 mb-8 text-center">
            Ключевые метрики эффективности
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyMetrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-6 h-6 text-slate-600" />
                </div>
                <div className="text-sm font-medium text-slate-800 mb-1">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div className={`mt-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white transition-all duration-700 delay-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Синергетический эффект</h4>
              <p className="text-white/90">
                Интеграция TWIN и «Инферум» создаёт уникальную для российских регионов экосистему 
                превентивной медицины, замкнутую на конкретные измеримые результаты. 
                Обе компании — резиденты Свердловской области с готовыми, апробированными решениями.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
