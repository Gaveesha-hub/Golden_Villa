import Reveal from "./Reveal";

const points = [
    { title: "Baked every morning", text: "Dough is shaped the night before and baked from 5am, so nothing sits on the shelf overnight." },
    { title: "Real ingredients", text: "Local flour, cultured butter and fresh fruit. No shortcuts, no preservatives." },
    { title: "Coffee that matches", text: "Single-origin beans roasted weekly and pulled by trained baristas." },
];

export default function About() {
    return (
        <section id="story" className="section grid items-center gap-14 md:grid-cols-2">
            <Reveal className="grid grid-cols-2 gap-4">
                <img
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=700&q=80"
                    alt="Inside the Golden Crumb café"
                    className="mt-12 aspect-[3/4] w-full rounded-3xl border border-caramel/30 bg-roast object-cover"
                    loading="lazy"
                />
                <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
                    alt="Fresh sourdough loaves"
                    className="aspect-[3/4] w-full rounded-3xl border border-caramel/30 bg-roast object-cover"
                    loading="lazy"
                />
            </Reveal>

            <div>
                <Reveal>
                    <h2 className="text-4xl font-black md:text-5xl">A small bakery with a big oven</h2>
                    <p className="mt-4 text-lg leading-relaxed text-cream/75">
                        Golden Crumb started in a home kitchen with one recipe: our grandmother's bread. Today we bake for the whole
                        neighbourhood, and we still start before sunrise.
                    </p>
                </Reveal>
                <ul className="mt-8 space-y-4">
                    {points.map((p, i) => (
                        <Reveal key={p.title} delay={i * 120}>
                            <li className="rounded-2xl border-l-4 border-caramel bg-cocoa p-5">
                                <h3 className="text-xl font-bold">{p.title}</h3>
                                <p className="mt-1 text-cream/70">{p.text}</p>
                            </li>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}