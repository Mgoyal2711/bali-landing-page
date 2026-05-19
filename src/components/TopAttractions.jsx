import { ATTRACTION_IMAGES } from "../data/packages";
const imgs = [...ATTRACTION_IMAGES, ...ATTRACTION_IMAGES];
export default function TopAttractions() {
  return (
    <section className="pt-2 pb-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center reveal"><h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">Top Attractions</h2></div>
        <div className="relative overflow-hidden w-full">
          <div className="top-attractions-slider flex gap-4">
            {imgs.map((src, i) => (<div key={`${src}-${i}`} className="attraction-card"><img src={src} alt="" loading="lazy" /></div>))}
          </div>
        </div>
      </div>
    </section>
  );
}
