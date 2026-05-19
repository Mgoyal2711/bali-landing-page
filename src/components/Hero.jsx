import { MapPin } from "lucide-react";
import { useEnquiry } from "../context/EnquiryContext";
import { useDestination } from "../context/DestinationContext";

export default function Hero() {
  const { openEnquiry } = useEnquiry();
  const { hero, reviews } = useDestination();
  const doubled = [...reviews, ...reviews];

  return (
    <section className="relative isolate flex min-h-[70vh] flex-col justify-center overflow-hidden px-4 pb-12 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8">

      <img
        src={hero.image}
        alt={hero.alt}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      <div className={`absolute inset-0 -z-10 ${hero.overlay}`} />
      <div className={`pointer-events-none absolute inset-0 -z-10 ${hero.glow}`} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

        <div className="w-full max-w-3xl">

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2.5 text-sm font-semibold text-[#0A1B3D] shadow-2xl backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="h-4 w-4">
              <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.1 3.55-5.19 3.55-8.65z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.88-3c-1.08.73-2.47 1.17-4.05 1.17-3.11 0-5.74-2.1-6.68-4.92H1.32v3.08A12 12 0 0 0 12 24z" />
              <path fill="#FBBC05" d="M5.32 14.35A7.2 7.2 0 0 1 4.95 12c0-.82.14-1.62.37-2.35V6.57H1.32a12 12 0 0 0 0 10.86l4-3.08z" />
              <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.59 1.79l3.45-3.45A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.32 6.57l4 3.08c.94-2.82 3.57-4.88 6.68-4.88z" />
            </svg>
            <span>⭐ 4.7/5 Google Rating</span>
          </div>

          <p className="mb-2 mt-4 inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:text-sm">
            <MapPin className="mr-1.5 h-4 w-4" />
            {hero.locations}
          </p>

          <h1 className="mt-5 max-w-3xl font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-white sm:text-lg">
            {hero.subtitle}{" "}
            <span className="font-bold text-white">Guaranteed Best Price</span>
          </p>

          <div className="mt-5 flex flex-wrap items-end gap-4">
            <div className="w-full max-w-[340px] rounded-2xl bg-white px-5 py-4 shadow-2xl ring-1 ring-white/30">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Land Only
                </span>
                <span className="text-lg text-slate-400 line-through">₹25,800</span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-extrabold text-[#071B3B]">₹23,500</span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${hero.emiBadge}`}>
                  No Cost EMI
                </span>
              </div>

              <button
                type="button"
                onClick={openEnquiry}
                className={`mt-4 w-full rounded-xl bg-gradient-to-r ${hero.ctaGradient} px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                Send Us Quotes
              </button>
            </div>
          </div>
        </div>

        <div className="review-fade relative mt-4 h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[520px] lg:w-[380px]">
          <div className="review-track flex flex-col gap-5">
            {doubled.map((r, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=random`}
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                    alt={r.name}
                  />
                  <div>
                    <h4 className="text-lg font-bold">{r.name}</h4>
                    <p className="text-sm text-white/70">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-white/90">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
