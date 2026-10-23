import { useId, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { INGREDIENTS_MAX_LENGTH } from '../../config/app';
import { POPULAR_INGREDIENTS } from '../../data/popularIngredients';
import { parseIngredients, toggleIngredient } from '../../utils/ingredients';
import { pluralize } from '../../utils/format';
import { Icon } from '../icons/Icon';
import { IngredientChips } from './IngredientChips';
import './RecipeForm.css';

interface RecipeFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (ingredients: string[]) => void;
  isLoading: boolean;
}

const EMPTY_ERROR = 'Добавьте хотя бы один продукт — например, «картофель, яйца, сыр».';

export function RecipeForm({ value, onChange, onSubmit, isLoading }: RecipeFormProps) {
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fieldId = useId();
  const hintId = `${fieldId}-hint`;
  const errorId = `${fieldId}-error`;

  const ingredients = parseIngredients(value);
  const count = ingredients.length;

  const handleChange = (next: string) => {
    onChange(next);
    if (error && parseIngredients(next).length > 0) setError(null);
  };

  const submit = () => {
    if (isLoading) return;
    if (count === 0) {
      setError(EMPTY_ERROR);
      textareaRef.current?.focus();
      return;
    }
    setError(null);
    onSubmit(ingredients);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      submit();
    }
  };

  const handleClear = () => {
    handleChange('');
    textareaRef.current?.focus();
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit} noValidate>
      <div className="recipe-form__head">
        <label htmlFor={fieldId} className="recipe-form__label">
          Ваши продукты
        </label>
        {count > 0 && (
          <span className="recipe-form__count">
            {count} {pluralize(count, ['продукт', 'продукта', 'продуктов'])}
          </span>
        )}
      </div>

      <div className={`recipe-form__field${error ? ' recipe-form__field--invalid' : ''}`}>
        <textarea
          ref={textareaRef}
          id={fieldId}
          className="recipe-form__textarea"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Картофель, яйца, сыр"
          rows={4}
          maxLength={INGREDIENTS_MAX_LENGTH}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${errorId} ${hintId}` : hintId}
          spellCheck
        />

        <div className="recipe-form__field-footer">
          <span id={hintId} className="recipe-form__hint">
            Через запятую · <kbd>Ctrl</kbd> + <kbd>Enter</kbd> — отправить
          </span>
          <div className="recipe-form__field-actions">
            <span className="recipe-form__length" aria-hidden="true">
              {value.length}/{INGREDIENTS_MAX_LENGTH}
            </span>
            {value.length > 0 && (
              <button
                type="button"
                className="recipe-form__clear"
                onClick={handleClear}
                aria-label="Очистить список продуктов"
              >
                <Icon name="close" size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {error && (
        <p id={errorId} className="recipe-form__error" role="alert">
          <Icon name="alert" size={16} />
          {error}
        </p>
      )}

      <IngredientChips
        items={POPULAR_INGREDIENTS}
        value={value}
        onToggle={(name) => handleChange(toggleIngredient(value, name))}
      />

      <button
        type="submit"
        className="btn btn--primary btn--lg btn--block recipe-form__submit"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <span className="spinner" aria-hidden="true" />
            Придумываем рецепт…
          </>
        ) : (
          <>
            <Icon name="sparkles" size={20} />
            Придумать рецепт
          </>
        )}
      </button>
    </form>
  );
}
