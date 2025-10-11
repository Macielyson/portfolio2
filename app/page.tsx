// Atualização do app/page.tsx para incluir a nova seção
"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";
import Experiencias from "./components/Experiencias";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen gradient-bg">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      <Header />
      <Hero />
      <Sobre />
      <Tecnologias />
      <Experiencias />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}
