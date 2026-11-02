import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Pinigų grąžinimo tvarka – ${SITE.name}`,
  description:
    "Skaidri pinigų grąžinimo tvarka: mokate įvertinę rezultatą, vizito atšaukimas nemokamas.",
};

export default function GrazinimoTvarka() {
  return (
    <LegalPage title="Pinigų grąžinimo tvarka">
      <p>
        Mūsų principas paprastas:{" "}
        <strong>jūs mokate tik įvertinę rezultatą</strong>. Todėl pinigų
        grąžinimo situacijos čia – išimtis, o ne taisyklė. Vis dėlto žemiau
        aiškiai aprašyta, kaip veikiame, jei toks poreikis atsiranda.
      </p>

      <h2>1. Atsiskaitymo tvarka</h2>
      <p>
        Atsiskaitote tik paslaugą atlikus ir rezultatą jums apžiūrėjus. Iš
        anksto jokių avansų nereikalaujame.
      </p>

      <h2>2. Jei nepatenkinti rezultatu</h2>
      <ul>
        <li>
          Praneškite per 48 valandas nuo valymo pabaigos telefonu{" "}
          <a href={SITE.phoneHref} className="underline underline-offset-2">
            {SITE.phoneDisplay}
          </a>{" "}
          arba el. paštu{" "}
          <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
            {SITE.email}
          </a>
          .
        </li>
        <li>
          Pirmiausia nemokamai atvyksime ir sutvarkysime trūkumus – tai
          greičiausias kelias iki rezultato, kurio norite.
        </li>
        <li>
          Jei sutvarkyti trūkumų neįmanoma arba nesutariate dėl vertinimo –
          grąžiname atitinkamą mokėjimo dalį arba visą sumą, atsižvelgdami į
          situaciją ir susitarimą su jumis.
        </li>
      </ul>

      <h2>3. Grąžinimo terminas</h2>
      <p>
        Patvirtintą sumą grąžiname per 5 darbo dienas nuo susitarimo, ta pačia
        atsiskaitymo priemone, kuria mokėjote.
      </p>

      <h2>4. Vizito atšaukimas</h2>
      <p>
        Vizito atšaukimas ar perkėlimas yra nemokamas bet kuriuo metu –
        prašome tik pranešti kuo anksčiau (idealiai – 24 valandas prieš
        susitartą laiką), kad laiką galėtume pasiūlyti kitam klientui.
      </p>

      <h2>5. Klausimai</h2>
      <p>
        Dėl grąžinimo ar kitų atsiskaitymo klausimų kreipkitės:{" "}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
          {SITE.email}
        </a>
        ,{" "}
        <a href={SITE.phoneHref} className="underline underline-offset-2">
          {SITE.phoneDisplay}
        </a>{" "}
        (I–VII, 8:00–20:00). Detalės –{" "}
        <a href="/paslaugu-salygos" className="underline underline-offset-2">
          Paslaugų sąlygose
        </a>
        .
      </p>
    </LegalPage>
  );
}
