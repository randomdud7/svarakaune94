import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privatumo politika – ${SITE.name}`,
  description:
    "Kokius duomenis renkame, kokiais tikslais ir kaip galite juos ištrinti.",
};

export default function PrivatumoPolitika() {
  return (
    <LegalPage title="Privatumo politika">
      <p>
        Ši politika paaiškina, kokiuose tiksluose ir kokius duomenis tvarkome,
        kai naudojatės svetaine {SITE.name} arba susisiekiate su mumis.
        Veikiame pagal Bendrąjį duomenų apsaugos reglamentą (BBD) ir Lietuvos
        Respublikos teisės aktus.
      </p>

      <h2>1. Duomenų valdytojas</h2>
      <p>
        Duomenų valdytojas – {SITE.legal.name} ({SITE.legal.address}).
        Susisiekite:{" "}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
          {SITE.email}
        </a>{" "}
        arba{" "}
        <a href={SITE.phoneHref} className="underline underline-offset-2">
          {SITE.phoneDisplay}
        </a>
        .
      </p>

      <h2>2. Kokius duomenis renkame</h2>
      <ul>
        <li>
          Susisiekdami telefonu ar žinute – jūsų pateiktą vardą, telefono
          numerį, el. pašto adresą ir užklausos turinį.
        </li>
        <li>
          Svetainės forma „Parašykite žinutę" duomenų mūsų serveryje
          nesaugo: ji tik paruošia laišką jūsų pašto programoje, kurį
          išsiunčiate patys.
        </li>
        <li>
          Naršymo duomenų (pvz., reklaminių profilių) nerenkame – svetainėje
          nėra analitikos ar sekimo įrankių.
        </li>
      </ul>

      <h2>3. Tikslai ir teisiniai pagrindai</h2>
      <ul>
        <li>
          Atsakyti į jūsų užklausą ir susitarti dėl paslaugų – sutarties
          sudarymo prielaida (BBD 6 str. 1 d. b p.).
        </li>
        <li>
          Suteikti paslaugas ir atsiskaityti – sutartis (BBD 6 str. 1 d. b p.).
        </li>
        <li>
          Tarnauti apskaitos reikalavimams – teisinis įsipareigojimas (BBD 6
          str. 1 d. c p.).
        </li>
      </ul>
      <p>
        Tiesioginės rinkodaros laiškų nesiunčiame. Jei ateityje pradėsime,
        paprašysime atskiro sutikimo ir kiekviename laiške pateiksime
        atsisakymo (angl. unsubscribe) nuorodą.
      </p>

      <h2>4. Duomenų perdavimas tretiesiems asmenims</h2>
      <p>
        Jūsų duomenų neperduodame rinkodaros tikslais. Svetainė talpinama pas
        paslaugų teikėją Vercel, Inc. – jos serveriuose saugomi tik
        trumpalaikiai techniniai žurnalai, reikalingi saugumui ir atsparumui
        užtikrinti.
      </p>

      <h2>5. Saugojimo terminai</h2>
      <p>
        Užklausų duomenis saugome tol, kol juos aptarnaujame, o paslaugų
        teikimo susirašinėjimą ir dokumentus – kiek reikalauja Lietuvos
        Respublikos apskaitos ir archyvų teisės aktai.
      </p>

      <h2>6. Jūsų teisės ir duomenų ištrynimas</h2>
      <p>
        Turite teisę susipažinti su savo duomenimis, juos ištaisyti,
        ištrinti („būti užmirštam"), apriboti tvarkymą, perkelti ar nesutikti
        su tvarkymu, o sutikimą – bet kada atšaukti. Duomenų ištrynimo
        prašymą siųskite el. paštu{" "}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
          {SITE.email}
        </a>{" "}
        – įgyvendinsime per 30 dienų, jei neturime teisinės pareigos juos
        saugoti. Dėl duomenų apsaugos galite skųstis Valstybinei duomenų
        apsaugos inspekcijai (vdai.gov.lt).
      </p>

      <h2>7. Pokyčiai</h2>
      <p>
        Apie esminius politikos pakeitimus pranešime šiame puslapyje,
        atnaujindami „Paskutinį kartą atnaujinta" datą.
      </p>
    </LegalPage>
  );
}
