import { Trash2, Plus, Minus } from "lucide-react";

export default function Cart({ items, onIncrement, onDecrement, onRemove, onClear }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <section id="cart" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-green-900">Your Cart</h2>
          <p className="mt-1 text-green-800/70">Review items and adjust quantities before checkout.</p>
        </div>
        {items.length > 0 && (
          <button onClick={onClear} className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-200 hover:bg-red-100">Clear cart</button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border border-green-100 bg-white p-6 text-green-800/80 shadow-sm">Your cart is empty. Add some fresh produce or compost from the marketplace.</div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.map((it) => (
              <div key={it.id} className="flex items-center gap-4 rounded-xl border border-green-100 bg-white p-4 shadow-sm">
                <img src={it.image} alt={it.name} className="h-20 w-24 rounded-md object-cover" />
                <div className="flex-1">
                  <p className="font-medium text-green-900">{it.name}</p>
                  <p className="text-sm text-green-800/70">{it.type}</p>
                  <p className="mt-1 font-semibold text-green-700">₹{it.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button aria-label="Decrease" onClick={() => onDecrement(it.id)} className="inline-flex items-center justify-center rounded-md bg-green-50 p-2 text-green-700 ring-1 ring-green-200 hover:bg-green-100"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center font-semibold text-green-900">{it.qty}</span>
                  <button aria-label="Increase" onClick={() => onIncrement(it.id)} className="inline-flex items-center justify-center rounded-md bg-green-50 p-2 text-green-700 ring-1 ring-green-200 hover:bg-green-100"><Plus className="h-4 w-4" /></button>
                </div>
                <button aria-label="Remove" onClick={() => onRemove(it.id)} className="ml-2 inline-flex items-center justify-center rounded-md bg-red-50 p-2 text-red-700 ring-1 ring-red-200 hover:bg-red-100"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-xl border border-green-100 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-green-900">Order Summary</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-green-800/80">Items</span>
                <span className="font-medium text-green-900">{items.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-800/80">Subtotal</span>
                <span className="font-semibold text-green-900">₹{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button disabled className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 font-semibold text-white opacity-80 hover:bg-green-700 disabled:cursor-not-allowed">Checkout (coming soon)</button>
            <p className="mt-2 text-xs text-green-800/60">Secure checkout will be enabled after authentication and payments are set up.</p>
          </aside>
        </div>
      )}
    </section>
  );
}
