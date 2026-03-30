import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's connect.</h2>
            <p className="text-muted-foreground font-mono max-w-md mb-8 leading-relaxed">
              Currently seeking data analytics and data engineering roles. Whether it's a job opportunity, a project collaboration, or just talking about the latest machine learning models, my inbox is open.
            </p>
            
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-mono font-bold px-8 py-4 rounded-sm hover:bg-accent transition-colors glow-effect"
            >
              SEND_MESSAGE
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background border border-border p-8 rounded-lg font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-muted-foreground ml-2">contact.json</span>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p><span className="text-primary">"status"</span>: <span className="text-accent">"Open to opportunities"</span>,</p>
              <p><span className="text-primary">"location"</span>: <span className="text-accent">"San Francisco / Remote"</span>,</p>
              <p className="flex items-center gap-4">
                <span className="text-primary">"email"</span>: 
                <a href="mailto:hello@example.com" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  "prashant.chauhan@example.com"
                </a>,
              </p>
              <div className="flex gap-4 pt-4 border-t border-border/50">
                <a href="#" className="p-2 border border-border rounded-sm hover:text-primary hover:border-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-border rounded-sm hover:text-primary hover:border-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:hello@example.com" className="p-2 border border-border rounded-sm hover:text-primary hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Terminal className="w-4 h-4" />
            <span>PRASHANT_CHAUHAN © {new Date().getFullYear()}</span>
          </div>
          <p>Designed with precision. Built for scale.</p>
        </div>
      </div>
    </footer>
  );
}
