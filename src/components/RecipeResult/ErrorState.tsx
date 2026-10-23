import type { RecipeError } from '../../types/recipe';
import { Icon } from '../icons/Icon';

interface ErrorStateProps {
  error: RecipeError;
  onRetry: () => void;
  onShowDemo?: () => void;
}

export function ErrorState({ error, onRetry, onShowDemo }: ErrorStateProps) {
  const notConfigured = error.code === 'not_configured';

  return (
    <div
      className={`result-panel result-panel--centered state-error${notConfigured ? ' state-error--info' : ''}`}
      role={notConfigured ? 'status' : 'alert'}
    >
      <span className="state-error__icon">
        <Icon name={notConfigured ? 'plug' : 'alert'} size={26} />
      </span>

      <h2 className="state__title state__title--sm">
        {notConfigured ? 'ИИ-модель пока не подключена' : 'Не удалось придумать рецепт'}
      </h2>
      <p className="state__text">{error.message}</p>
      {notConfigured && (
        <p className="state__text state__text--small">
          Интерфейс готов к работе — генерация появится на следующем этапе разработки.
        </p>
      )}

      <div className="state__actions">
        {!notConfigured && (
          <button type="button" className="btn btn--primary" onClick={onRetry}>
            <Icon name="refresh" size={18} />
            Попробовать снова
          </button>
        )}
        {onShowDemo && (
          <button type="button" className="btn btn--secondary" onClick={onShowDemo}>
            <Icon name="eye" size={18} />
            Посмотреть демо-пример
          </button>
        )}
      </div>
    </div>
  );
}
