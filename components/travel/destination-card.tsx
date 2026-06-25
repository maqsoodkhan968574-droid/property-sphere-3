import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Destination } from "@/types/travel";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3]">
        <Image src={destination.image} alt={destination.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-navy shadow-sm">
          <MapPin size={14} />
          {destination.region}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black text-navy">{destination.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{destination.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {destination.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
