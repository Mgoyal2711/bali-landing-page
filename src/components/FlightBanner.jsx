// import { Plane } from "lucide-react";
// import { WHATSAPP } from "../data/packages";
// export default function FlightBanner() {
//   return (
//     <section className="px-4 pb-12 sm:px-6 lg:px-8">
//       <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand/15 bg-gradient-to-r from-brand-darker via-brand-dark to-slate-100 shadow-2xl">
//         <img src="/img/wavepage.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
//         <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/95 via-brand-dark/90 to-slate-50/85" />
//         <div className="relative flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:py-12 sm:px-10">
//           <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
//             <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white/10 shadow-lg ring-2 ring-white/20 md:flex"><Plane className="h-14 w-14 text-accent" /></div>
//             <div>
//               <h2 className="font-display text-2xl font-extrabold text-white sm:text-4xl">Flight Booking</h2>
//               <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-lg">Lock fares to Denpasar & beyond. Bundle flights with your land package for one itinerary, one support line.</p>
//             </div>
//           </div>
//           <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-travel-warm inline-flex w-full shrink-0 items-center justify-center rounded-2xl px-8 py-4 text-base font-extrabold text-brand-darker shadow-xl transition hover:scale-105 md:w-auto">Book Now</a>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Plane, ArrowRight } from "lucide-react";
// import { WHATSAPP } from "../data/packages";

// export default function FlightBanner() {
//   return (
//     <section className="px-4 pb-14 sm:px-6 lg:px-8">
//       <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#012247] via-[#06386d] to-[#b9d4eb] shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
        
//         {/* BACKGROUND OVERLAY */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

//         {/* AIRPLANE SHAPE */}
//         <div className="absolute right-10 top-0 hidden h-full w-[320px] opacity-[0.06] lg:block">
//           <Plane className="h-full w-full rotate-[20deg] text-white" />
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="relative flex flex-col gap-10 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 md:py-12">
          
//           {/* LEFT SIDE */}
//           <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            
//             {/* ICON */}
//             <div className="hidden h-36 w-36 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-xl ring-2 ring-white/10 backdrop-blur-xl md:flex">
//               <Plane className="h-16 w-16 text-yellow-400" />
//             </div>

//             {/* TEXT CONTENT */}
//             <div>
              
//               {/* TITLE */}
//               <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
//                 Flight{" "}
//                 <span className="text-yellow-400">
//                   Booking
//                 </span>
//               </h2>

//               {/* DESCRIPTION */}
//               <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-xl">
//                 Lock fares to Bangkok, Phuket & beyond.
//                 Bundle flights with your land package for
//                 one itinerary, one support line.
//               </p>

//               {/* OFFER STRIP */}
//               <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-[#073a54]/70 px-5 py-3 shadow-lg backdrop-blur-xl">
                
//                 <span className="text-xl">
//                   🏷️
//                 </span>

//                 <span className="text-lg font-extrabold text-yellow-400">
//                   Save 20%
//                 </span>

//                 <span className="text-base font-semibold text-white">
//                   upto ₹20,000 on your flight bookings!
//                 </span>
//               </div>

//               {/* AIRLINES */}
//               <div className="mt-7 flex flex-wrap items-center gap-3">
                
//                 {/* AIR INDIA */}
//                 <div className="rounded-xl bg-white px-4 py-2 shadow-lg">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Air_India_Logo.svg"
//                     alt="Air India"
//                     className="h-8 object-contain"
//                   />
//                 </div>

//                 {/* INDIGO */}
//                 <div className="rounded-xl bg-white px-4 py-2 shadow-lg">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/f/f8/IndiGo_Logo.svg"
//                     alt="IndiGo"
//                     className="h-8 object-contain"
//                   />
//                 </div>

//                 {/* SPICEJET */}
//                 <div className="rounded-xl bg-white px-4 py-2 shadow-lg">
//                   <img
//                     src="https://1000logos.net/wp-content/uploads/2021/04/SpiceJet-logo.png"
//                     alt="SpiceJet"
//                     className="h-8 object-contain"
//                   />
//                 </div>

//                 {/* AIR ASIA */}
//                 <div className="rounded-xl bg-white px-4 py-2 shadow-lg">
//                   <img
//                     src="https://1000logos.net/wp-content/uploads/2020/03/AirAsia-Logo.png"
//                     alt="Air Asia"
//                     className="h-8 object-contain"
//                   />
//                 </div>

//                 {/* SINGAPORE AIRLINES */}
//                 <div className="rounded-xl bg-white px-4 py-2 shadow-lg">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Singapore_Airlines_Logo_2.svg/2560px-Singapore_Airlines_Logo_2.svg.png"
//                     alt="Singapore Airlines"
//                     className="h-8 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BUTTON */}
//           <a
//             href={WHATSAPP}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex w-full items-center justify-center gap-3 rounded-[1.4rem] bg-yellow-400 px-10 py-5 text-lg font-extrabold text-[#012247] shadow-[0_15px_35px_rgba(255,193,7,0.35)] transition duration-300 hover:scale-105 hover:bg-yellow-300 md:w-auto"
//           >
//             Book Now
//             <ArrowRight className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Plane, ArrowRight } from "lucide-react";
// import { WHATSAPP } from "../data/packages";

// export default function FlightBanner() {
//   return (
//     <section className="px-4 pb-10 sm:px-6 lg:px-8">
//       <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.3rem] bg-gradient-to-r from-[#013c3d] via-[#0d5c63] to-[#8ac7c9] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
        
//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_35%)]" />

//         {/* AIRPLANE SHAPE */}
//         <div className="absolute right-10 top-0 hidden h-full w-[280px] opacity-[0.05] lg:block">
//           <Plane className="h-full w-full rotate-[18deg] text-white" />
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="relative flex flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          
//           {/* LEFT SIDE */}
//           <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            
//             {/* ICON */}
//             <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-lg ring-2 ring-white/10 backdrop-blur-xl md:flex">
//               <Plane className="h-12 w-12 text-yellow-400" />
//             </div>

//             {/* TEXT CONTENT */}
//             <div>
              
//               {/* TITLE */}
//               <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
//                 Flight{" "}
//                 <span className="text-yellow-400">
//                   Booking
//                 </span>
//               </h2>

//               {/* DESCRIPTION */}
//               <p className="mt-3 max-w-3xl text-sm leading-7 text-white/85 sm:text-lg">
//                 Lock fares to Bangkok, Phuket & beyond.
//                 Bundle flights with your land package
//                 for one itinerary, one support line.
//               </p>

//               {/* OFFER STRIP */}
//               <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-white/15 bg-[#084a50]/70 px-5 py-3 shadow-lg backdrop-blur-xl">
                
//                 <span className="text-lg">
//                   🏷️
//                 </span>

//                 <span className="text-lg font-extrabold text-yellow-400">
//                   Save 20%
//                 </span>

//                 <span className="text-sm font-semibold text-white sm:text-base">
//                   upto ₹20,000 on your flight bookings!
//                 </span>
//               </div>

//               {/* AIRLINES */}
//               <div className="mt-5 flex flex-wrap items-center gap-3">
                
//                 {/* AIR INDIA */}
//                 <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Air_India_Logo.svg/512px-Air_India_Logo.svg.png"
//                     alt="Air India"
//                     className="h-7 object-contain"
//                   />
//                 </div>

//                 {/* INDIGO */}
//                 <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/IndiGo_Logo.svg/512px-IndiGo_Logo.svg.png"
//                     alt="IndiGo"
//                     className="h-7 object-contain"
//                   />
//                 </div>

//                 {/* SPICEJET */}
//                 <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
//                   <img
//                     src="https://companieslogo.com/img/orig/SPICEJET.NS_BIG-9e44f36d.png?t=1720244492"
//                     alt="SpiceJet"
//                     className="h-7 object-contain"
//                   />
//                 </div>

//                 {/* AIR ASIA */}
//                 <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
//                   <img
//                     src="https://1000logos.net/wp-content/uploads/2020/03/AirAsia-Logo.png"
//                     alt="Air Asia"
//                     className="h-7 object-contain"
//                   />
//                 </div>

//                 {/* SINGAPORE AIRLINES */}
//                 <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Singapore_Airlines_Logo_2.svg/1280px-Singapore_Airlines_Logo_2.svg.png"
//                     alt="Singapore Airlines"
//                     className="h-7 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BUTTON */}
//           <a
//             href={WHATSAPP}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex w-full items-center justify-center gap-3 rounded-[1.3rem] bg-yellow-400 px-8 py-4 text-lg font-extrabold text-[#013c3d] shadow-[0_12px_30px_rgba(255,193,7,0.35)] transition duration-300 hover:scale-105 hover:bg-yellow-300 md:w-auto"
//           >
//             Book Now
//             <ArrowRight className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Plane, ArrowRight } from "lucide-react";
import { WHATSAPP } from "../data/packages";

export default function FlightBanner() {
  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.3rem] bg-gradient-to-r from-[#013c3d] via-[#0d5c63] to-[#8ac7c9] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
        
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_35%)]" />

        {/* AIRPLANE SHAPE */}
        <div className="absolute right-10 top-0 hidden h-full w-[280px] opacity-[0.05] lg:block">
          <Plane className="h-full w-full rotate-[18deg] text-white" />
        </div>

        {/* MAIN CONTENT */}
        <div className="relative flex flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            
            {/* ICON */}
            <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-lg ring-2 ring-white/10 backdrop-blur-xl md:flex">
              <Plane className="h-12 w-12 text-yellow-400" />
            </div>

            {/* TEXT */}
            <div>
              
              {/* TITLE */}
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Flight{" "}
                <span className="text-yellow-400">
                  Booking
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/85 sm:text-lg">
                Lock fares to Bangkok, Phuket & beyond.
                Bundle flights with your land package
                for one itinerary, one support line.
              </p>

              {/* OFFER */}
              <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-white/15 bg-[#084a50]/70 px-5 py-3 shadow-lg backdrop-blur-xl">
                
                <span className="text-lg">
                  🏷️
                </span>

                <span className="text-lg font-extrabold text-yellow-400">
                  Save 20%
                </span>

                <span className="text-sm font-semibold text-white sm:text-base">
                  upto ₹20,000 on your flight bookings!
                </span>
              </div>

              {/* AIRLINES */}
              <div className="mt-5 flex flex-wrap items-center gap-3">

                {/* AIR INDIA */}
                <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
                  <img
                    src="/img/airlines/airindia.png"
                    alt="Air India"
                    className="h-7 object-contain"
                  />
                </div>

                {/* INDIGO */}
                <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
                  <img
                    src="/img/airlines/indigo.png"
                    alt="IndiGo"
                    className="h-7 object-contain"
                  />
                </div>

                {/* SPICEJET */}
                <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
                  <img
                    src="/img/airlines/spicejet.png"
                    alt="SpiceJet"
                    className="h-7 object-contain"
                  />
                </div>

                {/* AIR ASIA */}
                <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
                  <img
                    src="/img/airlines/airasia.png"
                    alt="Air Asia"
                    className="h-7 object-contain"
                  />
                </div>

                {/* SINGAPORE AIRLINES */}
                <div className="flex h-14 items-center rounded-xl bg-white px-4 shadow-lg">
                  <img
                    src="/img/airlines/singapore.png"
                    alt="Singapore Airlines"
                    className="h-7 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-[1.3rem] bg-yellow-400 px-8 py-4 text-lg font-extrabold text-[#013c3d] shadow-[0_12px_30px_rgba(255,193,7,0.35)] transition duration-300 hover:scale-105 hover:bg-yellow-300 md:w-auto"
          >
            Book Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}