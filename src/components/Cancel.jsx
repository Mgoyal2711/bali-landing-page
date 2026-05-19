export default function CancellationPolicy() {
  return (
    <div className="bg-slate-100 text-slate-900 overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[240px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
          alt="Hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-100"></div>

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">

          <div className="max-w-4xl">

            {/* BADGE */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">

              <span className="text-xs font-semibold text-white">
                Kingdom Of Holidays Policies
              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-3xl font-black leading-tight text-white md:text-5xl">

              Cancellation &
              <span className="text-yellow-300"> Refund </span>

              Policy

            </h1>

            {/* SUBTITLE */}
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-white/90 md:text-sm">

              Transparent policies for flight bookings, land packages,
              amendments and refunds for all travelers.

            </p>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <section className="px-4 pb-10 pt-6">

        <div className="mx-auto max-w-7xl">

          {/* IMPORTANT INFO */}
          <div className="mb-4 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:flex-row md:items-center">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#032b57] to-[#0b74c4] text-white">

              ⚠️

            </div>

            <div>

              <h2 className="text-xl font-black">
                Important Booking Information
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">

                Policies may vary depending on airline rules, supplier terms,
                festive seasons and promotional fares. Customers are advised
                to carefully review all cancellation, refund and amendment
                terms before confirming any booking.

              </p>

            </div>

          </div>

          {/* POLICY GRID */}
          <div className="grid gap-4 lg:grid-cols-2">

            {/* GROUP FARE */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white">

                  ✈️

                </div>

                <div>

                  <p className="text-[10px] font-bold tracking-[4px] text-red-500">
                    FLIGHT TICKETS
                  </p>

                  <h3 className="text-2xl font-black">
                    Group / Series Fare
                  </h3>

                </div>

              </div>

              <div className="space-y-3">

                <div className="rounded-2xl bg-red-50 p-4 text-sm leading-7 text-slate-700">
                  100% Non-Refundable, Non-Changeable & Non-Cancellable tickets.
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  Web check-in is not allowed for Group Fare tickets.
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  Flight tickets are issued 3–7 days before departure.
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  Only PNR will be shared initially.
                </div>

                <div className="rounded-2xl bg-yellow-50 p-4 text-sm leading-7 text-yellow-900">
                  Peak travel dates are strictly non-refundable.
                </div>

              </div>

            </div>

            {/* ONLINE FARE */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#032b57] to-[#0b74c4] text-white">

                  💳

                </div>

                <div>

                  <p className="text-[10px] font-bold tracking-[4px] text-blue-600">
                    FLIGHT TICKETS
                  </p>

                  <h3 className="text-2xl font-black">
                    Online Fare Policy
                  </h3>

                </div>

              </div>

              <div className="space-y-3">

                <div className="rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-slate-700">
                  Airline cancellation charges + ₹500 service fee per person.
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  Cancellation allowed up to 4 hours before departure.
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  International airlines may require 24 hours prior notice.
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  Refunds are processed as per airline rules.
                </div>

                <div className="rounded-2xl bg-green-50 p-4 text-sm leading-7 text-green-800">
                  Refunds are credited after airline approval.
                </div>

              </div>

            </div>

          </div>

          {/* LAND PACKAGE */}
          <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">

            <div className="bg-gradient-to-br from-[#032b57] to-[#0b74c4] px-5 py-4 text-white">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">

                  🗺️

                </div>

                <div>

                  <p className="text-[10px] font-bold tracking-[4px] text-cyan-200">
                    DOMESTIC & INTERNATIONAL
                  </p>

                  <h2 className="text-2xl font-black">
                    Land Package Cancellation
                  </h2>

                </div>

              </div>

            </div>

            {/* TABLE */}
            <div className="overflow-x-auto p-3">

              <table className="w-full rounded-xl overflow-hidden">

                <thead>

                  <tr className="bg-slate-100">

                    <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                      Cancellation Duration
                    </th>

                    <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                      Charges
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b border-slate-100">

                    <td className="px-4 py-3 text-sm font-medium">
                      Before 30 Days
                    </td>

                    <td className="px-4 py-3 text-sm text-slate-600">
                      50% of total package cost
                    </td>

                  </tr>

                  <tr className="border-b border-slate-100">

                    <td className="px-4 py-3 text-sm font-medium">
                      Before 15 Days
                    </td>

                    <td className="px-4 py-3 text-sm text-slate-600">
                      70% of total package cost
                    </td>

                  </tr>

                  <tr className="border-b border-slate-100">

                    <td className="px-4 py-3 text-sm font-medium">
                      Before 10 Days
                    </td>

                    <td className="px-4 py-3 text-sm text-slate-600">
                      90% of total package cost
                    </td>

                  </tr>

                  <tr className="bg-red-50">

                    <td className="px-4 py-3 text-sm font-bold text-red-700">
                      0–10 Days Before Arrival
                    </td>

                    <td className="px-4 py-3 text-sm font-bold text-red-700">
                      100% Cancellation Charges
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* NOTES */}
          <div className="mt-4 grid gap-4 lg:grid-cols-2">

            {/* NOTES */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">

              <div className="mb-3 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 text-white">

                  ✅

                </div>

                <h3 className="text-xl font-black">
                  Additional Notes
                </h3>

              </div>

              <p className="text-sm leading-7 text-slate-600">

                Flight tickets, travel insurance, hotels and third-party services
                follow their own cancellation and refund policies.

              </p>

            </div>

            {/* HOTEL */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">

              <div className="mb-3 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white">

                  🏨

                </div>

                <h3 className="text-xl font-black">
                  5-Star Hotel Policies
                </h3>

              </div>

              <p className="text-sm leading-7 text-slate-600">

                Luxury hotel cancellation policies may vary and will be shared
                separately wherever applicable.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#001B48] via-[#003B73] to-[#005B96] py-8 text-center text-white">

        <h3 className="text-2xl font-bold">
          Kingdom Of Holidays
        </h3>

        <p className="mt-2 text-sm text-white/75">
          Creating unforgettable travel memories.
        </p>

        <a
          href="/"
          className="mt-5 inline-block rounded-full bg-[#ffd166] px-7 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#ffca3a]"
        >
          Back To Home
        </a>

      </footer>

    </div>
  );
}