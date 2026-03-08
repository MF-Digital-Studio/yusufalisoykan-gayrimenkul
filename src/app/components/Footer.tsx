import { Instagram, Mail, Phone, MapPin, } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#0A0A0A]">
      <div className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#CFA670' }}>
                Yusuf Ali Soykan
              </h3>
              <p className="text-[#F8FAFC]/70 mb-4">
                Lüks gayrimenkul danışmanlığı hizmetleri ile hayalinizdeki yaşam alanını bulmanıza yardımcı oluyorum.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#CFA670' }}>
                İletişim
              </h4>
              <div className="space-y-3">
                <a href="tel:+905551234567" className="flex items-center gap-2 text-[#F8FAFC]/70 hover:text-[#CFA670] transition-colors">
                  <Phone size={18} />
                  <span>+90 543 418 90 34</span>
                </a>
                <a href="mailto:info@yusufalisoykan.com" className="flex items-center gap-2 text-[#F8FAFC]/70 hover:text-[#CFA670] transition-colors">
                  <Mail size={18} />
                  <span>info@yusufalisoykan.com</span>
                </a>
                <div className="flex items-start gap-2 text-[#F8FAFC]/70">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>Nişantaşı, Teşvikiye Cad. No: 123<br />Şişli, İstanbul</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#CFA670' }}>
                Sosyal Medya
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/yusufalisoykann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#0A0A0A] hover:bg-[#CFA670] transition-colors rounded-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Copyright */}
        <div className="border-t border-[#0A0A0A] mt-8 pt-8 text-center text-[#F8FAFC]/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Yusuf Ali Soykan. Tüm hakları saklıdır.</p>
          <p className="text-[12px] py-1">Powered by <a href="https://www.mfdigitalstudio.com" target="_blank"><b>MF Digital Studio</b></a></p>
        </div>
      </div>
    </footer>
  );
}
