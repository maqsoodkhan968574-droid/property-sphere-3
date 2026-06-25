import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: "compact" | "large";
};

export function BrandMark({ size = "compact" }: BrandMarkProps) {
  const isLarge = size === "large";

  return (
    <span className={cn("inline-flex items-center gap-3 font-black tracking-tight text-navy", isLarge && "gap-4")}>
      <span className={cn("relative grid shrink-0 place-items-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200", isLarge ? "h-24 w-24" : "h-14 w-14")}>
        <Image
          src="/brand/myvibemytrip-logo.png"
          alt="MyVibeMyTrip.com logo"
          width={isLarge ? 96 : 56}
          height={isLarge ? 96 : 56}
          className="h-full w-full object-contain p-0.5"
          priority
        />
      </span>
      <span className={cn("leading-tight", isLarge ? "text-2xl" : "text-lg")}>
        MyVibe
        <span className="block text-green-700">MyTrip.com</span>
      </span>
    </span>
  );
}
