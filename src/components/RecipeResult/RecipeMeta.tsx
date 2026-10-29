import type { Recipe } from '../../types/recipe';
import { DIFFICULTY_LABELS, DIFFICULTY_LEVEL, formatDuration, formatServings } from '../../utils/format';
import { Icon } from '../icons/Icon';

type RecipeMetaProps = Pick<Recipe, 'cookingTimeMinutes' | 'servings' | 'difficulty'>;

export function RecipeMeta({ cookingTimeMinutes, servings, difficulty }: RecipeMetaProps) {
  if (!cookingTimeMinutes && !servings && !difficulty) return null;

  return (
    <ul className="recipe-meta" aria-label="Параметры блюда">
      {cookingTimeMinutes ? (
        <li className="recipe-meta__item">
          <Icon name="clock" size={17} />
          <span className="visually-hidden">Время приготовления:</span>
          {formatDuration(cookingTimeMinutes)}
        </li>
      ) : null}
      {servings ? (
        <li className="recipe-meta__item">
          <Icon name="users" size={17} />
          <span className="visually-hidden">Количество порций:</span>
          {formatServings(servings)}
        </li>
      ) : null}
      {difficulty ? (
        <li className="recipe-meta__item">
          <span className="recipe-meta__level" data-level={DIFFICULTY_LEVEL[difficulty]} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="visually-hidden">Сложность:</span>
          {DIFFICULTY_LABELS[difficulty]}
        </li>
      ) : null}
    </ul>
  );
}
