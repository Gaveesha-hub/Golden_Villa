// Replace image URLs with your own photos (put them in /public/images and use "/images/name.jpg").
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const categories = ["Bread", "Pastries", "Cakes", "Coffee"];

export const menuItems = [
    { id: 1, category: "Bread", name: "Sourdough Loaf", price: 8.5, desc: "36-hour ferment, crackly crust, soft tangy crumb.", image: img("photo-1509440159596-0249088772ff"), tag: "Best seller" },
    { id: 2, category: "Bread", name: "Seeded Multigrain", price: 7.0, desc: "Oats, flax and sunflower seeds in every slice.", image: img("photo-1549931319-a545dcf3bc73") },
    { id: 3, category: "Pastries", name: "Butter Croissant", price: 4.5, desc: "Laminated by hand into 27 flaky layers.", image: img("photo-1555507036-ab1f4038808a"), tag: "Fresh at 7am" },
    { id: 4, category: "Pastries", name: "Almond Danish", price: 5.0, desc: "Toasted almonds, frangipane and a light glaze.", image: img("photo-1509365465985-25d11c17e812") },
    { id: 5, category: "Cakes", name: "Chocolate Truffle Cake", price: 6.5, desc: "Dark chocolate ganache over moist cocoa sponge.", image: img("photo-1578985545062-69928b1d9587"), tag: "Customer favourite" },
    { id: 6, category: "Cakes", name: "Berry Cupcakes", price: 3.8, desc: "Vanilla sponge, whipped cream, fresh berries.", image: img("photo-1486427944299-d1955d23e34d") },
    { id: 7, category: "Coffee", name: "Signature Latte", price: 4.2, desc: "Double espresso, steamed milk, a hint of caramel.", image: img("photo-1495474472287-4d71bcdd2085"), tag: "House special" },
    { id: 8, category: "Coffee", name: "Iced Mocha", price: 4.8, desc: "Chocolate, espresso and cold milk over ice.", image: img("photo-1517701604599-bb29b565090c") },
];

export const testimonials = [
    { name: "Amaya P.", text: "The croissants are the reason I now wake up early on Saturdays. Still warm when I get them.", role: "Regular since 2023" },
    { name: "Rohan D.", text: "Ordered a birthday cake for my mum. It looked beautiful and tasted even better.", role: "Custom cake customer" },
    { name: "Sara L.", text: "Cosy corner, great latte, friendly staff. My favourite place to work from.", role: "Café regular" },
];