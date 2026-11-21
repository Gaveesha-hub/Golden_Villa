import { useEffect, useRef, useState } from "react";

// Fades & slides children in when they scroll into view.
export default function Reveal({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const o = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setShow(true); o.disconnect(); }
        }, { threshold: 0.15 });
        o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${className}`}
        >
            {children}
        </div>
    );
}