import { Link } from "react-router";
import { Home } from "lucide-react";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#111111] px-6 pt-16">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-9xl mb-4 text-[#CFA670]"
          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl mb-6 text-[#F8FAFC]"
          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
        >
          Sayfa Bulunamadı
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-[#F8FAFC]/70 mb-8 max-w-md"
        >
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#CFA670] text-[#0A0A0A] px-8 py-4 rounded-lg hover:bg-[#CFA670]/90 transition-all text-lg group"
          >
            <Home size={20} />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
