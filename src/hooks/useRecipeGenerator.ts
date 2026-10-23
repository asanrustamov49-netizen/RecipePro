import { useCallback, useEffect, useRef, useState } from 'react';
import { generateRecipe, toRecipeError } from '../services/recipeService';
import type { RecipeState } from '../types/recipe';

export function useRecipeGenerator() {
  const [state, setState] = useState<RecipeState>({ status: 'idle' });
  const controllerRef = useRef<AbortController | null>(null);
  const lastIngredientsRef = useRef<string[] | null>(null);

  const abortCurrent = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
  }, []);

  const generate = useCallback(
    async (ingredients: string[]) => {
      abortCurrent();
      const controller = new AbortController();
      controllerRef.current = controller;
      lastIngredientsRef.current = ingredients;
      setState({ status: 'loading', ingredients });

      try {
        const recipe = await generateRecipe({ ingredients }, controller.signal);
        if (!controller.signal.aborted) setState({ status: 'success', recipe });
      } catch (error) {
        if (!controller.signal.aborted) setState({ status: 'error', error: toRecipeError(error) });
      } finally {
        if (controllerRef.current === controller) controllerRef.current = null;
      }
    },
    [abortCurrent],
  );

  const retry = useCallback(() => {
    if (lastIngredientsRef.current) void generate(lastIngredientsRef.current);
  }, [generate]);

  const reset = useCallback(() => {
    abortCurrent();
    setState({ status: 'idle' });
  }, [abortCurrent]);

  /** Только для панели предпросмотра дизайна: напрямую выставляет состояние. */
  const showPreview = useCallback(
    (next: RecipeState) => {
      abortCurrent();
      setState(next);
    },
    [abortCurrent],
  );

  useEffect(() => abortCurrent, [abortCurrent]);

  return {
    state,
    generate,
    retry,
    reset,
    cancel: reset,
    showPreview,
  };
}
