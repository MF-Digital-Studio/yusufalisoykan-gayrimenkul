import {
  Trophy,
  Star,
  Award,
  Medal,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "../components/AnimatedSection";

export function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleScroll = () => {
    setIsAutoScrolling(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };
  const awards = [
    {
      year: "2023 – 2025",
      title: "Remax Ofis İşlem Şampiyonu",
      organization: "Remax",
      description: "Ofis içerisinde en yüksek işlem adedine ulaşmak",
      icon: <Trophy className="w-12 h-12" />,
    },
    {
      year: "2023 – 2025",
      title: "Remax Ofis Müşteri Memnuniyeti Şampiyonu",
      organization: "Remax",
      description: "Müşteri memnuniyeti değerlendirmelerinde en yüksek skor",
      icon: <Medal className="w-12 h-12" />,
    },
    {
      year: "2023 – 2024",
      title: "Remax Ofis Ciro 3.’lüğü",
      organization: "Remax",
      description: "Yıllık satış hacmi başarısı",
      icon: <Users className="w-12 h-12" />,
    },
    {
      year: "2025",
      title: "Remax Ofis Ciro 4.’lüğü",
      organization: "Remax",
      description: "Yıllık satış hacmi başarısı",
      icon: <Star className="w-12 h-12" />,
    },
    {
      year: "2025",
      title: "Remax Türkiye İşlem Sıralaması 58.’liği",
      organization: "Remax",
      description: "Türkiye genelinde işlem adedi başarısı",
      icon: <TrendingUp className="w-12 h-12" />,
    },
    {
      year: "2025",
      title: "Müşteri Memnuniyeti 2.’liği",
      organization: "Remax",
      description: "Bölgesel müşteri memnuniyeti değerlendirmeleri",
      icon: <Award className="w-12 h-12" />,
    },
  ];

  const certifications = [
    "Taşınmaz Ticareti Yetki Belgesi",
    "Emlak Danışmanlığı Sertifikası",
    "Remax Power Camp Eğitim Programı",
    "Remax Profesyonel Satış ve Pazarlama Eğitimleri",
    "Gayrimenkul hukuku ve sözleşme süreçleri eğitimleri",
    "Gayrimenkul pazarlama ve portföy yönetimi eğitimleri",
  ];

  const milestones = [
    { number: "2020", label: "Kariyere Başlangıç" },
    { number: "2012", label: "İlk Milyon TL Satış" },
    { number: "2016", label: "Kendi Ofisini Kurdu" },
    { number: "2020", label: "500+ Müşteri" },
    { number: "2024", label: "₺2M+ Toplam Satış" },
    { number: "2025", label: "6 Yıllık Deneyim" },
  ];

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
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Ödüller & Başarılar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-[#F8FAFC]/80"
            >
              6 yıllık kariyerimde elde ettiğim prestijli ödüller ve
              sertifikalar
            </motion.p>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-16 text-center text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Kariyer Kronolojisi
              </h2>
            </AnimatedSection>
            <div className="relative">
              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto scroll-snap-x-mandatory gap-6 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {[
                  {
                    year: "2020",
                    description:
                      "Gayrimenkul sektörüne giriş yaptım ve aynı yıl Remax bünyesinde danışmanlık kariyerime başladım.",
                  },
                  {
                    year: "2020 – Günümüz",
                    description:
                      "Üsküdar başta olmak üzere konut ve ticari gayrimenkul alanında aktif portföy yönetimi ve danışmanlık hizmeti vermekteyim.",
                  },
                  {
                    year: "2023 – 2024",
                    description:
                      "Remax ofisimde 80 kişilik danışman kadrosu içinde ciro 3.'lüğü elde ettim.",
                  },
                  {
                    year: "2025",
                    description:
                      "Remax ofisimde ciro 4.'lüğü elde ettim ve kariyerimde gurur duyduğum bir başarı yılı yaşadım.",
                  },
                  {
                    year: "2025",
                    description:
                      "Türkiye genelinde Remax danışmanları arasında işlem adedi sıralamasında 58. sıraya ulaştım.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-none w-80 scroll-snap-align-start"
                  >
                    <div className="bg-[#111111] p-6 rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all hover:-translate-y-1 duration-300 h-full">
                      <div
                        className="text-xl font-bold text-[#CFA670] mb-2"
                        style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                      >
                        {item.year}
                      </div>
                      <p className="text-[#F8FAFC]/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={scrollLeft}
                  className="bg-[#111111] border border-[#CFA670]/20 rounded-full p-2 hover:border-[#CFA670] hover:scale-105 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-[#CFA670]" />
                </button>
                <button
                  onClick={scrollRight}
                  className="bg-[#111111] border border-[#CFA670]/20 rounded-full p-2 hover:border-[#CFA670] hover:scale-105 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-[#CFA670]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-16 text-center text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Prestijli Ödüllerim
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid md:grid-cols-2 gap-8"
              staggerDelay={0.12}
            >
              {awards.map((award, index) => (
                <StaggerItem key={index}>
                  <div className="bg-[#0A0A0A] min-h-[225px] border border-[#CFA670]/20 rounded-lg p-8 hover:border-[#CFA670] transition-all hover:shadow-lg hover:shadow-[#CFA670]/10 hover:-translate-y-1 duration-300">
                    <div className="flex items-start gap-6">
                      <div className="text-[#CFA670] flex-shrink-0">
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#CFA670] mb-2">
                          {award.year}
                        </div>
                        <h3
                          className="text-2xl mb-2 text-[#F8FAFC]"
                          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                        >
                          {award.title}
                        </h3>
                        <p className="text-[#CFA670]/80 mb-3 text-sm">
                          {award.organization}
                        </p>
                        <p className="text-[#F8FAFC]/70">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-12 text-center text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Sertifikalar & Eğitimler
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid md:grid-cols-2 gap-4"
              staggerDelay={0.08}
            >
              {certifications.map((cert, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-4 bg-[#111111] p-5 rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all hover:-translate-y-1 duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#CFA670]/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#CFA670]" />
                    </div>
                    <span className="text-[#F8FAFC]/90">{cert}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScaleIn>
              <div className="bg-gradient-to-r from-[#CFA670]/10 to-[#CFA670]/5 border border-[#CFA670]/30 rounded-lg p-12">
                <h2
                  className="text-3xl md:text-4xl mb-8 text-center text-[#CFA670]"
                  style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                >
                  Sayılarla Başarı
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "50+", label: "Prestij Ödül" },
                    { number: "500+", label: "Mutlu Müşteri" },
                    { number: "₺10M+", label: "Toplam Satış" },
                    { number: "%98", label: "Memnuniyet Oranı" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="text-4xl md:text-5xl mb-2 text-[#CFA670]"
                        style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-[#F8FAFC]/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>
    </div>
  );
}
