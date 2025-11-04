import { PlayCircle } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "How to start organic farming at home",
    duration: "12:34",
    author: "Agri Tutor",
    thumb: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Using wet waste compost for vegetables",
    duration: "08:21",
    author: "GreenCycle",
    thumb: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Vermicomposting step-by-step guide",
    duration: "15:10",
    author: "SoilLife",
    thumb: "https://images.unsplash.com/photo-1591123120675-7c76b197bb30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Natural pest control for leafy greens",
    duration: "09:05",
    author: "Farm Guru",
    thumb: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Tutorials() {
  return (
    <section id="tutorials" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-green-900">Tutorials</h2>
        <p className="mt-1 text-green-800/70">Learn organic farming, composting, and best practices from the community.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((v) => (
          <article key={v.id} className="group overflow-hidden rounded-xl border border-green-100 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-video w-full overflow-hidden">
              <img src={v.thumb} alt={v.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <span className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white">{v.duration}</span>
              <PlayCircle className="absolute right-3 top-3 h-8 w-8 text-white/90 drop-shadow" />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="line-clamp-2 font-semibold text-green-900">{v.title}</h3>
              <p className="text-sm text-green-800/70">{v.author}</p>
              <button className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700">Watch</button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-green-800/60">Creators will be able to upload their videos here. Uploading and streaming will be enabled after backend setup.</p>
    </section>
  );
}
