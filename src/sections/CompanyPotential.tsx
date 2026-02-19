import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { 
  Cpu, 
  MessageSquare, 
  Phone, 
  Bot, 
  Settings, 
  Zap, 
  Building2, 
  Globe,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Activity,
  Heart,
  Brain,
  Microscope,
  Award,
  MapPin
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlights?: string[];
}

function FeatureCard({ icon: Icon, title, description, highlights }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-sky-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
          
          {highlights && highlights.length > 0 && (
            <div className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="space-y-2">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {highlights && highlights.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center gap-1 text-sm text-sky-600 hover:text-sky-700 font-medium"
            >
              {isExpanded ? (
                <>Свернуть <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Подробнее <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface TechSpecProps {
  label: string;
  value: string;
  icon: React.ElementType;
}

function TechSpec({ label, value, icon: Icon }: TechSpecProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
      <Icon className="w-5 h-5 text-slate-400" />
      <div>
        <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
        <div className="font-semibold text-slate-800">{value}</div>
      </div>
    </div>
  );
}

export function CompanyPotential() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const [activeTab, setActiveTab] = useState<'twin' | 'inferum'>('twin');

  return (
    <section 
      ref={sectionRef}
      id="potential"
      className="py-20 md:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full text-sm font-medium text-sky-700 mb-6">
            <Cpu className="w-4 h-4" />
            Раздел 2
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Потенциал компаний-разработчиков
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Обе компании имеют успешный опыт внедрения решений в медицинской сфере 
            и базируются в Свердловской области
          </p>
        </div>

        {/* Company Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-card border border-slate-100">
            <button
              onClick={() => setActiveTab('twin')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'twin'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              TWIN
            </button>
            <button
              onClick={() => setActiveTab('inferum')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'inferum'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Activity className="w-4 h-4" />
              «Инферум»
            </button>
          </div>
        </div>

        {/* TWIN Content */}
        {activeTab === 'twin' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Company Header */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-800">TWIN</h3>
                    <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                      Коммуникационный и ИИ-слой
                    </span>
                  </div>
                  <p className="text-slate-600">
                    Разработчик — <strong>«Уралинновация»</strong>, г. Екатеринбург. 
                    Омниканальная SaaS-платформа разговорного ИИ, включенная в реестр российского ПО.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Екатеринбург</span>
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-sky-600" />
                Ключевые возможности для интеграции
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FeatureCard
                  icon={Settings}
                  title="Интеграция с МИС"
                  description="Успешно протестирована интеграция с МИС «Клиентикс.Здоровье» и Renovatio"
                  highlights={[
                    'Автоматизация полного цикла работы с визитами',
                    'Запись, подтверждение, отмена, напоминание',
                    'Сбор обратной связи',
                    'Готовое решение для записи на профосмотры'
                  ]}
                />
                <FeatureCard
                  icon={Bot}
                  title="Автоматизация рутинных процессов"
                  description="Кейс с сетью стоматологий Dental Pro показал снижение нагрузки на администраторов на 30%"
                  highlights={[
                    'Автоматизация записи и напоминаний',
                    '«Звонки заботы» для пациентов',
                    'Полная применимость к задаче диспансеризации',
                    'Интеграция через CRM DentalPRO'
                  ]}
                />
                <FeatureCard
                  icon={Building2}
                  title="Опыт работы с госучреждениями"
                  description="Разработан бот для рязанской областной поликлиники"
                  highlights={[
                    'Обработка входящих вызовов для записи на вакцинацию',
                    'Вызов врача на дом',
                    'Полная замена операторов на потоке рутинных звонков'
                  ]}
                />
                <FeatureCard
                  icon={Phone}
                  title="Масштабируемость"
                  description="Подтверждена способность обрабатывать до 50 000 одновременных звонков"
                  highlights={[
                    'Актуально для крупных промышленных предприятий',
                    'Высокая доступность системы',
                    'Отказоустойчивая архитектура'
                  ]}
                />
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
              <h4 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-sky-600" />
                Технические характеристики
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <TechSpec
                  icon={Phone}
                  label="Параллельные разговоры"
                  value="до 50 000"
                />
                <TechSpec
                  icon={Settings}
                  label="Конструктор сценариев"
                  value="no-code"
                />
                <TechSpec
                  icon={Bot}
                  label="Язык сценариев"
                  value="BPL"
                />
                <TechSpec
                  icon={Globe}
                  label="Интеграции"
                  value="Любые API"
                />
              </div>
              <div className="mt-6 p-4 bg-sky-50 rounded-lg border border-sky-100">
                <p className="text-sm text-sky-800">
                  <strong>Дополнительно:</strong> Возможность создания кастомных интеграций 
                  с любыми внешними сервисами при наличии API. Потенциальная функция 
                  управления устройствами через голос.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Inferum Content */}
        {activeTab === 'inferum' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Company Header */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-800">«Инферум»</h3>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                      Аппаратный слой сбора данных
                    </span>
                  </div>
                  <p className="text-slate-600">
                    Медико-технологическая компания, разработчик портативных медицинских 
                    изделий для превентивной медицины и охраны труда.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Екатеринбург</span>
                </div>
              </div>
            </div>

            {/* Product Lines */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* ROFES */}
              <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">РОФЭС</h4>
                    <p className="text-sm text-slate-500">Регистратор оценки функционального эмоционального состояния</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">
                  Портативный тестер для <strong>экспресс-оценки (5 минут)</strong> уровня стресса, 
                  признаков усталости, состояния органов и систем.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-800">Позиционирование</div>
                      <div className="text-sm text-slate-600">Инструмент для охраны труда и доклинического контроля</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-800">Одобрение</div>
                      <div className="text-sm text-slate-600">Успешно испытан специалистами «РЖД-Медицина»</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="text-sm font-medium text-purple-800 mb-3">4 ключевых параметра для платформы:</div>
                  <ol className="space-y-2 text-sm text-purple-700">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">1.</span>
                      <span>Общее состояние (адаптивные возможности организма)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">2.</span>
                      <span>Уровень психоэмоционального стресса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">3.</span>
                      <span>Состояние сердечно-сосудистой системы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">4.</span>
                      <span>Состояние «эндокринной триады»</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* AVR-051 */}
              <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">АВР-051</h4>
                    <p className="text-sm text-slate-500">Электростимулятор для коррекции артериального давления</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">
                  Медицинское изделие (зарегистрировано в 2016 г.), воздействующее 
                  нейроподобными импульсами на автономную нервную систему.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-800">Уникальность</div>
                      <div className="text-sm text-slate-600">Работает как на снижение, так и на повышение давления</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-800">Эффект</div>
                      <div className="text-sm text-slate-600">Снижение медикаментозной нагрузки</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-rose-50 rounded-lg border border-rose-100">
                  <div className="text-sm font-medium text-rose-800 mb-3">Цель применения в медицине труда:</div>
                  <p className="text-sm text-rose-700">
                    Снижение воздействия стресса путём снижения тонуса симпатической нервной системы. 
                    Симпатикотония лежит в основе метаболического синдрома.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-600">
                    Методические рекомендации академика РАН И.В. Бухтиярова
                  </span>
                </div>
              </div>
            </div>

            {/* Company Infrastructure */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
              <h4 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-emerald-600" />
                Инфраструктура и экспертиза
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="font-semibold text-slate-800">Собственное КБ</div>
                  <div className="text-sm text-slate-500">Екатеринбург</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="font-semibold text-slate-800">Производство</div>
                  <div className="text-sm text-slate-500">Каменск-Уральский</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="font-semibold text-slate-800">Патенты</div>
                  <div className="text-sm text-slate-500">Запатентованные разработки</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="font-semibold text-slate-800">Экспорт</div>
                  <div className="text-sm text-slate-500">12+ стран мира</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-sm text-emerald-800">
                  <strong>Страны присутствия:</strong> Австрия, Великобритания, Чехия, Египет, 
                  Кения, Уганда, Руанда, Вьетнам, Индия, Сингапур, ОАЭ
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
