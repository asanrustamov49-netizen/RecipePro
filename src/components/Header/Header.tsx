import { Icon } from '../icons/Icon';
import { Logo } from './Logo';
import './Header.css';

const NAV_LINKS = [
  { href: '#generator', label: 'Генератор' },
  { href: '#how-it-works', label: 'Как это работает' },
];

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" aria-label="AI Recipe Generator — на главную">
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__ai" title="Ассистент на базе ИИ">
          <span className="header__ai-icon">
            <Icon name="sparkles" size={16} />
          </span>
          <span className="header__ai-label">AI</span>
        </div>
      </div>
    </header>
  );
}
