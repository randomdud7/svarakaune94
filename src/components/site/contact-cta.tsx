"use client";

import { useState } from "react";
import type { FormEvent } from "react";
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

const inputClass =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30";

// Privatumo principas: forma neperduoda duomenų serveriui – sudaro laišką
// jūsų pašto programoje, kurį išsiunčiate patys. Renkami tik būtini duomenys.
export function ContactCta() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Reguliarus valymas",
    message: "",
    consent: false,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) return;
    const body = [
      `Vardas: ${form.name}`,
      `Telefonas: ${form.phone}`,
      form.email ? `El. paštas: ${form.email}` : null,
      `Paslauga: ${form.service}`,
      form.message ? `Žinutė: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${
      SITE.email
    }?subject=${encodeURIComponent(
      `Užklausa iš svetainės – ${form.service}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="kontaktai" className="scroll-mt-20 bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-12">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-background/60">
                05 · Kontaktai
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Skambinkite šiandien – sutarsime dėl jums patogaus laiko.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-background/70">
                Papasakokite, kokių pagalbos jums reikia – kainą ir patogų
                laiką sutarsime per vieną skambutį.
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
                  Neatsilieku? Užpildykite formą – atsakysiu, kai tik galėsiu.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              aria-labelledby="form-title"
              className="rounded-2xl bg-card p-6 text-foreground shadow-xl sm:p-8"
            >
              <p id="form-title" className="text-lg font-semibold tracking-tight">
                Parašykite žinutę
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Atsakysiu kuo skubiau darbo valandomis.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label htmlFor="cf-name" className="text-sm font-medium">
                    Vardas
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-phone" className="text-sm font-medium">
                      Telefonas
                    </label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="text-sm font-medium">
                      El. paštas{" "}
                      <span className="font-normal text-muted-foreground">
                        (nebūtina)
                      </span>
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-service" className="text-sm font-medium">
                    Paslauga
                  </label>
                  <select
                    id="cf-service"
                    name="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass}
                  >
                    <option>Reguliarus valymas</option>
                    <option>Generalinis valymas</option>
                    <option>Dar nesu apsisprendęs (-usi)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-message" className="text-sm font-medium">
                    Žinutė{" "}
                    <span className="font-normal text-muted-foreground">
                      (nebūtina)
                    </span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass}
                    placeholder="Kambarių skaičius, kvadratūra, pageidaujamas laikas…"
                  />
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-muted/60 p-3">
                  <input
                    id="cf-consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) =>
                      setForm({ ...form, consent: e.target.checked })
                    }
                    className="mt-0.5 size-4 shrink-0 accent-[#0f766e]"
                  />
                  <label
                    htmlFor="cf-consent"
                    className="text-xs leading-relaxed text-muted-foreground"
                  >
                    Sutinku, kad šie kontaktiniai duomenys būtų naudojami tik
                    atsakymui į mano užklausą.{" "}
                    <a
                      href="/privatumo-politika"
                      className="font-medium text-foreground underline underline-offset-2"
                    >
                      Privatumo politika
                    </a>
                    .
                  </label>
                </div>

                <Button type="submit" size="lg" className="h-12 w-full text-base">
                  <Mail className="size-5" aria-hidden="true" />
                  Išsiųsti žinutę
                </Button>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Paspaudus „Išsiųsti" atsidarys jūsų pašto programa su paruošta
                  žinute – duomenų serveryje nesaugome. Nenaudojate pašto
                  programos? Skambinkite: {SITE.phoneDisplay}.
                </p>
              </div>
            </form>
          </Reveal>
        </div>

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
