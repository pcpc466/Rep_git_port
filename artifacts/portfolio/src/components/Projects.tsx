import { motion } from "framer-motion";
import { Github, ExternalLink, Activity } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Developed a machine learning pipeline using Random Forests to predict telecom customer churn with 87% accuracy, enabling proactive retention strategies.",
    tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    image: "/project-2.png"
  },
  {
    title: "Sales Dashboard",
    description: "Designed and deployed an interactive executive dashboard analyzing $2M+ in retail sales data, uncovering a 15% revenue gap in Q3.",
    tech: ["Power BI", "SQL", "DAX"],
    image: "/project-1.png"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Engineered an NLP pipeline to process 100K+ tweets during product launches, categorizing consumer sentiment in real-time.",
    tech: ["Python", "NLTK", "Plotly", "spaCy"],
    image: "/hero-bg.png"
  },
  {
    title: "Supply Chain Optimization",
    description: "Formulated a linear programming model to optimize distribution routes, projected to reduce logistics operational costs by 23%.",
    tech: ["Python", "PuLP", "Pandas", "Matplotlib"],
    image: "/project-2.png"
  },
  {
    title: "COVID-19 Data Tracker",
    description: "Built a real-time epidemiological dashboard aggregating global health data with interactive mapping and trend forecasting.",
    tech: ["Python", "Plotly", "Dash", "SQL"],
    image: "/project-1.png"
  },
  {
    title: "E-Commerce A/B Testing",
    description: "Created a robust statistical analysis framework to evaluate landing page conversion rates, driving a 4.2% lift in checkouts.",
    tech: ["Python", "SciPy", "SQL", "Jupyter"],
    image: "/hero-bg.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-card/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-sm">
            <Activity className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Select * from projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Showcase of Work</h2>
          <p className="mt-4 text-muted-foreground font-mono max-w-2xl">
            A curated selection of my analytical deep dives, machine learning models, and data visualizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Decorative UI overlay */}
                <div className="absolute top-2 right-2 flex gap-2 z-20">
                  <div className="w-2 h-2 rounded-full bg-destructive/80"></div>
                  <div className="w-2 h-2 rounded-full bg-accent/80"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/80"></div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded-sm border border-secondary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-border pt-4">
                    <a href="#" className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors ml-auto">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
