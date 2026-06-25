import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, ShieldCheck, Tag } from "lucide-react";
import type { GroupPackage } from "@/types/travel";

type PackageCardProps = {
  trip: GroupPackage;
};

export function PackageCard({ trip }: PackageCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/10]">
        <Image src={trip.image} alt={trip.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-xs font-black text-white">
          <ShieldCheck size={14} />
          {trip.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-black leading-snug text-navy">{trip.title}</h3>
        <div className="mt-4 grid gap-3 text-sm text-slate-600">
          <span className="flex gap-2"><MapPin size={17} className="shrink-0 text-green-700" /> {trip.destination}</span>
          <span className="flex gap-2"><CalendarDays size={17} className="shrink-0 text-green-700" /> {trip.duration}</span>
          <span className="flex gap-2"><Tag size={17} className="shrink-0 text-green-700" /> {trip.category}</span>
        </div>
        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <strong className="text-sm text-navy">{trip.price}</strong>
          <Link href="/compatibility-quiz" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800">
            View Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
