import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import heroVideoFile from "../assets/hero-video.mp4";
import aboutVideoFile from "../assets/about-video.mp4";

export function Home() {
  const heroVideoSrc = heroVideoFile;

  const aboutVideoSrc = aboutVideoFile;

  return (
    <div className="pt-16">
      {/* Hero Section with Background Video */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `` }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={heroVideoSrc} type="video/mp4" />
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]/90" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl lg:text-8xl mb-4 font-light text-[#CFA670]"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            <b className="font-medium">Yusuf</b> Ali Soykan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-md md:text-lg lg:text-xl mb-8 text-[#F8FAFC]/90"
          >
            Gayrimenkul Danışmanı
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-[#CFA670] text-[#0A0A0A] px-6 py-3 rounded-lg hover:bg-[#CFA670]/90 transition-all text-md group"
            >
              İletişime Geç
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-[#CFA670] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#CFA670] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Short About Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <div
                className="relative aspect-[3/4] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `` }}
              >
                <video
                  className="w-full h-full object-cover motion-reduce:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                >
                  <source src={aboutVideoSrc} type="video/mp4" />
                  <source src={heroVideoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" className="order-1 md:order-2">
              <h2
                className="text-4xl md:text-5xl mb-6 text-[#CFA670]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Hakkımda
              </h2>
              <p className="text-lg text-[#F8FAFC]/80 mb-6 leading-relaxed">
                15 yılı aşkın deneyimimle lüks gayrimenkul sektöründe, müşterilerime en prestijli konutları ve yatırım fırsatlarını sunuyorum. İstanbul'un en seçkin bölgelerinde, hayalinizdeki yaşam alanını bulmanız için profesyonel danışmanlık hizmeti veriyorum.
              </p>
              <p className="text-lg text-[#F8FAFC]/80 mb-8 leading-relaxed">
                Her müşterimin kendine özgü ihtiyaçları ve beklentileri olduğunun farkındayım. Bu nedenle, size özel çözümler sunarak, gayrimenkul yolculuğunuzda güvenilir bir partner olmayı hedefliyorum.
              </p>
              <Link
                to="/hakkinda"
                className="inline-flex items-center gap-2 text-[#CFA670] hover:gap-4 transition-all group"
              >
                <span className="text-lg">Detaylı Bilgi</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <StaggerChildren className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Yıl Deneyim" },
              { number: "500+", label: "Mutlu Müşteri" },
              { number: "₺2M+", label: "Toplam Satış" },
              { number: "50+", label: "Prestij Ödüller" },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div
                    className="text-4xl md:text-5xl mb-2 text-[#CFA670]"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-[#F8FAFC]/70">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}
