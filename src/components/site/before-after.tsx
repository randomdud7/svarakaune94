"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  alt,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-xl bg-muted ring-ring focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background">
      <Image
        src={afterSrc}
        alt={alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        Prieš
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
        Po
      </span>

      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
        <div className="absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg ring-1 ring-black/10">
          <ChevronsLeftRight className="size-5" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(event) => setPos(Number(event.target.value))}
        aria-label={`${alt} – prieš ir po palyginimo slankiklis`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
