import { Icon, type IconName } from '../icons/Icon';
import './HowItWorks.css';

const STEPS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'pen',
    title: 'Перечислите продукты',
    text: 'Впишите через запятую, что есть в холодильнике, или выберите популярные ингредиенты.',
  },
  {
    icon: 'sparkles',
    title: 'ИИ подберёт блюдо',
    text: 'Модель учтёт сочетаемость продуктов и предложит реалистичный рецепт под ваш набор.',
  },
  {
    icon: 'chefHat',
    title: 'Готовьте по шагам',
    text: 'Список ингредиентов с количеством, время, сложность и понятные шаги приготовления.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="how" aria-labelledby="how-title">
      <div className="container">
        <div className="how__head">
          <span className="eyebrow">Как это работает</span>
          <h2 id="how-title" className="how__title">
            Три шага от холодильника до ужина
          </h2>
        </div>

        <ol className="how__grid">
          {STEPS.map((step, index) => (
            <li key={step.title} className="how__card">
              <div className="how__card-top">
                <span className="how__icon">
                  <Icon name={step.icon} size={22} />
                </span>
                <span className="how__index">0{index + 1}</span>
              </div>
              <h3 className="how__card-title">{step.title}</h3>
              <p className="how__card-text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
