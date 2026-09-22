"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const norm = (path: string) => {
    if (!path) return "/";
    const t = path.replace(/\/$/, "");
    return t === "" ? "/" : t;
  };
  const current = norm(pathname || "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "glass-strong py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-pad mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="NatioPark Accueil">
          <Image
            src="/brand/natiopark_logo_blanc_transparent-AVL769rD7WsrM2Gq.png"
            alt="NatioPark Automobiles"
            width={44}
            height={44}
            className="h-10 w-10 transition-transform duration-500 group-hover:scale-105 sm:h-11 sm:w-11"
            priority
          />
          <div className="hidden sm:block">
            <div className="text-[0.7rem] font-semibold tracking-[0.22em] text-platinum uppercase">
              NatioPark
            </div>
            <div className="text-[0.6rem] tracking-[0.18em] text-muted uppercase">
              Automobiles
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {site.nav.map((item) => {
            const active = current === norm(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-colors ${
                  active ? "text-platinum" : "text-muted hover:text-platinum"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-platinum transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-platinum transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-platinum transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 md:hidden"
            aria-label="Navigation mobile"
          >
            <div className="section-pad flex flex-col gap-1 py-4">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-sm tracking-[0.18em] uppercase ${
                    current === norm(item.href) ? "text-platinum" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
