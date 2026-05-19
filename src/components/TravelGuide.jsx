import { useState } from "react";
import { useDestination } from "../context/DestinationContext";

export default function TravelGuide() {
  const {
    travelGuideTitle,
    guideItems,
    guidePanelBg,
    guideIconBg,
  } = useDestination();
  const [active, setActive] = useState(guideItems[5]);

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">
            {travelGuideTitle}
          </h2>
        </div>
        <div className="grid min-h-[78vh] overflow-hidden rounded-[2rem] border border-brand/10 bg-white shadow-2xl lg:grid-cols-[290px_1fr]">
          <div className="space-y-3 border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
            {guideItems.map((item) => {
              const isActive = active.image === item.image;
              return (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setActive(item)}
                  className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isActive
                      ? "border-0 bg-gradient-to-r from-brand-darker to-brand-dark text-white"
                      : "border border-slate-200 bg-white"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${
                      isActive ? "bg-white/10" : guideIconBg
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold leading-tight ${
                        isActive ? "text-white" : "text-brand-darker"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${
                        isActive ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          <div
            className={`relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br ${guidePanelBg} p-5`}
          >
            <img
              src={active.image}
              alt={active.title}
              className="relative z-10 max-h-[72vh] w-auto max-w-full rounded-[1.5rem] border border-white/60 object-contain shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
