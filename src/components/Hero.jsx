const words = ["Baked", "at", "dawn.", "Poured", "all", "day."];

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden">
            {/* glowing background */}
            <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] animate-glow rounded-full bg-caramel/30 blur-[140px]" />
            <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] animate-glow rounded-full bg-berry/20 blur-[130px]" />

            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-28">
                <div>
                    <p className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-caramel/40 px-4 py-1 text-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-caramel" />
                        Open today · Fresh bread out at 7am
                    </p>
                    <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
                        {words.map((w, i) => (
                            <span
                                key={i}
                                style={{ animationDelay: `${200 + i * 120}ms` }}
                                className={`animate-rise mr-3 inline-block ${i > 2 ? "gold-text" : ""}`}
                            >
                                {w}
                            </span>
                        ))}
                    </h1>
                    <p className="animate-rise mt-6 max-w-md text-lg leading-relaxed text-cream/80" style={{ animationDelay: "1s" }}>
                        Handmade bread, buttery pastries, celebration cakes and coffee roasted for people who notice the difference.
                    </p>
                    <div className="animate-rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "1.2s" }}>
                        <a href="#menu" className="btn btn-primary">Order from the menu</a>
                        <a href="#visit" className="btn btn-ghost">Custom cakes</a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    {/* steam */}
                    <div className="absolute -top-16 left-1/2 flex -translate-x-1/2 gap-6" aria-hidden="true">
                        {[0, 1, 2].map((i) => (
                            <span key={i} style={{ animationDelay: `${i * 1.1}s` }} className="h-16 w-3 animate-steam rounded-full bg-cream/40 blur-md" />
                        ))}
                    </div>
                    <div className="animate-float">
                        <div className="aspect-square overflow-hidden rounded-full border-4 border-caramel/70 bg-roast shadow-[0_0_80px_rgba(232,169,77,.35)]">
                            <img
                                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80"
                                alt="Golden butter croissants"
                                className="h-full w-full object-cover"
                                onError={(e) => (e.currentTarget.style.display = "none")}
                            />
                        </div>
                    </div>
                    {/* rotating badge */}
                    <svg viewBox="0 0 120 120" className="absolute -bottom-6 -left-4 h-28 w-28 animate-spin-slow" aria-hidden="true">
                        <defs><path id="c" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
                        <circle cx="60" cy="60" r="58" fill="#E8A94D" />
                        <text fontSize="11.5" fontWeight="700" fill="#120B08" letterSpacing="2.2">
                            <textPath href="#c">FRESH · HANDMADE · DAILY ·</textPath>
                        </text>
                    </svg>
                    <div className="absolute -right-2 top-10 rounded-2xl border border-caramel/40 bg-cocoa px-4 py-3 text-center text-sm shadow-xl">
                        <span className="block font-display text-2xl font-black text-caramel">4.9 ★</span>
                        2,000+ reviews
                    </div>
                </div>
            </div>
        </section>
    );
}