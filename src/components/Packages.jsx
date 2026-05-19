// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useEnquiry } from "../context/EnquiryContext";
// import { useDestination } from "../context/DestinationContext";

// function PackageCard({ src, idx }) {
//   const { openEnquiry } = useEnquiry();
//   const { whatsapp, name } = useDestination();

//   return (
//     <article className="group relative w-[420px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/50 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">

//       {/* Image */}
//       <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">

//         <img
//           src={src}
//           alt={`${name} package ${idx + 1}`}
//           loading="lazy"
//           decoding="async"
//           className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Bottom Content */}
//       <div className="border-t border-brand/20 bg-white p-4">

//         <h4 className="mb-3 text-sm font-bold text-brand-darker">
//           Package Inclusions
//         </h4>

//         <div className="grid grid-cols-4 gap-3 text-center text-[11px] font-semibold text-slate-700">

//           <div>
//             <div className="text-4xl">🚘</div>
//             Transfers
//           </div>

//           <div>
//             <div className="text-4xl">🏩</div>
//             Hotels
//           </div>

//           <div>
//             <div className="text-4xl">🍷</div>
//             Meals
//           </div>

//           <div>
//             <div className="text-4xl">🏝️</div>
//             Sightseeing
//           </div>

//         </div>

//         {/* Buttons */}
//         <div className="mt-5 grid grid-cols-2 gap-3">

//           <button
//             type="button"
//             onClick={openEnquiry}
//             className="rounded-xl bg-brand-darker px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
//           >
//             ENQUIRE NOW
//           </button>

//           <a
//             href={whatsapp}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center rounded-xl bg-[#32b255] px-4 py-3 text-sm font-bold text-white transition hover:brightness-105"
//           >
//             WHATSAPP NOW
//           </a>

//         </div>
//       </div>
//     </article>
//   );
// }

// export default function Packages() {
//   const {
//     name,
//     categories,
//     packageImages,
//     packages: packagesCopy,
//   } = useDestination();

//   const [active, setActive] = useState(categories[0]);
//   const [loading, setLoading] = useState(false);

//   const gridRef = useRef(null);

//   useEffect(() => {

//     setLoading(true);

//     const t = setTimeout(() => setLoading(false), 300);

//     return () => clearTimeout(t);

//   }, [active]);

//   const scroll = (dir) => {

//     const el = gridRef.current;

//     if (!el) return;

//     el.scrollBy({
//       left: dir * 440,
//       behavior: "smooth",
//     });

//   };

//   const images = packageImages[active] || [];

//   return (
//     <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">

//       <div className="mx-auto max-w-7xl">

//         {/* Heading */}
//         <div className="reveal mb-8 text-center">

//           <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-darker sm:text-4xl">
//             {packagesCopy.title}
//           </h2>

//           <p className="fire-text mx-auto mt-3 max-w-3xl">
//             {packagesCopy.subtitle}{" "}
//             <span>Couples</span>,{" "}
//             <span>Friends</span>,{" "}
//             <span>Families</span> &{" "}
//             <span>Honeymoon Travelers</span>
//           </p>

//         </div>

//         {/* Tabs */}
//         <div className="glass-panel reveal mb-8 flex flex-wrap justify-center gap-3 rounded-2xl p-4 shadow-card">

//           {categories.map((cat) => (

//             <button
//               key={cat}
//               type="button"
//               onClick={() => setActive(cat)}
//               className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
//                 active === cat
//                   ? "btn-travel-gradient border-brand/40 text-white shadow-lg"
//                   : "border-brand/25 bg-white text-brand-darker hover:border-brand/40 hover:bg-slate-50"
//               }`}
//             >

//               {cat}

//             </button>

//           ))}

//         </div>

//         {/* Slider */}
//         <div className="reveal relative">

//           {/* LEFT ARROW */}
//           <button
//             type="button"
//             onClick={() => scroll(-1)}
//             className="btn-travel-gradient absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium md:flex"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>

//           {/* CARDS */}
//           <div
//             ref={gridRef}
//             className="slider-track flex gap-5 overflow-x-auto rounded-2xl px-3 pb-2"
//           >

//             {loading ? (

//               <>
//                 <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
//                 <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
//                 <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
//               </>

//             ) : (

//               images.map((src, idx) => (

//                 <PackageCard
//                   key={src}
//                   src={src}
//                   idx={idx}
//                 />

//               ))

//             )}

//           </div>

//           {/* RIGHT ARROW */}
//           <button
//             type="button"
//             onClick={() => scroll(1)}
//             className="btn-travel-gradient absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium md:flex"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }

// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useEnquiry } from "../context/EnquiryContext";
// import { useDestination } from "../context/DestinationContext";

// function PackageCard({ src, idx }) {
//   const { openEnquiry } = useEnquiry();
//   const { whatsapp, name } = useDestination();

//   return (
//     <article className="group relative w-[420px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/50 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
//       {/* Image */}
//       <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
//         <img
//           src={src}
//           alt={`${name} package ${idx + 1}`}
//           loading="lazy"
//           decoding="async"
//           className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Bottom Content */}
//       <div className="border-t border-brand/20 bg-white p-4">
//         <h4 className="mb-3 text-sm font-bold text-brand-darker">
//           Package Inclusions
//         </h4>

//         <div className="grid grid-cols-4 gap-3 text-center text-[11px] font-semibold text-slate-700">
//           <div>
//             <div className="text-4xl">🚘</div>
//             Transfers
//           </div>

//           <div>
//             <div className="text-4xl">🏩</div>
//             Hotels
//           </div>

//           <div>
//             <div className="text-4xl">🍷</div>
//             Meals
//           </div>

//           <div>
//             <div className="text-4xl">🏝️</div>
//             Sightseeing
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-5 grid grid-cols-2 gap-3">
//           <button
//             type="button"
//             onClick={openEnquiry}
//             className="rounded-xl bg-brand-darker px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
//           >
//             ENQUIRE NOW
//           </button>

//           <a
//             href={whatsapp}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center rounded-xl bg-[#32b255] px-4 py-3 text-sm font-bold text-white transition hover:brightness-105"
//           >
//             WHATSAPP NOW
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function Packages() {
//   const {
//     name,
//     categories,
//     packageImages,
//     packages: packagesCopy,
//   } = useDestination();

//   /* DEFAULT OPEN 5NIGHTS */

//   const defaultCategory =
//     categories.find((cat) =>
//       cat.toLowerCase().includes("5")
//     ) || categories[0];

//   const [active, setActive] = useState(defaultCategory);

//   const [loading, setLoading] = useState(false);

//   const gridRef = useRef(null);

//   useEffect(() => {
//     setLoading(true);

//     const t = setTimeout(() => setLoading(false), 300);

//     return () => clearTimeout(t);
//   }, [active]);

//   const scroll = (dir) => {
//     const el = gridRef.current;

//     if (!el) return;

//     el.scrollBy({
//       left: dir * 440,
//       behavior: "smooth",
//     });
//   };

//   const images = packageImages[active] || [];

//   return (
//     <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
        
//         {/* Heading */}
//         <div className="reveal mb-8 text-center">
//           <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-darker sm:text-4xl">
//             {packagesCopy.title}
//           </h2>

//           <p className="fire-text mx-auto mt-3 max-w-3xl">
//             {packagesCopy.subtitle} <span>Couples</span>,{" "}
//             <span>Friends</span>, <span>Families</span> &{" "}
//             <span>Honeymoon Travelers</span>
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="glass-panel reveal mb-8 flex flex-wrap justify-center gap-3 rounded-2xl p-4 shadow-card">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               type="button"
//               onClick={() => setActive(cat)}
//               className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
//                 active === cat
//                   ? "btn-travel-gradient border-brand/40 text-white shadow-lg"
//                   : "border-brand/25 bg-white text-brand-darker hover:border-brand/40 hover:bg-slate-50"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Slider */}
//         <div className="reveal relative">
          
//           {/* LEFT ARROW */}
//           <button
//             type="button"
//             onClick={() => scroll(-1)}
//             className="btn-travel-gradient absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium md:flex"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>

//           {/* CARDS */}
//           <div
//             ref={gridRef}
//             className="slider-track flex gap-5 overflow-x-auto rounded-2xl px-3 pb-2"
//           >
//             {loading ? (
//               <>
//                 <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
//                 <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
//                 <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
//               </>
//             ) : (
//               images.map((src, idx) => (
//                 <PackageCard
//                   key={src}
//                   src={src}
//                   idx={idx}
//                 />
//               ))
//             )}
//           </div>

//           {/* RIGHT ARROW */}
//           <button
//             type="button"
//             onClick={() => scroll(1)}
//             className="btn-travel-gradient absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium md:flex"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEnquiry } from "../context/EnquiryContext";
import { useDestination } from "../context/DestinationContext";

function PackageCard({ src, idx }) {
  const { openEnquiry } = useEnquiry();
  const { whatsapp, name } = useDestination();

  return (
    <article className="group relative w-[420px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/50 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* IMAGE */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
        <img
          src={src}
          alt={`${name} package ${idx + 1}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="border-t border-brand/20 bg-white p-4">
        <h4 className="mb-3 text-sm font-bold text-brand-darker">
          Package Inclusions
        </h4>

        <div className="grid grid-cols-4 gap-3 text-center text-[11px] font-semibold text-slate-700">
          <div>
            <div className="text-4xl">🚘</div>
            Transfers
          </div>

          <div>
            <div className="text-4xl">🏩</div>
            Hotels
          </div>

          <div>
            <div className="text-4xl">🍷</div>
            Meals
          </div>

          <div>
            <div className="text-4xl">🏝️</div>
            Sightseeing
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={openEnquiry}
            className="rounded-xl bg-brand-darker px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            ENQUIRE NOW
          </button>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-[#32b255] px-4 py-3 text-sm font-bold text-white transition hover:brightness-105"
          >
            WHATSAPP NOW
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Packages() {
  const {
    name,
    categories,
    packageImages,
    packages: packagesCopy,
  } = useDestination();

  /* DEFAULT SELECTED CATEGORY */

  const [active, setActive] = useState("5N-6D");

  const [loading, setLoading] = useState(false);

  const gridRef = useRef(null);

  /* FALLBACK IF CATEGORY NAME DIFFERENT */

  useEffect(() => {
    const foundCategory = categories.find((cat) =>
      cat.toLowerCase().includes("5n")
    );

    if (foundCategory) {
      setActive(foundCategory);
    }
  }, [categories]);

  /* LOADING EFFECT */

  useEffect(() => {
    setLoading(true);

    const t = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(t);
  }, [active]);

  /* SLIDER */

  const scroll = (dir) => {
    const el = gridRef.current;

    if (!el) return;

    el.scrollBy({
      left: dir * 440,
      behavior: "smooth",
    });
  };

  const images = packageImages[active] || [];

  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADING */}
        <div className="reveal mb-8 text-center">
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-darker sm:text-4xl">
            {packagesCopy.title}
          </h2>

          <p className="fire-text mx-auto mt-3 max-w-3xl">
            {packagesCopy.subtitle} <span>Couples</span>,{" "}
            <span>Friends</span>, <span>Families</span> &{" "}
            <span>Honeymoon Travelers</span>
          </p>
        </div>

        {/* TABS */}
        <div className="glass-panel reveal mb-8 flex flex-wrap justify-center gap-3 rounded-2xl p-4 shadow-card">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                active === cat
                  ? "btn-travel-gradient border-brand/40 text-white shadow-lg"
                  : "border-brand/25 bg-white text-brand-darker hover:border-brand/40 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SLIDER */}
        <div className="reveal relative">
          
          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="btn-travel-gradient absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* CARDS */}
          <div
            ref={gridRef}
            className="slider-track flex gap-5 overflow-x-auto rounded-2xl px-3 pb-2"
          >
            {loading ? (
              <>
                <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
                <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
                <div className="package-skeleton h-64 w-[420px] flex-shrink-0 rounded-2xl" />
              </>
            ) : (
              images.map((src, idx) => (
                <PackageCard
                  key={src}
                  src={src}
                  idx={idx}
                />
              ))
            )}
          </div>

          {/* RIGHT BUTTON */}
          <button
            type="button"
            onClick={() => scroll(1)}
            className="btn-travel-gradient absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}