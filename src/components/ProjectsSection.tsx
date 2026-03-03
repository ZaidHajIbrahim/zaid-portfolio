import { motion } from "framer-motion";
import { ExternalLink, Shield, Car, Bug, Atom, Cpu, BookOpen } from "lucide-react";

const projects = [
  {
    icon: Atom,
    title: "Quantum Computer Simulator",
    tag: "Bachelor Thesis",
    description: "Python-based simulator with a graphical user interface to represent quantum circuits and gates. Built a foundational understanding of quantum computing from scratch.",
    tech: ["Python", "GUI", "Quantum Computing"],
  },
  {
    icon: Shield,
    title: "Cybersecurity in Decentralized ML",
    tag: "Master Thesis · Cognivity AI",
    description: "Investigating cybersecurity of decentralized AI in battery management systems for vehicles and drones. Focused on threat exploitation, detection, and defense strategies.",
    tech: ["Python", "Federated Learning", "Cybersecurity"],
  },
  {
    icon: Car,
    title: "Collaborative Perception in VANETs",
    tag: "Research Project",
    description: "Advancing collaborative perception systems for intelligent transportation using ns3, Van3t, and SUMO to simulate car traffic controlled by ITS.",
    tech: ["ns3", "SUMO", "C++", "Networking"],
  },
  {
    icon: Bug,
    title: "Bee Pollen Detection (AI)",
    tag: "Ericsson Garage",
    description: "Developed an AI model to detect pollen in bee images and recorded videos, improving classification accuracy using machine learning techniques.",
    tech: ["Python", "ML", "Computer Vision"],
  },
  {
    icon: Cpu,
    title: "Mitigation in Decentralized FL",
    tag: "Research Project",
    description: "Exploring mitigation strategies for malicious users under different network topologies using the FENICS tool for decentralized federated learning simulation.",
    tech: ["Python", "Federated Learning", "Security"],
  },
  {
    icon: BookOpen,
    title: "High-Performance Parallel Computing",
    tag: "Course Project",
    description: "Development of high-performance hybrid software for parallel computing systems using NAS Parallel Benchmarks, focusing on hardware/software co-design.",
    tech: ["C", "MPI", "OpenMP", "HPC"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            &gt; projects
          </h2>
          <div className="section-line mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative p-6 rounded-xl border border-border bg-card card-hover overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="w-6 h-6 text-primary" />
                  <span className="text-[10px] font-display tracking-wider text-muted-foreground uppercase">
                    {project.tag}
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] font-display tracking-wider rounded-full border border-border text-muted-foreground bg-muted/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
