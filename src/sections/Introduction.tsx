import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileText, TrendingUp, Shield, Target } from 'lucide-react';

export function Introduction() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section 
      ref={sectionRef}
      id="introduction"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full text-sm font-medium text-sky-700 mb-6">
            <FileText className="w-4 h-4" />
            Раздел 1
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Введение
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Контекст и стратегические цели развития превентивной медицины в регионе
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Регион начинает 2026 год с <strong className="text-slate-800">беспрецедентным бюджетом</strong>. 
                Объём финансирования территориальной программы госгарантий увеличен на{' '}
                <span className="text-sky-600 font-semibold">10 млрд рублей</span>, достигнув{' '}
                <span className="text-sky-600 font-semibold">153 млрд рублей</span>.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Министерство здравоохранения Свердловской области утвердило официальную{' '}
                <strong className="text-slate-800">«Концепцию развития первичной профилактики и превентивной медицины»</strong>, 
                подписанную 30 января 2026 года.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Концепция ставит амбициозные цели по <strong>смещению фокуса</strong> с лечения заболеваний 
                на их предупреждение, с особым акцентом на здоровье работающего населения.
              </p>
            </div>

            {/* Key Goal */}
            <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Ключевая цель</h4>
                  <p className="text-slate-600">
                    Целевой охват профосмотрами — <span className="text-2xl font-bold text-sky-600">85%</span> к 2030 году
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className={`space-y-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Ключевые финансовые показатели</h3>
            
            {/* Budget Card */}
            <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Рост финансирования</div>
                  <div className="text-2xl font-bold text-emerald-600">+10 млрд ₽</div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                Основной прирост (8 млрд) обеспечен средствами ОМС, ещё 2 млрд — из областного бюджета
              </div>
            </div>

            {/* OMS Card */}
            <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Подушевой норматив ОМС</div>
                  <div className="text-2xl font-bold text-sky-600">25 281 ₽</div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                На <span className="font-semibold text-sky-600">14%</span> выше среднероссийского показателя
              </div>
            </div>

            {/* Strategy Card */}
            <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Стратегические направления</div>
                  <div className="text-lg font-semibold text-slate-800">2 главных линии</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  Тотальная цифровизация
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  Реорганизация экстренной помощи
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`mt-16 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <blockquote className="relative bg-slate-50 rounded-2xl p-8 md:p-10">
            <div className="absolute top-4 left-6 text-6xl text-sky-200 font-serif">"</div>
            <p className="relative z-10 text-lg md:text-xl text-slate-700 italic text-center max-w-3xl mx-auto">
              Анализ степени развития существующих МИС показывает, что наибольший синергетический эффект 
              может быть достигнут при интеграции в экосистему платформы двух российских компаний —{' '}
              <strong className="text-sky-600">TWIN</strong> (коммуникационный слой) и{' '}
              <strong className="text-sky-600">«Инферум»</strong> (аппаратный слой сбора данных).
            </p>
            <div className="absolute bottom-4 right-6 text-6xl text-sky-200 font-serif rotate-180">"</div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
