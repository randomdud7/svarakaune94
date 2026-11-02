import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Slapukų politika – ${SITE.name}`,
  description:
    "Kokius slapukus naudoja ši svetainė ir kaip galite valdyti savo pasirinkimą.",
};

export default function SlapukuPolitika() {
  return (
    <LegalPage title="Slapukų politika">
      <p>
        Šiame puslapyje paaiškinta, kokius slapukus (angl. cookies) naudoja
        svetainė {SITE.name} ir kaip galite valdyti savo pasirinkimą.
      </p>

      <h2>1. Kas yra slapukai</h2>
      <p>
        Slapukai – maži tekstinių failų, kuriuos svetainė gali įrašyti į
        jūsų naršyklę. Jie naudojami, kad svetainė veiktų tinkamai arba
        būtų galima rinkti statistiką.
      </p>

      <h2>2. Kokių slapukų mes naudojame</h2>
      <ul>
        <li>
          <strong>Būtinieji</strong> – be jų svetainė veiktų netinkamai. Jie
          reikalingi tik puslapio funkcijoms ir jūsų saugumui.
        </li>
        <li>
          <strong>
            Stebėjimo, reklaminių ir analitikos slapukų nenaudojame.
          </strong>{" "}
          Svetainėje nėra jokių išorinių statistikos ar rinkodaros paslaugų
          (pvz., Google Analytics, Meta Pixel ir pan.).
        </li>
      </ul>
      <p>
        Jūsų atsakymas į slapukų pranešimą išsaugomas jūsų pačios naršyklės
        saugykloje (localStorage) – juo jūsų neidentifikuojame.
      </p>

      <h2>3. Trečiųjų šalių slapukai</h2>
      <p>
        Nenaudojame. Šriftai ir nuotraukos talpinami kartu su svetaine, todėl
        į jūsų naršyklę jokių trečiųjų šalių slapukų nepatenka.
      </p>

      <h2>4. Kaip valdyti slapukus</h2>
      <ul>
        <li>
          Pranešimo lange pasirinkite „Sutinku" arba „Atmesti" – abu
          pasirinkimai vienodai leidžia naudotis svetaine.
        </li>
        <li>
          Pasirinkimą bet kada pakeisti galite puslapio apačioje esančioje
          nuorodoje „Slapukų nustatymai".
        </li>
        <li>
          Ištrinti įrašytus duomenis galite ir naršyklės nustatymuose
          (slapukų ir svetainės duomenų skyriuje).
        </li>
      </ul>

      <h2>5. Atnaujinimai</h2>
      <p>
        Jei ateityje pradėsime naudoti papildomus slapukus, atnaujinsime šią
        politiką ir vėl paprašysime jūsų pasirinkimo. Susisiekite:{" "}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
