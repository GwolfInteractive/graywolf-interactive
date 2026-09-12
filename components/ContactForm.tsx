"use client";

import { FormEvent, useEffect, useState } from "react";
import { CONTACT_TOPICS } from "@/lib/home";
import { useI18n } from "@/components/providers/I18nProvider";

export default function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<
    "idle" | "sending" | "error" | "success" | "fail"
  >("idle");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    if (!topic) return;
    if (!CONTACT_TOPICS.some((item) => item.value === topic)) return;
    const select = document.getElementById("topic") as HTMLSelectElement | null;
    if (select) select.value = topic;
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)
      .value;
    const topic = (form.elements.namedItem("topic") as HTMLSelectElement).value;

    const next = {
      name: !name.trim(),
      email: !isValidEmail(email),
      message: message.trim().length < 3,
    };
    setErrors(next);

    if (next.name || next.email || next.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          company,
          topic,
        }),
      });
      const data = (await res.json()) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setStatus("fail");
        return;
      }
      setStatus("success");
      form.reset();
      setErrors({ name: false, email: false, message: false });
    } catch {
      setStatus("fail");
    }
  };

  const statusText =
    status === "error"
      ? t("contact.error")
      : status === "success"
        ? t("contact.success")
        : status === "fail"
          ? t("contact.fail")
          : status === "sending"
            ? t("contact.sending")
            : "";

  return (
    <form
      className="contact-form reveal"
      id="contactForm"
      noValidate
      onSubmit={onSubmit}
    >
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
            disabled={status === "sending"}
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
            disabled={status === "sending"}
            onInput={(e) => {
              if (errors.email && isValidEmail(e.currentTarget.value)) {
                setErrors((s) => ({ ...s, email: false }));
              }
            }}
          />
        </div>
      </div>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="topic" data-i18n="contact.topic">
          Konu
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue=""
          disabled={status === "sending"}
        >
          <option value="">{t("contact.topicPh")}</option>
          {CONTACT_TOPICS.map((item) => (
            <option key={item.value} value={item.value}>
              {t(item.key)}
            </option>
          ))}
        </select>
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
          disabled={status === "sending"}
          onInput={(e) => {
            if (errors.message && e.currentTarget.value.trim().length >= 3) {
              setErrors((s) => ({ ...s, message: false }));
            }
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        data-i18n={status === "sending" ? "contact.sending" : "contact.submit"}
        disabled={status === "sending"}
      >
        {status === "sending" ? t("contact.sending") : t("contact.submit")}
      </button>
      <p
        className={`form-status${status === "success" ? " success" : ""}${status === "error" || status === "fail" ? " error" : ""}`}
        id="formStatus"
        role="status"
        aria-live="polite"
      >
        {statusText}
      </p>
    </form>
  );
}
