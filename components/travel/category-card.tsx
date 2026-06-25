import type { TravelCategory } from "@/types/travel";

type CategoryCardProps = {
  category: TravelCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <article className="group h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-green-50 text-green-700 transition group-hover:bg-navy group-hover:text-white">
          <Icon size={22} />
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">Vibe fit</span>
      </div>
      <h3 className="mt-5 text-xl font-black text-navy">{category.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-green-700">{category.bestFor}</p>
    </article>
  );
}
