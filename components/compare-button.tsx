"use client";
import { Scale } from "lucide-react";
import { useState } from "react";
export function CompareButton({ propertyId }: { propertyId: string }) {
  const [added, setAdded] = useState(false);
  function add() { const ids = JSON.parse(localStorage.getItem("rivanta-compare") ?? "[]") as string[]; const next = [...new Set([...ids, propertyId])].slice(0, 3); localStorage.setItem("rivanta-compare", JSON.stringify(next)); setAdded(true); }
  return <button type="button" onClick={add} className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-green-700"><Scale size={15} /> {added ? "Added to compare" : "Compare"}</button>;
}
