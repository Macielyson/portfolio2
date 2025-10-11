// components/Contato.tsx
"use client";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    setTimeout(() => {
      console.log("Dados do formulário:", formData);
      alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: "GitHub", url: "#", icon: "🐱", color: "hover:text-gray-300" },
    { name: "LinkedIn", url: "#", icon: "💼", color: "hover:text-blue-400" },
    { name: "Instagram", url: "#", icon: "📷", color: "hover:text-pink-400" },
    { name: "Twitter", url: "#", icon: "🐦", color: "hover:text-cyan-400" },
  ];

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Vamos <span className="text-cyan-400">Conversar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pronto para levar seu projeto para o próximo nível? Entre em contato
            e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-space-grotesk">
                Vamos Conectar
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Estou sempre aberto a discutir novas oportunidades, projetos
                interessantes ou simplesmente conversar sobre tecnologia e
                inovação.
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-gray-800/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  📧
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">
                    macielyson.s@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-gray-800/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-300">
                  📍
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Localização</p>
                  <p className="text-white font-medium">Caxias - MA, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Seu Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Assunto *
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Enviar Mensagem
                    <span>🚀</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
