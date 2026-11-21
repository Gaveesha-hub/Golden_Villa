export default function Footer() {
    return (
        <footer className="border-t border-caramel/15 bg-cocoa">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-cream/60 md:flex-row">
                <p className="font-display text-lg font-bold text-caramel">Golden Crumb.</p>
                <p>© {new Date().getFullYear()} Golden Crumb Bakery & Café</p>
                <div className="flex gap-5">
                    <a href="#" className="hover:text-caramel">Instagram</a>
                    <a href="#" className="hover:text-caramel">Facebook</a>
                    <a href="#" className="hover:text-caramel">TikTok</a>
                </div>
            </div>
        </footer>
    );
}