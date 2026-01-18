// components/Experiencias.tsx
"use client";
import { useState } from "react";

// Definir tipos para o filtro
type FilterType = "all" | "trabalho" | "educacao";

const experiencias = [
  {
    id: 3,
    empresa: "Freelancer",
    cargo: "Desenvolvedor FullStack",
    periodo: "Atualmente",
    descricao: "Trabalho com diversos clientes desenvolvendo soluções personalizadas, desde e-commerces até sistemas de gestão interna.",
    tecnologias: ["JavaScript", "Express", "MySQL", "React", "Node", "Bootstrap", "Styled Components", "MongoDB"],
    tipo: "trabalho" as const,
  },
  {
    id: 4,
    empresa: "Full Stack Club",
    cargo: "Certificação Intensiva",
    periodo: "cursando",
    descricao: "Desenvolvimento web,  ampliando e consolidando ainda mais meus conhecimentos em frontend, backend e mobile.",
    tecnologias: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    tipo: "educacao" as const,
  },
  {
    id: 5,
    empresa: "UniFACEMA",
    cargo: "Analise e Desenvolvimento de Sistemas",
    periodo: "2016 - 2018",
    descricao: "Formação com foco em algoritmos, estrutura de dados, arquitetura de software e engenharia de computação.",
    tecnologias: ["Java", "SQL"],
    tipo: "educacao" as const,
  },
];

export default function Experiencias() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredExperiencias = filter === "all" ? experiencias : experiencias.filter((exp) => exp.tipo === filter);

  // Array de filtros com tipo correto
  const filterOptions: { key: FilterType; label: string }[] = [
    { key: "all", label: "Todas" },
    { key: "trabalho", label: "Experiência Profissional" },
    { key: "educacao", label: "Formação Acadêmica" },
  ];

  return (
    <section id="experiencias" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(123, 97, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Minhas <span className="text-cyan-400">Experiências</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Minha jornada profissional e acadêmica em desenvolvimento de software</p>

          {/* Filtros - CORRIGIDO */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
            {filterOptions.map((filterType) => (
              <button
                key={filterType.key}
                onClick={() => setFilter(filterType.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterType.key ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25" : "glass text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30"
                }`}
              >
                {filterType.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha da Timeline */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 transform -translate-x-1/2"></div>

            {/* Itens da Timeline */}
            <div className="space-y-12">
              {filteredExperiencias.map((experiencia, index) => (
                <div key={experiencia.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8 group`}>
                  {/* Ponto da Timeline */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-purple-500 transition-all duration-300"></div>

                  {/* Conteúdo */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} ml-16 md:ml-0`}>
                    <div className="glass rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white font-space-grotesk">{experiencia.cargo}</h3>
                          <p className="text-cyan-400 font-semibold mt-1">{experiencia.empresa}</p>
                        </div>
                        <span className="glass-dark text-cyan-400 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">{experiencia.periodo}</span>
                      </div>

                      {/* Descrição */}
                      <p className="text-gray-300 mb-4 leading-relaxed">{experiencia.descricao}</p>

                      {/* Tecnologias */}
                      <div className="flex flex-wrap gap-2">
                        {experiencia.tecnologias.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/20">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Badge Tipo */}
                      <div className="mt-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                            experiencia.tipo === "trabalho" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {experiencia.tipo === "trabalho" ? "💼 Profissional" : "🎓 Acadêmico"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Espaço vazio para alternância */}
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interessado em trabalhar comigo?</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span>Vamos Conversar</span>
            <span className="animate-pulse">✨</span>
          </a>
        </div>
      </div>
    </section>
  );
}
