import { useDestination } from "../context/DestinationContext";

const brands = [
  { img: "/our brands/koh logo.jpeg", name: "Kingdom of Holidays" },
  { img: "/our brands/explore andaman.png", name: "Explore Andaman" },
  { img: "/our brands/tour4.jpeg", name: "Tour4Holidays" },
];
export default function OurBrands() {
  const { brandsBlurb, brandsCardBg, brandsSectionBg } = useDestination();

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className={`absolute inset-0 bg-gradient-to-br ${brandsSectionBg}`} />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">Our Brands</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">{brandsBlurb}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {brands.map((b) => (
            <div key={b.name} className="group overflow-hidden rounded-[1.7rem] border border-brand/15 bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-xl">
              <div className={`overflow-hidden bg-gradient-to-br ${brandsCardBg} p-3`}>
                <img src={b.img} alt={b.name} className="h-[240px] w-full object-contain transition duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="px-5 pb-5 text-center"><h3 className="text-xl font-extrabold text-brand-darker">{b.name}</h3></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
