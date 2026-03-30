import { motion } from "framer-motion";
import { 
  SiPython, 
  SiMysql, 
  SiPandas, 
  SiScikitlearn, 
  SiJupyter, 
  SiPlotly
} from "react-icons/si";
import { Code2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "R", icon: <span className="font-bold text-xl">R</span> }
      ]
    },
    {
      title: "Libraries",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn /> },
        { name: "Plotly", icon: <SiPlotly /> }
      ]
    },
    {
      title: "Tools & BI",
      skills: [
        { name: "Tableau", icon: <span className="font-bold text-base">TBL</span> },
        { name: "Power BI", icon: <span className="font-bold text-base">PBI</span> },
        { name: "Jupyter", icon: <SiJupyter /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-border/30 overflow-hidden">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:w-1/2"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-sm">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">System config</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Analytical Toolkit</h2>
          <p className="text-muted-foreground font-mono leading-relaxed">
            The precise combination of languages, frameworks, and visualization tools I use to extract meaning from complex datasets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-card border border-border p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-8 text-primary border-b border-border/50 pb-4">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIdx * 0.1) + (idx * 0.1) + 0.3 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-md bg-background border border-border flex items-center justify-center text-2xl text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)]">
                      {skill.icon}
                    </div>
                    <span className="font-mono text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
