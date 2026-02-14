export function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-400/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
      {label}
    </span>
  );
}
