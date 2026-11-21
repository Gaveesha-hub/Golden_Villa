import { menuItems } from "../data/menu";

const WHATSAPP = "94771234567"; // ← your WhatsApp number, country code first, no "+"

export default function CartDrawer({ open, onClose, cart, change, clear }) {
    const lines = Object.entries(cart).map(([id, qty]) => ({ ...menuItems.find((i) => i.id === +id), qty }));
    const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

    const checkout = () => {
        const text = `Hello Golden Crumb! I'd like to order:\n${lines.map((l) => `• ${l.qty} × ${l.name}`).join("\n")}\nTotal: $${total.toFixed(2)}`;
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <>
            <div onClick={onClose} className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
            <aside
                aria-label="Your order"
                aria-hidden={!open}
                className={`fixed right-0 top-0 z-[65] flex h-full w-full max-w-md flex-col border-l border-caramel/30 bg-cocoa transition duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between border-b border-caramel/15 p-5">
                    <h2 className="text-2xl font-black">Your order</h2>
                    <button onClick={onClose} className="rounded-full border border-caramel/40 px-4 py-1 text-sm font-bold">Close</button>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto p-5">
                    {lines.length === 0 && <p className="text-cream/60">Your order is empty. Add something fresh from the menu.</p>}
                    {lines.map((l) => (
                        <div key={l.id} className="flex items-center gap-4 rounded-2xl bg-roast p-3">
                            <img src={l.image} alt="" className="h-16 w-16 rounded-xl object-cover" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
                            <div className="flex-1">
                                <p className="font-bold">{l.name}</p>
                                <p className="text-sm text-caramel">${(l.price * l.qty).toFixed(2)}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => change(l.id, -1)} aria-label={`Remove one ${l.name}`} className="h-8 w-8 rounded-full border border-caramel/40">−</button>
                                <span className="w-5 text-center font-bold">{l.qty}</span>
                                <button onClick={() => change(l.id, 1)} aria-label={`Add one ${l.name}`} className="h-8 w-8 rounded-full border border-caramel/40">+</button>
                            </div>
                        </div>
                    ))}
                </div>

                {lines.length > 0 && (
                    <div className="space-y-3 border-t border-caramel/15 p-5">
                        <div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-caramel">${total.toFixed(2)}</span></div>
                        <button onClick={checkout} className="btn btn-primary w-full">Send order on WhatsApp</button>
                        <button onClick={clear} className="w-full text-sm text-cream/60 hover:text-cream">Clear order</button>
                    </div>
                )}
            </aside>
        </>
    );
}