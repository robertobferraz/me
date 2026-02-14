export function Section({
  id,
  title,
  description,
  children
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const sectionLabelById: Record<string, string> = {
    sobre: 'Posicionamento',
    experiencia: 'Trajetória',
    projetos: 'Cases',
    habilidades: 'Stack',
    formacao: 'Base Técnica',
    contato: 'Canal Direto'
  };

  return (
    <section
      id={id}
      className="mx-auto max-w-7xl px-4 py-12 sm:py-14 md:px-6 md:py-20 lg:py-24"
    >
      <div className="mb-7 space-y-3">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.18em]">
          {sectionLabelById[id] ?? 'Seção'}
        </p>
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            {title}
          </h2>
          <span className="bg-accent/70 h-px flex-1" />
        </div>
        {description ? (
          <p className="max-w-3xl text-sm leading-7 text-muted md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
