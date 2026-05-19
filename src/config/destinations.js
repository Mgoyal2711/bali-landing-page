import {
  CATEGORIES,
  PACKAGE_IMAGES,
  ATTRACTION_IMAGES,
  ARRIVAL_IMAGES,
  GUIDE_ITEMS,
  REVIEWS,
  WHATSAPP,
  PHONE,
} from "../data/packages";

const baliGuideItems = GUIDE_ITEMS;
const singaporeGuideItems = GUIDE_ITEMS.map((item) => ({
  ...item,
  title: item.title.replace(/Bali/g, "Singapore"),
  desc: item.desc.replace(/Bali/g, "Singapore"),
}));

const singaporeReviews = REVIEWS.map((r) => ({
  ...r,
  text: r.text.replace(/Bali/g, "Singapore").replace(/Ubud and Seminyak/g, "Marina Bay and Sentosa"),
}));

export const destinations = {
  bali: {
    id: "bali",
    name: "Bali",
    path: "/",
    meta: {
      title: "Kingdom of Holidays — Best Bali Tour Packages",
      description:
        "Customized Bali tour packages with guaranteed best price, free cancellation, and no-cost EMI.",
    },
    headerTagline: "Bali · Visa · Flights · Stays",
    trustedBadgeBg: "from-emerald-50 to-white",
    hero: {
      image: "/img/heroimage.png",
      alt: "Bali",
      overlay: "bg-[#001B33]/45",
      glow: "bg-[radial-gradient(ellipse_at_top,rgba(72,202,228,0.10),transparent_55%)]",
      locations: "Ubud · Seminyak · Nusa Dua · Uluwatu & more",
      title: "Best Bali Tour Packages",
      subtitle: "Plan your Bali trip from your city with",
      ctaGradient: "from-cyan-700 to-teal-500",
      emiBadge: "bg-emerald-100 text-emerald-800",
    },
    packages: {
      title: "Popular Bali Packages",
      subtitle: "Expert-crafted Bali packages for",
    },
    travelGuideTitle: "Bali Travel Guide",
    guideItems: baliGuideItems,
    guidePanelBg: "from-slate-50 via-white to-emerald-50/40",
    guideIconBg: "bg-emerald-50",
    statsHighlight: "Best for Bali",
    howItWorksClosing:
      "Get your vouchers and full support line. Pack your bags and start your Bali journey.",
    footerPackages: "Bali packages · Custom itineraries",
    brandsBlurb:
      "Trusted travel ventures delivering seamless holiday experiences across Bali & Andaman.",
    brandsCardBg: "from-emerald-50/50 to-white",
    brandsSectionBg: "from-slate-50 via-white to-emerald-50/30",
    whatsappTitle: "Bali Travel Experts",
    whatsappBody:
      "✈️ Get best Bali packages, flight deals & customized itineraries instantly.",
    enquiry: {
      title: "Plan Bali Trip Now To Get Best Deal ✈️",
      subtitle:
        "Expert opinion on Bali tourism, itineraries, and your perfect Bali holiday plan",
    },
    reviews: REVIEWS,
    categories: CATEGORIES,
    packageImages: PACKAGE_IMAGES,
    attractionImages: ATTRACTION_IMAGES,
    arrivalImages: ARRIVAL_IMAGES,
    whatsapp: WHATSAPP,
    phone: PHONE,
  },
  singapore: {
    id: "singapore",
    name: "Singapore",
    path: "/singapore",
    meta: {
      title: "Kingdom of Holidays — Best Singapore Tour Packages",
      description:
        "Customized Singapore tour packages with guaranteed best price, free cancellation, and no-cost EMI.",
    },
    headerTagline: "Singapore · Visa · Flights · Stays",
    trustedBadgeBg: "from-violet-50 to-white",
    hero: {
      image: "/img/heroimage.png",
      alt: "Singapore",
      overlay: "bg-[#1a0a2e]/50",
      glow: "bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_55%)]",
      locations: "Marina Bay · Sentosa · Orchard · Chinatown & more",
      title: "Best Singapore Tour Packages",
      subtitle: "Plan your Singapore trip from your city with",
      ctaGradient: "from-violet-700 via-purple-600 to-fuchsia-500",
      emiBadge: "bg-purple-100 text-purple-800",
    },
    packages: {
      title: "Popular Singapore Packages",
      subtitle: "Expert-crafted Singapore packages for",
    },
    travelGuideTitle: "Singapore Travel Guide",
    guideItems: singaporeGuideItems,
    guidePanelBg: "from-slate-50 via-white to-violet-50/40",
    guideIconBg: "bg-violet-50",
    statsHighlight: "Best for Singapore",
    howItWorksClosing:
      "Get your vouchers and full support line. Pack your bags and start your Singapore journey.",
    footerPackages: "Singapore packages · Custom itineraries",
    brandsBlurb:
      "Trusted travel ventures delivering seamless holiday experiences across Singapore & beyond.",
    brandsCardBg: "from-violet-50/50 to-white",
    brandsSectionBg: "from-slate-50 via-white to-violet-50/30",
    whatsappTitle: "Singapore Travel Experts",
    whatsappBody:
      "✈️ Get best Singapore packages, flight deals & customized itineraries instantly.",
    enquiry: {
      title: "Plan Singapore Trip Now To Get Best Deal ✈️",
      subtitle:
        "Expert opinion on Singapore tourism, itineraries, and your perfect Singapore holiday plan",
    },
    reviews: singaporeReviews,
    categories: CATEGORIES,
    packageImages: PACKAGE_IMAGES,
    attractionImages: ATTRACTION_IMAGES,
    arrivalImages: ARRIVAL_IMAGES,
    whatsapp: WHATSAPP,
    phone: PHONE,
  },
};

export function getDestinationKeyFromPath(pathname) {
  if (pathname.startsWith("/singapore")) return "singapore";
  return "bali";
}
