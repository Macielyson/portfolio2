// components/Loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin mx-auto"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>
        <p className="mt-4 text-blue-400 font-space-grotesk animate-pulse">
          Carregando portfólio...
        </p>
      </div>
    </div>
  );
}
