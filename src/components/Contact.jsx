// export default function ContactUs() {
//   return (
//     <div className="bg-[#eef4f8] text-slate-800 overflow-x-hidden">

//       {/* HERO */}

//       <section className="relative h-[30vh] overflow-hidden">

//         {/* BG */}

//         <img
//           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
//           alt="Hero"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* OVERLAY */}

//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

//         {/* CONTENT */}

//         <div className="relative z-10 flex h-full items-center justify-center px-4">

//           <div className="text-center text-white">

//             <p className="mb-2 text-[11px] font-semibold uppercase tracking-[4px] text-yellow-300">
//               Kingdom Of Holidays
//             </p>

//             <h1 className="text-4xl font-extrabold md:text-5xl">
//               Contact Us
//             </h1>

//             <p className="mt-2 text-sm text-white/90">
//               We’re here to help you plan your perfect journey.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* CONTACT INFO */}

//       <section className="bg-gradient-to-b from-[#eef4f8] to-[#f8fbfd] px-4 py-8">

//         <div className="mx-auto max-w-6xl">

//           {/* HEADING */}

//           <div className="text-center">

//             <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#003459]">
//               Keep In Touch
//             </p>

//             <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
//               Get In Touch With Us
//             </h2>

//           </div>

//           {/* CARDS */}

//           <div className="mt-8 grid gap-5 md:grid-cols-3">

//             {/* PHONE */}

//             <div className="rounded-[1.5rem] border border-white bg-white/80 p-5 text-center shadow-md backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">

//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#003459]/10 text-[#003459]">

//                 <span className="text-xl">📞</span>

//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Phone Number
//               </h3>

//               <div className="mt-3 space-y-1 text-sm leading-7 text-slate-600">

//                 <p>+91 99716 00663</p>

//                 <p>+91 95990 80357</p>

//                 <p>+91 85090 52597</p>

//               </div>

//             </div>

//             {/* EMAIL */}

//             <div className="rounded-[1.5rem] border border-white bg-white/80 p-5 text-center shadow-md backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">

//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#003459]/10 text-[#003459]">

//                 <span className="text-xl">✉️</span>

//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Email Address
//               </h3>

//               <div className="mt-3 text-sm leading-7 text-slate-600">

//                 <p>info@kingdomofholidays.com</p>

//               </div>

//             </div>

//             {/* LOCATION */}

//             <div className="rounded-[1.5rem] border border-white bg-white/80 p-5 text-center shadow-md backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">

//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#003459]/10 text-[#003459]">

//                 <span className="text-xl">📍</span>

//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Locations
//               </h3>

//               <div className="mt-3 text-sm leading-7 text-slate-600">

//                 <p>
//                   SHOPPER SQUARE MALL - 1ST FLOOR,
//                   SNO4 14/8 RAJ NAGAR DELHI NCR GZB - 201002
//                 </p>

//                 <p className="mt-2">
//                   Nayansh Complex, near Durga Mandir,
//                   opp Animal Husbandry, Dollygunj,
//                   Sri Vijaya Puram,
//                   Andaman & Nicobar Islands - 744103
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* MAP */}

//       <section className="bg-gradient-to-b from-[#f8fbfd] to-[#eef4f8] px-4 pb-8">

//         <div className="mx-auto max-w-6xl">

//           <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-xl">

//             {/* TOP */}

//             <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">

//               <div>

//                 <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#003459]">
//                   Find Us
//                 </p>

//                 <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
//                   Visit Our Office
//                 </h2>

//               </div>

//               {/* BUTTON */}

//               <a
//                 href="https://www.google.com/maps"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center rounded-full bg-[#003459] px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105"
//               >

//                 Open In Google Maps

//               </a>

//             </div>

//             {/* MAP */}

//             <iframe
//               src="https://maps.google.com/maps?q=SHOPPER%20SQUARE%20MALL%20RAJ%20NAGAR%20GHAZIABAD&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               className="h-[320px] w-full border-0"
//               loading="lazy"
//               title="Google Map"
//             ></iframe>

//           </div>

//         </div>

//       </section>

//       {/* FOOTER */}

//       <footer className="bg-[#0a192f] py-6 text-center text-white">

//         <h3 className="text-xl font-bold">
//           Kingdom Of Holidays
//         </h3>

//         <p className="mt-2 text-xs text-white/70">
//           Creating unforgettable travel memories.
//         </p>

//         <a
//           href="/"
//           className="mt-5 inline-block rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-black transition hover:scale-105"
//         >

//           Back To Home

//         </a>

//       </footer>

//     </div>
//   );
// }

export default function ContactUs() {
  return (
    <div className="overflow-x-hidden bg-[#f5f9fc] text-slate-800">

      {/* HERO */}
      <section className="relative h-[36vh] overflow-hidden">

        {/* BG */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* WEBSITE THEME OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B4E]/90 via-[#003566]/70 to-[#0077B6]/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">

          <div className="text-center text-white">

            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[5px] text-[#FFD166]">
              Kingdom Of Holidays
            </p>

            <h1 className="text-4xl font-extrabold md:text-5xl">
              Contact Us
            </h1>

            <p className="mt-3 text-sm text-white/90 md:text-base">
              We’re here to help you plan your perfect journey.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT INFO */}
      <section className="bg-gradient-to-b from-[#f5f9fc] to-white px-4 py-14">

        <div className="mx-auto max-w-6xl">

          {/* HEADING */}
          <div className="text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#0077B6]">
              KEEP IN TOUCH
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#001B4E] md:text-4xl">
              Get In Touch With Us
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8]"></div>

          </div>

          {/* CARDS */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* PHONE */}
            <div className="rounded-[2rem] border border-[#dceefd] bg-white p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] text-3xl text-white shadow-lg">
                📞
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#001B4E]">
                Phone Number
              </h3>

              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">

                <p>+91 99716 00663</p>
                <p>+91 95990 80357</p>
                <p>+91 85090 52597</p>

              </div>

            </div>

            {/* EMAIL */}
            <div className="rounded-[2rem] border border-[#dceefd] bg-white p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] text-3xl text-white shadow-lg">
                ✉️
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#001B4E]">
                Email Address
              </h3>

              <div className="mt-4 text-sm leading-7 text-slate-600">

                <p>info@kingdomofholidays.com</p>

              </div>

            </div>

            {/* LOCATION */}
            <div className="rounded-[2rem] border border-[#dceefd] bg-white p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] text-3xl text-white shadow-lg">
                📍
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#001B4E]">
                Locations
              </h3>

              <div className="mt-4 text-sm leading-7 text-slate-600">

                <p>
                  SHOPPER SQUARE MALL - 1ST FLOOR,
                  SNO4 14/8 RAJ NAGAR DELHI NCR GZB - 201002
                </p>

                <p className="mt-3">
                  Nayansh Complex, near Durga Mandir,
                  opp Animal Husbandry, Dollygunj,
                  Sri Vijaya Puram,
                  Andaman & Nicobar Islands - 744103
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="bg-gradient-to-b from-white to-[#f5f9fc] px-4 pb-14">

        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-[2rem] border border-[#dceefd] bg-white shadow-2xl">

            {/* TOP */}
            <div className="flex flex-col gap-5 border-b border-slate-200 p-7 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#0077B6]">
                  FIND US
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-[#001B4E]">
                  Visit Our Office
                </h2>

              </div>

              {/* BUTTON */}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#001B4E] to-[#0077B6] px-7 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-105"
              >
                Open In Google Maps
              </a>

            </div>

            {/* MAP */}
            <iframe
              src="https://maps.google.com/maps?q=SHOPPER%20SQUARE%20MALL%20RAJ%20NAGAR%20GHAZIABAD&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[340px] w-full border-0"
              loading="lazy"
              title="Google Map"
            ></iframe>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#001B4E] via-[#003566] to-[#005B96] py-9 text-center text-white">

        <h3 className="text-2xl font-bold">
          Kingdom Of Holidays
        </h3>

        <p className="mt-2 text-sm text-white/75">
          Creating unforgettable travel memories.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-[#FFD166] px-7 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#ffca3a]"
        >

          Back To Home

        </a>

      </footer>

    </div>
  );
}