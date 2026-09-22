"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { site } from "@/data/site";
import { readCookieConsent, type CookieConsent } from "./CookieBanner";

// Samuel: paste your GA4 ID in site.gaMeasurementId (e.g. "G-XXXXXXXX") when ready.
const GA_ID = site.gaMeasurementId?.trim() || "";

export function Analytics() {
  const [consent, setConsent] = useState<CookieConsent>(null);

  useEffect(() => {
    setConsent(readCookieConsent());
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent).detail as CookieConsent;
      setConsent(detail);
    };
    window.addEventListener("np-cookie-consent", onConsent);
    return () => window.removeEventListener("np-cookie-consent", onConsent);
  }, []);

  if (!GA_ID || consent !== "all") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', { analytics_storage: 'granted' });
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
