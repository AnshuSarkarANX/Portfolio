"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY ?? "");

export default function ContactDialog({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [savedName, setSavedName] = useState("");
  const nameRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    setError("");
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => nameRef.current?.focus(), 30);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "").trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EJS_SERVICE_KEY ?? "",
        process.env.NEXT_PUBLIC_EJS_TEMPLATE_KEY ?? "",
        {title:`Message From ${name}`, name: name, email: email, message: `email : ${email}, Message: ${topic}` },
      );
      setSavedName(name);
      setSent(true);
    } catch {
      setError("Something went wrong — try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Initiate contact"
      className="fixed inset-0 z-[70] grid place-items-center bg-soot/50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-md border-2 border-soot bg-paper p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl font-bold uppercase leading-none sm:text-3xl">
            Initiate contact<span className="text-fluoro">.</span>
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="-m-1 border-2 border-soot px-2 py-0.5 font-marks text-sm leading-none hover:bg-fluoro"
          >
            ✕
          </button>
        </div>

        {sent ? (
          <div>
            <p className="font-display text-xl font-semibold uppercase">
              Noted{savedName ? `, ${savedName}` : ""}.
            </p>
            <p className="mt-3 text-soot/80">
              Your message is filed — I&apos;ll get back to you soon.
            </p>
            <button onClick={onClose} className="stamp-btn mt-8 w-full text-sm">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {error && (
              <p className="border-2 border-soot px-3 py-2 font-marks text-xs uppercase text-soot">
                {error}
              </p>
            )}
            <div>
              <label
                htmlFor="cf-name"
                className="mb-1.5 block font-marks text-xs uppercase tracking-widest"
              >
                Name *
              </label>
              <input
                ref={nameRef}
                id="cf-name"
                name="name"
                required
                autoComplete="name"
                className="w-full border-2 border-soot bg-paper px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="cf-email"
                className="mb-1.5 block font-marks text-xs uppercase tracking-widest"
              >
                Email *
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full border-2 border-soot bg-paper px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="cf-topic"
                className="mb-1.5 block font-marks text-xs uppercase tracking-widest"
              >
                What to discuss *
              </label>
              <textarea
                id="cf-topic"
                name="topic"
                required
                rows={4}
                className="w-full resize-y border-2 border-soot bg-paper px-3 py-2"
              />
            </div>
            <div className="mt-1 flex items-center justify-between gap-4">
              <span
                aria-hidden
                className="hidden rotate-[-4deg] border-2 border-soot/40 px-2 py-0.5 font-marks text-[10px] uppercase sm:block"
              >
                No spam. Ever.
              </span>
              <button
                type="submit"
                disabled={sending}
                className="stamp-btn stamp-btn--ink flex-1 text-sm disabled:opacity-50"
              >
                {sending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
