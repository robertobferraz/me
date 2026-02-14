import { Reveal } from '@/components/ui/reveal';

export function AboutPresenter({ summary }: { summary: string }) {
  return (
    <Reveal>
      <p className="bg-panel/85 max-w-4xl rounded-2xl border border-slate-300/80 p-6 text-base leading-8 text-muted shadow-soft backdrop-blur dark:border-slate-700/80">
        {summary}
      </p>
    </Reveal>
  );
}
