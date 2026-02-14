export function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl px-4 py-12 sm:py-14 md:px-6 md:py-20 lg:py-24"
    >
      <div className="mb-7 flex items-center gap-4">
        <span className="bg-accent/80 h-px w-10" />
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
