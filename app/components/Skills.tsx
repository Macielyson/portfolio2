// components/Skills.tsx
"use client";
import { useEffect, useRef } from "react";

const skills = [
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "TypeScript", level: 85, color: "#3178c6" },
  { name: "React", level: 88, color: "#61dafb" },
  { name: "Next.js", level: 82, color: "#000000" },
  { name: "Node.js", level: 85, color: "#339933" },
  { name: "Python", level: 78, color: "#3776ab" },
  { name: "PostgreSQL", level: 80, color: "#336791" },
  { name: "MongoDB", level: 75, color: "#47a248" },
  { name: "Tailwind CSS", level: 90, color: "#06b6d4" },
  { name: "Git", level: 88, color: "#f05032" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const progressBars = document.querySelectorAll(".progress-bar");
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add("animate-progress");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Minhas <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções incríveis
          </p>
        </div>

        {/**/}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* Skills com ícones */}
          <div className="glass rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group text-center p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:rotate-3 cursor-pointer"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ backgroundColor: `${skill.color}20'` }}
                  >
                    <span>⚡</span>
                  </div>
                  <span className="text-gray-300 group-hover:text-white font-medium text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-progress {
          width: var(--target-width) !important;
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const progressBars = document.querySelectorAll('.progress-bar');
              progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.setProperty('--target-width', width + '%');
              });
            });
          `,
        }}
      />
    </section>
  );
}
