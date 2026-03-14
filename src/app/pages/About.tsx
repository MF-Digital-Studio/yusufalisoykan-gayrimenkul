import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Award,
  Target,
  Heart,
  TrendingUp,
  Check,
  Shield,
  Scale,
  Building,
  Eye,
  BarChart3,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQ";
import profileImg from "../assets/profile.jpg";

export function About() {
  const faqs = [
    {
      question: "Evimi satmak ne kadar sürer?",
      answer:
        "Doğru fiyatlandırma ve doğru pazarlama ile çoğu gayrimenkul kısa sürede alıcısıyla buluşur.",
    },
    {
      question: "Evimi satarken ekspertiz yaptırmalı mıyım?",
      answer:
        "Doğru fiyat belirlemek için ekspertiz veya piyasa analizi oldukça önemlidir.",
    },
    {
      question: "Evi satarken tüm işlemleri kim takip eder?",
      answer:
        "Tapu, sözleşme ve pazarlama sürecinin tamamını danışman olarak ben yönetiyorum.",
    },
    {
      question: "Kiraya verirken kiracıyı nasıl seçiyorsunuz?",
      answer:
        "Referans, gelir durumu ve ödeme alışkanlıkları analiz edilerek doğru kiracı seçimi yapılır.",
    },
    {
      question: "Emlak danışmanı ile çalışmak neden avantajlıdır?",
      answer:
        "Doğru fiyatlandırma, geniş müşteri ağı ve profesyonel pazarlama sayesinde süreç daha hızlı ve güvenli ilerler.",
    },
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
                  <img
                    src={profileImg}
                    alt="profile-picture"
                    className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#CFA670]/10 rounded-lg -z-10" />
              </div>
            </AnimatedSection>

            {/* Biography Text */}
            <AnimatedSection direction="right">
              <h2
                className="text-3xl md:text-4xl mb-6 text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Kariyer Hikayem
              </h2>
              <div className="space-y-4 text-[#F8FAFC]/80 text-lg leading-relaxed">
                <p>
                  Gayrimenkul sektöründe yaklaşık 6 yıldır aktif olarak
                  çalışıyorum ve bu yolculuğa Remax Piramit Acıbadem bünyesinde
                  başladım. İstanbul Anadolu Yakası’nda, özellikle Üsküdar ve
                  çevresinde konut ve ticari gayrimenkul alanında danışmanlık
                  hizmeti veriyorum. Bugüne kadar yüzlerce müşteriyle çalışma
                  fırsatı buldum ve farklı beklentilere sahip birçok insanın
                  gayrimenkul süreçlerine eşlik ettim. Her işlem bana hem
                  sektörü hem de insanları daha iyi anlamayı öğretti.
                </p>
                <p>
                  Gayrimenkul benim için sadece bir satış işi değil. İnsanların
                  hayatındaki önemli kararların bir parçası olduğum bir süreç.
                  Bu yüzden her danışmanlık sürecinde önceliğim doğru iletişim
                  kurmak, ihtiyaçları iyi anlamak ve en doğru stratejiyi
                  belirlemek oluyor. Stratejik düşünmek, detaylara önem vermek
                  ve süreci şeffaf şekilde yönetmek çalışma tarzımın temelini
                  oluşturuyor.
                </p>
                <p>
                  Sektöre başlamadan önce farklı bir alanda çalışmış olmam da
                  bana önemli bir bakış açısı kazandırdı. İş disiplinini,
                  müşteri ilişkilerini ve süreç yönetimini farklı deneyimlerle
                  öğrenmiş olmak bugün yaptığım işte bana büyük avantaj
                  sağlıyor. Gayrimenkulde ise en önemli şeyin güven ve
                  sürdürülebilir ilişkiler kurmak olduğuna inanıyorum.
                </p>
                <p>
                  Bugün geldiğim noktada hem portföy yönetimi hem de danışmanlık
                  süreçlerinde edindiğim tecrübeyle müşterilerime en doğru
                  yönlendirmeyi yapmaya çalışıyorum. Benim için en değerli
                  başarı ise bir işlemden sonra müşterilerimle kurduğumuz güven
                  ilişkisinin devam etmesi ve yıllar sonra bile tekrar birlikte
                  çalışabilmemiz.
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
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Çalışma Felsefem
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              staggerDelay={0.15}
            >
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Mükemmellik",
                  description:
                    "Her detayda mükemmelliği hedefleyerek, size en kaliteli hizmeti sunmak için çalışıyorum.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Hedef Odaklılık",
                  description:
                    "İhtiyaçlarınızı tam olarak anlayarak, hedeflerinize ulaşmanız için en uygun çözümleri üretiyorum.",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Müşteri Odaklılık",
                  description:
                    "Her müşterim benim için özeldir. Kişiye özel hizmet sunarak, uzun vadeli ilişkiler kuruyorum.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Yenilikçilik",
                  description:
                    "Sektördeki en yeni trendleri ve teknolojileri takip ederek, size en iyi fırsatları sunuyorum.",
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="bg-[#0A0A0A] min-h-[260px] p-6 rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all hover:-translate-y-1 duration-300">
                    <div className="text-[#CFA670] mb-4">{item.icon}</div>
                    <h3
                      className="text-xl mb-3 text-[#CFA670]"
                      style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#F8FAFC]/70">{item.description}</p>
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
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-12 text-center text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Uzmanlık Alanlarım
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid md:grid-cols-2 gap-6"
              staggerDelay={0.08}
            >
              {[
                "Üsküdar bölgesi konut piyasası uzmanlığı",
                "Satılık konut danışmanlığı",
                "Kiralık konut danışmanlığı",
                "Yatırım amaçlı gayrimenkul danışmanlığı",
                "Ticari gayrimenkul (dükkan / ofis) danışmanlığı",
                "Gayrimenkul pazarlama ve portföy yönetimi",
                "Bölgesel piyasa analizi ve fiyatlandırma danışmanlığı",
                "İlk kez ev alacak müşterilere danışmanlık",
                "Gayrimenkul değerleme ön analizi",
                "Gayrimenkul yatırım fırsatları danışmanlığı",
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

      {/* Why Yusuf Ali Soykan Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-12 text-center text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Neden Yusuf Ali Soykan?
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid md:grid-cols-2 gap-6"
              staggerDelay={0.08}
            >
              {[
                "Üsküdar bölgesinde güçlü piyasa bilgisi ve aktif portföy ağı",
                "Profesyonel pazarlama ve etkili ilan stratejileri",
                "Doğru fiyat analizi ile hızlı satış ve kiralama süreçleri",
                "Tapu ve sözleşme süreçlerinde güvenli ve şeffaf danışmanlık",
                "Remax Türkiye işlem sıralamasında ilk 100 danışman arasında yer alma başarısı",
              ].map((reason, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 h-full bg-[#0A0A0A] p-4 rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all hover:-translate-y-1 duration-300">
                    <Check className="w-5 h-5 text-[#CFA670] shrink-0" />
                    <span className="text-[#F8FAFC]/90">{reason}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl md:text-5xl mb-12 text-center text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Size sunduğum özel hizmetler
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.15}
            >
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  service:
                    "Kiraya verilen mülklerde 2 ay kira garantisi ve 3 ay kira takip hizmeti",
                },
                {
                  icon: <Scale className="w-8 h-8" />,
                  service:
                    "Kiracı süreçlerinde hukuki danışmanlık ve avukat desteği",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  service:
                    "Kiraya verilen mülklerde yıllık kira artış oranlarının tarafımdan takip edilmesi",
                },
                {
                  icon: <Building className="w-8 h-8" />,
                  service:
                    "Kentsel dönüşüm süreçlerinde malikler adına toplantılara katılım ve danışmanlık",
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  service:
                    "Satış süreçlerinde tam şeffaflık (alış ve satış verilerinin paylaşılması)",
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  service:
                    "Mülk sahiplerine aylık pazarlama ve süreç raporlaması",
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  service:
                    "Satış ve kiralama portföyleri için Google ve emlak platformlarında profesyonel reklam çalışmaları",
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="bg-[#111111] min-h-[200px] p-6 rounded-lg border border-[#CFA670]/20 hover:border-[#CFA670] transition-all hover:-translate-y-1 duration-300">
                    <div className="text-[#CFA670] mb-4">{item.icon}</div>
                    <p className="text-[#F8FAFC]/80 text-sm leading-relaxed">
                      {item.service}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
