import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            &gt; contact
          </h2>
          <div className="section-line mb-10" />

          <p className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            <span className="gradient-text">Thank you for reading my portfolio!</span>
          </p>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            If you would like to discuss any opportunities, please don't hesitate to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:zaid.ibrahim.eng@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:shadow-[0_0_30px_hsl(175_80%_50%/0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="tel:+46722582306"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-secondary-foreground font-display text-sm font-semibold tracking-wider hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              (+46) 72-258 23 06
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://github.com/ZaidHajIbrahim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/zaid-hajibrahim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <p className="text-xs text-muted-foreground/40 font-display">
          © 2026 Zaid Haj-Ibrahim
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
