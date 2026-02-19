import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const navItems = [
  { label: 'Введение', href: '#introduction' },
  { label: 'Потенциал компаний', href: '#potential' },
  { label: 'Модель интеграции', href: '#integration' },
  { label: 'Эффекты', href: '#effects' },
  { label: 'Риски', href: '#risks' },
  { label: 'Выводы', href: '#conclusions' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                isScrolled 
                  ? 'bg-gradient-to-br from-sky-500 to-cyan-500' 
                  : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className={`font-semibold transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-slate-700'
              }`}>
                Здоровье работника
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                      : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#conclusions"
                onClick={(e) => handleNavClick(e, '#conclusions')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isScrolled
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-md'
                    : 'bg-white/90 text-sky-600 hover:bg-white'
                }`}
              >
                Выводы
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-600'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute top-16 left-0 right-0 bg-white shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
