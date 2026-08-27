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
        { from_name: name, from_email: email, topic },
      );
      setSavedName(name);
      setSent(true);
    } catch {
      setError("ERROR: send failed. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Initiate contact"
      className="fixed inset-0 z-[70] grid place-items-center bg-blackish/60 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-md border border-solid border-blackish bg-backGround p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="font-jetbrains text-lg font-bold uppercase sm:text-xl">
            {"//"} INITIATE_CONTACT
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="-m-1 border border-solid border-blackish px-2 py-0.5 font-jetbrains text-sm leading-none hover:bg-blackish hover:text-white"
          >
            ✕
          </button>
        </div>

        {sent ? (
          <div>
            <p className="font-jetbrains text-base font-bold uppercase">
              MESSAGE_SENT{savedName ? `: ${savedName}` : "()"}
            </p>
            <p className="mt-3 text-secondary">
              Your message is filed — I&apos;ll get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-8 w-full border border-solid border-blackish bg-backGround px-[10px] py-[10px] font-jetbrains text-sm uppercase hover:bg-blackish hover:text-white"
            >
              CLOSE_DIALOG()
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {error && (
              <p className="border border-solid border-blackish bg-backGround px-3 py-2 font-jetbrains text-xs uppercase text-secondary">
                {error}
              </p>
            )}
            <div>
              <label
                htmlFor="cf-name"
                className="mb-1.5 block font-jetbrains text-xs uppercase text-secondary"
              >
                NAME *
              </label>
              <input
                ref={nameRef}
                id="cf-name"
                name="name"
                required
                autoComplete="name"
                className="w-full border border-solid border-blackish bg-backGround px-3 py-2 font-jetbrains text-sm focus:border-blackish focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="cf-email"
                className="mb-1.5 block font-jetbrains text-xs uppercase text-secondary"
              >
                EMAIL *
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full border border-solid border-blackish bg-backGround px-3 py-2 font-jetbrains text-sm focus:border-blackish focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="cf-topic"
                className="mb-1.5 block font-jetbrains text-xs uppercase text-secondary"
              >
                WHAT_TO_DISCUSS *
              </label>
              <textarea
                id="cf-topic"
                name="topic"
                required
                rows={4}
                className="w-full resize-y border border-solid border-blackish bg-backGround px-3 py-2 font-jetbrains text-sm focus:border-blackish focus:outline-none"
              />
            </div>
            <div className="mt-1 flex items-center justify-between gap-4">
              <span
                aria-hidden
                className="hidden font-jetbrains text-[11px] uppercase text-secondary/70 sm:block"
              >
                NO_SPAM.VERIFIED ✓
              </span>
              <button
                type="submit"
                disabled={sending}
                className="flex-1 border border-solid border-blackish bg-blackish px-[10px] py-[10px] font-jetbrains text-sm uppercase text-white hover:opacity-90 disabled:opacity-50"
              >
                {sending ? "SENDING..." : "SUBMIT_FORM()"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
