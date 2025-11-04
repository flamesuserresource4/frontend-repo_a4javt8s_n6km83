import { Leaf, ShoppingBasket } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: "₹80 / kg",
    type: "Produce",
    image: "https://images.unsplash.com/photo-1683008952458-dc02ac67f382?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcmVzaCUyMFRvbWF0b2VzfGVufDB8MHx8fDE3NjIyNTU4Mjd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    seller: "Farmer Meera",
  },
  {
    id: 2,
    name: "Wet Waste Compost",
    price: "₹350 / 10kg",
    type: "Compost",
    image: "https://images.unsplash.com/photo-1715025338873-6ada6288deaf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZXQlMjBXYXN0ZSUyMENvbXBvc3R8ZW58MHwwfHx8MTc2MjI1NTgyOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    seller: "GreenCycle Vendor",
  },
  {
    id: 3,
    name: "Organic Spinach",
    price: "₹40 / bunch",
    type: "Produce",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    seller: "Farmer Ravi",
  },
  {
    id: 4,
    name: "Vermi Compost",
    price: "₹450 / 10kg",
    type: "Compost",
    image: "https://images.unsplash.com/photo-1686579341853-2effa68407e1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZXJtaSUyMENvbXBvc3R8ZW58MHwwfHx8MTc2MjI1NTgzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    seller: "SoilLife Vendor",
  },
];

export default function Marketplace() {
  return (
    <section id="market" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-green-900">Marketplace</h2>
          <p className="mt-1 text-green-800/70">Buy farm-fresh produce and organic compost directly from trusted sellers.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700">
          <ShoppingBasket className="h-4 w-4" />
          Post a Listing
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-xl border border-green-100 bg-white shadow-sm transition hover:shadow-md">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-green-900">{item.name}</h3>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  item.type === "Compost" ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-lime-50 text-lime-700 ring-1 ring-lime-200"
                }`}>
                  {item.type}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="font-medium text-green-700">{item.price}</p>
                <p className="text-green-800/70">by {item.seller}</p>
              </div>
              <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700">
                <Leaf className="h-4 w-4" /> Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-green-800/60">Note: This is a demo preview. Listing, cart, and checkout will be connected to the backend in the next step.</p>
    </section>
  );
}
