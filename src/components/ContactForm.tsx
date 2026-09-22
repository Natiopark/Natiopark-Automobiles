"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";

type Errors = Partial<Record<"nom" | "email" | "telephone" | "sujet" | "message" | "spam", string>>;

// Static site: contact uses mailto only — no backend API keys are embedded in the front-end.

function validate(form: FormData): Errors {
  const errors: Errors = {};
  const nom = String(form.get("nom") || "").trim();
  const email = String(form.get("email") || "").trim();
  const telephone = String(form.get("telephone") || "").trim();
  const sujet = String(form.get("sujet") || "").trim();
  const message = String(form.get("message") || "").trim();
  const honeypot = String(form.get("website") || "").trim();

  if (honeypot) {
    errors.spam = "Envoi refusé.";
    return errors;
  }

  if (nom.length < 2) errors.nom = "Veuillez indiquer votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Adresse e-mail invalide.";
  if (telephone.length < 8) errors.telephone = "Numéro de téléphone requis.";
  if (sujet.length < 2) errors.sujet = "Précisez l'objet de votre demande.";
  if (message.length < 10) errors.message = "Message trop court (10 caractères minimum).";
  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const startedAt = useRef(Date.now());

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const errs = validate(form);

    // Soft time-check: reject instant bot fills (< 2s)
    if (Date.now() - startedAt.current < 2000) {
      errs.spam = "Veuillez patienter une seconde avant d'envoyer.";
    }

    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    const nom = String(form.get("nom"));
    const email = String(form.get("email"));
    const telephone = String(form.get("telephone"));
    const sujet = String(form.get("sujet"));
    const message = String(form.get("message"));

    const body = [
      `Nom : ${nom}`,
      `Email : ${email}`,
      `Téléphone : ${telephone}`,
      `Sujet : ${sujet}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `[NatioPark] ${sujet}`
    )}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      window.location.href = mailto;
    }, 600);
  }

  return (
    <div className="glass rounded-sm p-6 md:p-10">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-10 text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 text-accent">
              ✓
            </div>
            <h3 className="display text-3xl text-platinum">Message prêt</h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
              Votre client e-mail s&apos;ouvre avec le message prérempli adressé à{" "}
              <strong className="text-silver">{site.email}</strong>. Nous vous
              répondrons rapidement pour convenir d&apos;un rendez-vous.
            </p>
            <button
              type="button"
              className="btn-ghost mt-8"
              onClick={() => {
                setSuccess(false);
                startedAt.current = Date.now();
              }}
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            className="relative grid gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Honeypot anti-spam — leave empty */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            >
              <label htmlFor="website">Site web</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Nom"
                name="nom"
                error={errors.nom}
                required
                autoComplete="name"
                minLength={2}
              />
              <Field
                label="E-mail"
                name="email"
                type="email"
                error={errors.email}
                required
                autoComplete="email"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Téléphone"
                name="telephone"
                type="tel"
                error={errors.telephone}
                required
                autoComplete="tel"
                minLength={8}
              />
              <Field
                label="Sujet"
                name="sujet"
                error={errors.sujet}
                required
                minLength={2}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                minLength={10}
                className="w-full resize-y rounded-sm border border-white/10 bg-black/30 px-4 py-3 text-sm text-platinum placeholder:text-muted/50"
                placeholder="Décrivez votre projet ou votre besoin…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-300">
                  {errors.message}
                </p>
              )}
            </div>
            {errors.spam && (
              <p className="text-xs text-red-300" role="alert">
                {errors.spam}
              </p>
            )}
            <p className="text-xs text-muted">
              Réception uniquement sur rendez-vous. En soumettant, votre messagerie
              s&apos;ouvrira (mailto) pour finaliser l&apos;envoi. Aucune clé API
              n&apos;est embarquée dans le front-end.
            </p>
            <button type="submit" className="btn-primary w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Préparation…" : "Envoyer le message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
  minLength,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  minLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        minLength={minLength}
        autoComplete={autoComplete}
        className="w-full rounded-sm border border-white/10 bg-black/30 px-4 py-3 text-sm text-platinum placeholder:text-muted/50"
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
