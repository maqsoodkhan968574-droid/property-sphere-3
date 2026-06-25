import { whyChooseUs } from "@/data/travel";

export function TrustGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {whyChooseUs.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-green-50 text-green-700">
              <Icon size={21} />
            </span>
            <h3 className="mt-4 text-lg font-black text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
          </article>
        );
      })}
    </div>
  );
}
