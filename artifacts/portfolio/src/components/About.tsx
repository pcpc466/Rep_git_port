import { motion } from "framer-motion";
import { Database, Binary, BarChart3, LineChart } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Engineering",
      description: "Building robust pipelines to clean, transform, and load massive datasets efficiently."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Statistical Analysis",
      description: "Applying rigorous A/B testing and hypothesis validation to separate signal from noise."
    },
    {
      icon: <Binary className="w-6 h-6 text-primary" />,
      title: "Machine Learning",
      description: "Deploying predictive models using scikit-learn and TensorFlow to forecast trends."
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "Data Visualization",
      description: "Crafting intuitive, interactive dashboards in Tableau and Power BI that drive decisions."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-sm">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">./about_me.sh</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              I don't just query data. <br />
              <span className="text-gradient">I find the narrative.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              <p>
                My journey into data analytics started when I realized that every spreadsheet is a story waiting to be told. During my summer internships, I've transformed messy, unstructured logs into predictive models that reduced churn and dashboards that directed marketing spend.
              </p>
              <p>
                I view the analytics stack as a toolkit for truth-seeking. Python and SQL are my languages; pandas and scikit-learn are my instruments. I thrive in the space between deep technical implementation and high-level strategic business thinking.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300"></div>
                <div className="mb-4 p-3 bg-background border border-border inline-block rounded-md group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
