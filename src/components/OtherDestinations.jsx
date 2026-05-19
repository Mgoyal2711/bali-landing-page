// import { Link } from "react-router-dom";
// import { useDestination } from "../context/DestinationContext";

// const dests = [
//   { title: "Explore Bali", price: "₹23,500", path: "/", img: "/img/heroimage.png" },
//   { title: "Explore Andaman", price: "₹16,000", img: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&q=60&auto=format&fit=crop" },
//   { title: "Explore Dubai", price: "₹21,000", img: "https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg" },
//   { title: "Explore Singapore", price: "₹32,500", path: "/singapore", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=60&auto=format&fit=crop" },
//   { title: "Explore Malaysia", price: "₹20,500", img: "https://static.vecteezy.com/system/resources/thumbnails/040/975/135/small_2x/kuala-lumpur-skyline-photo.jpg" },
//   { title: "Explore Vietnam", price: "₹21,500", img: "https://t4.ftcdn.net/jpg/05/27/35/17/360_F_527351710_aH1947RJnh0lRsUWHVOZRPDgKmW70GUQ.jpg" },
//   { title: "Explore Thailand", price: "₹14,000", img: "https://media.istockphoto.com/id/1183878653/photo/asian-girl-walk-in-wat-phra-kaew-and-grand-palace-travel-in-bangkok-city.jpg?s=612x612&w=0&k=20&c=Lz0Usx7d0kXQW3KvB-pNu00gZjIhTcZ_fBQtN04K4T8=" },
// ];

// const all = [...dests, ...dests];

// export default function OtherDestinations() {
//   const { id } = useDestination();

//   return (
//     <section className="overflow-hidden bg-gradient-to-r from-brand-darker to-brand-dark py-14">
//       <div className="mx-auto max-w-7xl px-4">
//         <h2 className="mb-10 text-center text-3xl font-bold text-white">
//           Other Popular Tour Packages
//         </h2>
//         <div className="slider overflow-hidden">
//           <div className="slide-track flex gap-6 pb-4">
//             {all.map((d, i) => {
//               const isCurrent =
//                 (d.path === "/singapore" && id === "singapore") ||
//                 (d.path === "/" && id === "bali");

//               const card = (
//                 <div className="min-w-[280px] rounded-3xl bg-white p-3 shadow-lg">
//                   <img
//                     src={d.img}
//                     alt=""
//                     className="h-[190px] w-full rounded-2xl object-cover"
//                     loading="lazy"
//                   />
//                   <div className="pt-3">
//                     <h3 className="text-lg font-bold">{d.title}</h3>
//                     <div className="mt-2 inline-block rounded-md bg-brand-darker px-3 py-1 text-sm text-white">
//                       Starts {d.price} / per person
//                     </div>
//                   </div>
//                 </div>
//               );

//               if (d.path && !isCurrent) {
//                 return (
//                   <Link key={i} to={d.path} className="shrink-0 transition hover:-translate-y-1">
//                     {card}
//                   </Link>
//                 );
//               }

//               return (
//                 <div key={i} className="shrink-0">
//                   {card}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { Link } from "react-router-dom";
// import { useDestination } from "../context/DestinationContext";
// import { useEnquiry } from "../context/EnquiryContext";

// const dests = [
//   // {
//   //   title: "Explore Bali",
//   //   price: "₹23,500",
//   //   path: "/",
//   //   img: "/img/heroimage.png",
//   // },
//   {
//     title: "Explore Andaman",
//     price: "₹16,000",
//     img: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&q=60&auto=format&fit=crop",
//   },
//   {
//     title: "Explore Dubai",
//     price: "₹21,000",
//     img: "https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg",
//   },
//   {
//     title: "Explore Singapore",
//     price: "₹32,500",
//     path: "/singapore",
//     img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=60&auto=format&fit=crop",
//   },
//   {
//     title: "Explore Malaysia",
//     price: "₹20,500",
//     img: "https://static.vecteezy.com/system/resources/thumbnails/040/975/135/small_2x/kuala-lumpur-skyline-photo.jpg",
//   },
//   {
//     title: "Explore Vietnam",
//     price: "₹21,500",
//     img: "https://t4.ftcdn.net/jpg/05/27/35/17/360_F_527351710_aH1947RJnh0lRsUWHVOZRPDgKmW70GUQ.jpg",
//   },
//   {
//     title: "Explore Thailand",
//     price: "₹14,000",
//     img: "https://media.istockphoto.com/id/1183878653/photo/asian-girl-walk-in-wat-phra-kaew-and-grand-palace-travel-in-bangkok-city.jpg?s=612x612&w=0&k=20&c=Lz0Usx7d0kXQW3KvB-pNu00gZjIhTcZ_fBQtN04K4T8=",
//   },
// ];

// const all = [...dests, ...dests];

// export default function OtherDestinations() {
//   const { id } = useDestination();

//   const { openEnquiry } = useEnquiry();

//   return (
//     <section className="overflow-hidden bg-gradient-to-r from-brand-darker to-brand-dark py-14">
//       <div className="mx-auto max-w-7xl px-4">
//         <h2 className="mb-10 text-center text-3xl font-bold text-white">
//           Other Popular Tour Packages
//         </h2>

//         <div className="slider overflow-hidden">
//           <div className="slide-track flex gap-6 pb-4">
//             {all.map((d, i) => {
//               const isCurrent =
//                 (d.path === "/singapore" && id === "singapore") ||
//                 (d.path === "/" && id === "bali");

//               const card = (
//                 <div
//                   onClick={openEnquiry}
//                   className="min-w-[280px] cursor-pointer rounded-3xl bg-white p-3 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
//                 >
//                   {/* IMAGE */}

//                   <img
//                     src={d.img}
//                     alt={d.title}
//                     className="h-[190px] w-full rounded-2xl object-cover"
//                     loading="lazy"
//                   />

//                   {/* CONTENT */}

//                   <div className="pt-3">
//                     <h3 className="text-lg font-bold">
//                       {d.title}
//                     </h3>

//                     <div className="mt-2 inline-block rounded-md bg-brand-darker px-3 py-1 text-sm text-white">
//                       Starts {d.price} / per person
//                     </div>
//                   </div>
//                 </div>
//               );

//               /* CLICKABLE LINK */

//               if (d.path && !isCurrent) {
//                 return (
//                   <Link
//                     key={i}
//                     to={d.path}
//                     className="shrink-0"
//                   >
//                     {card}
//                   </Link>
//                 );
//               }

//               /* NORMAL CARD */

//               return (
//                 <div key={i} className="shrink-0">
//                   {card}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useDestination } from "../context/DestinationContext";
import { useEnquiry } from "../context/EnquiryContext";

const dests = [
  {
    title: "Explore Bali",
    price: "₹23,500",
    img: "/img/heroimage.png",
  },
  {
    title: "Explore Andaman",
    price: "₹16,000",
    img: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&q=60&auto=format&fit=crop",
  },
  {
    title: "Explore Dubai",
    price: "₹21,000",
    img: "https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg",
  },
  {
    title: "Explore Singapore",
    price: "₹32,500",
    img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=60&auto=format&fit=crop",
  },
  {
    title: "Explore Malaysia",
    price: "₹20,500",
    img: "https://static.vecteezy.com/system/resources/thumbnails/040/975/135/small_2x/kuala-lumpur-skyline-photo.jpg",
  },
  {
    title: "Explore Vietnam",
    price: "₹21,500",
    img: "https://t4.ftcdn.net/jpg/05/27/35/17/360_F_527351710_aH1947RJnh0lRsUWHVOZRPDgKmW70GUQ.jpg",
  },
  {
    title: "Explore Thailand",
    price: "₹14,000",
    img: "https://media.istockphoto.com/id/1183878653/photo/asian-girl-walk-in-wat-phra-kaew-and-grand-palace-travel-in-bangkok-city.jpg?s=612x612&w=0&k=20&c=Lz0Usx7d0kXQW3KvB-pNu00gZjIhTcZ_fBQtN04K4T8=",
  },
];

const all = [...dests, ...dests];

export default function OtherDestinations() {
  const { openEnquiry } = useEnquiry();

  useDestination();

  return (
    <section className="overflow-hidden bg-gradient-to-r from-brand-darker to-brand-dark py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Other Popular Tour Packages
        </h2>

        <div className="slider overflow-hidden">
          <div className="slide-track flex gap-6 pb-4">
            {all.map((d, i) => (
              <div
                key={i}
                onClick={openEnquiry}
                className="min-w-[280px] cursor-pointer rounded-3xl bg-white p-3 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* IMAGE */}

                <img
                  src={d.img}
                  alt={d.title}
                  className="h-[190px] w-full rounded-2xl object-cover"
                  loading="lazy"
                />

                {/* CONTENT */}

                <div className="pt-3">
                  <h3 className="text-lg font-bold">
                    {d.title}
                  </h3>

                  <div className="mt-2 inline-block rounded-md bg-brand-darker px-3 py-1 text-sm text-white">
                    Starts {d.price} / per person
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}