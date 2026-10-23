/**
 * Панель предпросмотра состояний (пусто / загрузка / ошибка / демо-рецепт).
 * Нужна только для проверки вёрстки. По умолчанию видна в dev-режиме;
 * чтобы скрыть её, задайте VITE_SHOW_DESIGN_PREVIEW=false в .env.local.
 */
export const SHOW_DESIGN_PREVIEW =
  import.meta.env.DEV && import.meta.env.VITE_SHOW_DESIGN_PREVIEW !== 'false';

export const INGREDIENTS_MAX_LENGTH = 400;
