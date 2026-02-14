'use client';

import { useSyncExternalStore } from 'react';
import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

const getClientTheme = (): Theme => {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return (
    stored ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  );
};

const subscribe = (callback: () => void): (() => void) => {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const listener = () => callback();
  window.addEventListener('storage', listener);
  window.addEventListener('theme-change', listener);

  return () => {
    window.removeEventListener('storage', listener);
    window.removeEventListener('theme-change', listener);
  };
};

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => (typeof window === 'undefined' ? 'light' : getClientTheme()),
    () => 'light'
  );

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event('theme-change'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-slate-400 px-3 py-2 text-sm font-semibold"
      aria-label="Alternar tema claro e escuro"
    >
      {theme === 'light' ? 'Tema escuro' : 'Tema claro'}
    </button>
  );
}
