import Link from 'next/link';
import clsx from 'clsx';

export function LinkButton({
  href,
  label,
  variant = 'solid'
}: {
  href: string;
  label: string;
  variant?: 'solid' | 'outline';
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-bold transition sm:w-auto',
        variant === 'solid'
          ? 'bg-accent text-white shadow-md hover:-translate-y-0.5 hover:opacity-95'
          : 'bg-panel/70 border border-slate-400 text-text hover:border-accent hover:text-accent'
      )}
    >
      {label}
    </Link>
  );
}
