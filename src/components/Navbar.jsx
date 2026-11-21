import { useEffect, useState } from "react";

const links = [
    { href: "#menu", label: "Menu" },
    { href: "#story", label: "Our story" },
    { href: "#reviews", label: "Reviews" },
    { href: "#visit", label: "Visit" },
];

export default function Navbar({ count, onCart }) {
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [bump, setBump] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!count) return;
        const raf = requestAnimationFrame(() => setBump(true));
        const t = setTimeout(() => setBump(false), 350);
        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(t);
        };
    }, [count]);

    return (
        <header className="sticky top-0 z-50 border-b border-caramel/15 bg-night/80 backdrop-blur-lg">
            <div className="absolute bottom-0 left-0 h-[2px] bg-caramel" style={{ width: `${progress}%` }} />
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
                <a href="#top" className="font-display text-2xl font-black">
                    Golden Crumb<span className="text-caramel">.</span>
                </a>

                <ul className="hidden items-center gap-8 font-medium md:flex">
                    {links.map((l) => (
                        <li key={l.href}><a href={l.href} className="transition hover:text-caramel">{l.label}</a></li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <button onClick={onCart} className="btn btn-primary relative !px-5 !py-2" aria-label={`Open order, ${count} items`}>
                        Order
                        {count > 0 && (
                            <span className={`ml-2 grid h-6 w-6 place-items-center rounded-full bg-night text-xs text-caramel ${bump ? "animate-bump" : ""}`}>
                                {count}
                            </span>
                        )}
                    </button>
                    <button className="rounded-full border border-caramel/50 px-4 py-2 text-sm font-bold md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
                        {open ? "Close" : "Menu"}
                    </button>
                </div>
            </nav>

            {open && (
                <ul className="border-t border-caramel/15 bg-night px-5 pb-4 md:hidden">
                    {links.map((l) => (
                        <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg">{l.label}</a></li>
                    ))}
                </ul>
            )}
        </header>
    );
}