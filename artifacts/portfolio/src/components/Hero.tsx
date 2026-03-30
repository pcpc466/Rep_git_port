import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        <img 
          src="/hero-bg.png" 
          alt="Abstract Data Visualization" 
          className="w-full h-full object-cover object-center mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <p className="font-mono text-primary tracking-wider">System ready. User identified.</p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6"
          >
            Hi, I'm <span className="text-gradient">Alex Chen.</span>
            <br />
            I build intelligence 
            <br />
            from raw data.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mb-10 leading-relaxed"
          >
            Data Analytics Engineer translating complex datasets into decisive actions. 
            Speaking fluent Python, SQL, and statistics to solve real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a 
              href="#projects" 
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-mono font-bold hover:bg-accent transition-colors glow-effect rounded-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                INITIALIZE_PROJECTS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 border-t border-border/50 pt-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter value={6} />
              </span>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Projects Shipped</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter value={100} suffix="K+" />
              </span>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Data Points Analyzed</span>
            </div>
            <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
              <span className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter value={3} />
              </span>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Internships</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Matrix Lines */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 pointer-events-none hidden lg:block opacity-30">
        <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--primary))_50%,transparent_100%)] w-[1px] absolute right-[20%] animate-[matrix_4s_linear_infinite]" />
        <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--accent))_50%,transparent_100%)] w-[1px] absolute right-[40%] animate-[matrix_5s_linear_infinite_1s]" />
        <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--primary))_50%,transparent_100%)] w-[1px] absolute right-[60%] animate-[matrix_3s_linear_infinite_2s]" />
      </div>

      <style>{`
        @keyframes matrix {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
