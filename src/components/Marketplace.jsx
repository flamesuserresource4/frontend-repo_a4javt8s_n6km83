import { Leaf, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";

export default function Marketplace({ onAddToCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL;
        const res = await fetch(`${base}/api/products`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        // Map to UI-friendly shape
        const mapped = data.map((p) => ({
          id: p._id || p.id,
          name: p.title || p.name,
          price: typeof p.price === "number" ? p.price : Number(String(p.price).replace(/[^0-9.]/g, "")) || 0,
          unit: p.unit || "",
          type: p.category || p.type || "Produce",
          image: p.image_url || p.image || "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
          seller: p.seller_name || p.seller || "",
          location: p.location || "",
        }));
        setProducts(mapped);
      } catch (e) {
        setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

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

      {loading ? (
        <div className="rounded-xl border border-green-100 bg-white p-6 text-green-800/80 shadow-sm">Loading products…</div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">{error}</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-xl border border-green-100 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="line-clamp-1 font-semibold text-green-900">{item.name}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    item.type?.toLowerCase() === "compost" ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-lime-50 text-lime-700 ring-1 ring-lime-200"
                  }`}>
                    {item.type}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium text-green-700">₹{item.price.toFixed(2)} {item.unit && <span className="text-green-800/70">/ {item.unit}</span>}</p>
                  <p className="text-green-800/70">{item.seller}</p>
                </div>
                <button onClick={() => onAddToCart(item)} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700">
                  <Leaf className="h-4 w-4" /> Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-green-800/60">Tip: Click the cart icon in the header or scroll to the cart section to review your items.</p>
    </section>
  );
}
