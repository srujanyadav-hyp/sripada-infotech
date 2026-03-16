import { motion } from "framer-motion";
import {
  ClipboardList, CalendarCheck, Palette, Code2, TestTube, Rocket, Wrench
} from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Requirement Analysis", desc: "Understanding your business needs and project goals." },
  { icon: CalendarCheck, title: "Planning", desc: "Creating roadmaps, timelines, and resource allocation." },
  { icon: Palette, title: "UI/UX Design", desc: "Designing intuitive interfaces and seamless user experiences." },
  { icon: Code2, title: "Development", desc: "Building your solution with clean, scalable code." },
  { icon: TestTube, title: "Testing", desc: "Rigorous QA to ensure quality and reliability." },
  { icon: Rocket, title: "Deployment", desc: "Launching your product to the world." },
  { icon: Wrench, title: "Maintenance", desc: "Ongoing support, updates, and improvements." },
];

const ProcessPage = () => {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-accent mb-4">
              Process
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Our Development Process
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              A proven methodology that delivers results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 items-start relative"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0 relative z-10">
                    <step.icon size={22} />
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                      <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessPage;
