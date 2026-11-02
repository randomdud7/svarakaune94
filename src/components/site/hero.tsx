"use client";

import { Clock, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

const HIGHLIGHTS = [
  { icon: MapPin, title: SITE.area, text: "Atvykstu iki jūsų namų" },
  { icon: Clock, title: SITE.hours, text: "Renkatės patogų laiką" },
  {
    icon: Sparkles,
    title: "Priemonės įskaičiuotos",
    text: "Nieko rūpintis nereikia",
  },
];

export function Hero() {
  return (
    <section
      id="pradzia"
      className="relative overflow-hidden bg-linear-to-b from-teal-50/80 via-background to-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 size-[420px] rounded-full bg-teal-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 size-[360px] rounded-full bg-amber-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 hidden select-none sm:block"
      >
        <Sparkles
          className="size-[480px] text-primary/[0.07]"
          strokeWidth={0.8}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:py-32">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Namų valymo paslaugos · Kaunas
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-linear-to-r from-teal-700 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Švarūs namai.
            </span>{" "}
            <span className="text-muted-foreground">Be pastangų.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Sveiki – aš tvarkau žmonių namus Kaune. Reguliarus valymas kas
            savaitę arba generalinis kartą per sezoną. Jūs mėgaujatės laisvu
            laiku, o aš pasirūpinu, kad namai spindėtų.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-linear-to-r from-teal-700 to-teal-600 px-8 text-base shadow-lg shadow-teal-700/25 transition-all hover:from-teal-800 hover:to-teal-700 hover:shadow-teal-800/30"
            >
              <a href={SITE.phoneHref}>
                <Phone className="size-5" aria-hidden="true" />
                Skambinti: {SITE.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base"
            >
              <a href="#paslaugos">Peržiūrėti paslaugas</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <dl className="mt-16 grid max-w-3xl gap-8 border-t pt-10 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-sm font-semibold">{title}</dt>
                  <dd className="mt-0.5 text-sm text-muted-foreground">
                    {text}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
