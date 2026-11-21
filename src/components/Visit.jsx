import { useState } from "react";
import Reveal from "./Reveal";

export default function Visit() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
    const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        // TODO: connect to your backend, EmailJS, Formspree, etc.
        console.log("Cake request:", form);
        setSent(true);
    };

    const field = "w-full rounded-xl border border-caramel/30 bg-night px-4 py-3 outline-none placeholder:text-cream/30 focus:border-caramel";

    return (
        <section id="visit" className="section grid gap-12 md:grid-cols-2">
            <Reveal>
                <h2 className="text-4xl font-black md:text-5xl">Come say hello</h2>
                <dl className="mt-8 space-y-6 text-lg">
                    <div><dt className="font-bold text-caramel">Address</dt><dd>123 Galle Road, Colombo 03</dd></div>
                    <div><dt className="font-bold text-caramel">Hours</dt><dd>Mon–Fri 7am–8pm<br />Sat–Sun 8am–9pm</dd></div>
                    <div><dt className="font-bold text-caramel">Call or WhatsApp</dt><dd>+94 77 123 4567</dd></div>
                </dl>
            </Reveal>

            <Reveal delay={150}>
                <div className="rounded-3xl border border-caramel/30 bg-cocoa p-7 shadow-[0_0_60px_rgba(232,169,77,.08)]">
                    {sent ? (
                        <div className="py-10 text-center" role="status">
                            <p className="font-display text-3xl font-black text-caramel">Request sent!</p>
                            <p className="mt-2 text-cream/70">We'll call you within a day to confirm your cake.</p>
                            <button className="btn btn-ghost mt-6" onClick={() => setSent(false)}>Send another request</button>
                        </div>
                    ) : (
                        <form onSubmit={submit} className="space-y-4">
                            <h3 className="text-2xl font-black">Order a custom cake</h3>
                            <input required name="name" value={form.name} onChange={update} placeholder="Your name" aria-label="Your name" className={field} />
                            <input required type="tel" name="phone" value={form.phone} onChange={update} placeholder="Phone number" aria-label="Phone number" className={field} />
                            <input required type="date" name="date" value={form.date} onChange={update} aria-label="Needed by" className={field} />
                            <textarea name="message" rows="3" value={form.message} onChange={update} placeholder="Flavour, size, message on the cake…" aria-label="Cake details" className={field} />
                            <button type="submit" className="btn btn-primary w-full">Send cake request</button>
                        </form>
                    )}
                </div>
            </Reveal>
        </section>
    );
}