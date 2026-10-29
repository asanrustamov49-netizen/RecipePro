import type { RecipeState } from '../../types/recipe';
import { Icon } from '../icons/Icon';
import './DesignPreviewBar.css';

export type PreviewKind = 'idle' | 'loading' | 'error' | 'demo';

const OPTIONS: { kind: PreviewKind; label: string }[] = [
  { kind: 'idle', label: 'Пусто' },
  { kind: 'loading', label: 'Загрузка' },
  { kind: 'error', label: 'Ошибка' },
  { kind: 'demo', label: 'Демо-рецепт' },
];

interface DesignPreviewBarProps {
  state: RecipeState;
  onSelect: (kind: PreviewKind) => void;
}

function getActiveKind(state: RecipeState): PreviewKind | null {
  switch (state.status) {
    case 'idle':
    case 'loading':
    case 'error':
      return state.status;
    case 'success':
      return state.recipe.source === 'demo' ? 'demo' : null;
  }
}

export function DesignPreviewBar({ state, onSelect }: DesignPreviewBarProps) {
  const active = getActiveKind(state);

  return (
    <div className="preview-bar" role="group" aria-label="Предпросмотр состояний интерфейса">
      <span className="preview-bar__label">
        <Icon name="eye" size={16} />
        Предпросмотр дизайна
      </span>
      <div className="preview-bar__options">
        {OPTIONS.map((option) => (
          <button
            key={option.kind}
            type="button"
            className={`preview-bar__option${active === option.kind ? ' preview-bar__option--active' : ''}`}
            aria-pressed={active === option.kind}
            onClick={() => onSelect(option.kind)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
