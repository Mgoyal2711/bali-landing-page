import {
  ShieldCheck,
  AlertTriangle,
  Wallet,
  Ticket,
  Plane,
  Hotel,
  Waves,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <div className="overflow-x-hidden bg-[#f4f7fb]">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
          alt="Terms & Conditions"
          className="h-[330px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-5">

          <div className="max-w-4xl text-center text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">

              <ShieldCheck className="h-4 w-4 text-[#FFD166]" />

              Kingdom Of Holidays Policies

            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

              Terms &{" "}

              <span className="text-[#FFD166]">
                Conditions
              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">

              Please read all terms carefully before confirming any booking
              with Kingdom Of Holidays. These policies are applicable for
              Domestic & International travel packages, flights, hotels,
              transfers and activities.

            </p>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <section className="relative z-10 -mt-10 px-4 pb-16">

        <div className="mx-auto max-w-7xl space-y-7">

          {/* IMPORTANT */}
          <div className="rounded-[30px] bg-white/90 p-6 shadow-xl backdrop-blur-xl">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#001B48] text-white shadow-lg">

                <AlertTriangle className="h-8 w-8" />

              </div>

              <div className="flex-1">

                <h2 className="text-2xl font-extrabold text-[#001B48]">
                  Important Booking Information
                </h2>

                <p className="mt-3 text-sm leading-8 text-slate-600">

                  Policies may vary depending on airline rules,
                  supplier terms, festive seasons, promotional fares
                  and availability. Customers are advised to carefully
                  review all booking, cancellation, refund and amendment
                  policies before making payment.

                </p>

              </div>

            </div>

          </div>

          {/* GRID */}
          <div className="grid gap-7 lg:grid-cols-2">

            {/* BOOKING */}
            <div className="rounded-[28px] bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-1">

              <div className="mb-5 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0077B6]">

                  <Wallet className="h-7 w-7" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-[4px] text-[#0077B6]">
                    Booking Policy
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#001B48]">
                    Payments & Installments
                  </h3>

                </div>

              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-700">

                {[
                  "Flight amount is 100% payable at booking time.",
                  "Land package booking requires ₹30,000 advance OR 50% payment.",
                  "Remaining balance must be cleared 25 days before departure.",
                  "Domestic packages require full payment 15 days before travel.",
                  "International packages require full payment 21 days before travel.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-50 p-4"
                  >
                    {item}
                  </div>
                ))}

                <div className="rounded-2xl bg-yellow-50 p-4">
                  Airfare is subject to change due to airline fare fluctuations.
                </div>

              </div>

            </div>

            {/* DOCUMENTS */}
            <div className="rounded-[28px] bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-1">

              <div className="mb-5 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                  <Ticket className="h-7 w-7" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-[4px] text-emerald-600">
                    Travel Documents
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#001B48]">
                    Vouchers & Confirmation
                  </h3>

                </div>

              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-700">

                {[
                  "Travel vouchers are shared within 3-5 working days.",
                  "Initial itineraries are tentative and may change.",
                  "Passport copies and ID proofs are mandatory.",
                  "PAN Card is mandatory as per RBI guidelines.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-50 p-4"
                  >
                    {item}
                  </div>
                ))}

                <div className="rounded-2xl bg-red-50 p-4">
                  Only written communication over WhatsApp or Email will be valid.
                </div>

              </div>

            </div>

          </div>

          {/* FLIGHTS */}
          <div className="rounded-[30px] bg-white p-7 shadow-xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">

                <Plane className="h-8 w-8" />

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[4px] text-red-500">
                  Flights
                </p>

                <h2 className="text-3xl font-extrabold text-[#001B48]">
                  Flight Booking Terms
                </h2>

              </div>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {[
                "Flights are subject to airline rules and baggage policy.",
                "Airlines may reroute or reschedule flights.",
                "Kingdom Of Holidays is not liable for airline issues.",
                "Customers must verify passenger details before departure.",
                "Child age: 2–12 years. Infant: below 24 months.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}

              <div className="rounded-2xl bg-yellow-50 p-5 text-sm leading-7 text-slate-700">
                Covid restrictions or government rules may affect bookings.
              </div>

            </div>

          </div>

          {/* HOTEL TERMS */}
          <div className="rounded-[30px] bg-white p-7 shadow-xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#001B48] to-[#0077B6] text-white">

                <Hotel className="h-8 w-8" />

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[4px] text-[#0077B6]">
                  Land Packages
                </p>

                <h2 className="text-3xl font-extrabold text-[#001B48]">
                  Hotel & Tour Terms
                </h2>

              </div>

            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Prices are based on twin/quad sharing basis.",
                "Maximum 4 adults allowed in one room.",
                "Extra guest will receive mattress or extra bed.",
                "Laundry, minibar and tips are excluded.",
                "Alternate hotels may be provided if unavailable.",
                "Transportation operates only as per itinerary.",
                "Drivers may switch off AC during hill drives.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}

              <div className="rounded-2xl bg-yellow-50 p-5 text-sm leading-7 text-slate-700">
                GST/TCS charges are extra as applicable.
              </div>

              <div className="rounded-2xl bg-red-50 p-5 text-sm leading-7 text-slate-700">
                Force majeure events may result in itinerary changes.
              </div>

            </div>

          </div>

          {/* WATER SPORTS */}
          <div className="rounded-[30px] bg-white p-7 shadow-xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">

                <Waves className="h-8 w-8" />

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[4px] text-cyan-600">
                  Activities
                </p>

                <h2 className="text-3xl font-extrabold text-[#001B48]">
                  Water Sports Terms
                </h2>

              </div>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {[
                "Activities depend completely on weather conditions.",
                "No refund for weather-related activity cancellations.",
                "Kids below 8 years are not allowed for water sports.",
                "Children 8-12 years may be denied activity based on criteria.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}

              <div className="rounded-2xl bg-red-50 p-5 text-sm leading-7 text-slate-700 md:col-span-2">

                Water sports are prohibited under influence of alcohol or drugs.

              </div>

            </div>

          </div>

          {/* FOOTER NOTE */}
          <div className="rounded-[30px] bg-[#001B48] px-8 py-7 text-center text-white shadow-2xl">

            <h3 className="text-2xl font-extrabold">
              Need Help Regarding Policies?
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/80">

              For detailed clarification regarding booking,
              refunds or cancellation terms, contact
              Kingdom Of Holidays support team before payment.

            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-10 bg-[#031633] px-4 py-10 text-center text-white">

        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Kingdom Of Holidays
        </h2>

        <p className="mt-2 text-sm text-white/70 sm:text-base">
          Creating unforgettable travel memories.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

          <Link
            to="/"
            className="rounded-full bg-[#FFD166] px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
          >
            Back To Home
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>

        </div>

      </footer>

    </div>
  );
}