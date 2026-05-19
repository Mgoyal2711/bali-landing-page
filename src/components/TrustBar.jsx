import { Wand2, CalendarX2, ShieldCheck, CreditCard } from "lucide-react";
const items = [
  { icon: Wand2, title: "100% Customized Packages", desc: "Tailor-made itineraries", grad: "from-brand-darker to-brand" },
  { icon: CalendarX2, title: "Free Cancellation", desc: "Flexible booking support", grad: "from-brand-dark to-brand" },
  { icon: ShieldCheck, title: "Free Insurance", desc: "Safe & secure travel", grad: "from-brand to-brand-dark" },
  { icon: CreditCard, title: "No Cost EMI", desc: "Easy payment options", grad: "from-brand-darker to-brand-dark" },
];
export default function TrustBar() {
  return (
    <section className="travel-art-bg-soft border-y border-slate-200 py-10 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, title, desc, grad }) => (
          <div key={title} className="group relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-brand/25">
            <div className="relative flex items-center gap-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-lg transition duration-500 group-hover:scale-110`}>
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-darker">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
