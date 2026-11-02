"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

const DETAILS = [
  {
    icon: Mail,
    title: SITE.email,
    href: `mailto:${SITE.email}`,
    text: "Rašykite bet kuriuo metu",
  },
  {
    icon: MapPin,
    title: SITE.area,
    text: "Atvykstu ir į priemiestis",
  },
  {
    icon: Clock,
    title: SITE.hours,
    text: "Renkatės patogų laiką",
  },
];

export function ContactCta() {
  return (
    <section id="kontaktai" className="scroll-mt-20 bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-background/60">
            05 · Kontaktai
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Skambinkite šiandien – grįžkite į švaresnius namus jau rytoj.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-background/70">
            Papasakokite, kokių pagalbos jums reikia – kainą ir patogų laiką
            sutarsime per vieną skambutį.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a href={SITE.phoneHref} className="group mt-12 inline-block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-background/60">
              Skambinti dabar
            </span>
            <span className="mt-3 block text-4xl font-bold tracking-tight underline-offset-8 group-hover:underline sm:text-6xl md:text-7xl">
              {SITE.phoneDisplay}
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-base"
            >
              <a href={SITE.phoneHref}>
                <Phone className="size-5" aria-hidden="true" />
                Skambinti: {SITE.phoneDisplay}
              </a>
            </Button>
            <p className="mt-4 text-sm text-background/60">
              Neatsilieku? Palikite žinutę – atsakysiu, kai tik galėsiu.
            </p>
          </div>
        </Reveal>

        <dl className="mt-16 grid gap-8 border-t border-background/20 pt-10 sm:grid-cols-3">
          {DETAILS.map(({ icon: Icon, title, href, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon
                className="mt-1 size-5 shrink-0 text-background/60"
                aria-hidden="true"
              />
              <div>
                <dt className="text-sm font-semibold">
                  {href ? (
                    <a
                      href={href}
                      className="underline-offset-4 hover:underline"
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </dt>
                <dd className="mt-0.5 text-sm text-background/60">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
