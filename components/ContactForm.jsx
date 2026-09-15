"use client";

import { useState } from "react";
import { DEMO_MAILTO, FORMSPREE_ID } from "../lib/site";

const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="cf-status cf-status-ok" role="status">
        Grazie. Ti ricontattiamo entro un giorno lavorativo.
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      action={ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="cf-field">
        <label htmlFor="cf-nome">Nome</label>
        <input id="cf-nome" name="nome" type="text" autoComplete="name" required />
      </div>
      <div className="cf-field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="cf-field">
        <label htmlFor="cf-azienda">Azienda</label>
        <input
          id="cf-azienda"
          name="azienda"
          type="text"
          autoComplete="organization"
          required
        />
      </div>
      {/* Honeypot anti-spam (convenzione Formspree): resta vuoto */}
      <input
        className="cf-gotcha"
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <button
        className="btn btn-light btn-lg"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Invio in corso…" : "Richiedi una demo"}
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      </button>
      {status === "error" && (
        <p className="cf-status cf-status-err" role="alert">
          Qualcosa non ha funzionato. Riprova tra poco, oppure{" "}
          <a href={DEMO_MAILTO}>scrivici direttamente</a>.
        </p>
      )}
    </form>
  );
}
