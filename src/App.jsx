import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Menu from "./components/Menu";
import Stats from "./components/Stats";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { menuItems } from "./data/menu";

export default function App() {
  const [cart, setCart] = useState({});
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");

  const add = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setToast(menuItems.find((i) => i.id === id)?.name || "");
    setTimeout(() => setToast(""), 1800);
  };
  const change = (id, d) =>
    setCart((c) => {
      const q = (c[id] || 0) + d;
      const n = { ...c };
      q <= 0 ? delete n[id] : (n[id] = q);
      return n;
    });
  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <>
      <Navbar count={count} onCart={() => setOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <Menu onAdd={add} />
        <Stats />
        <About />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <CartDrawer open={open} onClose={() => setOpen(false)} cart={cart} change={change} clear={() => setCart({})} />
      <div
        role="status"
        className={`fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-caramel px-6 py-3 font-bold text-night shadow-xl transition duration-500 ${toast ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        {toast ? `${toast} added to your order` : ""}
      </div>
    </>
  );
}