import { Icon } from '../icons/Icon';

interface LoadingStateProps {
  ingredients: string[];
  onCancel: () => void;
}

export function LoadingState({ ingredients, onCancel }: LoadingStateProps) {
  return (
    <div className="result-panel state-loading">
      <div className="state-loading__head">
        <span className="state-loading__orb" aria-hidden="true">
          <Icon name="sparkles" size={22} />
        </span>
        <div className="state-loading__copy">
          <h2 className="state__title state__title--sm">Придумываем рецепт</h2>
          <p className="state__text">Подбираем сочетания из ваших продуктов…</p>
        </div>
        <button type="button" className="btn btn--ghost btn--sm" onClick={onCancel}>
          Отменить
        </button>
      </div>

      {ingredients.length > 0 && (
        <ul className="state-loading__tags" aria-label="Продукты в запросе">
          {ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="skeleton" aria-hidden="true">
        <span className="skeleton__line skeleton__line--title" />
        <span className="skeleton__line" />
        <span className="skeleton__line skeleton__line--short" />
        <div className="skeleton__badges">
          <span />
          <span />
          <span />
        </div>
        <div className="skeleton__columns">
          <div>
            <span className="skeleton__line" />
            <span className="skeleton__line" />
            <span className="skeleton__line skeleton__line--short" />
          </div>
          <div>
            <span className="skeleton__line" />
            <span className="skeleton__line" />
            <span className="skeleton__line" />
            <span className="skeleton__line skeleton__line--short" />
          </div>
        </div>
      </div>
    </div>
  );
}
