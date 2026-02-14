'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from '@/components/layout/theme-toggle';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartY.current === null || touchStartX.current === null) {
      return;
    }

    const endY = event.changedTouches[0]?.clientY ?? touchStartY.current;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaY = touchStartY.current - endY;
    const deltaX = Math.abs(touchStartX.current - endX);
    touchStartY.current = null;
    touchStartX.current = null;

    // Close only on intentional upward swipe with dominant vertical movement.
    if (deltaY > 36 && deltaY > deltaX * 1.2) {
      setOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-300/40 bg-surface/65 backdrop-blur-xl dark:border-slate-700/50"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-base font-black tracking-wide">
          Roberto Filho
        </Link>

        <nav
          aria-label="Navegação principal"
          className="bg-panel/70 hidden items-center gap-2 rounded-full border border-slate-300/70 p-1 shadow-soft md:flex dark:border-slate-700/70"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-semibold transition hover:bg-accent/15 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="rounded-full bg-accent px-3 py-1.5 text-sm font-bold text-white transition hover:opacity-95"
          >
            Falar comigo
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="group rounded-md border border-slate-400 px-3 py-2 md:hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-text transition ${open ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-text transition ${open ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-text transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-950/35 md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              aria-label="Navegação mobile"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="fixed left-0 right-0 z-50 mx-auto max-w-7xl px-4 pb-4 md:hidden"
              style={{ top: 'calc(64px + env(safe-area-inset-top))' }}
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.22, delay: 0.04 }}
                className="bg-panel/95 grid gap-2 rounded-xl border border-slate-300/70 p-3 shadow-soft backdrop-blur dark:border-slate-700/70"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="bg-panel/90 rounded-lg border border-slate-300/70 px-3 py-3 text-sm font-semibold hover:border-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="pb-[env(safe-area-inset-bottom)] pt-1 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Deslize para cima para fechar
                </p>
              </motion.div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
