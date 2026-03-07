import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import profileImg from "../assets/profile.jpg";

export function About() {
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
              Hakkımda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-[#F8FAFC]/80"
            >
              Lüks gayrimenkul dünyasında tutkuyla çalışan bir profesyonel
            </motion.p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img src={profileImg} alt="profile-picture" className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#CFA670]/10 rounded-lg -z-10" />
              </div>
            </AnimatedSection>

            {/* Biography Text */}
            <AnimatedSection direction="right">
              <h2
                className="text-3xl md:text-4xl mb-6 text-[#CFA670]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Kariyer Hikayem
              </h2>
              <div className="space-y-4 text-[#F8FAFC]/80 text-lg leading-relaxed">
                <p>
                  2008 yılında başladığım gayrimenkul kariyerimde, İstanbul'un en prestijli bölgelerinde lüks konut ve yatırım projelerinde uzmanlaştım. Mimar Sinan Güzel Sanatlar Üniversitesi'nden mezun olduktan sonra, gayrimenkul sektörüne olan tutkum beni bu yola yönlendirdi.
                </p>
                <p>
                  Kariyerim boyunca, 500'den fazla müşteriye hizmet verdim ve toplam değeri 2 milyar TL'yi aşan satış hacmine ulaştım. Her bir müşterimle kurduğum güven ilişkisi ve sunduğum kişiselleştirilmiş hizmet, başarımın temel taşlarını oluşturdu.
                </p>
                <p>
                  Nişantaşı, Etiler, Bebek, Beşiktaş ve Sarıyer gibi İstanbul'un en gözde lokasyonlarında derin bir pazar bilgisine sahibim. Lüks yaşam tarzını ve müşteri beklentilerini anlama konusundaki yetkinliğim, her projede fark yaratmamı sağlıyor.
                </p>
                <p>
                  Sektördeki başarılarım, Türkiye Gayrimenkul Profesyonelleri Derneği ve uluslararası emlak organizasyonları tarafından birçok ödülle taçlandırıldı. Ancak en büyük ödülüm, müşterilerimin memnuniyeti ve hayallerindeki evi bulmalarına yardımcı olmaktır.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-12 text-center text-[#CFA670]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Çalışma Felsefem
              </h2>
            </AnimatedSection>
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Mükemmellik",
                  description: "Her detayda mükemmelliği hedefleyerek, size en kaliteli hizmeti sunmak için çalışıyorum."
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Hedef Odaklılık",
                  description: "İhtiyaçlarınızı tam olarak anlayarak, hedeflerinize ulaşmanız için en uygun çözümleri üretiyorum."
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Müşteri Odaklılık",
                  description: "Her müşterim benim için özeldir. Kişiye özel hizmet sunarak, uzun vadeli ilişkiler kuruyorum."
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Yenilikçilik",
                  description: "Sektördeki en yeni trendleri ve teknolojileri takip ederek, size en iyi fırsatları sunuyorum."
                }
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="bg-[#0A0A0A] min-h-[260px] p-6 rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all hover:-translate-y-1 duration-300">
                    <div className="text-[#CFA670] mb-4">
                      {item.icon}
                    </div>
                    <h3
                      className="text-xl mb-3 text-[#CFA670]"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#F8FAFC]/70">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-12 text-center text-[#CFA670]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Uzmanlık Alanlarım
              </h2>
            </AnimatedSection>
            <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.08}>
              {[
                "Lüks Rezidans Satışı",
                "Penthouse ve Villa Pazarlaması",
                "Yatırım Danışmanlığı",
                "Premium Lokasyon Analizi",
                "Uluslararası Müşteri Hizmetleri",
                "Gayrimenkul Portföy Yönetimi",
                "Özel Proje Danışmanlığı",
                "VIP Müşteri İlişkileri Yönetimi"
              ].map((area, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 bg-[#111111] p-4 rounded-lg hover:bg-[#111111]/80 transition-all">
                    <div className="w-2 h-2 bg-[#CFA670] rounded-full" />
                    <span className="text-[#F8FAFC]/90">{area}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </div>
  );
}
