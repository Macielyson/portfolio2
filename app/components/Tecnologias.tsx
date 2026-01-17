"use client";
import { useEffect, useState } from "react";
interface Tecnologia {
  nome: string;
  categoria: string;
  icone: string;
  cor: string; // Agora está definido no tipo
}

const tecnologias: Tecnologia[] = [
  // Frontend
  { nome: "React", categoria: "frontend", icone: "⚛️", cor: "#61DAFB" },
  { nome: "Next.js", categoria: "frontend", icone: "▲", cor: "#000000" },
  { nome: "TypeScript", categoria: "frontend", icone: "🔷", cor: "#3178C6" },
  { nome: "JavaScript", categoria: "frontend", icone: "🟨", cor: "#F7DF1E" },
  { nome: "Tailwind CSS", categoria: "frontend", icone: "🎨", cor: "#06B6D4" },
  { nome: "HTML5", categoria: "frontend", icone: "🌐", cor: "#E34F26" },
  { nome: "CSS3", categoria: "frontend", icone: "🎀", cor: "#1572B6" },

  // Backend
  { nome: "Node.js", categoria: "backend", icone: "🟢", cor: "#339933" },
  { nome: "Python", categoria: "backend", icone: "🐍", cor: "#3776AB" },
  { nome: "Express", categoria: "backend", icone: "🚂", cor: "#000000" },
  { nome: "FastAPI", categoria: "backend", icone: "⚡", cor: "#009688" },
  { nome: "PHP", categoria: "backend", icone: "🐘", cor: "#777BB4" },

  // Banco de Dados
  { nome: "PostgreSQL", categoria: "database", icone: "🐘", cor: "#336791" },
  { nome: "MongoDB", categoria: "database", icone: "🍃", cor: "#47A248" },
  { nome: "MySQL", categoria: "database", icone: "🐬", cor: "#4479A1" },
  { nome: "SQLite", categoria: "database", icone: "💾", cor: "#003B57" },

  // Ferramentas & Outros
  { nome: "Git", categoria: "ferramentas", icone: "📚", cor: "#F05032" },
  { nome: "Docker", categoria: "ferramentas", icone: "🐳", cor: "#2496ED" },
  { nome: "AWS", categoria: "ferramentas", icone: "☁️", cor: "#FF9900" },
  { nome: "VSCode", categoria: "ferramentas", icone: "💻", cor: "#007ACC" },
  { nome: "Figma", categoria: "ferramentas", icone: "🎨", cor: "#F24E1E" },
  { nome: "Jest", categoria: "ferramentas", icone: "🃏", cor: "#C21325" },
];

const categorias = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "ferramentas", label: "Ferramentas" },
];

export default function Tecnologias() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("all");
  const [tecnologiasFiltradas, setTecnologiasFiltradas] = useState(tecnologias);

  useEffect(() => {
    if (categoriaAtiva === "all") {
      setTecnologiasFiltradas(tecnologias);
    } else {
      setTecnologiasFiltradas(tecnologias.filter((tech) => tech.categoria === categoriaAtiva));
    }
  }, [categoriaAtiva]);

  return (
    <section id="tecnologias" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Tecnologias & <span className="text-cyan-400">Ferramentas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tecnologias que utilizo para criar soluções incríveis e inovadoras</p>
        </div>

        {/* Filtros por Categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaAtiva(categoria.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                categoriaAtiva === categoria.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                  : "glass text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30"
              }`}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        {/* Carrossel de Tecnologias */}
        <div className="relative">
          {/* Efeito de fade nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

          {/* Container do Carrossel */}
          <div className="flex space-x-6 overflow-x-hidden py-4 group">
            {/* Primeira linha - vai para a direita */}
            <div className="flex space-x-6 animate-scroll group-hover:pause">
              {tecnologiasFiltradas.map((tech, index) => (
                <TecnologiaCard key={`first-${index}`} tech={tech} />
              ))}
            </div>

            {/* Segunda linha - vai para a esquerda */}
            <div className="flex space-x-6 animate-scroll-reverse group-hover:pause">
              {tecnologiasFiltradas.map((tech, index) => (
                <TecnologiaCard key={`second-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center glass rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
            <div className="text-gray-400 text-sm">Tecnologias</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 border border-gray-800 hover:border-purple-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-gray-400 text-sm">Categorias</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 border border-gray-800 hover:border-green-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Anos de Exp</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projetos</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${tecnologiasFiltradas.length} / 2));
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-250px * ${tecnologiasFiltradas.length} / 2));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }

        .group:hover .animate-scroll,
        .group:hover .animate-scroll-reverse {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          .animate-scroll-reverse {
            animation: scroll-reverse 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}

// Componente Card de Tecnologia - CORRIGIDO
function TecnologiaCard({ tech }: { tech: Tecnologia }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-48 h-32 glass rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? `linear-gradient(135deg, ${tech.cor}20, ${tech.cor}10)` : undefined,
      }}
    >
      <div className="h-full flex flex-col items-center justify-center p-4 text-center">
        <div
          className="text-3xl mb-3 transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.2) rotate(5deg)" : "scale(1)",
            filter: isHovered ? "drop-shadow(0 0 8px rgba(0, 245, 255, 0.3))" : "none",
          }}
        >
          {tech.icone}
        </div>
        <h3
          className="font-bold text-white font-space-grotesk transition-all duration-300"
          style={{
            color: isHovered ? tech.cor : "#FFFFFF",
            textShadow: isHovered ? `0 0 10px ${tech.cor}40` : "none",
          }}
        >
          {tech.nome}
        </h3>
        <span className="text-xs text-gray-400 mt-1 capitalize">{tech.categoria}</span>
      </div>

      {/* Efeito de brilho no hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${tech.cor}20, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      ></div>
    </div>
  );
}
