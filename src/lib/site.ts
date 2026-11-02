// Verslo kontaktai ir pagrindinė informacija.
// Pakeitus šį failą, kontaktai atsinaujina visoje svetainėje.
export const SITE = {
  name: "Švara Kaune",
  tagline: "Namų valymo paslaugos Kaune",
  phoneDisplay: "+370 600 00 000",
  phoneHref: "tel:+37060000000",
  email: "info@svarakaune.lt",
  hours: "I–VII · 8:00–20:00",
  area: "Visas Kauno miestas",
  // Rekvizitai (footer + teisiniai puslapiai).
  // TODO: įrašyti tikrus duomenis – dabar laikinieji!
  legal: {
    name: "Švara Kaune",
    code: "pildoma",
    address: "Kaunas, Lietuva",
  },
} as const;
