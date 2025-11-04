import { MessageCircle, Send } from "lucide-react";

const MESSAGES = [
  { id: 1, name: "Ravi (Farmer)", text: "Any tips for composting kitchen peels faster?" },
  { id: 2, name: "Priya (Vendor)", text: "Add dry leaves with peels 2:1 and keep moisture balanced." },
  { id: 3, name: "Meera (Farmer)", text: "My tomatoes improved after using vermicompost!" },
];

export default function Community() {
  return (
    <section id="community" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-green-900">Community</h2>
          <p className="mt-1 text-green-800/70">Chat with farmers, vendors and learners. Share tips and learn together.</p>
        </div>
        <a href="#" className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Open Dashboard</a>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-green-100 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2 text-green-900">
            <MessageCircle className="h-5 w-5" /> Live Chat Preview
          </div>
          <div className="h-64 space-y-3 overflow-y-auto rounded-lg bg-green-50 p-3">
            {MESSAGES.map((m) => (
              <div key={m.id} className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-black/5">
                <p className="text-xs font-medium text-green-700">{m.name}</p>
                <p className="text-sm text-green-900/90">{m.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <input disabled placeholder="Type a message (coming soon)" className="flex-1 rounded-lg border border-green-200 bg-white/60 px-3 py-2 text-sm text-green-900 placeholder:text-green-800/60 focus:outline-none disabled:cursor-not-allowed" />
            <button disabled className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white opacity-60"><Send className="h-4 w-4" /> Send</button>
          </div>
          <p className="mt-2 text-xs text-green-800/60">Community messaging will be real-time after backend integration.</p>
        </div>

        <div className="rounded-xl border border-green-100 bg-gradient-to-br from-emerald-50 to-lime-50 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-green-900">What you can do</h3>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-green-800/80">
            <li>Ask questions and get help from the community</li>
            <li>Share your organic farming tutorials and tips</li>
            <li>Coordinate bulk orders with local farmers and vendors</li>
          </ul>
          <a href="#market" className="mt-4 inline-block rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800">Start by exploring the market</a>
        </div>
      </div>
    </section>
  );
}
