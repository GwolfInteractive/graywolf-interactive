"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";

export default function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const next = {
      name: !name.trim(),
      email: !isValidEmail(email),
      message: !message.trim(),
    };
    setErrors(next);

    if (next.name || next.email || next.message) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
    setErrors({ name: false, email: false, message: false });
  };

  return (
    <form className="contact-form reveal" id="contactForm" noValidate onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" data-i18n="contact.name">
            Ad Soyad
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            data-i18n-placeholder="contact.namePh"
            placeholder="Adınız"
            className={errors.name ? "error" : undefined}
            onInput={(e) => {
              if (errors.name && e.currentTarget.value.trim()) {
                setErrors((s) => ({ ...s, name: false }));
              }
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" data-i18n="contact.email">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            data-i18n-placeholder="contact.emailPh"
            placeholder="ornek@email.com"
            className={errors.email ? "error" : undefined}
            onInput={(e) => {
              if (errors.email && isValidEmail(e.currentTarget.value)) {
                setErrors((s) => ({ ...s, email: false }));
              }
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message" data-i18n="contact.message">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          data-i18n-placeholder="contact.messagePh"
          placeholder="Projeniz veya talebiniz hakkında kısaca yazın..."
          className={errors.message ? "error" : undefined}
          onInput={(e) => {
            if (errors.message && e.currentTarget.value.trim()) {
              setErrors((s) => ({ ...s, message: false }));
            }
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary" data-i18n="contact.submit">
        Gönder
      </button>
      <p
        className={`form-status${status === "success" ? " success" : ""}${status === "error" ? " error" : ""}`}
        id="formStatus"
        role="status"
        aria-live="polite"
      >
        {status === "error"
          ? t("contact.error")
          : status === "success"
            ? t("contact.success")
            : ""}
      </p>
    </form>
  );
}
