import { Phone, Mail } from 'lucide-react';
import { useDestination } from '../context/DestinationContext';

export default function Header() {
  const { headerTagline, trustedBadgeBg, whatsapp, phone } = useDestination();
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-slate-200/80 bg-white/95 shadow-md backdrop-blur-md">
        <div className="mx-auto max-w-[95rem] px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-3 shrink-0">
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md ring-2 ring-brand/20">
                  <img src="/img/koh logo.jpeg" alt="Kingdom of Holidays logo" className="h-full w-full object-cover" width={56} height={56} />
                </div>
                <div className="leading-tight">
                  <span className="font-display block text-xl font-extrabold tracking-tight text-brand-darker">Kingdom of Holidays</span>
                  <span className="text-sm font-medium text-slate-500">{headerTagline}</span>
                </div>
              </a>
              <div className="hidden xl:flex items-center gap-3">
                <div className={`rounded-full border border-brand/25 bg-gradient-to-r ${trustedBadgeBg} px-4 py-2 shadow-sm flex items-center gap-2`}>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white shadow">✓</div>
                  <div className="leading-tight">
                    <p className="text-[10px] font-semibold uppercase text-brand">Trusted</p>
                    <p className="text-xs font-extrabold text-slate-800">Verified Agent</p>
                  </div>
                </div>
                <div className="rounded-full border border-amber-200/80 bg-gradient-to-r from-amber-50/80 to-white px-4 py-2 shadow-sm flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow">★</div>
                  <div className="leading-tight">
                    <p className="text-[10px] font-semibold uppercase text-amber-700">Best Deal</p>
                    <p className="text-xs font-extrabold text-slate-800">Price Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-[10px] font-medium text-slate-600 shadow-sm">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 font-extrabold text-slate-800"><Phone className="h-3.5 w-3.5 text-brand" />9599260057 | 9971600663</span>
                  <span className="inline-flex items-center gap-1 font-extrabold text-slate-800"><Mail className="h-3.5 w-3.5 text-brand" />info@kingdomofholidays.com</span>
                </div>
                <div className="mt-1 flex items-center gap-2 whitespace-nowrap font-bold text-slate-800 text-[10px]">
                  <span>📍 Delhi-NCR-GZB</span><span className="text-slate-300">|</span>
                  <span>📍 Sri Vijaya Puram, Andaman</span><span className="text-slate-300">|</span>
                  <span>📍 Chonburi pattaya - Thailand</span>
                </div>
              </div>
              <a href={whatsapp} className="btn-travel-gradient ripple-btn inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-white shadow-md">Send Us Quotes</a>
            </div>
          </div>
          <div className="lg:hidden mt-3">
            <div className="flex items-center justify-between rounded-xl border border-brand/30 bg-white px-3 py-1.5 shadow">
              <div className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="" className="w-8 h-8 rounded-full" loading="lazy" />
                <div className="leading-tight">
                  <p className="text-[10px] font-bold text-slate-700">Call for Phone Deals</p>
                  <a href={`tel:${phone}`} className="text-[14px] font-extrabold text-brand">+91-9599260057</a>
                </div>
              </div>
              <a href={whatsapp} className="bg-brand text-white px-3 py-1.5 rounded-full text-xs font-bold">WhatsApp</a>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[150px] lg:h-[95px]" />
      <div className="relative z-10 bg-gradient-to-r from-brand-darker via-brand-dark to-brand-darker px-4 py-2 text-left text-xs font-semibold tracking-wide text-white sm:text-sm">
        TAN License Number - MRTR09551D | IATTE /20-21/2157
      </div>
    </>
  );
}
