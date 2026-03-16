import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Code2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

const techStack = [
  "React", "React Native", "Node.js", "TypeScript", "Python",
  "Java", "Flutter", "PostgreSQL", "MongoDB", "AWS", "Docker", "Figma"
];

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-accent mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              About Sripada Infotech
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              A passionate software development company committed to delivering innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                Sripada Infotech is a forward-thinking IT services and software development company. We specialize in creating custom software solutions that help businesses streamline operations, engage customers, and drive growth.
              </p>
              <p className="text-muted-foreground">
                With a team of experienced developers, designers, and QA specialists, we deliver end-to-end solutions from concept to deployment and ongoing maintenance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gradient-primary rounded-2xl p-8 text-primary-foreground"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Mission", desc: "Empower businesses with technology-driven solutions" },
                  { icon: Eye, title: "Vision", desc: "Be a trusted global software partner" },
                  { icon: Lightbulb, title: "Innovation", desc: "Embrace cutting-edge technologies" },
                  { icon: Code2, title: "Quality", desc: "Deliver clean, scalable, tested code" },
                ].map((item, i) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <item.icon size={28} />
                    <h3 className="font-display font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading badge="Technology" title="Our Tech Stack" description="We work with modern technologies to build robust solutions" />
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-card hover:border-primary/30 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
