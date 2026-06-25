import { BadgeCheck, Plane, Quote, Sparkles } from "lucide-react";

export function FounderVision() {
  return (
    <section className="founder-vision-section relative overflow-hidden bg-[#071A2F] py-20 text-white sm:py-24">
      <div className="founder-map-texture absolute inset-0 opacity-45" />
      <div className="absolute inset-x-0 bottom-0 h-44 opacity-30">
        <div className="founder-mountain founder-mountain-back" />
        <div className="founder-mountain founder-mountain-front" />
      </div>
      <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute right-[12%] top-12 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="founder-stars absolute inset-0" />
      <Plane className="founder-plane absolute right-8 top-16 text-amber-300/80" size={24} />

      <div className="container-shell relative">
        <div className="founder-vision-reveal mx-auto max-w-5xl rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-amber-200">
                <Sparkles size={15} />
                Founder Vision
              </p>
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                A Vision by Harsh Raj
              </h2>
              <p className="mt-4 text-lg font-semibold leading-8 text-cyan-100">
                Building the world's first compatibility-first travel platform.
              </p>
            </div>

            <div className="relative">
              <Quote className="mb-5 text-amber-300" size={42} strokeWidth={1.7} />
              <div className="grid gap-5 text-base leading-8 text-slate-200 sm:text-lg">
                <p>Every great startup begins with solving a real problem.</p>
                <p>
                  MyVibeMyTrip was born after a real travel experience where completely different types of travelers were grouped together in one shared journey. Although everyone visited the same destination, no one truly enjoyed the experience because everyone's vibe, energy, interests, and expectations were different.
                </p>
                <p>That experience inspired a simple but powerful idea:</p>
                <p className="rounded-lg border border-amber-300/25 bg-amber-300/10 p-5 text-xl font-black leading-8 text-white">
                  People don't just choose destinations. They should choose the people they travel with.
                </p>
                <p>
                  Our mission is to redefine group travel by matching like-minded travelers based on personality, travel style, interests, and energy.
                </p>
                <p>
                  We believe the best memories are created not only by beautiful places, but by the people who experience them together.
                </p>
                <p>This is more than a travel website.</p>
                <p>It is the beginning of a new way to explore the world.</p>
              </div>

              <blockquote className="mt-8 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5 text-xl font-black leading-8 text-white sm:text-2xl">
                "We don't just build trips. We build unforgettable journeys with the right people."
              </blockquote>

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-['Brush_Script_MT','Segoe_Script',cursive] text-4xl text-white sm:text-5xl">
                      Harsh Raj
                    </p>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 text-navy shadow-lg">
                      <BadgeCheck size={20} />
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
                    Founder, MyVibeMyTrip.com
                  </p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
                  Mission-driven travel startup
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
