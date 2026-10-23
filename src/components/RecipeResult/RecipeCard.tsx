import { useEffect, useRef, useState } from 'react';
import type { Recipe } from '../../types/recipe';
import { recipeToPlainText } from '../../utils/format';
import { Icon } from '../icons/Icon';
import { RecipeMeta } from './RecipeMeta';

interface RecipeCardProps {
  recipe: Recipe;
  onReset: () => void;
}

type CopyStatus = 'idle' | 'copied' | 'failed';

export function RecipeCard({ recipe, onReset }: RecipeCardProps) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const timerRef = useRef<number | undefined>(undefined);
  const isDemo = recipe.source === 'demo';

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(recipeToPlainText(recipe));
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopyStatus('idle'), 2200);
  };

  return (
    <article className="result-panel recipe-card" aria-labelledby="recipe-title">
      {isDemo && (
        <div className="recipe-card__demo" role="note">
          <Icon name="info" size={18} />
          <p>
            <strong>Демонстрационный пример.</strong> Рецепт добавлен вручную для проверки дизайна и не
            является результатом генерации ИИ.
          </p>
        </div>
      )}

      <header className="recipe-card__header">
        <span className="eyebrow">
          <Icon name="leaf" size={15} />
          {isDemo ? 'Пример оформления' : 'Рецепт для вас'}
        </span>
        <h2 id="recipe-title" className="recipe-card__title">
          {recipe.title}
        </h2>
        <p className="recipe-card__description">{recipe.description}</p>
        <RecipeMeta
          cookingTimeMinutes={recipe.cookingTimeMinutes}
          servings={recipe.servings}
          difficulty={recipe.difficulty}
        />
      </header>

      <div className="recipe-card__body">
        <section className="recipe-card__ingredients" aria-labelledby="ingredients-title">
          <h3 id="ingredients-title" className="recipe-card__section-title">
            <Icon name="basket" size={20} />
            Ингредиенты
          </h3>
          <ul className="ingredient-list">
            {recipe.ingredients.map((item) => (
              <li key={item.name} className="ingredient-list__item">
                <span className="ingredient-list__name">{item.name}</span>
                {item.amount && <span className="ingredient-list__amount">{item.amount}</span>}
              </li>
            ))}
          </ul>
        </section>

        <section className="recipe-card__steps" aria-labelledby="steps-title">
          <h3 id="steps-title" className="recipe-card__section-title">
            <Icon name="utensils" size={20} />
            Приготовление
          </h3>
          <ol className="step-list">
            {recipe.steps.map((step, index) => (
              <li key={index} className="step-list__item">
                <span className="step-list__number" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="step-list__content">
                  {step.title && <h4 className="step-list__title">{step.title}</h4>}
                  <p className="step-list__text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {recipe.tips && recipe.tips.length > 0 && (
        <aside className="recipe-card__tips" aria-label="Советы">
          <span className="recipe-card__tips-icon">
            <Icon name="bulb" size={20} />
          </span>
          <div>
            <p className="recipe-card__tips-title">Совет шефа</p>
            <ul>
              {recipe.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </aside>
      )}

      <footer className="recipe-card__actions">
        <button type="button" className="btn btn--secondary" onClick={handleCopy}>
          <Icon name={copyStatus === 'copied' ? 'check' : 'copy'} size={18} />
          {copyStatus === 'copied'
            ? 'Скопировано'
            : copyStatus === 'failed'
              ? 'Не удалось скопировать'
              : 'Скопировать рецепт'}
        </button>
        <button type="button" className="btn btn--ghost" onClick={onReset}>
          <Icon name="refresh" size={18} />
          Новый рецепт
        </button>
        <span className="visually-hidden" aria-live="polite">
          {copyStatus === 'copied' ? 'Рецепт скопирован в буфер обмена' : ''}
        </span>
      </footer>
    </article>
  );
}
