import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 12, suffix: "+", label: "Years baking" },
    { value: 45, suffix: "", label: "Fresh items daily" },
    { value: 18000, suffix: "+", label: "Happy customers" },
    { value: 5, suffix: "am", label: "Ovens on every day" },
];

function Counter({ value, suffix }) {
    const ref = useRef(null);
    const [n, setN] = useState(0);

    useEffect(() => {
        const o = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            o.disconnect();
            const start = performance.now();
            const tick = (t) => {
                const p = Math.min((t - start) / 1800, 1);
                setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, { threshold: 0.5 });
        o.observe(ref.current);
        return () => o.disconnect();
    }, [value]);

    return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
    return (
        <section className="border-y border-caramel/20 bg-cocoa">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 md:grid-cols-4">
                {stats.map((s) => (
                    <div key={s.label} className="text-center">
                        <p className="gold-text font-display text-5xl font-black"><Counter {...s} /></p>
                        <p className="mt-2 text-cream/70">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}