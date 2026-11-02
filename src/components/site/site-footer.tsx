"use client";

import { SITE } from "@/lib/site";

const LEGAL_LINKS = [
  { href: "/privatumo-politika", label: "Privatumo politika" },
  { href: "/slapuku-politika", label: "Slapukų politika" },
  { href: "/paslaugu-salygos", label: "Paslaugų sąlygos" },
  { href: "/grazinimo-tvarka", label: "Pinigų grąžinimo tvarka" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Švara Kaune · Namų valymas Kaune
          </p>
          <div className="flex items-center gap-6">
            <a
              href={SITE.phoneHref}
              className="transition-colors hover:text-foreground"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-foreground"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-xs leading-relaxed text-muted-foreground">
          <p className="font-semibold text-foreground">Rekvizitai</p>
          <p className="mt-1">
            {SITE.legal.name} · įmonės kodas: {SITE.legal.code} ·{" "}
            {SITE.legal.address} · Darbo laikas: {SITE.hours}
          </p>
          <nav
            aria-label="Teisinė informacija"
            className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("sk:open-cookie-consent"))
              }
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Slapukų nustatymai
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
