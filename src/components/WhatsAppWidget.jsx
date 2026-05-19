import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useDestination } from "../context/DestinationContext";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const { whatsapp, whatsappTitle, whatsappBody } = useDestination();

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 hidden flex-col items-center lg:flex">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
        <div className="mt-2 animate-bounce rounded-full bg-white/95 px-3 py-1.5 text-center shadow-lg backdrop-blur">
          <p className="text-[11px] font-bold text-slate-800">Avg Callback</p>
          <p className="text-[10px] font-semibold text-brand">Under 15 mins</p>
        </div>
      </div>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[290px] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
          <div className="bg-gradient-to-r from-brand-darker to-brand-dark px-5 py-4 text-white">
            <p className="font-bold">Kingdom of Holidays</p>
            <p className="text-sm text-white/80">{whatsappTitle}</p>
          </div>
          <div className="space-y-3 p-4 text-sm text-slate-700">
            <p>👋 Hello! Welcome to Kingdom of Holidays</p>
            <p>{whatsappBody}</p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-lg font-semibold text-white transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-6 w-6" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </>
  );
}
