import React from "react";
import { Link } from "react-router";
import remaxLogo from "../assets/remax_logo.png";

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Side */}
          <div className="flex justify-center md:justify-end">
            <img
              src={remaxLogo}
              alt="RE/MAX Logo"
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>

          {/* Text Side */}
          <div className="text-center md:text-left">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#CFA670] mb-6 leading-tight"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Yusuf Ali Soykan ile Gayrimenkulde 6 Yıllık RE/MAX Tecrübesi
            </h2>
            <p className="text-lg text-[#F8FAFC]/80 mb-8 max-w-md">
              Profesyonel danışmanlık ve RE/MAX uzmanlığıyla hayalinizdeki mülke
              güvenle ulaşın.
            </p>
            <Link
              to="/iletisim"
              className="inline-block bg-[#CFA670] text-[#0A0A0A] px-8 py-3 rounded-lg font-semibold hover:bg-[#CFA670]/90 transition-colors duration-300"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
