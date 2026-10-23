import { Icon, type IconName } from '../icons/Icon';
import './Hero.css';

const HIGHLIGHTS: { icon: IconName; label: string }[] = [
  { icon: 'basket', label: 'Из того, что уже есть дома' },
  { icon: 'utensils', label: 'Пошаговое приготовление' },
  { icon: 'clock', label: 'Время, порции и сложность' },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <span className="hero__badge">
          <Icon name="sparkles" size={15} />
          Кулинарный ИИ-ассистент
        </span>

        <h1 id="hero-title" className="hero__title">
          Что приготовим <em>сегодня?</em>
        </h1>

        <p className="hero__subtitle">
          Перечислите продукты из холодильника — и получите рецепт блюда, которое можно
          приготовить прямо сейчас, без похода в магазин.
        </p>

        <ul className="hero__highlights">
          {HIGHLIGHTS.map((item) => (
            <li key={item.label} className="hero__highlight">
              <Icon name={item.icon} size={18} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
