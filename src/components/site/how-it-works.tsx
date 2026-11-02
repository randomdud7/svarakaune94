"use client";

import { Reveal } from "@/components/site/reveal";

const STEPS = [
  {
    number: "01",
    title: "Susisiekite",
    text: "Paskambinkite arba parašykite žinutę. Pakaks kelių detalių: kiek kambarių ir kokio valymo jums reikia.",
  },
  {
    number: "02",
    title: "Sutariame dėl kainos",
    text: "Kainą ir laisvą laiką pasakysiu iš karto. Jokių paslėptų mokesčių ar siurprizų.",
  },
  {
    number: "03",
    title: "Atlieku valymą",
    text: "Atsinešu savo valymo priemones ir įrangą. Jums tereikia atidaryti duris.",
  },
  {
    number: "04",
    title: "Mėgaukitės švara",
    text: "Rezultatą apžiūrite ramiai – apmokate tik tada, kai esate patenkinti.",
  },
];

export function HowItWorks() {
  return (
    <section id="kaip-veikia" className="scroll-mt-20 border-t bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            02 · Kaip veikia
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Nuo skambučio iki švaros – tik keturi žingsniai.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="h-full border-t-2 border-primary pt-6">
                  <span
                    aria-hidden="true"
                    className="text-5xl font-bold tracking-tight text-primary/20"
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
