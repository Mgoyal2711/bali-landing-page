import { useEnquiry } from "../context/EnquiryContext";
import { useDestination } from "../context/DestinationContext";

export default function MobileBar() {
  const { openEnquiry } = useEnquiry();
  const { whatsapp, phone } = useDestination();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden">
      <div className="grid grid-cols-3 text-white text-center">
        <a href={`tel:${phone}`} className="bg-brand-dark py-2"><i className="fa-solid fa-phone text-sm" /><p className="text-xs mt-1">Call</p></a>
        <button type="button" onClick={openEnquiry} className="bg-brand py-2"><i className="fa-regular fa-envelope text-sm" /><p className="text-xs mt-1">Enquire</p></button>
        <a href={whatsapp} className="bg-[#25D366] py-2"><i className="fa-brands fa-whatsapp text-sm" /><p className="text-xs mt-1">WhatsApp</p></a>
      </div>
    </div>
  );
}
