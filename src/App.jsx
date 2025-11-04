import { useCallback, useMemo, useState } from "react";
import Header from "./components/Header";
import Marketplace from "./components/Marketplace";
import Tutorials from "./components/Tutorials";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price || 0,
          image: item.image,
          type: item.type || "",
          qty: 1,
        },
      ];
    });
  }, []);

  const increment = useCallback((id) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))), []);
  const decrement = useCallback(
    (id) =>
      setCart((prev) =>
        prev
          .map((p) => (p.id === id ? { ...p, qty: Math.max(0, p.qty - 1) } : p))
          .filter((p) => p.qty > 0)
      ),
    []
  );
  const removeItem = useCallback((id) => setCart((prev) => prev.filter((p) => p.id !== id)), []);
  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = useMemo(() => cart.reduce((n, it) => n + it.qty, 0), [cart]);

  return (
    <div className="min-h-screen bg-white font-inter text-green-900">
      <Header cartCount={cartCount} />
      <main>
        <Marketplace onAddToCart={addToCart} />
        <Cart items={cart} onIncrement={increment} onDecrement={decrement} onRemove={removeItem} onClear={clearCart} />
        <Tutorials />
      </main>
      <footer className="border-t border-green-100 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-green-800/70">
          <p className="font-medium text-green-900">FarmConnect</p>
          <p className="mt-1">Learn, sell and innovate — connecting farmers, compost vendors, and learners.</p>
          <p className="mt-2">© {new Date().getFullYear()} FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
