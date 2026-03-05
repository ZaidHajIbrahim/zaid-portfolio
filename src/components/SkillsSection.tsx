import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C", "Java", "Go", "Erlang", "MATLAB", "VHDL"],
  },
  {
    title: "Systems / Networking",
    skills: ["Distributed Systems", "Protocol Design", "Network Simulation (ns-3, SUMO)", "Troubleshooting"],
  },
  {
    title: "Security",
    skills: ["Cybersecurity", "Secure Connected Systems", "Adversarial / Federated Learning (Threats & Mitigation)"],
  },
  {
    title: "ML / AI",
    skills: ["Scikit-learn", "Classical ML", "Classification", "Tree-based Models"],
  },
  {
    title: "Languages Spoken",
    skills: ["Swedish", "English", "Arabic"],
  },
  {
    title: "Myself",
    skills: ["Curious", "Structured Problem-Solver", "Collaborative", "Self-dependent"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            &gt; skills
          </h2>
          <div className="section-line mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h3 className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-display rounded-lg border border-border bg-card text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
