import { hasIngredient } from '../../utils/ingredients';
import { Icon } from '../icons/Icon';

interface IngredientChipsProps {
  items: readonly string[];
  value: string;
  onToggle: (name: string) => void;
}

export function IngredientChips({ items, value, onToggle }: IngredientChipsProps) {
  return (
    <div className="chips">
      <p className="chips__title" id="chips-title">
        Популярные ингредиенты
      </p>
      <ul className="chips__list" aria-labelledby="chips-title">
        {items.map((name) => {
          const active = hasIngredient(value, name);
          return (
            <li key={name}>
              <button
                type="button"
                className={`chip${active ? ' chip--active' : ''}`}
                aria-pressed={active}
                onClick={() => onToggle(name)}
              >
                <Icon name={active ? 'check' : 'plus'} size={15} strokeWidth={2} />
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
