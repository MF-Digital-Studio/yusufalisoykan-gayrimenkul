import whatsappPng from "../assets/whatsapp.png";

const WHATSAPP_PHONE_NUMBER = "15551234567";
const WHATSAPP_DEFAULT_MESSAGE = "Yusuf Soykan ile iletişime geçtiğiniz için teşekkürler. Size en kısa süre içerisinde dönüş yapacağım.";

const WHATSAPP_URL = `https://wa.me/${5434189034}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

export function WhatsAppFloatingLink() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
      className="wa-floating fixed right-3 bottom-3 z-50 block transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] sm:right-4 sm:bottom-4"
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <img
        src={whatsappPng}
        alt="WhatsApp"
        className="h-14 w-14 object-contain sm:h-20 sm:w-20"
        decoding="async"
      />
    </a>
  );
}
