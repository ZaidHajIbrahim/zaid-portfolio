import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FlaskConical } from "lucide-react";

const timeline = [
  {
    icon: FlaskConical,
    period: "2026",
    title: "Master Thesis — Cognivity AI",
    place: "Chalmers University of Technology",
    detail: "Cybersecurity in Decentralized Machine Learning for Battery Management: Systems Threats, Detection, and Defense. Supervisors: Romaric Duvignau, Christian Fleischer.",
  },
  {
    icon: GraduationCap,
    period: "2024 – 2026",
    title: "MSc Computer Systems & Networks / Cybersecurity",
    place: "Chalmers University of Technology",
    detail: "Specializing in cybersecurity, distributed systems, networked computing, and secure connected systems. Expected graduation June 2026.",
  },
  {
    icon: Briefcase,
    period: "2024 – 2026",
    title: "Teaching Assistant (Two Courses)",
    place: "Chalmers University of Technology",
    detail: "Assisted students in labs and debugging; explained concepts and provided one-on-one support. Improved communication skills and structured problem-solving under time constraints.",
  },
  {
    icon: GraduationCap,
    period: "2021 – 2024",
    title: "BSc Computer Science & Engineering",
    place: "Chalmers University of Technology",
    detail: "Bachelor thesis: Simulating an Ideal Quantum Computer in Python.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            &gt; experience
          </h2>
          <div className="section-line mb-10" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="pt-1">
                  <span className="text-[10px] font-display tracking-wider text-primary uppercase">
                    {item.period}
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.place}</p>
                  <p className="text-sm text-muted-foreground/70 mt-2 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
