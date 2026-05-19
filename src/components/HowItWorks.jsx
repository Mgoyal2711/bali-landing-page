import { MapPinned, PlaneTakeoff, Luggage } from "lucide-react";
import { useDestination } from "../context/DestinationContext";

export default function HowItWorks() {
  const { howItWorksClosing } = useDestination();

  const steps = [
    {
      icon: MapPinned,
      title: "Enquire",
      text: "Share dates, budget and departure city. We instantly shape options around your style of travel.",
    },
    {
      icon: PlaneTakeoff,
      title: "Consult",
      text: "Travel experts refine hotels, flights, transfers and activities until the plan fits perfectly.",
    },
    {
      icon: Luggage,
      title: "Receive Confirmation",
      text: howItWorksClosing,
    },
  ];

  return (
    <section className="travel-art-bg-soft border-t border-slate-200 px-4 pt-2 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display reveal text-center text-3xl font-extrabold text-brand-darker sm:text-4xl">
          How It Works
        </h2>
        <p className="reveal mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Three simple steps from idea to confirmed holiday.
        </p>
        <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="how-card reveal rounded-3xl p-6 text-center sm:p-7">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-darker to-brand text-accent shadow-lg">
                <Icon className="h-9 w-9" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-brand-darker">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
