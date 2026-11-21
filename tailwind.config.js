/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#120B08",   // page background (espresso)
        cocoa: "#1E1410",   // cards / surfaces
        roast: "#2C1D16",   // borders / hover surfaces
        caramel: "#E8A94D", // main accent
        cream: "#F6E7D2",   // text
        berry: "#D2506A",   // small highlights
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "30%": { opacity: ".55" },
          "100%": { opacity: "0", transform: "translateY(-90px) scaleX(1.8)" },
        },
        rise: { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "none" } },
        spin: { to: { transform: "rotate(360deg)" } },
        bump: { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.5)" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        glow: { "0%,100%": { opacity: ".35" }, "50%": { opacity: ".7" } },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        steam: "steam 3.5s ease-out infinite",
        rise: "rise .9s ease-out both",
        "spin-slow": "spin 22s linear infinite",
        bump: "bump .35s ease",
        shimmer: "shimmer 6s linear infinite",
        glow: "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};