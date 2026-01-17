// components/Hero.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Desenvolvedor FullStack";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Elements */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Avatar/Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full glass border-2 border-cyan-400/30 flex items-center justify-center animate-glow">
          <span className="text-cyan-400 text-2xl">
            <Image src="/images/profile.jpg" alt="Macielyson - Desenvolvedor Full Stack" width={200} height={200} className="rounded-full object-cover" priority />
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold font-space-grotesk mb-6">
          Olá, eu sou <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">Macielyson</span>
        </h1>

        <div className="h-12 mb-8">
          <p className="text-2xl md:text-4xl text-gray-300 font-space-grotesk">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Transformo ideias em realidade digital através de código limpo, designs impressionantes e soluções inovadoras.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projetos"
            className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">Explorar Projetos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
          </a>

          <a
            href="#contato"
            className="group glass border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Vamos Conversar</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
