import { useEffect, useState } from "react";
import { testimonials } from "../data/menu";
import Reveal from "./Reveal";

export default function Testimonials() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 5000);
        return () => clearInterval(t);
    }, [i]);

    return (
        <section id="reviews" className="bg-cocoa">
            <div className="section text-center">
                <Reveal><h2 className="text-4xl font-black md:text-5xl">People keep coming back</h2></Reveal>
                <div className="relative mx-auto mt-12 min-h-[220px] max-w-2xl">
                    {testimonials.map((t, idx) => (
                        <figure
                            key={t.name}
                            aria-hidden={idx !== i}
                            className={`absolute inset-0 transition duration-700 ${idx === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
                        >
                            <div className="text-xl tracking-widest text-caramel" aria-label="5 out of 5 stars">★★★★★</div>
                            <blockquote className="mt-4 font-display text-2xl leading-relaxed md:text-3xl">“{t.text}”</blockquote>
                            <figcaption className="mt-5 font-bold text-caramel">
                                {t.name} <span className="font-normal text-cream/60">· {t.role}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <div className="mt-6 flex justify-center gap-3">
                    {testimonials.map((t, idx) => (
                        <button
                            key={t.name}
                            onClick={() => setI(idx)}
                            aria-label={`Show review ${idx + 1}`}
                            className={`h-3 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-caramel" : "w-3 bg-cream/30"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}