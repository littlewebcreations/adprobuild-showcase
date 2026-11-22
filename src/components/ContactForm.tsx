import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";
import { contact, services } from "@/data/projects";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Hi A&D Probuild, I'm ${name || "interested in a quote"}.`,
      service && `Project type: ${service}.`,
      message,
      phone && `You can call me back on ${phone}.`,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const inputCls =
    "w-full rounded-md border-2 border-input bg-card p-[0.75rem] placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="default-container flex flex-col">
      <div className="flex flex-wrap gap-[1rem]">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={`${inputCls} basis-[12rem] grow`} required />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone number" className={`${inputCls} basis-[12rem] grow`} />
      </div>
      <select value={service} onChange={(e) => setService(e.target.value)} className={`${inputCls} ${service ? "" : "text-muted-foreground/60"}`}>
        <option value="">What do you need?</option>
        {services.map((s) => (
          <option key={s.name} value={s.name}>
            {s.name}
          </option>
        ))}
      </select>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        placeholder="Tell us about your project — location, rough size, timescale…"
        className={inputCls}
        required
      />
      <div className="card-buttons flex">
        <Button type="submit" variant="whatsapp" className="primary-button h-auto w-full">
          <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Send your enquiry
        </Button>
      </div>
      <p className="card-desc text-center">
        Sends via WhatsApp — the fastest way to reach Andrew &amp; David.
      </p>
    </form>
  );
}
