"use client";
import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "en", label: "English" },
  { code: "fr-CA", label: "Français (CA)" },
  { code: "ar", label: "العربية", rtl: true },
];

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="mt-4">
      <div className="text-xs mb-1">Language:</div>
      <div className="flex gap-2">
        {locales.map((l) => (
          <button
            key={l.code}
            className={`px-2 py-1 rounded ${currentLocale === l.code ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            onClick={() => {
              // Swap the locale in the URL
              const nextPath = pathname.replace(/^\/[a-z-]+/, "/" + l.code);
              router.push(nextPath);
            }}
            dir={l.rtl ? "rtl" : "ltr"}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
