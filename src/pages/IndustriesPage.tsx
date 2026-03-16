import { motion } from "framer-motion";
import { Rocket, GraduationCap, Heart, Star, ShoppingCart, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

const industries = [
  { icon: Rocket, title: "Startups", desc: "MVP development, scalable architecture, and rapid prototyping for startup ideas." },
  { icon: GraduationCap, title: "Education", desc: "E-learning platforms, student management systems, and educational apps." },
  { icon: Heart, title: "Healthcare", desc: "Patient portals, appointment systems, and health management applications." },
  { icon: Star, title: "Astrology Platforms", desc: "Horoscope apps, astrology consultation platforms, and prediction systems." },
  { icon: ShoppingCart, title: "Retail & eCommerce", desc: "Online stores, inventory management, and customer engagement platforms." },
  { icon: Building2, title: "Service Businesses", desc: "Booking systems, CRM solutions, and business management tools." },
];

const IndustriesPage = () => {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-accent mb-4">
              Industries
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Industries We Serve
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Tailored solutions for diverse business sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <ind.icon size={28} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;
