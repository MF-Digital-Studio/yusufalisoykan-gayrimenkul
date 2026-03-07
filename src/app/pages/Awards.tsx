import { Trophy, Star, Award, Medal, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection, StaggerChildren, StaggerItem, ScaleIn } from "../components/AnimatedSection";

export function Awards() {
  const awards = [
    {
      year: "2025",
      title: "Yılın Gayrimenkul Danışmanı",
      organization: "Türkiye Gayrimenkul Profesyonelleri Derneği",
      description: "Lüks konut segmentinde en yüksek satış performansı",
      icon: <Trophy className="w-12 h-12" />
    },
    {
      year: "2024",
      title: "Platinum Satış Ödülü",
      organization: "Luxury Real Estate International",
      description: "500 Milyon TL üzeri toplam satış hacmi",
      icon: <Medal className="w-12 h-12" />
    },
    {
      year: "2024",
      title: "En İyi Müşteri Memnuniyeti",
      organization: "İstanbul Emlakçılar Odası",
      description: "%98 müşteri memnuniyet oranı",
      icon: <Users className="w-12 h-12" />
    },
    {
      year: "2023",
      title: "Global Excellence Award",
      organization: "World Luxury Property Awards",
      description: "Uluslararası lüks gayrimenkul kategorisinde üstün başarı",
      icon: <Star className="w-12 h-12" />
    },
    {
      year: "2023",
      title: "En Yüksek Satış Hacmi",
      organization: "Türkiye Gayrimenkul Zirvesi",
      description: "Bireysel danışman kategorisinde 1. sıra",
      icon: <TrendingUp className="w-12 h-12" />
    },
    {
      year: "2022",
      title: "Professional Excellence Award",
      organization: "European Real Estate Association",
      description: "Profesyonel etik ve başarı ödülü",
      icon: <Award className="w-12 h-12" />
    },
  ];

  const certifications = [
    "Uluslararası Gayrimenkul Danışmanı (CIPS)",
    "Lüks Gayrimenkul Uzmanı Sertifikası",
    "Gayrimenkul Değerleme Uzmanlığı",
    "Yatırım Danışmanlığı Lisansı",
    "Profesyonel Emlak Danışmanı (REINP)",
    "İngilizce İleri Seviye (C1)",
  ];

  const milestones = [
    { number: "2008", label: "Kariyere Başlangıç" },
    { number: "2012", label: "İlk Milyon TL Satış" },
    { number: "2016", label: "Kendi Ofisini Kurdu" },
    { number: "2020", label: "500+ Müşteri" },
    { number: "2024", label: "₺2M+ Toplam Satış" },
    { number: "2025", label: "15 Yıllık Deneyim" },
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
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Ödüller & Başarılar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-[#F8FAFC]/80"
            >
              15 yıllık kariyerimde elde ettiğim prestijli ödüller ve sertifikalar
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-16 text-center text-[#CFA670]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Kariyer Kilometre Taşları
              </h2>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" staggerDelay={0.1}>
              {milestones.map((milestone, index) => (
                <StaggerItem key={index}>
                  <div className="text-center">
                    <div className="bg-[#111111] border-2 border-[#CFA670] rounded-lg p-6 mb-3">
                      <div
                        className="text-3xl text-[#CFA670]"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                      >
                        {milestone.number}
                      </div>
                    </div>
                    <p className="text-sm text-[#F8FAFC]/70">{milestone.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
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
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Prestijli Ödüllerim
              </h2>
            </AnimatedSection>
            <StaggerChildren className="grid md:grid-cols-2 gap-8" staggerDelay={0.12}>
              {awards.map((award, index) => (
                <StaggerItem key={index}>
                  <div
                    className="bg-[#0A0A0A] min-h-[225px] border border-[#CFA670]/20 rounded-lg p-8 hover:border-[#CFA670] transition-all hover:shadow-lg hover:shadow-[#CFA670]/10 hover:-translate-y-1 duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-[#CFA670] flex-shrink-0">
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#CFA670] mb-2">{award.year}</div>
                        <h3
                          className="text-2xl mb-2 text-[#F8FAFC]"
                          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                        >
                          {award.title}
                        </h3>
                        <p className="text-[#CFA670]/80 mb-3 text-sm">
                          {award.organization}
                        </p>
                        <p className="text-[#F8FAFC]/70">
                          {award.description}
                        </p>
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
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Sertifikalar & Eğitimler
              </h2>
            </AnimatedSection>
            <StaggerChildren className="grid md:grid-cols-2 gap-4" staggerDelay={0.08}>
              {certifications.map((cert, index) => (
                <StaggerItem key={index}>
                  <div
                    className="flex items-center gap-4 bg-[#111111] p-5 rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all hover:-translate-y-1 duration-300"
                  >
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
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  Sayılarla Başarı
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "50+", label: "Prestij Ödül" },
                    { number: "500+", label: "Mutlu Müşteri" },
                    { number: "₺2M+", label: "Toplam Satış" },
                    { number: "%98", label: "Memnuniyet Oranı" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="text-4xl md:text-5xl mb-2 text-[#CFA670]"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
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
