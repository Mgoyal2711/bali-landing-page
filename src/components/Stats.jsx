import { Users, Map, Award } from "lucide-react";
import { useDestination } from "../context/DestinationContext";

export default function Stats() {
  const { statsHighlight } = useDestination();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-darker via-brand-dark to-brand-darker px-4 section-gap text-white sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-3">
        <div className="flex flex-col items-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent"><Users className="h-6 w-6" /></span>
          <p className="font-display text-4xl font-extrabold sm:text-5xl">1 Lac+</p>
          <p className="mt-2 text-sm font-semibold uppercase text-white/80">Travelers</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent"><Map className="h-6 w-6" /></span>
          <p className="font-display text-4xl font-extrabold sm:text-5xl">150+</p>
          <p className="mt-2 text-sm font-semibold uppercase text-white/80">Itineraries</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent"><Award className="h-6 w-6" /></span>
          <p className="font-display text-xl font-bold sm:text-3xl">{statsHighlight}</p>
          <p className="mt-2 text-sm text-white/75">Specialist-crafted routes & local tie-ups</p>
        </div>
      </div>
    </section>
  );
}
