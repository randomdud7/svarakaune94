"use client";

import { Star } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const TESTIMONIALS = [
  {
    text: "Butas spindi, o aš galiausiai savaitgalį leidžiu su šeima, o ne su šluoste. Ačiū!",
    name: "Rasa",
    place: "Eiguliai",
  },
  {
    text: "Generalinis valymas prieš šventes – viskas atlikta laiku, kruopščiai ir visiškai be rūpesčių.",
    name: "Tomas",
    place: "Šančiai",
  },
  {
    text: "Ilgai ieškojau žmogaus, kuriuo drąsiai galiu pasitikėti savo namuose. Radau.",
    name: "Jolanta",
    place: "Aleksotas",
  },
];

export function Testimonials() {
  return (
    <section id="atsiliepimai" className="scroll-mt-20 border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            04 · Atsiliepimai
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Ką sako klientai.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.1}
              className="h-full"
            >
              <figure className="flex h-full flex-col rounded-2xl border bg-card p-8">
                <div
                  className="flex gap-1"
                  role="img"
                  aria-label="Įvertinimas: 5 iš 5 žvaigždžių"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-current text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed">
                  „{testimonial.text}“
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {testimonial.name}
                  </span>{" "}
                  · Kaunas, {testimonial.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
