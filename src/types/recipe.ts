export type Difficulty = 'easy' | 'medium' | 'hard';

/** Откуда взят рецепт: настоящая генерация ИИ или демонстрационные данные для проверки дизайна. */
export type RecipeSource = 'ai' | 'demo';

export interface RecipeIngredient {
  name: string;
  /** Количество в свободной форме: «500 г», «2 шт.», «по вкусу». */
  amount?: string;
}

export interface RecipeStep {
  title?: string;
  text: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookingTimeMinutes?: number;
  servings?: number;
  difficulty?: Difficulty;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  tips?: string[];
  source: RecipeSource;
}

export interface RecipeRequest {
  ingredients: string[];
}

export type RecipeErrorCode =
  | 'not_configured'
  | 'network'
  | 'invalid_response'
  | 'rate_limited'
  | 'unknown';

export interface RecipeError {
  code: RecipeErrorCode;
  message: string;
}

export type RecipeState =
  | { status: 'idle' }
  | { status: 'loading'; ingredients: string[] }
  | { status: 'success'; recipe: Recipe }
  | { status: 'error'; error: RecipeError };
