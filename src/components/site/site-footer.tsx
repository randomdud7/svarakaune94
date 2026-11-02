import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
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
    </footer>
  );
}
