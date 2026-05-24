import { useState, useEffect } from 'react';
import { useI18n } from '@/hooks/useI18n';
import { SettingsPanel, CompactSettings } from './common/SettingsPanel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { href: '#accueil', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#programmes', label: t('nav.programmes', 'Programmes') },
    { href: '#testimonials', label: t('nav.testimonials', 'Témoignages') },
    { href: '#tarifs', label: t('nav.pricing', 'Tarifs') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
      <nav className="container-max flex h-full items-center justify-between" aria-label="Navigation principale">
        <a href="#accueil" className="font-display text-2xl tracking-widest text-[var(--color-text)]">
          GML <span className="text-accent">FITNESS</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="site-nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#booking" className="btn btn-primary">
            {t('nav.book')}
          </a>
          <SettingsPanel />
        </div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className="sr-only">{isMenuOpen ? 'Fermer' : 'Menu'}</span>
          <div className="w-6 h-5 flex flex-col justify-between" aria-hidden="true">
            <span className={`block h-0.5 bg-[var(--color-text)] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[var(--color-text)] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[var(--color-text)] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-[var(--header-height)] inset-x-0 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-lg animate-fade-in"
        >
          <ul className="flex flex-col gap-1 p-4 list-none m-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 px-2 font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-[var(--color-border)]">
              <a href="#booking" className="btn btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                {t('nav.book')}
              </a>
            </li>
            <li className="flex items-center justify-between pt-4">
              <span className="text-sm text-muted">{t('common.settings', 'Paramètres')}</span>
              <CompactSettings />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
