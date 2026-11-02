"use client";

import { AppWindow, ArrowRight, Check, Home, Refrigerator, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

const SERVICES = [
  {
    icon: Home,
    name: "Reguliarus valymas",
    price: "nuo 35 €",
    priceNote: "už apsilankymą",
    description:
      "Kas savaitę arba kas dvi savaites – namai visada pasiruošę svečiams, o vakarai skirti tik poilsiui.",
    features: [
      "Dulkių siurbimas ir grindų plovimas",
      "Dulkių nuvalymas nuo baldų ir paviršių",
      "Virtuvės darbo paviršiai ir išorinės spintelių durys",
      "Vonios kambario ir tualeto valymas, dezinfekcija",
      "Veidrodžiai, durų rankenos, jungikliai",
      "Šiukšlių išnešimas",
    ],
    cta: "Užsisakyti reguliarų valymą",
  },
  {
    icon: Sparkles,
    name: "Generalinis valymas",
    price: "nuo 90 €",
    priceNote: "už visus namus",
    description:
      "Gilus valymas kartą per sezoną, prieš šventes arba po remonto. Pasiekiu net tas vietas, kur dažniausiai užmirštamos.",
    features: [
      "Visi reguliaraus valymo darbai",
      "Orkaitės, viryklės ir gartraukio valymas",
      "Šaldytuvo ir spintelių valymas iš vidaus",
      "Kalkių nuosėdų šalinimas vonioje ir duše",
      "Langų rėmai, palangės ir durys",
      "Voratinkliai, grindjuostės, sunkiai pasiekiamos vietos",
    ],
    cta: "Užsisakyti generalinį valymą",
  },
  {
    icon: AppWindow,
    name: "Langų valymas",
    price: "susitarsime",
    priceNote: "kainą pasakysiu iš karto",
    description:
      "Stiklai, rėmai ir palangės iš abiejų pusių – kur tik galima prieiti. Namuose vėl lengva ir šviesu.",
    features: [
      "Stiklai iš išorės ir iš vidaus",
      "Rėmai ir jų sąsajos",
      "Palangės ir nutekėjimo angos",
      "Voratinkliai ir dulkės nuo rėmų",
      "Durų bei baldų stiklinės dalys",
    ],
    cta: "Užsisakyti langų valymą",
  },
  {
    icon: Refrigerator,
    name: "Virtuvės įrangos valymas",
    price: "susitarsime",
    priceNote: "pagal darbų apimtį",
    description:
      "Sunkiausi virtuvės darbai – orkaitė, gartraukis ir šaldytuvas – sutvarkyti iki blizgesio, be riebalų ir kvapų.",
    features: [
      "Orkaitės ir kaitlentės vidaus valymas",
      "Gartraukio ir riebalų filtrų plovimas",
      "Šaldytuvo valymas iš vidaus ir išorės",
      "Mikrobangų krosnelės ir paviršių valymas",
      "Durelių, rankenų ir plytelių nuvalymas",
    ],
    cta: "Užsisakyti virtuvės valymą",
  },
];

export function Services() {
  return (
    <section id="paslaugos" className="scroll-mt-20 border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            01 · Paslaugos
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Visa švara, kurios reikia jūsų namams.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Pasirinkite, kiek rūpesčių perduosite man – nuo kasdienės tvarkos
            iki langų ir virtuvės įrangos. Likusiu laiku tiesiog naudokitės
            švariais namais.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.1} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border bg-card p-8 transition-shadow duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <service.icon className="size-6" aria-hidden="true" />
                  </span>
                  <p className="text-right">
                    <span className="block text-3xl font-bold tracking-tight">
                      {service.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {service.priceNote}
                    </span>
                  </p>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                  {service.name}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <a
                    href="#kontaktai"
                    className="group inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {service.cta}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            Galutinė kaina priklauso nuo namų ploto, būklės ir papildomų darbų
            apimties. Paskambinkite{" "}
            <a
              href={SITE.phoneHref}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>{" "}
            – kainą pasakysiu per keletą minučių, be jokių įsipareigojimų.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
