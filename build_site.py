#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).parent / "src"
COMP = ROOT / "components"

def fix(s):
    return s.replace("motion.div", "§§§").replace("§§§", "div")

def w(name, content):
    (COMP / name).write_text(fix(content).strip() + "\n")
    print(name)

def main():
    COMP.mkdir(parents=True, exist_ok=True)

    w("TrustBar.jsx", '''
import { Wand2, CalendarX2, ShieldCheck, CreditCard } from "lucide-react";
const items = [
  { icon: Wand2, title: "100% Customized Packages", desc: "Tailor-made itineraries", grad: "from-brand-darker to-brand" },
  { icon: CalendarX2, title: "Free Cancellation", desc: "Flexible booking support", grad: "from-brand to-brand-dark" },
  { icon: ShieldCheck, title: "Free Insurance", desc: "Safe & secure travel", grad: "from-brand-dark to-brand" },
  { icon: CreditCard, title: "No Cost EMI", desc: "Easy payment options", grad: "from-brand to-brand-darker" },
];
export default function TrustBar() {
  return (
    <section className="travel-art-bg-soft border-y border-slate-200 py-10 overflow-hidden">
      <motion.div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, title, desc, grad }) => (
          <motion.div key={title} className="group relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl hover:ring-brand/30">
            <motion.div className="relative flex items-center gap-4">
              <motion.div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-lg`}>
                <Icon className="h-8 w-8" />
              </motion.div>
              <motion.div>
                <h3 className="text-lg font-bold text-brand-darker">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{desc}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
''')

    w("Packages.jsx", '''
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, PACKAGE_IMAGES, WHATSAPP } from "../data/packages";
import { useEnquiry } from "../context/EnquiryContext";

function PackageCard({ src, idx }) {
  const { openEnquiry } = useEnquiry();
  return (
    <article className="group relative min-w-[82%] overflow-hidden rounded-2xl border border-white/50 bg-white shadow-lg transition hover:-translate-y-1 sm:min-w-[45%] lg:min-w-[30%]">
      <motion.div className="relative aspect-[3/4] overflow-visible">
        <img src={src} alt={`Bali package ${idx + 1}`} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition group-hover:scale-105" />
        <motion.div className="border-t border-brand bg-white p-4">
          <h4 className="mb-3 text-sm font-bold text-brand-darker">Package Inclusions</h4>
          <motion.div className="grid grid-cols-4 gap-3 text-center text-[11px] font-semibold text-slate-700">
            <motion.div><motion.div className="text-4xl">🚘</motion.div>Transfers</motion.div>
            <motion.div><motion.div className="text-4xl">🏩</motion.div>Hotels</motion.div>
            <motion.div><motion.div className="text-4xl">🍷</motion.div>Meals</motion.div>
            <motion.div><motion.div className="text-4xl">🏝️</motion.div>Sightseeing</motion.div>
          </motion.div>
          <motion.div className="mt-5 grid grid-cols-2 gap-3">
            <button type="button" onClick={openEnquiry} className="rounded-xl bg-brand-darker px-4 py-3 text-sm font-bold text-white hover:scale-105 transition">ENQUIRE NOW</button>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-xl bg-[#32b255] px-4 py-3 text-sm font-bold text-white hover:scale-105 transition">WHATSAPP NOW</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </article>
  );
}

export default function Packages() {
  const [active, setActive] = useState(CATEGORIES[0]);
  const [loading, setLoading] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [active]);

  const scroll = (dir) => {
    const el = gridRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.82, 300), behavior: "smooth" });
  };

  const images = PACKAGE_IMAGES[active] || [];

  return (
    <section className="px-4 pt-10 pb-12 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl">
        <motion.div className="mb-8 text-center reveal">
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-darker sm:text-4xl">Popular Bali Packages</h2>
          <p className="fire-text mx-auto mt-3 max-w-3xl">Expert-crafted Bali packages for <span>Couples</span>, <span>Friends</span>, <span>Families</span> & <span>Honeymoon Travelers</span></p>
        </motion.div>
        <motion.div className="glass-panel reveal mb-8 flex flex-wrap justify-center gap-3 rounded-2xl p-4 shadow-lg">
          {CATEGORIES.map((cat) => (
            <button key={cat} type="button" onClick={() => setActive(cat)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${active === cat ? "btn-travel-gradient border-brand text-white shadow-lg" : "border-brand/40 bg-white text-brand-darker hover:bg-slate-100"}`}>{cat}</button>
          ))}
        </motion.div>
        <motion.div className="reveal relative">
          <button type="button" onClick={() => scroll(-1)} className="btn-travel-gradient absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg md:flex"><ChevronLeft className="h-5 w-5" /></button>
          <motion.div ref={gridRef} className="slider-track flex gap-5 overflow-x-auto rounded-2xl">
            {loading ? (
              <>
                <motion.div className="package-skeleton h-64 min-w-[82%] sm:min-w-[45%] lg:min-w-[30%]" />
                <motion.div className="package-skeleton h-64 min-w-[82%] sm:min-w-[45%] lg:min-w-[30%]" />
                <motion.div className="package-skeleton h-64 min-w-[82%] sm:min-w-[45%] lg:min-w-[30%]" />
              </>
            ) : (
              images.map((src, idx) => <PackageCard key={src} src={src} idx={idx} />)
            )}
          </motion.div>
          <button type="button" onClick={() => scroll(1)} className="btn-travel-gradient absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg md:flex"><ChevronRight className="h-5 w-5" /></button>
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("TopAttractions.jsx", '''
import { ATTRACTION_IMAGES } from "../data/packages";
const imgs = [...ATTRACTION_IMAGES, ...ATTRACTION_IMAGES];
export default function TopAttractions() {
  return (
    <section className="pt-2 pb-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <motion.div className="mx-auto max-w-7xl">
        <motion.div className="mb-8 text-center reveal"><h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">Top Attractions</h2></motion.div>
        <motion.div className="relative overflow-hidden w-full">
          <motion.div className="top-attractions-slider flex gap-4">
            {imgs.map((src, i) => (
              <motion.div key={`${src}-${i}`} className="attraction-card"><img src={src} alt="" loading="lazy" /></motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("FlightBanner.jsx", '''
import { Plane } from "lucide-react";
import { WHATSAPP } from "../data/packages";
export default function FlightBanner() {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <motion.div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand/20 bg-gradient-to-r from-brand-darker via-brand-dark to-green-50 shadow-2xl">
        <img src="/img/wavepage.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
        <motion.div className="absolute inset-0 bg-gradient-to-r from-brand-darker/95 via-brand-dark/90 to-green-50/80" />
        <motion.div className="relative flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:py-12 sm:px-10">
          <motion.div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <motion.div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white/10 shadow-lg ring-2 ring-white/20 md:flex"><Plane className="h-14 w-14 text-white" /></motion.div>
            <motion.div>
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-4xl">Flight Booking</h2>
              <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-lg">Lock fares to Denpasar & beyond. Bundle flights with your land package for one itinerary, one support line.</p>
            </motion.div>
          </motion.div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex w-full shrink-0 items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-brand-darker shadow-xl transition hover:scale-105 md:w-auto">Book Now</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("RecentArrivals.jsx", '''
import { ARRIVAL_IMAGES } from "../data/packages";
const imgs = [...ARRIVAL_IMAGES, ...ARRIVAL_IMAGES.slice(0, 2)];
export default function RecentArrivals() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
      <motion.div className="mx-auto max-w-7xl">
        <motion.div className="text-center"><h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">Recent Arrivals</h2></motion.div>
        <motion.div className="relative mt-12 overflow-hidden">
          <motion.div className="arrival-slider flex gap-6 w-max">
            {imgs.map((src, i) => (
              <figure key={`${src}-${i}`} className="group relative shrink-0 overflow-hidden rounded-[24px] border border-brand/40 shadow-[0_0_25px_rgba(123,150,105,0.35)]">
                <img src={src} alt="" className="h-[260px] w-[420px] object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              </figure>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("HowItWorks.jsx", '''
import { MapPinned, PlaneTakeoff, Luggage } from "lucide-react";
const steps = [
  { icon: MapPinned, title: "Enquire", text: "Share dates, budget and departure city. We instantly shape options around your style of travel." },
  { icon: PlaneTakeoff, title: "Consult", text: "Travel experts refine hotels, flights, transfers and activities until the plan fits perfectly." },
  { icon: Luggage, title: "Receive Confirmation", text: "Get your vouchers and full support line. Pack your bags and start your Bali journey." },
];
export default function HowItWorks() {
  return (
    <section className="travel-art-bg-soft border-t border-slate-200 px-4 pt-2 pb-14 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl">
        <h2 className="font-display reveal text-center text-3xl font-extrabold text-brand-darker sm:text-4xl">How It Works</h2>
        <p className="reveal mx-auto mt-3 max-w-2xl text-center text-slate-600">Three simple steps from idea to confirmed holiday.</p>
        <motion.div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} className="how-card reveal rounded-3xl p-6 text-center sm:p-7">
              <motion.div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-darker to-brand text-white shadow-lg"><Icon className="h-9 w-9" /></motion.div>
              <h3 className="font-display mt-5 text-lg font-bold text-brand-darker">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("Videos.jsx", '''
import { PlayCircle } from "lucide-react";
const videos = [
  { id: "9X-78TH8nAQ", url: "https://youtu.be/9X-78TH8nAQ" },
  { id: "b5RzQZMQZGc", url: "https://youtube.com/shorts/b5RzQZMQZGc" },
  { id: "1Q3CgBYl8vk", url: "https://youtube.com/shorts/1Q3CgBYl8vk" },
  { id: "5kMTEd3on8I", url: "https://youtube.com/shorts/5kMTEd3on8I" },
];
export default function Videos() {
  return (
    <section className="travel-art-bg px-4 section-gap sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl">
        <motion.div className="mb-10 text-center reveal"><h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">See What Clients Say About Us</h2></motion.div>
        <motion.div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {videos.map((v) => (
            <article key={v.id} className="glass-panel reveal rounded-[16px] p-3 shadow-lg">
              <motion.div className="video-frame-wrap">
                <a className="video-preview-link" href={v.url} target="_blank" rel="noopener noreferrer">
                  <img className="video-frame" loading="lazy" src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="Client video" />
                  <img src="/img/koh logo.jpeg" className="absolute top-3 left-3 z-20 w-8 sm:w-10 object-contain drop-shadow-xl" alt="" />
                  <span className="play-chip absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white"><PlayCircle className="h-3.5 w-3.5" />Watch on YouTube</span>
                </a>
              </motion.div>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("OurBrands.jsx", '''
const brands = [
  { img: "/our brands/koh logo.jpeg", name: "Kingdom of Holidays" },
  { img: "/our brands/explore andaman.png", name: "Explore Andaman" },
  { img: "/our brands/tour4.jpeg", name: "Tour4Holidays" },
];
export default function OurBrands() {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <motion.div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50" />
      <motion.div className="relative mx-auto max-w-6xl">
        <motion.div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">Our Brands</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Trusted travel ventures delivering seamless holiday experiences across Bali & Andaman.</p>
        </motion.div>
        <motion.div className="grid gap-6 md:grid-cols-3">
          {brands.map((b) => (
            <motion.div key={b.name} className="group overflow-hidden rounded-[1.7rem] border border-brand/20 bg-white shadow-lg transition hover:-translate-y-2 hover:border-brand hover:shadow-xl">
              <motion.div className="overflow-hidden bg-gradient-to-br from-green-50 to-white p-3">
                <img src={b.img} alt={b.name} className="h-[240px] w-full object-contain transition group-hover:scale-105" loading="lazy" />
              </motion.div>
              <motion.div className="px-5 pb-5 text-center"><h3 className="text-xl font-extrabold text-brand-darker">{b.name}</h3></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("Stats.jsx", '''
import { Users, Map, Award } from "lucide-react";
export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-darker via-brand to-brand-dark px-4 section-gap text-white sm:px-6 lg:px-8">
      <motion.div className="relative mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-3">
        <motion.div className="flex flex-col items-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10"><Users className="h-6 w-6" /></span>
          <p className="font-display text-4xl font-extrabold sm:text-5xl">1 Lac+</p>
          <p className="mt-2 text-sm font-semibold uppercase text-white/80">Travelers</p>
        </motion.div>
        <motion.div className="flex flex-col items-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10"><Map className="h-6 w-6" /></span>
          <p className="font-display text-4xl font-extrabold sm:text-5xl">150+</p>
          <p className="mt-2 text-sm font-semibold uppercase text-white/80">Itineraries</p>
        </motion.div>
        <motion.div className="flex flex-col items-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10"><Award className="h-6 w-6" /></span>
          <p className="font-display text-xl font-bold sm:text-3xl">Best for Bali</p>
          <p className="mt-2 text-sm text-white/75">Specialist-crafted routes & local tie-ups</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("TravelGuide.jsx", '''
import { useState } from "react";
import { GUIDE_ITEMS } from "../data/packages";
export default function TravelGuide() {
  const [active, setActive] = useState(GUIDE_ITEMS[5]);
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl">
        <motion.div className="mb-8 text-center"><h2 className="font-display text-3xl font-extrabold text-brand-darker sm:text-4xl">Bali Travel Guide</h2></motion.div>
        <motion.div className="grid min-h-[78vh] overflow-hidden rounded-[2rem] border border-brand/20 bg-white shadow-2xl lg:grid-cols-[290px_1fr]">
          <motion.div className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r space-y-3">
            {GUIDE_ITEMS.map((item) => {
              const isActive = active.image === item.image;
              return (
                <button key={item.image} type="button" onClick={() => setActive(item)} className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left shadow-md transition hover:-translate-y-1 ${isActive ? "bg-gradient-to-r from-brand-darker to-brand text-white border-0" : "border border-slate-200 bg-white"}`}>
                  <motion.div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${isActive ? "bg-white/10" : "bg-green-100"}`}>{item.icon}</motion.div>
                  <motion.div><h3 className={`text-lg font-bold leading-tight ${isActive ? "text-white" : "text-brand-darker"}`}>{item.title}</h3><p className={`mt-1 text-sm ${isActive ? "text-white/80" : "text-slate-500"}`}>{item.desc}</p></motion.div>
                </button>
              );
            })}
          </motion.div>
          <motion.div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-brand/10 p-5">
            <img src={active.image} alt={active.title} className="relative z-10 max-h-[72vh] w-auto max-w-full rounded-[1.5rem] border border-white/60 object-contain shadow-2xl" loading="lazy" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("OtherDestinations.jsx", '''
const dests = [
  { title: "Explore Andaman", price: "₹16,000", img: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&q=60&auto=format&fit=crop" },
  { title: "Explore Dubai", price: "₹21,000", img: "https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg" },
  { title: "Explore Singapore", price: "₹32,500", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=60&auto=format&fit=crop" },
  { title: "Explore Malaysia", price: "₹20,500", img: "https://static.vecteezy.com/system/resources/thumbnails/040/975/135/small_2x/kuala-lumpur-skyline-photo.jpg" },
  { title: "Explore Vietnam", price: "₹21,500", img: "https://t4.ftcdn.net/jpg/05/27/35/17/360_F_527351710_aH1947RJnh0lRsUWHVOZRPDgKmW70GUQ.jpg" },
  { title: "Explore Thailand", price: "₹23,500", img: "https://t3.ftcdn.net/jpg/03/23/68/06/360_F_323680669_1plSwiFmIYF6mAplKcZQS8rMBbqqxaCp.jpg" },
];
const all = [...dests, ...dests];
export default function OtherDestinations() {
  return (
    <section className="py-14 bg-gradient-to-r from-brand-darker to-brand overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-white/80 text-sm font-semibold tracking-wider uppercase mb-3">OTHER POPULAR TOUR PACKAGES</p>
        <h2 className="text-center text-3xl font-bold text-white mb-10">Explore More Destinations 🌍</h2>
        <motion.div className="slider overflow-hidden">
          <motion.div className="slide-track flex gap-6 pb-4">
            {all.map((d, i) => (
              <motion.div key={i} className="min-w-[280px] bg-white rounded-3xl p-3 shadow-lg">
                <img src={d.img} alt="" className="w-full h-[190px] object-cover rounded-2xl" loading="lazy" />
                <motion.div className="pt-3"><h3 className="font-bold text-lg">{d.title}</h3><motion.div className="mt-2 inline-block bg-brand text-white px-3 py-1 rounded-md text-sm">Starts {d.price} / per person</motion.div></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
''')

    w("Footer.jsx", '''
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-4 px-4 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <motion.div className="flex items-center gap-2">
            <img src="/img/koh logo.jpeg" className="h-10 w-10 rounded-lg object-cover" alt="" />
            <motion.div>
              <p className="font-bold text-lg text-brand-darker">Kingdom of Holidays</p>
              <p className="text-xs text-slate-500">Bali packages · Custom itineraries</p>
            </motion.div>
          </motion.div>
          <motion.div>
            <h4 className="font-semibold text-brand-darker mb-1">Quick Links</h4>
            <motion.div className="flex flex-col gap-0.5 text-sm text-slate-600">
              <a href="#about">About Us</a><a href="#contact">Contact Us</a><a href="#privacy">Privacy Policy</a>
            </motion.div>
          </motion.div>
          <motion.div>
            <h4 className="font-semibold text-brand-darker mb-1">📍 Bali Office</h4>
            <p className="text-sm text-slate-500 leading-5">Jl. Raya Kuta No.88<br />Kuta, Badung<br />Bali – 80361</p>
            <p className="mt-1 text-sm text-slate-500">📞 +62 924751704</p>
          </motion.div>
          <motion.div>
            <h4 className="font-semibold text-brand-darker mb-1">📍 India Office</h4>
            <p className="text-sm text-slate-500 leading-5">SHOPPER SQUARE MALL<br />1st Floor, SNO4 14/8 Raj Nagar<br />DELHI-NCR-GZB -201002</p>
            <p className="mt-1 text-sm text-slate-500">📞 +91 9971600663</p>
          </motion.div>
        </motion.div>
        <motion.div className="border-t mt-4 pt-3 text-center"><p className="text-sm text-slate-500">© 2024 Kingdom of Holidays. All rights reserved.</p></motion.div>
      </motion.div>
    </footer>
  );
}
''')

    w("WhatsAppWidget.jsx", '''
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "../data/packages";
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div className="fixed hidden lg:flex bottom-4 right-4 z-50 flex-col items-center">
        <button type="button" onClick={() => setOpen(!open)} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition">
          <MessageCircle className="h-7 w-7" />
        </button>
        <motion.div className="mt-2 animate-bounce rounded-full bg-white/95 px-3 py-1.5 text-center shadow-lg">
          <p className="text-[11px] font-bold text-slate-800">Avg Callback</p>
          <p className="text-[10px] font-semibold text-brand">Under 15 mins</p>
        </motion.div>
      </motion.div>
      {open && (
        <motion.div className="fixed bottom-24 right-6 z-50 w-[290px] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
          <motion.div className="bg-gradient-to-r from-brand-darker to-brand px-5 py-4 text-white">
            <p className="font-bold">Kingdom of Holidays</p>
            <p className="text-sm text-white/80">Bali Travel Experts</p>
          </motion.div>
          <motion.div className="p-4 space-y-3 text-sm text-slate-700">
            <p>👋 Hello! Welcome to Kingdom of Holidays</p>
            <p>✈️ Our travel experts are live. Get best Bali packages & customized itineraries instantly.</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3 font-semibold text-white">
              <MessageCircle className="h-6 w-6" />Start WhatsApp Chat
            </a>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
''')

    w("MobileBar.jsx", '''
import { useEnquiry } from "../context/EnquiryContext";
import { WHATSAPP, PHONE } from "../data/packages";
export default function MobileBar() {
  const { openEnquiry } = useEnquiry();
  return (
    <motion.div className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden">
      <motion.div className="grid grid-cols-3 text-white text-center">
        <a href={`tel:${PHONE}`} className="bg-brand-dark py-2"><i className="fa-solid fa-phone text-sm" /><p className="text-xs mt-1">Call</p></a>
        <button type="button" onClick={openEnquiry} className="bg-brand py-2"><i className="fa-regular fa-envelope text-sm" /><p className="text-xs mt-1">Enquire</p></button>
        <a href={WHATSAPP} className="bg-[#25D366] py-2"><i className="fa-brands fa-whatsapp text-sm" /><p className="text-xs mt-1">WhatsApp</p></a>
      </motion.div>
    </motion.div>
  );
}
''')

    w("EnquiryModal.jsx", '''
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useEnquiry } from "../context/EnquiryContext";

const DURATIONS = ["3N-4D","4N-5D","5N-6D","6N-7D","7N-8D","8N-9D","9N-10D","10N-11D"];
const TOURS = ["Family","Couple","Honeymoon","Friends"];

export default function EnquiryModal() {
  const { open, closeEnquiry } = useEnquiry();
  const [children, setChildren] = useState(0);
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm("service_uxwdrrf", "template_rvx3a2p", e.target, { publicKey: "5nlF7sfx0GCXUMqiq" });
      Swal.fire({ icon: "success", title: "Success 🎉", text: "Enquiry Sent Successfully", confirmButtonColor: "#7b9669" });
      e.target.reset();
      setChildren(0);
      closeEnquiry();
    } catch {
      Swal.fire({ icon: "error", title: "Oops!", text: "Something went wrong" });
    }
  };

  return (
    <motion.div id="enquiryModal" className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeEnquiry}>
      <motion.div className="relative w-full max-w-[520px] rounded-[30px] bg-white shadow-2xl max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={closeEnquiry} className="absolute top-4 right-4 h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl">✕</button>
        <h3 className="text-2xl font-bold text-brand-darker pr-10">Plan Bali Trip Now To Get Best Deal ✈️</h3>
        <p className="text-gray-500 italic text-sm mt-1">Expert opinion on Bali tourism, itineraries, and your perfect Bali holiday plan</p>
        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <motion.div className="grid sm:grid-cols-2 gap-3">
            <input name="full_name" placeholder="Full Name" required className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-brand" />
            <input name="phone" type="tel" placeholder="WhatsApp Number" required className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-brand" />
          </motion.div>
          <input name="departure_city" placeholder="Departure City" className="border rounded-xl p-3 w-full" />
          <input name="travel_date" type="date" className="w-full h-[50px] rounded-xl border border-slate-300 px-4" />
          <motion.div className="grid grid-cols-2 gap-4">
            <input name="adults" type="number" placeholder="Adults" className="border rounded-2xl p-3" />
            <input name="children" type="number" placeholder="Children" value={children || ""} onChange={(e) => setChildren(parseInt(e.target.value, 10) || 0)} className="border rounded-2xl p-3" />
          </motion.div>
          {children > 0 && (
            <motion.div className="grid grid-cols-2 gap-3">
              {Array.from({ length: children }, (_, i) => (
                <select key={i} name={`childAge${i + 1}`} className="border rounded-xl p-3">
                  <option value="">Child {i + 1} Age</option>
                  {Array.from({ length: 18 }, (_, age) => <option key={age} value={age}>{age} Years</option>)}
                </select>
              ))}
            </motion.div>
          )}
          <p className="font-semibold">Duration</p>
          <motion.div className="flex flex-wrap gap-2">
            {DURATIONS.map((d) => (
              <label key={d} className="cursor-pointer">
                <input type="radio" name="duration" value={d} className="peer hidden" />
                <span className="inline-block px-4 py-2 border rounded-full text-sm peer-checked:bg-brand peer-checked:text-white hover:bg-green-50">{d}</span>
              </label>
            ))}
          </motion.div>
          <p className="font-semibold">Tour Type</p>
          <motion.div className="flex flex-wrap gap-2">
            {TOURS.map((t) => (
              <label key={t} className="cursor-pointer">
                <input type="radio" name="tour_type" value={t} className="peer hidden" />
                <span className="inline-block px-4 py-2 border rounded-full text-sm peer-checked:bg-brand peer-checked:text-white">{t}</span>
              </label>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4">
            <select name="flights" className="border rounded-xl p-3"><option>Flight Required?</option><option>Yes</option><option>No</option></select>
            <select name="booking_time" className="border rounded-xl p-3"><option>Booking Time?</option><option>In 2–3 Days</option><option>This Week</option><option>This Month</option><option>Later</option></select>
          </motion.div>
          <button type="submit" className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-darker to-brand hover:scale-[1.02] transition">Get My Quote 🚀 | Get 20% Off Now</button>
        </form>
      </motion.div>
    </motion.div>
  );
}
''')

    # App + main
    (ROOT / "App.jsx").write_text(fix('''
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Packages from "./components/Packages";
import TopAttractions from "./components/TopAttractions";
import FlightBanner from "./components/FlightBanner";
import RecentArrivals from "./components/RecentArrivals";
import HowItWorks from "./components/HowItWorks";
import Videos from "./components/Videos";
import OurBrands from "./components/OurBrands";
import Stats from "./components/Stats";
import TravelGuide from "./components/TravelGuide";
import OtherDestinations from "./components/OtherDestinations";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import MobileBar from "./components/MobileBar";
import EnquiryModal from "./components/EnquiryModal";
import { EnquiryProvider } from "./context/EnquiryContext";
import { useReveal } from "./hooks/useReveal";
import { useCountdown } from "./hooks/useCountdown";

function AppContent() {
  useReveal();
  useCountdown();
  return (
    <motion.div className="bg-softwhite font-sans text-slate-800 antialiased pb-16 lg:pb-0">
      <Header />
      <Hero />
      <motion.div className="travel-divider" />
      <motion.div className="relative -mt-px bg-slate-50">
        <svg className="block w-full translate-y-px" viewBox="0 0 1440 45" fill="none" aria-hidden="true">
          <path fill="#f8fafc" d="M0 48V20c120 22 240 33 360 33s240-11 360-33 240-22 360-22 240 11 360 33V48H0z" />
        </svg>
      </motion.div>
      <TrustBar />
      <Packages />
      <TopAttractions />
      <FlightBanner />
      <RecentArrivals />
      <HowItWorks />
      <motion.div className="travel-divider" />
      <Videos />
      <OurBrands />
      <Stats />
      <TravelGuide />
      <OtherDestinations />
      <Footer />
      <WhatsAppWidget />
      <MobileBar />
      <EnquiryModal />
    </motion.div>
  );
}

export default function App() {
  return (
    <EnquiryProvider>
      <AppContent />
    </EnquiryProvider>
  );
}
''').strip() + "\n")

    (ROOT / "main.jsx").write_text('''
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
'''.strip() + "\n")

    print("Done.")

if __name__ == "__main__":
    main()
