# AI Recipe Generator

Веб-интерфейс сервиса, который предлагает рецепт по списку продуктов. React + Vite + TypeScript, чистый CSS.

**Этап 1 — только frontend.** ИИ-модель не подключена: кнопка «Придумать рецепт» честно показывает состояние «ИИ-модель пока не подключена».

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # проверка типов + production-сборка
npm run lint
```

## Структура

```
src/
  types/recipe.ts            типы Recipe, RecipeState, RecipeError
  services/recipeService.ts  generateRecipe() — единая точка подключения API
  hooks/useRecipeGenerator.ts  состояние генерации (idle/loading/success/error), отмена запросов
  mocks/demoRecipe.ts        демо-рецепт ТОЛЬКО для проверки дизайна (source: 'demo')
  config/app.ts              флаг панели предпросмотра, лимиты
  components/                Header, Hero, RecipeForm, RecipeResult, HowItWorks, Footer, DesignPreviewBar
```

## Предпросмотр состояний

В dev-режиме над карточкой результата есть панель «Предпросмотр дизайна»: пустое состояние, загрузка, ошибка и демо-рецепт.
Демо-рецепт помечен в интерфейсе как демонстрационный. В production-сборке панели нет;
в dev её можно скрыть через `VITE_SHOW_DESIGN_PREVIEW=false` в `.env.local`.
