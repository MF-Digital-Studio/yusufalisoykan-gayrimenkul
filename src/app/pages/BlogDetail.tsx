import { Link, useParams } from "react-router";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "../components/AnimatedSection";

export function BlogDetail() {
  const { id } = useParams();

  const blogPost = {
    id: id || "1",
    title:
      "2026'da İstanbul'da Lüks Konut Yatırımı: Hangi Bölgeler Öne Çıkıyor?",
    date: "5 Mart 2026",
    category: "Yatırım",
    image:
      "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NzI4NTU4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
      <p>İstanbul, Türkiye'nin en prestijli gayrimenkul pazarı olmaya devam ediyor. 2026 yılında lüks konut segmentinde öne çıkan bölgeler, yatırımcılar için önemli fırsatlar sunuyor. Bu yazımda, lık deneyimimle edindiğim bilgileri sizlerle paylaşacağım.</p>

      <h2>Beşiktaş ve Boğaz Manzarası</h2>
      <p>Beşiktaş, özellikle Boğaz manzaralı projeleriyle lüks konut pazarının gözdesi olmaya devam ediyor. Bölgedeki yeni projeler, modern mimari ve teknoloji ile donatılmış, metrekare fiyatları 100.000 TL'yi aşan seviyelerde seyrediyor.</p>

      <p>Bölgenin avantajları arasında merkezi konumu, ulaşım kolaylığı ve prestijli komşuluğu sayabiliriz. Beşiktaş'ta yatırım yaparken dikkat edilmesi gereken en önemli nokta, manzara ve konumdur.</p>

      <h2>Nişantaşı: Şehrin Kalbinde Lüks</h2>
      <p>Nişantaşı, İstanbul'un en köklü ve prestijli semtlerinden biri olarak, lüks konut pazarında özel bir yere sahip. Bölgedeki tarihi binalar restore edilerek modern lüks konutlara dönüştürülüyor.</p>

      <p>Özellikle butik projelerde görülen artış, bölgeye olan ilgiyi gösteriyor. Nişantaşı'nda 200 metrekare üzeri daireler, yüksek getiri potansiyeline sahip yatırım fırsatları sunuyor.</p>

      <h2>Sarıyer: Doğa ve Lüks Bir Arada</h2>
      <p>Sarıyer bölgesi, Boğaz manzarası, yeşil alanlar ve sakin yaşam alanlarıyla lüks villa ve konut projelerinin merkezi haline geldi. Özellikle Tarabya, Yeniköy ve Istinye gibi mahalleler, ultra lüks projelerle dikkat çekiyor.</p>

      <h2>Etiler: Yatırımın Değişmez Adresi</h2>
      <p>Etiler, İstanbul'un en değerli ve istikrarlı gayrimenkul bölgelerinden biri. Hem iş hem de yaşam merkezi olan bölge, yüksek kiralama getirisi ve değer artışı potansiyeli sunuyor.</p>

      <h2>Yatırım Tavsiyeleri</h2>
      <p>Lüks konut yatırımı yaparken şu noktalara dikkat etmenizi öneririm:</p>
      <ul>
        <li>Projenin lokasyonunu ve çevresel faktörleri detaylı analiz edin</li>
        <li>Geliştiricinin referanslarını ve geçmiş projelerini inceleyin</li>
        <li>Manzara ve konumun uzun vadeli değerini değerlendirin</li>
        <li>Bölgenin gelecek projeksiyonlarını araştırın</li>
        <li>Profesyonel danışmanlık alın</li>
      </ul>

      <h2>Sonuç</h2>
      <p>2026 yılında İstanbul'un lüks konut pazarı, doğru bölge ve proje seçimiyle yüksek getiri potansiyeli sunuyor. Yatırım yapmadan önce detaylı araştırma yapmanız ve profesyonel destek almanız önemlidir. Benimle iletişime geçerek, size özel yatırım danışmanlığı hizmeti alabilirsiniz.</p>
    `,
  };

  const relatedPosts = [
    {
      id: "2",
      title: "Ev Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta",
      image:
        "https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjkxNDY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Rehber",
    },
    {
      id: "3",
      title: "Penthouse Yaşamı: Avantajları ve Lüks Yaşam Tarzı",
      image:
        "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3Mjg3NDE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Yaşam Tarzı",
    },
    {
      id: "4",
      title: "Gayrimenkul Piyasasında Doğru Fiyat Belirleme Stratejileri",
      image:
        "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzI3OTcwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Piyasa",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0A0A0A] py-6 border-b border-[#111111]"
      >
        <div className="container mx-auto px-6">
          <Link
            to="/icerikler"
            className="inline-flex items-center gap-2 text-[#CFA670] hover:gap-4 transition-all"
          >
            <ArrowLeft size={18} />
            <span>Tüm İçeriklere Dön</span>
          </Link>
        </div>
      </motion.div>

      {/* Hero Image */}
      <section className="bg-[#0A0A0A]">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="aspect-video rounded-lg overflow-hidden mb-8"
            >
              <ImageWithFallback
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Category & Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="bg-[#CFA670] text-[#0A0A0A] px-4 py-1.5 rounded-full">
                {blogPost.category}
              </span>
              <div className="flex items-center gap-2 text-[#F8FAFC]/60">
                <Calendar size={18} />
                <span>{blogPost.date}</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl mb-8 text-[#F8FAFC]"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              {blogPost.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-[#111111] py-12">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-invert max-w-none"
              style={{
                color: "#F8FAFC",
              }}
            >
              <style>{`
                .prose h2 {
                  font-family: 'Barlow Condensed', sans-serif;
                  color: #CFA670;
                  font-size: 2rem;
                  margin-top: 2.5rem;
                  margin-bottom: 1.25rem;
                }
                .prose p {
                  color: rgba(248, 250, 252, 0.9);
                  line-height: 1.8;
                  margin-bottom: 1.5rem;
                  font-size: 1.125rem;
                }
                .prose ul {
                  margin-top: 1.5rem;
                  margin-bottom: 1.5rem;
                  padding-left: 1.5rem;
                }
                .prose li {
                  color: rgba(248, 250, 252, 0.9);
                  margin-bottom: 0.5rem;
                  line-height: 1.8;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2
                className="text-4xl mb-12 text-center text-[#CFA670]"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Benzer Yazılar
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid md:grid-cols-3 gap-8"
              staggerDelay={0.12}
            >
              {relatedPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <article className="bg-[#111111] rounded-lg overflow-hidden border border-[#CFA670]/20 hover:border-[#CFA670] transition-all group hover:-translate-y-1 duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#CFA670] text-[#0A0A0A] px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-xl mb-4 text-[#F8FAFC] group-hover:text-[#CFA670] transition-colors"
                        style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                      >
                        {post.title}
                      </h3>
                      <Link
                        to={`/icerikler/${post.id}`}
                        className="inline-flex items-center gap-2 text-[#CFA670] hover:gap-4 transition-all group/link"
                      >
                        <span>Devamını Oku</span>
                        <ArrowRight
                          size={18}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </div>
  );
}
