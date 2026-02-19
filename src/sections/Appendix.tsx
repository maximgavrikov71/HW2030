import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { 
  FileText, 
  Database, 
  Server,
  Microscope,
  ChevronDown,
  ChevronUp,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface ResearchItemProps {
  number: number;
  title: string;
  organization: string;
  type?: string;
}

function ResearchItem({ number, title, organization, type }: ResearchItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
      <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
        <span className="text-sm font-bold text-sky-600">{number}</span>
      </div>
      <div className="flex-1">
        <p className="text-slate-700 text-sm leading-relaxed">{title}</p>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Building2 className="w-3 h-3" />
            {organization}
          </span>
          {type && (
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs">
              {type}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Appendix() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const [showAllResearch, setShowAllResearch] = useState(false);

  const rmisSystems = [
    { name: 'МИС «Единая цифровая платформа» (ЕЦП.МИС)', vendor: 'РТ МИС (дочерняя компания "Ростелекома")', status: 'Внедрена во всех медучреждениях региона с 2024 г.' },
    { name: 'РИП СУИЗ', vendor: 'ГБУ СО «Оператор электронного правительства»', status: 'Интеграционная платформа региона' },
    { name: 'АИС «Региональный акушерский мониторинг»', vendor: '-', status: 'Сплошной мониторинг беременных' },
    { name: '«АСУЛОН М-АПТЕКА ПЛЮС ЛПУ»', vendor: '-', status: 'Управление льготным лекарственным обеспечением' },
    { name: 'АДИС', vendor: '-', status: 'Автоматизация станций скорой помощи' },
    { name: 'ГИС «Танатос»', vendor: '-', status: 'Патологоанатомические исследования' },
    { name: 'Онкологическая информационная система «ОНКОР»', vendor: '-', status: 'Ведение онкологических пациентов' },
    { name: 'АИС «Медицинская интегрированная регистратура»', vendor: '-', status: 'Управление потоками пациентов' },
    { name: 'Централизованная лабораторная информационная система', vendor: '-', status: 'Автоматизация лабораторий' },
    { name: 'Центральный архив медицинских изображений (ЦАМИ)', vendor: '-', status: 'Хранение рентген, КТ, МРТ' },
  ];

  const researchData = [
    {
      title: 'Оценка эффективности применения электростимулятора чрескожного для коррекции артериального давления «АВР-051» для стабилизации функционального состояния и артериального давления у лиц, работающих в условиях воздействия повышенных психоэмоциональных нагрузок, стрессовых ситуаций, а также у лиц, работающих во вредных и опасных условиях труда',
      organization: 'ФГБНУ «НИИ Медицины труда им. Академика Н.Ф.Измерова»',
      type: 'Научно-исследовательская работа'
    },
    {
      title: 'Оценка эффективности применения чрескожного электростимулятора «АВР-051» для контроля уровня артериального давления и достижения стресс-протективного эффекта у лиц, работающих в условиях воздействия повышенных психоэмоциональных нагрузок, стрессовых ситуаций и опасных условиях труда',
      organization: 'АО СК «СОГАЗ-МЕД», ООО «СОГАЗ-Профмедицина», ПАО «Сибур»',
      type: 'Рандомизированное плацебо-контролируемое исследование'
    },
    {
      title: 'Влияние трёхмесячной стимуляционной терапии на работников Олимпиадинского ГОК АО «Полюс Красноярск» на фоне неблагоприятных сезонных условий окружающей среды',
      organization: 'ФГБУ «НМИЦ им. В.А.Алмазова», «Полюс Красноярск»',
      type: 'Исследование'
    },
    {
      title: 'Влияние курсового применения электростимулятора чрескожного для коррекции артериального давления «АВР-051» на показатели циркадного профиля артериального давления',
      organization: 'ФГБУ «НМИЦ им. В.А.Алмазова»',
      type: 'Слепое рандомизированное плацебо-контролируемое исследование'
    },
    {
      title: 'Оценка эффективности и безопасности применения электростимулятора чрескожного «АВР-051» для коррекции системного артериального давления в клинической практике',
      organization: 'ГБУЗ СО «Свердловская областная клиническая больница №1»',
      type: 'Клиническое исследование'
    },
    {
      title: 'Анализ параметров микроциркуляторного кровотока на фоне курсового применения чрескожной электростимуляции у мужчин с впервые выявленной артериальной гипертензией',
      organization: 'ФГБУ «НМИЦ Терапии и Профилактической медицины», ФГБУ ГНЦ РФ «ИМБП» РАН, РУДН',
      type: 'Научное исследование'
    },
    {
      title: 'Effect of an electro-stimulator device on the average 24-hour blood pressure in patients with mild and moderate hypertension',
      organization: 'Cairo University, Nottingham University Hospitals NHS Trust',
      type: 'Международное исследование'
    },
    {
      title: 'Отчёт о результатах пилотного проекта по пробной эксплуатации АПК «РОФЭС» в кабинете предрейсовых медицинских осмотров моторвагонного депо ТЧ-12 и ЧУЗ «Поликлиника «РЖД-Медицина» города Александров',
      organization: 'Филиал ОАО «РЖД» Центральная дирекция здравоохранения',
      type: 'Пилотный проект'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="appendix"
      className="py-20 md:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-full text-sm font-medium text-slate-700 mb-6">
            <FileText className="w-4 h-4" />
            Приложения
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Дополнительные материалы
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Техническая и научная база проекта
          </p>
        </div>

        {/* RMIS Section */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Приложение № 1</h3>
                  <p className="text-slate-500">Региональная медицинская информационная система Свердловской области</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="bg-sky-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-sky-800">
                  В Свердловской области создана и активно развивается комплексная государственная 
                  информационная система в сфере здравоохранения. Регион завершил переход на единую 
                  цифровую платформу — вместо множества разрозненных систем во всех государственных 
                  медучреждениях работает одна основная.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Система</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Разработчик / Оператор</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Назначение</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rmisSystems.map((system, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 text-sm font-medium text-slate-800">{system.name}</td>
                        <td className="py-3 px-4 text-sm text-slate-600">{system.vendor}</td>
                        <td className="py-3 px-4 text-sm text-slate-600">{system.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium text-emerald-800">Достижение региона</span>
                </div>
                <p className="text-sm text-emerald-700">
                  В 2024 году Свердловская область заняла <strong>4-е место в России</strong> по количеству 
                  переданных электронных медицинских документов!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Приложение № 2</h3>
                  <p className="text-slate-500">Перечень клинических исследований АВР-051 и результатов эксплуатации РОФЭС</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {researchData.slice(0, showAllResearch ? undefined : 4).map((research, idx) => (
                  <ResearchItem 
                    key={idx}
                    number={idx + 1}
                    title={research.title}
                    organization={research.organization}
                    type={research.type}
                  />
                ))}
              </div>

              {researchData.length > 4 && (
                <button
                  onClick={() => setShowAllResearch(!showAllResearch)}
                  className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors"
                >
                  {showAllResearch ? (
                    <>
                      Свернуть <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Показать все исследования ({researchData.length}) <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 text-slate-500">
            <Server className="w-4 h-4" />
            <span className="text-sm">Аналитическая справка подготовлена 16 февраля 2026 г.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
