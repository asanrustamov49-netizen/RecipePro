import type { RecipeState } from '../../types/recipe';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { LoadingState } from './LoadingState';
import { RecipeCard } from './RecipeCard';
import './RecipeResult.css';

interface RecipeResultProps {
  state: RecipeState;
  onRetry: () => void;
  onReset: () => void;
  onCancel: () => void;
  onShowDemo?: () => void;
}

export function RecipeResult({ state, onRetry, onReset, onCancel, onShowDemo }: RecipeResultProps) {
  return (
    <div className="result" aria-live="polite" aria-busy={state.status === 'loading'}>
      {state.status === 'idle' && <EmptyState />}
      {state.status === 'loading' && (
        <LoadingState ingredients={state.ingredients} onCancel={onCancel} />
      )}
      {state.status === 'error' && (
        <ErrorState error={state.error} onRetry={onRetry} onShowDemo={onShowDemo} />
      )}
      {state.status === 'success' && <RecipeCard recipe={state.recipe} onReset={onReset} />}
    </div>
  );
}
