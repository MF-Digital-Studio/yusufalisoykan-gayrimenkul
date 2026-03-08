import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    const message = formData.message.trim();

    if (!name || !email || !phone || !message) {
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
        setFormData({ name: "", email: "", phone: "", message: "" });
        setBotField("");
        setFormStartedAt(Date.now());
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(error instanceof Error ? error.message : "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
                      placeholder="+90 555 123 45 67"
                    />
                  </div>

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
                        <div className="text-lg text-[#F8FAFC]">+90 555 123 45 67</div>
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
                          Nişantaşı, Teşvikiye Cad. No: 123<br />
                          Şişli, İstanbul, 34365
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
                      <span>Pazartesi - Cuma</span>
                      <span className="text-[#CFA670]">09:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cumartesi</span>
                      <span className="text-[#CFA670]">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pazar</span>
                      <span className="text-[#F8FAFC]/50">Randevuyla</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-[#111111] rounded-lg overflow-hidden border border-[#CFA670]/20">
                  <div className="aspect-video bg-[#0A0A0A] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#0A0A0A] flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-[#CFA670] mx-auto mb-4" />
                        <p className="text-[#F8FAFC]/60">Google Maps</p>
                        <p className="text-sm text-[#F8FAFC]/40 mt-2">Nişantaşı, İstanbul</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}


