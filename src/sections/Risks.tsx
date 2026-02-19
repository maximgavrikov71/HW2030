import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  AlertTriangle, 
  Shield, 
  Database,
  Scale,
  TrendingUp,
  Lightbulb,
  FileWarning
} from 'lucide-react';

interface RiskCardProps {
  title: string;
  description: string;
  mitigation: string;
  icon: React.ElementType;
  severity: 'low' | 'medium' | 'high';
}

function RiskCard({ title, description, mitigation, icon: Icon, severity }: RiskCardProps) {
  const severityColors = {
    low: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    medium: 'bg-amber-50 border-amber-200 text-amber-700',
    high: 'bg-rose-50 border-rose-200 text-rose-700'
  };

  const severityLabels = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-slate-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h4 className="font-semibold text-slate-800">{title}</h4>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${severityColors[severity]}`}>
              {severityLabels[severity]}
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-4">{description}</p>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-slate-700">Рекомендация</span>
            </div>
            <p className="text-sm text-slate-600">{mitigation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Risks() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  const risks: RiskCardProps[] = [
    {
      title: 'Интеграция данных',
      description: 'Необходимо обеспечить бесшовную интеграцию API TWIN с будущей платформой «Здоровье работника», а также с существующими МИС.',
      mitigation: 'TWIN имеет успешный опыт интеграции с различными API. Рекомендуется провести пилотное тестирование интеграции перед масштабным внедрением.',
      icon: Database,
      severity: 'medium'
    },
    {
      title: 'Нормативное регулирование',
      description: 'Требуется чёткое разделение функционала: АВР-051 — медицинское изделие, РОФЭС — тестер для оценки тенденций (не ставит диагноз).',
      mitigation: 'В платформе необходимо предусмотреть ролевую модель доступа: врач видит полные данные, работник — только рекомендации.',
      icon: Scale,
      severity: 'low'
    },
    {
      title: 'Масштабируемость',
      description: 'Необходимо протестировать нагрузку на систему при масштабировании на крупные промышленные предприятия.',
      mitigation: 'TWIN подтвердил способность обрабатывать до 50 000 одновременных звонков. Рекомендуется пилотный проект на крупных предприятиях-партнёрах.',
      icon: TrendingUp,
      severity: 'low'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="risks"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-sm font-medium text-amber-700 mb-6">
            <FileWarning className="w-4 h-4" />
            Раздел 5
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Риски и рекомендации
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Потенциальные риски и пути их минимизации
          </p>
        </div>

        {/* Risks Grid */}
        <div className={`grid lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {risks.map((risk, idx) => (
            <RiskCard key={idx} {...risk} />
          ))}
        </div>

        {/* Mitigation Strategy */}
        <div className={`bg-slate-50 rounded-2xl p-8 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Стратегия минимизации рисков</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-600">1</span>
                </div>
                <div>
                  <div className="font-medium text-slate-800">Пилотный проект</div>
                  <p className="text-sm text-slate-600">
                    Запуск на крупных промышленных предприятиях-партнёрах 
                    (через Свердловский областной фонд и Союз промышленников)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-600">2</span>
                </div>
                <div>
                  <div className="font-medium text-slate-800">Поэтапное внедрение</div>
                  <p className="text-sm text-slate-600">
                    Начало с ограниченной группы работников с последующим масштабированием
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-600">3</span>
                </div>
                <div>
                  <div className="font-medium text-slate-800">Техническая поддержка</div>
                  <p className="text-sm text-slate-600">
                    Обе компании базируются в Свердловской области, 
                    что обеспечивает оперативную поддержку
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-600">4</span>
                </div>
                <div>
                  <div className="font-medium text-slate-800">Обучение персонала</div>
                  <p className="text-sm text-slate-600">
                    Проведение обучающих программ для медицинского персонала 
                    и администраторов системы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className={`mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">Важное замечание</h4>
            <p className="text-sm text-amber-700">
              Все риски оценены как управляемые. Наличие собственных конструкторских бюро 
              и производств у компаний «Инферум», а также подтверждённая масштабируемость 
              TWIN минимизируют технические и логистические риски проекта.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
