// import { ARRIVAL_IMAGES } from "../data/packages";

// const imgs = [...ARRIVAL_IMAGES, ...ARRIVAL_IMAGES.slice(0, 2)];

// export default function RecentArrivals() {
//   return (
//     <section className="overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      
//       <div className="mx-auto max-w-7xl">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">
//             Recent Arrivals
//           </h2>
//         </div>

//         {/* Slider */}
//         <div className="relative mt-12 overflow-hidden">

//           <div className="arrival-slider flex w-max gap-6">

//             {imgs.map((src, i) => (
//               <figure
//                 key={`${src}-${i}`}
//                 className="group relative flex h-[260px] w-[420px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] border border-brand/20 bg-white shadow-[0_0_20px_rgba(74,155,143,0.15)]"
//               >

//                 <img
//                   src={src}
//                   alt=""
//                   loading="lazy"
//                   className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
//                 />

//               </figure>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ARRIVAL_IMAGES } from "../data/packages";

const imgs = [...ARRIVAL_IMAGES, ...ARRIVAL_IMAGES.slice(0, 2)];

export default function RecentArrivals() {
  return (
    <section className="overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">
            Recent Arrivals
          </h2>
        </div>

        {/* Slider */}
        <div className="relative mt-12 overflow-hidden">

          <div className="arrival-slider flex w-max gap-5">

            {imgs.map((src, i) => (
              <figure
                key={`${src}-${i}`}
                className="group relative h-[320px] w-[240px] shrink-0 overflow-hidden rounded-[28px] bg-white shadow-lg"
              >

                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Optional dark overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition duration-500"></div>

              </figure>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}