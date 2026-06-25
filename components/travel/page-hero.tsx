type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="container-shell max-w-4xl">
        <p className="eyebrow text-amber-300">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>
      </div>
    </section>
  );
}
