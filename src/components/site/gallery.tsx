"use client";

import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { BeforeAfter } from "@/components/site/before-after";

const PAIRS = [
  {
    beforeSrc: "/photos/vonios-praustuvas-pries.jpg",
    afterSrc: "/photos/vonios-praustuvas-po.jpg",
    alt: "Praustuvas prieš ir po valymo – kalkių nuosėdos ir muilo likučiai pašalinti",
    title: "Vonios kambario valymas",
    caption: "Kalkių nuosėdos ir muilo likučiai – dingo be pėdsakų.",
  },
  {
    beforeSrc: "/photos/praustuvas-2-pries.jpg",
    afterSrc: "/photos/praustuvas-2-po.jpg",
    alt: "Praustuvas prieš ir po valymo – dėmės aplink maišytuvą pašalintos",
    title: "Praustuvas po kasdienio naudojimo",
    caption: "Dėmės aplink maišytuvą ir nutekėjimą – pradingusios.",
  },
  {
    beforeSrc: "/photos/duso-kabina-pries.jpg",
    afterSrc: "/photos/duso-kabina-po.jpg",
    alt: "Dušo kabina prieš ir po valymo – muilo nuosėdos nuo padėklo pašalintos",
    title: "Dušo kabina",
    caption: "Muilo nuosėdos padėkle ir stikluose – nuvalytos iki blizgesio.",
  },
  {
    beforeSrc: "/photos/virtuve-filtras-pries.jpg",
    afterSrc: "/photos/virtuve-filtras-darbas.jpg",
    alt: "Gartraukio filtras prieš ir po valymo – riebalai pašalinti",
    title: "Virtuvė – gartraukio filtrai",
    caption: "Nuo riebalais apaugusio tinklelio iki švaraus filtro.",
  },
];

const FEATURED = {
  src: "/photos/langai-namas.jpg",
  alt: "Modernus namas, kurio langus ir palanges valėme",
  label: "Langų valymas – šiuolaikinis objektas",
};

export function Gallery() {
  return (
    <section id="galerija" className="scroll-mt-20 border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            03 · Mūsų darbai
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Prieš ir po – be retušo.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tikros darbo vietos. Vilkite juostą virš nuotraukos ir
            įsitikinkite patys.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PAIRS.map((pair, index) => (
            <Reveal key={pair.title} delay={(index % 2) * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border bg-card p-3">
                <BeforeAfter
                  beforeSrc={pair.beforeSrc}
                  afterSrc={pair.afterSrc}
                  alt={pair.alt}
                />
                <figcaption className="px-2 pb-2 pt-4">
                  <p className="text-sm font-semibold">{pair.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pair.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <figure className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border sm:aspect-[16/9]">
            <Image
              src={FEATURED.src}
              alt={FEATURED.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-4 bottom-4">
              <span className="inline-block rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur">
                {FEATURED.label}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
            Galeriją papildome po kiekvienų įdomesnių darbų. Norite sužinoti,
            ką esame valę panašiuose namuose?{" "}
            <a
              href="#kontaktai"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Susisiekite
            </a>{" "}
            – papasakosime ir parodysime daugiau.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
