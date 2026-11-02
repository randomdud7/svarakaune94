"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "#paslaugos", label: "Paslaugos" },
  { href: "#kaip-veikia", label: "Kaip veikia" },
  { href: "#atsiliepimai", label: "Atsiliepimai" },
  { href: "#kontaktai", label: "Kontaktai" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#pradzia"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
          aria-label="Švara Kaune – grįžti į pradžią"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span className="text-base">Švara Kaune</span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Pagrindinė navigacija"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden h-10 px-4 sm:inline-flex">
            <a href={SITE.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="icon"
            variant="outline"
            className="size-11 sm:hidden"
            aria-label={`Skambinti ${SITE.phoneDisplay}`}
          >
            <a href={SITE.phoneHref}>
              <Phone className="size-5" aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-11 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Atidaryti meniu"
            aria-expanded={menuOpen}
          >
            <Menu className="size-5" aria-hidden="true" />
          </Button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Meniu"
        >
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
            <span className="flex items-center gap-2.5 font-semibold tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              Švara Kaune
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="size-11"
              onClick={() => setMenuOpen(false)}
              aria-label="Uždaryti meniu"
            >
              <X className="size-5" aria-hidden="true" />
            </Button>
          </div>
          <nav
            className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6"
            aria-label="Mobilioji navigacija"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b py-5 text-3xl font-semibold tracking-tight transition-colors hover:text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
            <Button asChild size="lg" className="h-14 w-full text-base">
              <a href={SITE.phoneHref} onClick={() => setMenuOpen(false)}>
                <Phone className="size-5" aria-hidden="true" />
                Skambinti: {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
