import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  CheckCircle2, 
  Rocket, 
  Target,
  Calendar,
  MapPin,
  Cpu,
  Activity,
  ArrowRight
} from 'lucide-react';

export function Conclusions() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  const keyPoints = [
    {
      icon: Cpu,
      title: 'Технологическая готовность',
      description: 'Обе компании имеют готовые, апробированные решения'
    },
    {
      icon: MapPin,
      title: 'Региональная принадлежность',
      description: 'Резиденты Свердловской области — минимизация логистических рисков'
    },
    {
      icon: Activity,
      title: 'Уникальная экосистема',
      description: 'Создание уникальной для России системы превентивной медицины'
    },
    {
      icon: Target,
      title: 'Измеримые результаты',
      description: 'Замкнутость на конкретные целевые показатели'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="conclusions"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-sky-300 mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Раздел 6
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Выводы
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Стратегическое обоснование интеграции
          </p>
        </div>

        {/* Main Conclusion */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/10 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Стратегически обоснованное и технологически реализуемое решение
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Включение продуктов компаний <strong className="text-sky-400">TWIN</strong> (коммуникации и ИИ) 
                и <strong className="text-sky-400">«Инферум»</strong> (аппаратная диагностика и коррекция) 
                в план развития платформы «Здоровье работника» является стратегически обоснованным 
                и технологически вполне реализуемым.
              </p>
            </div>
          </div>
        </div>

        {/* Key Points Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {keyPoints.map((point, idx) => (
            <div 
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">{point.title}</h4>
              <p className="text-sm text-slate-400">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-sky-400" />
            <h3 className="text-xl font-bold">Возможность старта пилотного проекта</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">2026</div>
              <div className="text-white/80">Год начала пилотного проекта</div>
            </div>
            <ArrowRight className="w-8 h-8 text-slate-500 hidden md:block" />
            <div className="flex-1 bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2 text-emerald-400">2030</div>
              <div className="text-slate-400">Целевой охват профосмотрами — 85%</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-slate-400 mb-6">
            Данная интеграция позволит создать уникальную для российских регионов 
            экосистему превентивной медицины
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#potential"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
            >
              <Cpu className="w-5 h-5" />
              Потенциал компаний
            </a>
            <a 
              href="#integration"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Activity className="w-5 h-5" />
              Модель интеграции
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
