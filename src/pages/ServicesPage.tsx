import { motion } from "framer-motion";
import {
  Globe, Code2, Smartphone, TestTube, Palette, Megaphone,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

const serviceCategories = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive websites tailored to your business needs.",
    items: ["Business websites", "Corporate websites", "Portfolio websites", "E-commerce websites"],
  },
  {
    icon: Code2,
    title: "Web Application Development",
    desc: "Scalable web applications to streamline your operations.",
    items: ["CRM systems", "ERP systems", "Online portals", "Dashboard systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications.",
    items: ["Android apps", "iOS apps", "Business applications", "Startup MVP apps"],
  },
  {
    icon: TestTube,
    title: "Software Testing & QA",
    desc: "Comprehensive testing to ensure flawless software.",
    items: ["Manual testing", "Functional testing", "Regression testing", "API testing", "Performance testing"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered design that delights and converts.",
    items: ["Wireframes", "UI design", "Prototypes"],
  },
  {
    icon: Megaphone,
    title: "Branding & Digital Services",
    desc: "Build a memorable brand identity.",
    items: ["Logo design", "Brand identity", "Social media creatives"],
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-accent mb-4">
              Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Our Services
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Comprehensive IT solutions to power your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-8">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                    <cat.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{cat.title}</h3>
                    <p className="text-muted-foreground mb-4">{cat.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
