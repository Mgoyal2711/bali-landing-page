import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useEnquiry } from "../context/EnquiryContext";
import { useDestination } from "../context/DestinationContext";

const DURATIONS = [
  "3N-4D",
  "4N-5D",
  "5N-6D",
  "6N-7D",
  "7N-8D",
  "8N-9D",
  "9N-10D",
  "10N-11D",
];

const TOURS = ["Family", "Couple", "Honeymoon", "Friends"];

export default function EnquiryModal() {
  const { open, closeEnquiry, openEnquiry } = useEnquiry();
  const { enquiry } = useDestination();

  const [children, setChildren] = useState(0);

  /* AUTO POPUP TIMERS */

  useEffect(() => {
    const timer1 = setTimeout(() => {
      openEnquiry();
    }, 6000); // 6 sec

    const timer2 = setTimeout(() => {
      openEnquiry();
    }, 30000); // 30 sec

    const timer3 = setTimeout(() => {
      openEnquiry();
    }, 60000); // 1 min

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [openEnquiry]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_uxwdrrf",
        "template_rvx3a2p",
        e.target,
        {
          publicKey: "5nlF7sfx0GCXUMqiq",
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success 🎉",
        text: "Enquiry Sent Successfully",
        confirmButtonColor: "#4a9b8f",
      });

      e.target.reset();
      setChildren(0);
      closeEnquiry();
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong",
      });
    }
  };

  return (
    <div
      id="enquiryModal"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={closeEnquiry}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[30px] bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}

        <button
          type="button"
          onClick={closeEnquiry}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl transition hover:bg-gray-200"
        >
          ✕
        </button>

        {/* TITLE */}

        <h3 className="pr-10 text-2xl font-bold text-brand-darker">
          {enquiry?.title || "Get Your Travel Quote"}
        </h3>

        <p className="mt-1 text-sm italic text-gray-500">
          {enquiry?.subtitle ||
            "Fill details and get best deals instantly"}
        </p>

        {/* FORM */}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* NAME + PHONE */}

          <div className="grid gap-3 sm:grid-cols-2">
            <input
              name="full_name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-brand/40"
            />

            <input
              name="phone"
              type="tel"
              placeholder="WhatsApp Number"
              required
              className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>

          {/* DEPARTURE */}

          <input
            name="departure_city"
            type="text"
            placeholder="Departure City"
            className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-brand/30"
          />

          {/* DATE */}

          <input
            name="travel_date"
            type="date"
            className="h-[50px] w-full rounded-xl border border-slate-300 px-4"
          />

          {/* ADULTS + CHILDREN */}

          <div className="grid grid-cols-2 gap-4">
            <input
              name="adults"
              type="number"
              placeholder="Adults"
              className="rounded-2xl border p-3 outline-none focus:ring-2 focus:ring-brand/30"
            />

            <input
              name="children"
              type="number"
              placeholder="Children"
              value={children || ""}
              onChange={(e) =>
                setChildren(parseInt(e.target.value, 10) || 0)
              }
              className="rounded-2xl border p-3 outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          {/* CHILD AGE */}

          {children > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: children }, (_, i) => (
                <select
                  key={i}
                  name={`childAge${i + 1}`}
                  className="rounded-xl border p-3"
                >
                  <option value="">Child {i + 1} Age</option>

                  {Array.from({ length: 18 }, (_, age) => (
                    <option key={age} value={age}>
                      {age} Years
                    </option>
                  ))}
                </select>
              ))}
            </div>
          )}

          {/* DURATION */}

          <p className="font-semibold">Duration</p>

          <div className="flex flex-wrap gap-2">
            {DURATIONS.map((d) => (
              <label key={d} className="cursor-pointer">
                <input
                  type="radio"
                  name="duration"
                  value={d}
                  className="peer hidden"
                />

                <span className="inline-block rounded-full border px-4 py-2 text-sm transition peer-checked:bg-brand peer-checked:text-white hover:bg-slate-50">
                  {d}
                </span>
              </label>
            ))}
          </div>

          {/* TOUR TYPE */}

          <p className="font-semibold">Tour Type</p>

          <div className="flex flex-wrap gap-2">
            {TOURS.map((t) => (
              <label key={t} className="cursor-pointer">
                <input
                  type="radio"
                  name="tour_type"
                  value={t}
                  className="peer hidden"
                />

                <span className="inline-block rounded-full border px-4 py-2 text-sm transition peer-checked:bg-brand peer-checked:text-white hover:bg-slate-50">
                  {t}
                </span>
              </label>
            ))}
          </div>

          {/* SELECTS */}

          <div className="grid grid-cols-2 gap-4">
            <select name="flights" className="rounded-xl border p-3">
              <option>Flight Required?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <select
              name="booking_time"
              className="rounded-xl border p-3"
            >
              <option>Booking Time?</option>
              <option>In 2–3 Days</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Later</option>
            </select>
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="btn-travel-gradient w-full rounded-xl py-3 font-bold text-white transition hover:brightness-105"
          >
            Get My Quote 🚀 | Get 20% Off Now
          </button>
        </form>
      </div>
    </div>
  );
}