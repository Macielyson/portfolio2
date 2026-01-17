"use client";
import { useState } from "react";

const projetos = [
  {
    id: 1,
    titulo: "E-commerce Moderno",
    descricao: "Plataforma de e-commerce completa com painel administrativo, gateway de pagamento e sistema de recomendação.",
    imagem: "/api/placeholder/600/400",
    tecnologias: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    linkDemo: "#",
    linkGithub: "#",
    featured: true,
  },
  {
    id: 2,
    titulo: "App de Gestão de Tarefas",
    descricao: "Aplicativo de produtividade com sincronização em tempo real, notificações e analytics.",
    imagem: "/api/placeholder/600/400",
    tecnologias: ["React", "Firebase", "Tailwind", "PWA"],
    linkDemo: "#",
    linkGithub: "#",
    featured: false,
  },
  {
    id: 3,
    titulo: "API REST Escalável",
    descricao: "Backend robusto com autenticação JWT, documentação Swagger e deploy em cloud.",
    imagem: "/api/placeholder/600/400",
    tecnologias: ["Node.js", "Express", "MongoDB", "Docker"],
    linkDemo: "#",
    linkGithub: "#",
    featured: false,
  },
  {
    id: 4,
    titulo: "Dashboard Analytics",
    descricao: "Painel de analytics com gráficos interativos, relatórios em tempo real e exportação de dados.",
    imagem: "/api/placeholder/600/400",
    tecnologias: ["React", "TypeScript", "Chart.js", "FastAPI"],
    linkDemo: "#",
    linkGithub: "#",
    featured: true,
  },
  {
    id: 5,
    titulo: "App Mobile Social",
    descricao: "Rede social mobile com chat em tempo real, upload de mídia e geolocalização.",
    imagem: "/api/placeholder/600/400",
    tecnologias: ["React Native", "Firebase", "Redux", "Expo"],
    linkDemo: "#",
    linkGithub: "#",
    featured: false,
  },
  {
    id: 6,
    titulo: "Sistema de Agendamento",
    descricao: "Plataforma de agendamentos com calendário integrado, confirmações automáticas e multi-idiomas.",
    imagem: "/api/placeholder/600/400",
    tecnologias: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
    linkDemo: "#",
    linkGithub: "#",
    featured: false,
  },
];

const Projetos = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjetos = filter === "all" ? projetos : filter === "featured" ? projetos.filter((p) => p.featured) : projetos;

  return (
    <section id="projetos" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 245, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Meus <span className="text-cyan-400">Projetos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Uma seleção dos meus trabalhos mais recentes e desafiadores</p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "featured"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterType ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25" : "glass text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30"
                }`}
              >
                {filterType === "all" ? "Todos" : "Destaques"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjetos.map((projeto, index) => (
            <div
              key={projeto.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Badge Featured */}
              {projeto.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">Destaque</span>
                </div>
              )}

              {/* Imagem do Projeto */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={projeto.linkDemo} className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Demo
                  </a>
                  <a
                    href={projeto.linkGithub}
                    className="glass border border-gray-600 hover:border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">{projeto.titulo}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{projeto.descricao}</p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <a href={projeto.linkDemo} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 transition-colors">
                    Ver Demo
                    <span>→</span>
                  </a>
                  <a href={projeto.linkGithub} className="text-gray-400 hover:text-white text-sm transition-colors">
                    <span className="flex items-center gap-2">
                      <span>GitHub</span>
                      <span>📁</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interessado em ver mais projetos?</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span>Vamos Trabalhar Juntos</span>
            <span className="animate-pulse">✨</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Projetos;
