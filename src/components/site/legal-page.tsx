import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="turinys" className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Į pradžią
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Paskutinį kartą atnaujinta: 2026-11-02
          </p>
          <div className="mt-10 space-y-7 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
