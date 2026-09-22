"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "np-cookie-consent";

export type CookieConsent = "all" | "essential" | null;

export function readCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "all" || v === "essential") return v;
  } catch {
    /* private mode */
  }
  return null;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);

  useEffect(() => {
    setVisible(readCookieConsent() === null);
  }, []);

  function save(choice: "all" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
    window.dispatchEvent(new CustomEvent("np-cookie-consent", { detail: choice }));
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5"
    >
      <div className="glass-strong mx-auto max-w-3xl rounded-sm border border-white/10 p-5 shadow-[0_-12px_48px_rgba(0,0,0,0.45)] sm:p-6">
        <p className="eyebrow mb-2">Cookies</p>
        <p className="text-sm leading-relaxed text-silver/90">
          Nous utilisons des cookies <strong className="text-platinum">essentiels</strong>{" "}
          au fonctionnement du site et, si vous l&apos;acceptez, des cookies{" "}
          <strong className="text-platinum">analytiques optionnels</strong> pour mesurer
          l&apos;audience. Aucune vente de données.{" "}
          <Link href="/rgpd" className="text-accent hover:underline">
            En savoir plus
          </Link>
          .
        </p>

        {customize && (
          <ul className="mt-4 space-y-2 text-xs text-muted">
            <li className="flex justify-between gap-4 border border-white/8 rounded-sm px-3 py-2">
              <span>Essentiels (toujours actifs)</span>
              <span className="text-accent">Activés</span>
            </li>
            <li className="flex justify-between gap-4 border border-white/8 rounded-sm px-3 py-2">
              <span>Analytiques (optionnels)</span>
              <span>Selon votre choix</span>
            </li>
          </ul>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <button type="button" className="btn-primary" onClick={() => save("all")}>
            Accepter
          </button>
          <button type="button" className="btn-ghost" onClick={() => save("essential")}>
            Refuser
          </button>
          {!customize ? (
            <button
              type="button"
              className="btn-ghost"
              onClick={() => setCustomize(true)}
            >
              Personnaliser
            </button>
          ) : (
            <>
              <button type="button" className="btn-ghost" onClick={() => save("essential")}>
                Essentiels uniquement
              </button>
              <button type="button" className="btn-ghost" onClick={() => save("all")}>
                Tout accepter
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
