"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { DEMO_MAILTO, FORMSPREE_ID } from "../lib/site";
import { capture } from "../lib/analytics";

export default function ContactForm() {
  const [state, submit] = useForm(FORMSPREE_ID);
  const started = useRef(false);
  const outcomeCaptured = useRef(false);

  useEffect(() => {
    if (state.succeeded && !outcomeCaptured.current) {
      outcomeCaptured.current = true;
      capture("lead_form_success");
    } else if (state.errors && !outcomeCaptured.current) {
      outcomeCaptured.current = true;
      capture("lead_form_error");
    }
  }, [state.errors, state.succeeded]);

  function handleStart() {
    if (!started.current) {
      started.current = true;
      capture("lead_form_started");
    }
  }

  function handleSubmit(event) {
    outcomeCaptured.current = false;
    capture("lead_form_submitted");
    return submit(event);
  }

  if (state.succeeded) {
    return (
      <p className="cf-status cf-status-ok" role="status">
        Grazie. Ti ricontattiamo entro un giorno lavorativo.
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      method="POST"
      onSubmit={handleSubmit}
      onFocusCapture={handleStart}
    >
      <div className="cf-field">
        <label htmlFor="cf-nome">Nome</label>
        <input id="cf-nome" name="nome" type="text" autoComplete="name" required />
        <ValidationError className="cf-field-error" field="nome" errors={state.errors} />
      </div>
      <div className="cf-field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
        <ValidationError className="cf-field-error" field="email" errors={state.errors} />
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
        <ValidationError className="cf-field-error" field="azienda" errors={state.errors} />
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
        className="btn btn-light btn-lg btn-glow"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? "Invio in corso…" : "Richiedi una demo"}
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      </button>
      {state.errors && (
        <p className="cf-status cf-status-err" role="alert">
          Qualcosa non ha funzionato. Riprova tra poco, oppure{" "}
          <a href={DEMO_MAILTO}>scrivici direttamente</a>.
        </p>
      )}
    </form>
  );
}
