import { useState } from "react";
import { categories, menuItems } from "../data/menu";
import Reveal from "./Reveal";

const tabs = ["All", ...categories];

export default function Menu({ onAdd }) {
    const [active, setActive] = useState("All");
    const [q, setQ] = useState("");
    const items = menuItems.filter(
        (i) => (active === "All" || i.category === active) && i.name.toLowerCase().includes(q.toLowerCase())
    );

    return (
        <section id="menu" className="section">
            <Reveal>
                <h2 className="text-4xl font-black md:text-5xl">Fresh from the counter</h2>
                <p className="mt-3 max-w-lg text-lg text-cream/70">Baked in small batches every morning. Add your favourites and order in one tap.</p>
            </Reveal>

            <div className="my-10 flex flex-wrap items-center justify-between gap-4">
                <div role="tablist" aria-label="Menu categories" className="flex flex-wrap gap-2">
                    {tabs.map((c) => (
                        <button
                            key={c}
                            role="tab"
                            aria-selected={active === c}
                            onClick={() => setActive(c)}
                            className={`rounded-full border px-5 py-2 font-bold transition ${active === c ? "border-caramel bg-caramel text-night" : "border-caramel/30 hover:border-caramel"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <input
                    type="search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search the menu…"
                    aria-label="Search the menu"
                    className="w-full rounded-full border border-caramel/30 bg-cocoa px-5 py-2 outline-none placeholder:text-cream/40 focus:border-caramel sm:w-60"
                />
            </div>

            {items.length === 0 && <p className="py-10 text-cream/60">Nothing matches “{q}”. Try another word or category.</p>}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item, i) => (
                    <Reveal key={item.id} delay={(i % 4) * 90}>
                        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-caramel/15 bg-cocoa transition duration-300 hover:-translate-y-2 hover:border-caramel/60 hover:shadow-[0_20px_50px_rgba(232,169,77,.15)]">
                            <div className="relative aspect-[4/3] overflow-hidden bg-roast">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                />
                                {item.tag && (
                                    <span className="absolute left-3 top-3 rounded-full bg-night/80 px-3 py-1 text-xs font-bold text-caramel backdrop-blur">{item.tag}</span>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="mt-1 flex-1 text-sm leading-relaxed text-cream/65">{item.desc}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="font-display text-2xl font-black text-caramel">${item.price.toFixed(2)}</span>
                                    <button onClick={() => onAdd(item.id)} className="btn btn-primary !px-4 !py-2 text-sm" aria-label={`Add ${item.name} to order`}>
                                        + Add
                                    </button>
                                </div>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}