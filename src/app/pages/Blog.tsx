import { Link } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { StaggerChildren, StaggerItem } from "../components/AnimatedSection";

export function Blog() {
  const blogPosts = [
    {
      id: "1",
      title: "2026'da İstanbul'da Lüks Konut Yatırımı: Hangi Bölgeler Öne Çıkıyor?",
      date: "5 Mart 2026",
      excerpt: "İstanbul'un lüks konut pazarında yatırım yapmak isteyenler için en karlı bölgeler ve gelecek trendleri hakkında detaylı bir analiz.",
      image: "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NzI4NTU4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Yatırım"
    },
    {
      id: "2",
      title: "Ev Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta",
      date: "28 Şubat 2026",
      excerpt: "Hayalinizdeki evi satın alırken göz önünde bulundurmanız gereken önemli faktörler ve profesyonel öneriler.",
      image: "https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjkxNDY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Rehber"
    },
    {
      id: "3",
      title: "Penthouse Yaşamı: Avantajları ve Lüks Yaşam Tarzı",
      date: "20 Şubat 2026",
      excerpt: "Penthouse dairelerin sunduğu eşsiz yaşam deneyimi ve bu özel konutların neden tercih edildiği hakkında her şey.",
      image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3Mjg3NDE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Yaşam Tarzı"
    },
    {
      id: "4",
      title: "Gayrimenkul Piyasasında Doğru Fiyat Belirleme Stratejileri",
      date: "15 Şubat 2026",
      excerpt: "Mülkünüzü satarken veya alırken en doğru fiyatı belirlemek için kullanabileceğiniz profesyonel yöntemler.",
      image: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzI3OTcwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Piyasa"
    },
    {
      id: "5",
      title: "Boğaz Manzaralı Evler: İstanbul'un İncisi",
      date: "8 Şubat 2026",
      excerpt: "Boğaz manzarasına sahip lüks konutlar ve bu prestijli lokasyonların sunduğu benzersiz yaşam kalitesi.",
      image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI5MTA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Lokasyon"
    },
    {
      id: "6",
      title: "Smart Home Teknolojileri ve Modern Yaşam",
      date: "1 Şubat 2026",
      excerpt: "Lüks konutlarda akıllı ev sistemlerinin kullanımı ve yaşam konforunuza sağladığı katkılar.",
      image: "https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjkxNDY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknoloji"
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
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-[#F8FAFC]/80"
            >
              Gayrimenkul dünyası hakkında uzman görüşleri ve değerli bilgiler
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <StaggerChildren className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <article
                  className="bg-[#111111] rounded-lg overflow-hidden border border-[#CFA670]/20 hover:border-[#CFA670] transition-all group hover:-translate-y-1 duration-300 min-h-[500px]"
                >
                  {/* Image */}
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

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[#F8FAFC]/60 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <h2
                      className="text-2xl mb-3 text-[#F8FAFC] group-hover:text-[#CFA670] transition-colors"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-[#F8FAFC]/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/icerikler/${post.id}`}
                      className="inline-flex items-center gap-2 text-[#CFA670] hover:gap-4 transition-all group/link"
                    >
                      <span>Devamını Oku</span>
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}
