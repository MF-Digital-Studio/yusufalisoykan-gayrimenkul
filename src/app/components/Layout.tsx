import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { WhatsAppFloatingLink } from "./WhatsAppFloatingLink";
import { CookieConsentBanner } from "./CookieConsentBanner";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC]" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsentBanner />
      <WhatsAppFloatingLink />
    </div>
  );
}
