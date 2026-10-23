import type { Difficulty, Recipe } from '../types/recipe';

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} мин`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} ч ${rest} мин` : `${hours} ч`;
}

export function pluralize(count: number, forms: [one: string, few: string, many: string]): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
  return forms[2];
}

export function formatServings(count: number): string {
  return `${count} ${pluralize(count, ['порция', 'порции', 'порций'])}`;
}

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'Легко',
  medium: 'Средне',
  hard: 'Сложно',
};

export const DIFFICULTY_LEVEL: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export function recipeToPlainText(recipe: Recipe): string {
  const meta = [
    recipe.cookingTimeMinutes ? `Время: ${formatDuration(recipe.cookingTimeMinutes)}` : null,
    recipe.servings ? `Порции: ${recipe.servings}` : null,
    recipe.difficulty ? `Сложность: ${DIFFICULTY_LABELS[recipe.difficulty]}` : null,
  ].filter(Boolean);

  const lines = [
    recipe.title,
    '',
    recipe.description,
    ...(meta.length ? ['', meta.join(' · ')] : []),
    '',
    'Ингредиенты:',
    ...recipe.ingredients.map((i) => `— ${i.name}${i.amount ? `: ${i.amount}` : ''}`),
    '',
    'Приготовление:',
    ...recipe.steps.map((s, i) => `${i + 1}. ${s.title ? `${s.title}. ` : ''}${s.text}`),
  ];

  if (recipe.tips?.length) {
    lines.push('', 'Советы:', ...recipe.tips.map((t) => `— ${t}`));
  }
  return lines.join('\n');
}
