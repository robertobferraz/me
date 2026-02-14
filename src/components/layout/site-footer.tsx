export function SiteFooter() {
  return (
    <footer className="border-t border-slate-300/40 py-10 text-center text-sm text-muted dark:border-slate-700/40">
      <p className="font-semibold">© {new Date().getFullYear()} Roberto Filho.</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted/80">
        Engenharia de software em produção
      </p>
    </footer>
  );
}
