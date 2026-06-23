"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/properties", label: "Buy homes" },
  { href: "/properties?status=Rent", label: "Rent homes" },
  { href: "/sell", label: "Sell property" },
  { href: "/#consultation", label: "Executive consultation" },
  { href: "/#seller-services", label: "Seller services" },
  { href: "/#services", label: "Tools and calculators" },
  { href: "/agents", label: "Agents" }
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center text-navy">
        {open ? <X size={23} /> : <Menu size={24} />}
      </button>
      {open && (
        <nav aria-label="Mobile navigation" className="absolute left-0 top-full w-full border-b border-slate-200 bg-white p-4 shadow-lg">
          <div className="container-shell grid gap-1">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-navy">{link.label}</Link>)}
            <Link href="/login" onClick={() => setOpen(false)} className="mt-2 bg-navy px-4 py-3 text-center text-sm font-bold text-white">Login</Link>
          </div>
        </nav>
      )}
    </div>
  );
}
