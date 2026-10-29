import { useCallback, useEffect, useRef, useState } from 'react';
import { SHOW_DESIGN_PREVIEW } from './config/app';
import { DesignPreviewBar, type PreviewKind } from './components/DesignPreviewBar/DesignPreviewBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { RecipeForm } from './components/RecipeForm/RecipeForm';
import { RecipeResult } from './components/RecipeResult/RecipeResult';
import { useRecipeGenerator } from './hooks/useRecipeGenerator';
import { DEMO_RECIPE } from './mocks/demoRecipe';
import type { RecipeState } from './types/recipe';
import { parseIngredients } from './utils/ingredients';
import './App.css';

function createPreviewState(kind: PreviewKind, ingredients: string[]): RecipeState {
  switch (kind) {
    case 'idle':
      return { status: 'idle' };
    case 'loading':
      return {
        status: 'loading',
        ingredients: ingredients.length ? ingredients : ['Картофель', 'яйца', 'сыр'],
      };
    case 'error':
      return {
        status: 'error',
        error: {
          code: 'network',
          message: 'Не удалось связаться с сервером. Проверьте подключение к интернету.',
        },
      };
    case 'demo':
      return { status: 'success', recipe: DEMO_RECIPE };
  }
}

export default function App() {
  const [ingredientsText, setIngredientsText] = useState('');
  const { state, generate, retry, reset, cancel, showPreview } = useRecipeGenerator();
  const resultRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(false);

  const handlePreview = useCallback(
    (kind: PreviewKind) => showPreview(createPreviewState(kind, parseIngredients(ingredientsText))),
    [ingredientsText, showPreview],
  );

  const handleSubmit = (ingredients: string[]) => {
    shouldScrollRef.current = true;
    void generate(ingredients);
  };

  useEffect(() => {
    if (!shouldScrollRef.current || state.status === 'idle') return;
    shouldScrollRef.current = false;
    if (window.matchMedia('(max-width: 1023px)').matches) {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.status]);

  return (
    <div className="app" id="top">
      <Header />

      <main>
        <Hero />

        <section id="generator" className="generator" aria-label="Генератор рецептов">
          <div className="container generator__grid">
            <div className="generator__form-card">
              <RecipeForm
                value={ingredientsText}
                onChange={setIngredientsText}
                onSubmit={handleSubmit}
                isLoading={state.status === 'loading'}
              />
            </div>

            <div className="generator__result" ref={resultRef}>
              {SHOW_DESIGN_PREVIEW && <DesignPreviewBar state={state} onSelect={handlePreview} />}
              <RecipeResult
                state={state}
                onRetry={retry}
                onReset={reset}
                onCancel={cancel}
                onShowDemo={SHOW_DESIGN_PREVIEW ? () => handlePreview('demo') : undefined}
              />
            </div>
          </div>
        </section>

        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}
