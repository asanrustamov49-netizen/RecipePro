import { Logo } from '../Header/Logo';
import './Footer.css';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo compact />
          <p className="footer__tagline">Рецепты из того, что уже есть на вашей кухне.</p>
        </div>

        <nav className="footer__nav" aria-label="Навигация в подвале">
          <a href="#generator">Генератор</a>
          <a href="#how-it-works">Как это работает</a>
          <a href="#top">Наверх</a>
        </nav>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <span>© {YEAR} AI Recipe Generator</span>
          <span>Рецепты носят рекомендательный характер — учитывайте аллергии и свежесть продуктов.</span>
        </div>
      </div>
    </footer>
  );
}
