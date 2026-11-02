"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sk-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener("sk:open-cookie-consent", open);
    return () => window.removeEventListener("sk:open-cookie-consent", open);
  }, []);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (!stored) {
      const timer = window.setTimeout(() => setVisible(true), 900);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function choose(value: "sutinku" | "atmestu") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // jei naršyklė blokuoja išsaugojimą – pranešimas rodys vėl
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Slapukų pranešimas"
      className="fixed bottom-4 left-4 right-4 z-30 mx-auto max-w-md rounded-2xl border bg-card p-5 shadow-xl sm:left-auto sm:right-6 sm:mx-0"
    >
      <p className="text-sm font-semibold">Slapukai</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Ši svetainė nenaudoja reklaminių ar stebėjimo slapukų – tik
        būtinuosius, reikalingus puslapio veikimui. Jūsų pasirinkimas
        išsaugomas tik šioje naršyklėje.{" "}
        <a
          href="/slapuku-politika"
          className="font-medium text-foreground underline underline-offset-2"
        >
          Slapukų politika
        </a>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose("sutinku")}
          className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Sutinku
        </button>
        <button
          type="button"
          onClick={() => choose("atmestu")}
          className="flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
        >
          Atmesti
        </button>
      </div>
    </div>
  );
}
