import { motion } from "framer-motion";
import { Shield, Cpu, Brain, Globe } from "lucide-react";

const interests = [
  { icon: Shield, label: "Cybersecurity", desc: "Threat detection & defense in decentralized systems" },
  { icon: Brain, label: "AI & ML", desc: "Machine learning for real-world problem solving" },
  { icon: Cpu, label: "Distributed Systems", desc: "High-performance parallel & networked computing" },
  { icon: Globe, label: "Quantum Computing", desc: "Simulating quantum circuits & gates" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            &gt; about_me
          </h2>
          <div className="section-line mb-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-16 max-w-3xl"
        >
          Curious and driven by problem-solving, I enjoy tackling complex challenges that
          bridge theoretical knowledge with practical applications. I thrive in collaborative
          environments that foster innovation and creativity — from building quantum computer
          simulators to defending decentralized ML systems against cyber threats.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-6 rounded-xl border border-border bg-card card-hover"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow transition-colors" />
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
