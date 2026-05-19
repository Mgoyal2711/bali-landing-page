


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import TrustBar from "./components/TrustBar";
// import Packages from "./components/Packages";
// import TopAttractions from "./components/TopAttractions";
// import FlightBanner from "./components/FlightBanner";
// import RecentArrivals from "./components/RecentArrivals";
// import HowItWorks from "./components/HowItWorks";
// import Videos from "./components/Videos";
// import OurBrands from "./components/OurBrands";
// import Stats from "./components/Stats";
// import TravelGuide from "./components/TravelGuide";
// import OtherDestinations from "./components/OtherDestinations";
// import Footer from "./components/Footer";
// import WhatsAppWidget from "./components/WhatsAppWidget";
// import MobileBar from "./components/MobileBar";
// import EnquiryModal from "./components/EnquiryModal";

// import ContactUs from "./components/Contact";
// import CancellationPolicy from "./components/Cancel";
// import AboutUs from "./components/Aboutus";
// import Privacypolicy from "./components/Privacypolicy";

// import { EnquiryProvider } from "./context/EnquiryContext";
// import { DestinationProvider } from "./context/DestinationContext";

// import { useReveal } from "./hooks/useReveal";
// import { useCountdown } from "./hooks/useCountdown";

// function HomePage({ destinationKey = "bali" }) {
//   useReveal();
//   useCountdown();

//   return (
//     <DestinationProvider destinationKey={destinationKey}>
//       <div className="bg-softwhite font-sans text-slate-800 antialiased pb-16 lg:pb-0">

//         <Header />

//         <Hero />

//         <div className="travel-divider" />

//         <div className="relative -mt-px bg-slate-50">
//           <svg
//             className="block w-full translate-y-px"
//             viewBox="0 0 1440 45"
//             fill="none"
//             aria-hidden="true"
//           >
//             <path
//               fill="#f8fafc"
//               d="M0 48V20c120 22 240 33 360 33s240-11 360-33 240-22 360-22 240 11 360 33V48H0z"
//             />
//           </svg>
//         </div>

//         <TrustBar />

//         <Packages />

//         <TopAttractions />

//         <FlightBanner />

//         <RecentArrivals />

//         <HowItWorks />

//         <div className="travel-divider" />

//         <Videos />

//         <OurBrands />

//         <Stats />

//         <TravelGuide />

//         <OtherDestinations />

//         <Footer />

//         <WhatsAppWidget />

//         <MobileBar />

//         <EnquiryModal />

//       </div>
//     </DestinationProvider>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>

//       <EnquiryProvider>

//         <Routes>

//           {/* HOME PAGE */}
//           <Route
//             path="/"
//             element={<HomePage destinationKey="bali" />}
//           />

//           {/* SINGAPORE PAGE */}
//           <Route
//             path="/singapore"
//             element={<HomePage destinationKey="singapore" />}
//           />

//           {/* ABOUT PAGE */}
//           <Route
//             path="/about"
//             element={<AboutUs />}
//           />

//           {/* CONTACT PAGE */}
//           <Route
//             path="/contact"
//             element={<ContactUs />}
//           />

//           {/* CANCELLATION POLICY */}
//           <Route
//             path="/cancellation-policy"
//             element={<CancellationPolicy />}
//           />

//           {/* PRIVACY POLICY */}
//           <Route
//             path="/privacy-policy"
//             element={<Privacypolicy />}
//           />

//         </Routes>

//       </EnquiryProvider>

//     </BrowserRouter>
//   );
// }



import { BrowserRouter, Routes, Route } from "react-router-dom";

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

/* PAGES */
import ContactUs from "./components/Contact";
import CancellationPolicy from "./components/Cancel";
import AboutUs from "./components/Aboutus";
import Privacypolicy from "./components/Privacypolicy";
import TermsConditions from "./components/Termsandcondition";

import { EnquiryProvider } from "./context/EnquiryContext";
import { DestinationProvider } from "./context/DestinationContext";

import { useReveal } from "./hooks/useReveal";
import { useCountdown } from "./hooks/useCountdown";

function HomePage({ destinationKey = "bali" }) {

  useReveal();
  useCountdown();

  return (
    <DestinationProvider destinationKey={destinationKey}>

      <div className="bg-softwhite pb-16 font-sans text-slate-800 antialiased lg:pb-0">

        <Header />

        <Hero />

        <div className="travel-divider" />

        <div className="relative -mt-px bg-slate-50">

          <svg
            className="block w-full translate-y-px"
            viewBox="0 0 1440 45"
            fill="none"
            aria-hidden="true"
          >

            <path
              fill="#f8fafc"
              d="M0 48V20c120 22 240 33 360 33s240-11 360-33 240-22 360-22 240 11 360 33V48H0z"
            />

          </svg>

        </div>

        <TrustBar />

        <Packages />

        <TopAttractions />

        <FlightBanner />

        <RecentArrivals />

        <HowItWorks />

        <div className="travel-divider" />

        <Videos />

        <OurBrands />

        <Stats />

        <TravelGuide />

        <OtherDestinations />

        <Footer />

        <WhatsAppWidget />

        <MobileBar />

        <EnquiryModal />

      </div>

    </DestinationProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <EnquiryProvider>

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={<HomePage destinationKey="bali" />}
          />

          {/* SINGAPORE PAGE */}
          <Route
            path="/singapore"
            element={<HomePage destinationKey="singapore" />}
          />

          {/* ABOUT PAGE */}
          <Route
            path="/about"
            element={<AboutUs />}
          />

          {/* CONTACT PAGE */}
          <Route
            path="/contact"
            element={<ContactUs />}
          />

          {/* PRIVACY POLICY */}
          <Route
            path="/privacy-policy"
            element={<Privacypolicy />}
          />

          {/* TERMS & CONDITIONS */}
          <Route
            path="/terms-conditions"
            element={<TermsConditions />}
          />

          {/* CANCELLATION POLICY */}
          <Route
            path="/cancellation-policy"
            element={<CancellationPolicy />}
          />

        </Routes>

      </EnquiryProvider>

    </BrowserRouter>
  );
}