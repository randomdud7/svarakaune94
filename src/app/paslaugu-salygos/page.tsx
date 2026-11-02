import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Paslaugų sąlygos – ${SITE.name}`,
  description:
    "Namų valymo paslaugų teikimo sąlygos: užsakymas, kainos, atšaukimas, atsakomybė.",
};

export default function PaslauguSalygos() {
  return (
    <LegalPage title="Paslaugų sąlygos">
      <p>
        Šios sąlygos taikomos, kai užsisakote namų valymo paslaugas iš{" "}
        {SITE.legal.name} internetu, telefonu ar žinute. Užsisakę paslaugų,
        su mumis sutarite laikytis šių sąlygų; santykiai reguliuojami
        Lietuvos Respublikos teisės aktų.
      </p>

      <h2>1. Paslaugų teikėjas</h2>
      <p>
        {SITE.legal.name}, įmonės kodas {SITE.legal.code}, {SITE.legal.address}.
        Kontaktai:{" "}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
          {SITE.email}
        </a>
        ,{" "}
        <a href={SITE.phoneHref} className="underline underline-offset-2">
          {SITE.phoneDisplay}
        </a>
        .
      </p>

      <h2>2. Užsakymas</h2>
      <p>
        Užsakymą galite pateikti tik būdami 18 metų ir vyresni. Užsakymas
        laikomas sudarytu, kai telefonu ar žinute susitarime dėl paslaugų
        apimties, laiko ir kainos.
      </p>

      <h2>3. Kainos</h2>
      <ul>
        <li>
          Svetainėje nurodytos kainos yra orientacinės („nuo X €") ir
          priklauso nuo namų ploto bei būklės.
        </li>
        <li>
          <strong>
            Galutinę kainą su jumis aiškiai susitarime prieš pradedant darbus.
          </strong>
        </li>
        <li>
          Papildomų mokesčių (už priemones, atvykimą, kelionę) netaikome –
          į juos įskaičiuota. Jei darbų metu paaiškėja papildomų darbų
          poreikis, pirmiausia sutinkame su jumis dėl naujos kainos.
        </li>
      </ul>

      <h2>4. Paslaugų atlikimas ir atsiskaitymas</h2>
      <p>
        Valymo priemones ir įrangą atsinešame patys. Atsiskaitoma paslaugą
        atlikus ir ją jums apžiūrėjus, susitarus dėl patogiausio mokėjimo
        būdo. Sąskaitą faktūrą išrašome paprašius.
      </p>

      <h2>5. Užsakymo atšaukimas arba perkėlimas</h2>
      <p>
        Vizito atšaukimas ar perkėlimas yra nemokamas. Prašome pranešti kuo
        anksčiau, ne vėliau kaip 24 valandas prieš susitartą laiką.
      </p>

      <h2>6. Atsakomybė</h2>
      <p>
        Dirbame rūpestingai ir su priežiūra. Jei manote, kad valymo metu buvo
        sugadintas turtas ar palikti trūkumai, praneškite per 48 valandas –
        išspręsime pagal Lietuvos Respublikos civilinio kodekso taisykles.
      </p>

      <h2>7. Skundai ir ginčai</h2>
      <p>
        Skundus priimame telefonu arba el. paštu{" "}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
          {SITE.email}
        </a>{" "}
        ir atsakome per 7 darbo dienas. Nesutarimai sprendžiami derybomis,
        o nepasiekus susitarimo – Lietuvos Respublikos teisės aktų nustatyta
        tvarka.
      </p>
    </LegalPage>
  );
}
