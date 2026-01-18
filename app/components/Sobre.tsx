import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem/Avatar */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl transform rotate-6 animate-pulse"></div>
              <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center transform -rotate-3">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-4xl animate-float">
                    <Image src="/images/profile.jpg" alt="Macielyson - Desenvolvedor Full Stack" width={200} height={200} className="rounded-full object-cover" priority />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Macielyson</h3>
                  <p className="text-cyan-400 font-semibold">Desenvolvedor FullStack</p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto Sobre Mim */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk">
              Sobre <span className="text-cyan-400">Mim</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Sou um <span className="text-cyan-400 font-semibold">Desenvolvedor FullStack</span> apaixonado por transformar ideias em soluções digitais. Tenho experiência prática no desenvolvimento
                de aplicações modernas, criando interfaces intuitivas e sistemas bem estruturados.
              </p>
              <p>
                Minha jornada começou no desenvolvimento front-end e evoluiu para soluções completas, envolvendo backend, banco de dados e integração de serviços. Valorizo código limpo, boas práticas
                e uma experiência de usuário bem pensada.
              </p>
              <p>Estou em constante aprendizado, sempre explorando novas tecnologias e aplicando meus conhecimentos em projetos pessoais, freelances e estudos contínuos.</p>
            </div>

            {/* Informações Pessoais */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">🎯</div>
                <div>
                  <p className="text-sm text-gray-400">Foco</p>
                  <p className="text-white font-medium">FullStack</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">📍</div>
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="text-white font-medium">Caxias-MA, BR</p>
                </div>
              </div>
            </div>

            {/* Botão Download CV */}
            <div className="pt-6">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-3 glass border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>📄</span>
                Baixar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
