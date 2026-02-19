import { Activity, MapPin, Calendar, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">Здоровье работника</span>
            </div>
            <p className="text-sm leading-relaxed">
              Аналитическая справка об интеграции продуктов TWIN и «Инферум» 
              в платформу «Здоровье работника» в рамках Концепции развития 
              превентивной медицины Свердловской области до 2030 года.
            </p>
          </div>

          {/* Document Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Информация о документе</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-500" />
                <span>Дата: 16 февраля 2026 г.</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-sky-500" />
                <span>Статус: Для служебного пользования</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>Свердловская область</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#introduction" className="hover:text-sky-400 transition-colors">Введение</a>
              </li>
              <li>
                <a href="#potential" className="hover:text-sky-400 transition-colors">Потенциал компаний</a>
              </li>
              <li>
                <a href="#integration" className="hover:text-sky-400 transition-colors">Модель интеграции</a>
              </li>
              <li>
                <a href="#effects" className="hover:text-sky-400 transition-colors">Ожидаемые эффекты</a>
              </li>
              <li>
                <a href="#conclusions" className="hover:text-sky-400 transition-colors">Выводы</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © 2026 Аналитическая справка
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              TWIN — коммуникационный слой
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              «Инферум» — аппаратный слой
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
