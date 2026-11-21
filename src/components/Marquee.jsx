const items = ["Sourdough", "Croissants", "Chocolate cake", "Cappuccino", "Cinnamon rolls", "Cold brew", "Macarons", "Birthday cakes"];

export default function Marquee() {
    const row = [...items, ...items];
    return (
        <div className="overflow-hidden border-y border-caramel/20 bg-cocoa py-4" aria-hidden="true">
            <div className="flex w-max animate-marquee gap-10 font-display text-xl font-bold text-caramel">
                {row.map((t, i) => (
                    <span key={i} className="flex items-center gap-10 whitespace-nowrap">{t}<span className="text-berry">✦</span></span>
                ))}
            </div>
        </div>
    );
}