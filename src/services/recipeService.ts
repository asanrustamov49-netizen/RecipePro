import type { Recipe, RecipeError, RecipeErrorCode, RecipeRequest } from '../types/recipe';

export class RecipeServiceError extends Error {
  readonly code: RecipeErrorCode;

  constructor(code: RecipeErrorCode, message: string) {
    super(message);
    this.name = 'RecipeServiceError';
    this.code = code;
  }
}

export async function generateRecipe(
  _request: RecipeRequest,
  _signal?: AbortSignal,
): Promise<Recipe> {
  throw new RecipeServiceError(
    'not_configured',
    'Генерация рецептов будет доступна после подключения ИИ-модели.',
  );
}

export function toRecipeError(error: unknown): RecipeError {
  if (error instanceof RecipeServiceError) {
    return { code: error.code, message: error.message };
  }
  if (error instanceof TypeError) {
    return {
      code: 'network',
      message: 'Не удалось связаться с сервером. Проверьте подключение к интернету.',
    };
  }
  return {
    code: 'unknown',
    message: 'Что-то пошло не так. Попробуйте ещё раз чуть позже.',
  };
}
