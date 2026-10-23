import { Icon } from '../icons/Icon';
import { EmptyIllustration } from './EmptyIllustration';

export function EmptyState() {
  return (
    <div className="result-panel result-panel--centered state-empty">
      <EmptyIllustration className="state-empty__art" />
      <h2 className="state__title">Здесь появится ваш рецепт</h2>
      <p className="state__text">
        Перечислите продукты и нажмите «Придумать рецепт». Мы покажем название блюда, время
        приготовления, ингредиенты и пошаговую инструкцию.
      </p>
      <ul className="state-empty__features">
        <li>
          <Icon name="clock" size={16} />
          Время
        </li>
        <li>
          <Icon name="users" size={16} />
          Порции
        </li>
        <li>
          <Icon name="level" size={16} />
          Сложность
        </li>
      </ul>
    </div>
  );
}
