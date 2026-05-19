import { Link } from "react-router-dom";
import { useDestination } from "../context/DestinationContext";

export default function Footer() {

  const { footerPackages } = useDestination();

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* LOGO */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src="/img/koh logo.jpeg"
                className="h-11 w-11 rounded-xl object-cover"
                alt="Kingdom Of Holidays"
              />

              <div>

                <p className="text-lg font-bold text-brand-darker">
                  Kingdom of Holidays
                </p>

                <p className="text-xs text-slate-500">
                  {footerPackages}
                </p>

              </div>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="mb-2 text-base font-semibold text-brand-darker">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2 text-sm text-slate-600">

              <Link
                to="/about"
                className="transition hover:text-blue-600"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-blue-600"
              >
                Contact Us
              </Link>

              <Link
                to="/privacy-policy"
                className="transition hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="transition hover:text-blue-600"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/cancellation-policy"
                className="transition hover:text-blue-600"
              >
                Cancellation Policy
              </Link>

            </div>

          </div>

          {/* INDIA OFFICE */}
          <div>

            <h4 className="mb-2 text-base font-semibold text-brand-darker">
              📍 India Office
            </h4>

            <p className="text-sm leading-6 text-slate-500">

              SHOPPER SQUARE MALL
              <br />

              1st Floor, SNO4 14/8 Raj Nagar
              <br />

              DELHI-NCR-GZB -201002

            </p>

            <p className="mt-2 text-sm text-slate-500">
              📞 +91 9971600663
            </p>

          </div>

          {/* THAILAND OFFICE */}
          <div>

            <h4 className="mb-2 text-base font-semibold text-brand-darker">
              📍 Thailand Office
            </h4>

            <p className="text-sm leading-6 text-slate-500">

              193/59, Rungland Alley
              <br />

              South Pattaya Road
              <br />

              Nangpura, Banglamung
              <br />

              Chonburi - 20150

            </p>

            <p className="mt-2 text-sm text-slate-500">
              📞 +66 924751704
            </p>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-5 border-t border-slate-200 pt-4 text-center">

          <p className="text-sm text-slate-500">
            © 2026 Kingdom of Holidays. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}