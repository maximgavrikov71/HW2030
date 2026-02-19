import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { 
  Layers, 
  Activity, 
  Database, 
  MessageSquare, 
  Target,
  ChevronRight,
  Calendar,
  Clock,
  Users,
  Smartphone,
  FileText,
  Bell,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface CycleStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

function CycleStep({ number, title, description, icon: Icon, color }: CycleStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold mb-3">
        {number}
      </div>
      <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 max-w-[200px]">{description}</p>
    </div>
  );
}

interface DetailCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  accent?: 'blue' | 'green' | 'purple' | 'orange';
}

function DetailCard({ icon: Icon, title, children, accent = 'blue' }: DetailCardProps) {
  const accentColors = {
    blue: 'from-sky-500 to-cyan-500',
    green: 'from-emerald-500 to-teal-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-amber-500'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
      </div>
      {children}
    </div>
  );
}

export function IntegrationModel() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const [activeSubsection, setActiveSubsection] = useState<'monitoring' | 'data' | 'communication'>('monitoring');

  return (
    <section 
      ref={sectionRef}
      id="integration"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full text-sm font-medium text-sky-700 mb-6">
            <Layers className="w-4 h-4" />
            Раздел 3
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Предлагаемая модель интеграции
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Эффективная экосистема строится по принципу замкнутого цикла
          </p>
        </div>

        {/* Cycle Diagram */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {/* Arrows for desktop */}
              <div className="hidden md:block absolute top-8 left-[20%] right-[20%]">
                <div className="flex justify-between">
                  <ArrowRight className="w-6 h-6 text-slate-300" />
                  <ArrowRight className="w-6 h-6 text-slate-300" />
                  <ArrowRight className="w-6 h-6 text-slate-300" />
                </div>
              </div>
              
              <CycleStep
                number={1}
                title="Измерение"
                description="Сбор данных с помощью РОФЭС и АВР-051"
                icon={Activity}
                color="bg-gradient-to-br from-purple-500 to-pink-500"
              />
              <CycleStep
                number={2}
                title="Анализ"
                description="Обработка данных в платформе «Здоровье работника»"
                icon={Database}
                color="bg-gradient-to-br from-sky-500 to-cyan-500"
              />
              <CycleStep
                number={3}
                title="Коммуникация"
                description="Автоматические уведомления через TWIN"
                icon={MessageSquare}
                color="bg-gradient-to-br from-emerald-500 to-teal-500"
              />
              <CycleStep
                number={4}
                title="Мотивация"
                description="Рекомендации и запись на приём"
                icon={Target}
                color="bg-gradient-to-br from-orange-500 to-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Subsection Navigation */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {[
            { id: 'monitoring', label: 'Организация мониторинга', icon: Activity },
            { id: 'data', label: 'Передача данных', icon: Database },
            { id: 'communication', label: 'Коммуникация и аналитика', icon: MessageSquare },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSubsection(id as typeof activeSubsection)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSubsection === id
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Monitoring Subsection */}
        {activeSubsection === 'monitoring' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* ROFES Monitoring */}
              <DetailCard icon={Activity} title="Мониторинг с РОФЭС" accent="purple">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Размещение</div>
                      <div className="text-sm text-slate-600">Помещения предрейсовых/предсменных медосмотров</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Оснащение</div>
                      <div className="text-sm text-slate-600">Комплексы «РОФЭС + планшет Android»</div>
                      <div className="text-sm text-sky-600 font-medium">1 комплекс на 12 работников</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">График тестирования</div>
                      <div className="text-sm text-slate-600">1 раз в квартал, 5 дней подряд</div>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-sm text-purple-800">
                      <strong>20 тестирований в год</strong> — достаточно для динамической оценки состояния
                    </div>
                  </div>
                </div>
              </DetailCard>

              {/* AVR-051 Monitoring */}
              <DetailCard icon={Heart} title="Применение АВР-051" accent="orange">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Целевая аудитория</div>
                      <div className="text-sm text-slate-600">Сотрудники групп риска (гипертоники)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Оснащение</div>
                      <div className="text-sm text-slate-600">Аппараты АВР-051</div>
                      <div className="text-sm text-sky-600 font-medium">1 аппарат на 2 работников</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Схема применения</div>
                      <div className="text-sm text-slate-600">2 недели, 2 процедуры в день (утро/вечер)</div>
                    </div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="text-sm text-orange-800">
                      <strong>Эффект сохраняется 2 недели</strong> после окончания курса
                    </div>
                  </div>
                </div>
              </DetailCard>
            </div>

            {/* Software Development */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Требуемая доработка ПО РОФЭС</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Сокращение перечня индицируемых параметров до 4 ключевых</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Защищённая коммуникация с платформой (API)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Transfer Subsection */}
        {activeSubsection === 'data' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid lg:grid-cols-3 gap-6">
              <DetailCard icon={Database} title="Передача результатов" accent="blue">
                <p className="text-slate-600 text-sm mb-4">
                  Результаты измерений автоматически передаются в ядро платформы через защищённые каналы (API)
                </p>
                <div className="flex items-center gap-2 text-sm text-sky-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Обезличенные или персонализированные данные</span>
                </div>
              </DetailCard>

              <DetailCard icon={TrendingUp} title="Отслеживание динамики" accent="green">
                <p className="text-slate-600 text-sm mb-4">
                  Возможность отслеживания динамики в масштабах:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    Предприятия
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    Региона
                  </li>
                </ul>
              </DetailCard>

              <DetailCard icon={Target} title="Роль платформы" accent="purple">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Bell className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Напоминание о необходимости процедуры (TWIN.Notify)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <FileText className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Образовательные материалы в личном кабинете</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Activity className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Ведение дневника артериального давления</span>
                  </li>
                </ul>
              </DetailCard>
            </div>

            {/* Data Flow Diagram */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-6 text-center">Схема потока данных</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-white rounded-xl p-6 shadow-card text-center w-full md:w-48">
                  <Activity className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="font-medium text-slate-800">РОФЭС / АВР-051</div>
                  <div className="text-xs text-slate-500">Сбор данных</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
                <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl p-6 text-center w-full md:w-48 text-white shadow-lg">
                  <Database className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-medium">API</div>
                  <div className="text-xs text-white/80">Защищённый канал</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
                <div className="bg-white rounded-xl p-6 shadow-card text-center w-full md:w-48">
                  <Target className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="font-medium text-slate-800">Платформа</div>
                  <div className="text-xs text-slate-500">«Здоровье работника»</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Communication Subsection */}
        {activeSubsection === 'communication' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid lg:grid-cols-2 gap-6">
              <DetailCard icon={Bell} title="При отклонениях" accent="orange">
                <p className="text-slate-600 text-sm mb-4">
                  Платформа анализирует данные и инициирует коммуникационные сценарии:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Рост уровня стресса → уведомление с рекомендацией</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Ухудшение адаптивных возможностей → обращение к цеховому врачу</span>
                  </li>
                </ul>
              </DetailCard>

              <DetailCard icon={MessageSquare} title="Автоматизация коммуникаций" accent="blue">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-sky-600 font-medium">1</span>
                    </div>
                    <span>Напоминания о сдаче комплекса РОФЭС</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-sky-600 font-medium">2</span>
                    </div>
                    <span>Напоминания об измерениях давления и процедурах АВР-051</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-sky-600 font-medium">3</span>
                    </div>
                    <span>Приглашения на вакцинацию и диспансеризацию (TWIN.Notify)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-sky-600 font-medium">4</span>
                    </div>
                    <span>Запись к узким специалистам (TWIN.VoiceAssistant)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-sky-600 font-medium">5</span>
                    </div>
                    <span>Сбор обратной связи после осмотров</span>
                  </li>
                </ul>
              </DetailCard>
            </div>

            {/* Integration & Reporting */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800">Интеграция с CRM и МИС</h4>
                </div>
                <p className="text-slate-600 text-sm">
                  Все результаты коммуникаций и тестирований фиксируются в единой базе платформы 
                  с интеграцией в медицинские информационные системы поликлиник.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800">Формирование отчётности</h4>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Аналитика для работодателя и регионального Минздрава:
                </p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    Динамика функционального состояния коллектива
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    Количество проведённых коррекций давления
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    Охват профосмотрами
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Import MapPin for the monitoring section
import { MapPin, Heart, Settings } from 'lucide-react';
