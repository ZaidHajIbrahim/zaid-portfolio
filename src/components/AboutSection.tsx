import { motion } from "framer-motion";
import { Shield, Cpu, Brain, Wifi } from "lucide-react";

const interests = [
  { icon: Shield, label: "Cybersecurity", desc: "Secure connected systems, adversarial & federated learning threats & mitigation" },
  { icon: Cpu, label: "Distributed Systems", desc: "Protocol design, concurrency & distributed architectures (Erlang, Go)" },
  { icon: Wifi, label: "Networking & Simulation", desc: "VANET/ITS simulations with ns-3, SUMO & VAN3T" },
  { icon: Brain, label: "ML / AI", desc: "Classical ML (scikit-learn), classification & tree-based models" },
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
          Master's student in Computer Systems &amp; Networks / Cybersecurity at Chalmers
          (graduating June 2026) with strong interest in distributed systems, networking,
          simulation, and secure connected systems. Hands-on experience with VANET/ITS
          simulations (ns-3, SUMO, VAN3T), implementing communication protocols and
          distributed architectures (Erlang, Go), and researching security in decentralized
          ML for battery management systems. I enjoy practical troubleshooting, data-driven
          analysis, and collaborating to turn complex prototypes into reliable systems.
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
