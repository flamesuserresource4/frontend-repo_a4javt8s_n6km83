import { Leaf, ShoppingCart, Video, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-xl font-semibold text-green-900">FarmConnect</span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#market" className="text-sm font-medium text-green-900/80 hover:text-green-900">Market</a>
            <a href="#tutorials" className="text-sm font-medium text-green-900/80 hover:text-green-900">Tutorials</a>
            <a href="#community" className="text-sm font-medium text-green-900/80 hover:text-green-900">Community</a>
            <a href="#market" className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Get Started</a>
          </div>
        </nav>

        <div className="mt-12 grid items-center gap-10 sm:mt-16 sm:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600" />
              Learn, sell and innovate
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-green-900 sm:text-5xl">
              Connect farmers, compost vendors, and learners in one place
            </h1>
            <p className="mt-4 max-w-prose text-green-800/80">
              FarmConnect is a hub for farm-fresh produce, organic inputs like wet waste compost, and hands-on tutorials for sustainable agriculture.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#market" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-white shadow-sm hover:bg-green-700">
                <ShoppingCart className="h-5 w-5" />
                Explore Market
              </a>
              <a href="#tutorials" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-green-700 ring-1 ring-green-600/20 hover:ring-green-600/30">
                <Video className="h-5 w-5" />
                Watch Tutorials
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-green-800/80">
              <div className="inline-flex items-center gap-2"><ShoppingCart className="h-4 w-4" /> Sell farm produce</div>
              <div className="inline-flex items-center gap-2"><Leaf className="h-4 w-4" /> Buy organic compost</div>
              <div className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Join community</div>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto aspect-[4/3] w-full max-w-md rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
              <div className="grid h-full grid-cols-3 grid-rows-3 gap-2">
                <div className="col-span-2 row-span-2 rounded-lg bg-green-100" />
                <div className="rounded-lg bg-emerald-100" />
                <div className="rounded-lg bg-lime-100" />
                <div className="rounded-lg bg-green-50" />
                <div className="col-span-2 rounded-lg bg-emerald-50" />
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden rotate-6 rounded-xl border border-green-200 bg-white/70 p-3 backdrop-blur md:block">
              <div className="flex items-center gap-2 text-sm text-green-900"><Leaf className="h-4 w-4" /> Organic ready</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
