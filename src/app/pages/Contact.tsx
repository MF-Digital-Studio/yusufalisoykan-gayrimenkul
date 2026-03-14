import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";

const GOOGLE_MAPS_LOCATION_URL =
  "https://www.google.com/maps/dir//RE%2FMAX+%C3%9Csk%C3%BCdar+%7C+Yusuf+Soykan+-+Emlak+Dan%C4%B1%C5%9Fman%C4%B1,+Ac%C4%B1badem,+218%2FA+Alparslan+i%C5%9F+merkezi,+34660+%C3%9Csk%C3%BCdar%2F%C4%B0stanbul/@41.0495772,29.0809008,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cac94a19f63edb:0x9c21d28c81b96d58!2m2!1d29.0545305!2d41.0128811?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5655608708403!2d29.054530500000002!3d41.0128811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac94a19f63edb%3A0x9c21d28c81b96d58!2zUkUvTUFYIMOcc2vDvGRhciB8IFl1c3VmIFNveWthbiAtIEVtbGFrIERhbsSxxZ9tYW7EsQ!5e0!3m2!1str!2str!4v1773010421168!5m2!1str!2str";

const SUBJECT_OPTIONS = [
  "Satılık Mülk İlanı Vermek İstiyorum",
  "Kiralık Mülk İlanı Vermek İstiyorum",
  "Gayrimenkul Değerleme / Ekspertiz",
  "Satın Almak İçin Danışmanlık",
  "Kiralık Yer Arıyorum",
  "Yatırım Fırsatları Hakkında Bilgi",
  "Tapu ve Hukuki Süreçler",
  "Diğer",
] as const;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    customSubject: "",
    message: "",
  });

  const [botField, setBotField] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(Date.now());
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const selectedSubject = formData.subject.trim();
    const customSubject = formData.customSubject.trim();
    const subject = selectedSubject === "Diğer" ? customSubject : selectedSubject;
    const message = formData.message.trim();

    if (!name || !email || !phone || !subject || !message) {
      setSubmitStatus("error");
      setSubmitError("Lütfen zorunlu alanların tamamını doldurun.");
      return;
    }

    if (botField) {
      setSubmitStatus("error");
      setSubmitError("Gönderim engellendi.");
      return;
    }

    setSubmitStatus("submitting");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          website: botField,
          formStartedAt,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      }

      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", subject: "", customSubject: "", message: "" });
        setBotField("");
        setFormStartedAt(Date.now());
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(error instanceof Error ? error.message : "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "subject" && value !== "Diğer" ? { customSubject: "" } : {}),
    });
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#CFA670]"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              İletişim
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-[#F8FAFC]/80"
            >
              Size özel gayrimenkul danışmanlığı için benimle iletişime geçin
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-[#111111] rounded-lg p-8 border border-[#CFA670]/20">
                <h2
                  className="text-3xl mb-6 text-[#CFA670]"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  Mesaj Gönderin
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="website"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div>
                    <label htmlFor="name" className="block text-[#F8FAFC]/90 mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#CFA670]/30 rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#CFA670] transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#F8FAFC]/90 mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#CFA670]/30 rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#CFA670] transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#F8FAFC]/90 mb-2">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#CFA670]/30 rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#CFA670] transition-colors"
                      placeholder="+90 555 123 1223"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[#F8FAFC]/90 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#CFA670]/30 rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#CFA670] transition-colors"
                    >
                      <option value="" disabled>
                        Konu seçiniz
                      </option>
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <AnimatePresence initial={false}>
                    {formData.subject === "Diğer" && (
                      <motion.div
                        key="custom-subject"
                        initial={{ opacity: 0, y: -6, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -6, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <label htmlFor="customSubject" className="block text-[#F8FAFC]/90 mb-2">
                          Özel Konu *
                        </label>
                        <input
                          type="text"
                          id="customSubject"
                          name="customSubject"
                          value={formData.customSubject}
                          onChange={handleChange}
                          required={formData.subject === "Diğer"}
                          className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#CFA670]/30 rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#CFA670] transition-colors"
                          placeholder="Konu başlığınızı yazın"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label htmlFor="message" className="block text-[#F8FAFC]/90 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#CFA670]/30 rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#CFA670] transition-colors resize-none"
                      placeholder="Nasıl yardımcı olabilirim?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === "submitting"}
                    className="w-full bg-[#CFA670] text-[#0A0A0A] py-4 rounded-lg hover:bg-[#CFA670]/90 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span className="text-lg">{submitStatus === "submitting" ? "Gönderiliyor..." : "Gönder"}</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-center"
                      aria-live="polite"
                    >
                      Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-center"
                      aria-live="polite"
                    >
                      {submitError}
                    </motion.div>
                  )}
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-3xl mb-6 text-[#CFA670]"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    İletişim Bilgileri
                  </h2>
                  <div className="space-y-6">
                    <a
                      href="tel:+905551234567"
                      className="flex items-start gap-4 p-6 bg-[#111111] rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all group"
                    >
                      <div className="w-12 h-12 bg-[#CFA670]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#CFA670] transition-colors">
                        <Phone className="w-6 h-6 text-[#CFA670] group-hover:text-[#0A0A0A]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#F8FAFC]/60 mb-1">Telefon</div>
                        <div className="text-lg text-[#F8FAFC]">+90 543 418 90 34</div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@yusufalisoykan.com"
                      className="flex items-start gap-4 p-6 bg-[#111111] rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all group"
                    >
                      <div className="w-12 h-12 bg-[#CFA670]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#CFA670] transition-colors">
                        <Mail className="w-6 h-6 text-[#CFA670] group-hover:text-[#0A0A0A]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#F8FAFC]/60 mb-1">E-posta</div>
                        <div className="text-lg text-[#F8FAFC]">info@yusufalisoykan.com</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-6 bg-[#111111] rounded-lg border border-[#CFA670]/20">
                      <div className="w-12 h-12 bg-[#CFA670]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#CFA670]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#F8FAFC]/60 mb-1">Adres</div>
                        <div className="text-lg text-[#F8FAFC]">
                          Acıbadem, 218/A Alparslan iş merkezi,<br /> 34660 Üsküdar/İstanbul
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-[#111111] rounded-lg p-6 border border-[#CFA670]/20">
                  <h3
                    className="text-2xl mb-4 text-[#CFA670]"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    Çalışma Saatleri
                  </h3>
                  <div className="space-y-3 text-[#F8FAFC]/80">
                    <div className="flex justify-between">
                      <span>Pazartesi - Pazar</span>
                      <span className="text-[#CFA670]">24 Saat</span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span>Cumartesi</span>
                      <span className="text-[#CFA670]">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pazar</span>
                      <span className="text-[#F8FAFC]/50">Randevuyla</span>
                    </div> */}
                  </div>
                </div>

                {/* Map Preview */}
                <a
                  href={GOOGLE_MAPS_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps konumunu yeni sekmede ac"
                  className="block bg-[#111111] rounded-lg overflow-hidden border border-[#CFA670]/20"
                >
                  <div className="aspect-video bg-[#0A0A0A] relative">
                    <iframe
                      src={GOOGLE_MAPS_EMBED_URL}
                      title="RE/MAX Uskudar Ofis Konumu"
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
