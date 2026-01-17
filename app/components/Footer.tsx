const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 79px, #00f5ff 79px, #00f5ff 81px, transparent 81px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 inline-block">
              &lt;Macielyson/&gt;
            </a>
            <p className="text-gray-400 max-w-md leading-relaxed">Desenvolvedor FullStack apaixonado por criar experiências digitais extraordinárias com tecnologias modernas e código limpo.</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-space-grotesk">Navegação</h3>
            <ul className="space-y-2">
              {["Inicio", "Skills", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-space-grotesk">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>macielyson.s@gmail.com</li>
              <li>Caxias, Maranhão - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} Macielyson Nascimento. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/macielyson-n-4ab675169/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/Macielyson" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm" target="_blank">
              GitHub
            </a>
            <a href="https://www.instagram.com/macielyson_/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm" target="_blank">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
