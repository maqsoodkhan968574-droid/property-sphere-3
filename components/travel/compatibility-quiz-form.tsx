"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { QuizAnswers } from "@/types/travel";
import { getCompatibilityResult } from "@/utils/compatibility";

const defaults: QuizAnswers = {
  ageGroup: "",
  travelType: "",
  preferredGroup: "",
  budget: "",
  energy: "",
  music: "",
  food: "",
  adventure: "",
  wakeUp: "",
  photography: "",
  language: "",
  womenOnly: "",
  duration: ""
};

const fields = [
  { key: "ageGroup", label: "Age group", options: ["18-24", "25-34", "35-44", "45-54", "55+"] },
  { key: "travelType", label: "Travel type", options: ["Solo", "Friends", "Couple", "Family"] },
  { key: "preferredGroup", label: "Preferred group type", options: ["Same age group", "Mixed but similar vibe", "Couples only", "Family friendly", "Women only"] },
  { key: "budget", label: "Budget", options: ["Budget", "Standard", "Premium", "Luxury"] },
  { key: "energy", label: "Travel energy", options: ["Relaxed", "Balanced", "High energy"] },
  { key: "music", label: "Music preference", options: ["Bollywood", "Indie", "Pop", "Devotional", "Quiet ride"] },
  { key: "food", label: "Food preference", options: ["Vegetarian", "Non-vegetarian", "Local food", "Cafe hopping", "Flexible"] },
  { key: "adventure", label: "Adventure level", options: ["Low", "Medium", "High"] },
  { key: "wakeUp", label: "Wake-up preference", options: ["Early sunrise", "Balanced morning", "Slow start"] },
  { key: "photography", label: "Photography/reels interest", options: ["Low", "Medium", "High"] },
  { key: "language", label: "Language preference", options: ["Hindi", "English", "Bengali", "Nepali", "Flexible"] },
  { key: "womenOnly", label: "Women-only group preference", options: ["No", "Yes", "Open to it"] },
  { key: "duration", label: "Trip duration", options: ["3-4 days", "5-6 days", "7+ days"] }
] as const;

export function CompatibilityQuizForm() {
  const [answers, setAnswers] = useState<QuizAnswers>(defaults);
  const [result, setResult] = useState<ReturnType<typeof getCompatibilityResult> | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(getCompatibilityResult(answers));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className="grid gap-2 text-sm font-bold text-navy">
            {field.label}
            <select
              required
              value={answers[field.key]}
              onChange={(event) => setAnswers((current) => ({ ...current, [field.key]: event.target.value }))}
              className="min-h-12 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700"
            >
              <option value="">Select</option>
              {field.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
        <Button type="submit" className="sm:col-span-2">Calculate my compatibility</Button>
      </form>

      <aside className="rounded-lg bg-navy p-6 text-white shadow-soft">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-green-100">
          <Sparkles size={16} />
          Sample result
        </div>
        {result ? (
          <div className="mt-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Your Travel Vibe</p>
            <h3 className="mt-2 text-3xl font-black">{result.vibe}</h3>
            <div className="mt-6 rounded-lg bg-white p-5 text-navy">
              <p className="text-sm font-bold text-slate-600">Compatibility Score</p>
              <strong className="mt-1 block text-5xl font-black text-green-700">{result.score}%</strong>
            </div>
            <div className="mt-6">
              <h4 className="font-black">Recommended groups</h4>
              <div className="mt-3 grid gap-3">
                {result.groups.map((group) => (
                  <p key={group} className="flex items-center gap-2 rounded-lg bg-white/10 p-3 text-sm font-semibold">
                    <CheckCircle2 size={18} className="shrink-0 text-green-300" />
                    {group}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <h3 className="text-3xl font-black">Your Travel Vibe: Gen Z Adventure Explorer</h3>
            <div className="mt-6 rounded-lg bg-white p-5 text-navy">
              <p className="text-sm font-bold text-slate-600">Compatibility Score</p>
              <strong className="mt-1 block text-5xl font-black text-green-700">92%</strong>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Submit the quiz to generate a personalized sample match and recommended group packages.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
