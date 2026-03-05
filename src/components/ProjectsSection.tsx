import { motion } from "framer-motion";
import { Shield, Car, Bug, Atom, Cpu, BookOpen, CircuitBoard, Network } from "lucide-react";

const projects = [
  {
    icon: Atom,
    title: "Quantum Computer Simulator",
    tag: "Bachelor Thesis · 2024",
    description: "Built a Python-based quantum computer simulator with a GUI for visualizing quantum circuits, gates, and state evolution. Focused on correctness, debugging, and usability of engineering tools for complex models.",
    tech: ["Python", "GUI", "Quantum Computing"],
    supervisor: "Robin Adams",
  },
  {
    icon: Shield,
    title: "Cybersecurity in Decentralized ML",
    tag: "Master Thesis · 2026 · Cognivity AI",
    description: "Researching system threats, detection, and defense strategies for decentralized AI architectures in battery management systems (vehicles/drones). Documenting results in an engineering thesis format.",
    tech: ["Cybersecurity", "Distributed Systems"],
    supervisor: "Romaric Duvignau, Christian Fleischer",
  },
  {
    icon: Car,
    title: "Collaborative Perception in VANETs",
    tag: "Research Project · 2025",
    description: "Designed and evaluated collaborative perception scenarios for Intelligent Transportation Systems. Simulated traffic and network behavior, collected data, and iterated configurations to optimize performance and realism.",
    tech: ["ns-3", "SUMO", "VAN3T"],
    supervisor: "Elad Michael Schiller",
  },
  {
    icon: Bug,
    title: "Bee Pollen Detection (AI)",
    tag: "Ericsson Garage · 2024",
    description: "Developed an ML model to detect pollen in bee images and videos; improved classification through experimentation and iteration. Focused on practical ML workflow: data handling, evaluation, and model selection.",
    tech: ["Python", "ML", "Computer Vision"],
  },
  {
    icon: Cpu,
    title: "Mitigation in Decentralized FL",
    tag: "Research Project · 2024",
    description: "Explored mitigation strategies for malicious users under different network topologies in decentralized federated learning. Extended a simulator (FENICS) to study robustness and adversarial behavior.",
    tech: ["Security", "Federated Learning"],
    supervisor: "Yixing Zhang, Romaric Duvignau",
  },
  {
    icon: CircuitBoard,
    title: "Embedded Alarm System on MD407",
    tag: "Course Project · 2023",
    description: "Implemented a simple alarm system using the MD407 board, interfacing sensors with a central unit and communicating over CAS. Practiced embedded debugging and reliable system behavior.",
    tech: ["C", "Embedded Systems"],
    supervisor: "Sven Knutsson, Elias Hällqvist",
  },
  {
    icon: BookOpen,
    title: "High-Performance Parallel Computing",
    tag: "Course Project · 2023",
    description: "Developed hybrid parallel software and evaluated performance/scalability using the NAS Parallel Benchmarks. Strengthened understanding of hardware/software co-design and parallel system trade-offs.",
    tech: ["Performance Modeling", "HPC"],
  },
  {
    icon: Network,
    title: "Distributed Systems & Protocol Engineering",
    tag: "Course Projects · 2023–2024",
    description: "Developed custom protocols and communication systems using Erlang and Go; focused on concurrency and distributed computing. Designed and built a master–slave distributed system with a client/server architecture.",
    tech: ["Erlang", "Go", "Distributed Systems"],
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

                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {project.description}
                </p>

                {project.supervisor && (
                  <p className="text-xs text-muted-foreground/60 italic mb-4">
                    Supervisor(s): {project.supervisor}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
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
