import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Activity, Users, TrendingUp, Calendar } from 'lucide-react';

function StatCard({ 
  value, 
  suffix, 
  prefix,
  label, 
  icon: Icon,
  delay = 0 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  label: string; 
  icon: React.ElementType;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { formattedValue } = useCountUp({
    end: value,
    duration: 2500,
    delay: isVisible ? delay : 0,
    suffix,
    prefix,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-slate-100 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">
        {formattedValue}
      </div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

export function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative min-h-screen gradient-hero animate-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Badge */}
        <div 
          ref={titleRef}
          className={`flex justify-center mb-8 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-sky-700 border border-sky-100 shadow-sm">
            <Calendar className="w-4 h-4" />
            16 февраля 2026 г. | Для служебного пользования
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
            Аналитическая справка
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            О возможностях интеграции продуктов компаний{' '}
            <span className="text-gradient font-semibold">TWIN</span> и{' '}
            <span className="text-gradient font-semibold">«Инферум»</span> в платформу{' '}
            <span className="font-semibold text-slate-700">«Здоровье работника»</span>
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            В рамках Концепции развития превентивной медицины Свердловской области до 2030 года
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          <StatCard 
            value={153} 
            suffix=" млрд ₽" 
            label="Бюджет ТПГГ 2026" 
            icon={TrendingUp}
            delay={200}
          />
          <StatCard 
            value={25281} 
            suffix="" 
            label="Подушевой норматив ОМС" 
            icon={Activity}
            delay={400}
          />
          <StatCard 
            value={85} 
            suffix="%" 
            label="Целевой охват профосмотрами к 2030" 
            icon={Users}
            delay={600}
          />
          <StatCard 
            value={18.2} 
            suffix="%" 
            label="Снижение смертности от БСК" 
            icon={Activity}
            delay={800}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#potential"
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Потенциал компаний
          </a>
          <a 
            href="#integration"
            className="px-8 py-4 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
          >
            Модель интеграции
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-slate-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
