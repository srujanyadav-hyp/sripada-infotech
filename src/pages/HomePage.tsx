import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe, Smartphone, TestTube, Palette, Megaphone, Code2,
  ArrowRight, CheckCircle2, Zap, Shield, Users, Clock,
  GraduationCap, Heart, ShoppingCart, Rocket, Star, Building2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

const services = [
  { icon: Globe, title: "Website Development", desc: "Business, corporate, portfolio & e-commerce websites" },
  { icon: Code2, title: "Web Applications", desc: "CRM, ERP, portals & dashboard systems" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Android, iOS & cross-platform apps" },
  { icon: TestTube, title: "Software Testing & QA", desc: "Manual, functional, regression & API testing" },
  { icon: Palette, title: "UI/UX Design", desc: "Wireframes, prototypes & user-centered design" },
  { icon: Megaphone, title: "Branding & Digital", desc: "Logo design, brand identity & social creatives" },
];

const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Agile development with rapid iterations" },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous testing at every stage" },
  { icon: Users, title: "Dedicated Team", desc: "Skilled developers focused on your success" },
  { icon: Clock, title: "24/7 Support", desc: "Ongoing maintenance and support" },
];

const industries = [
  { icon: Rocket, label: "Startups" },
  { icon: GraduationCap, label: "Education" },
  { icon: Heart, label: "Healthcare" },
  { icon: Star, label: "Astrology" },
  { icon: ShoppingCart, label: "Retail & eCommerce" },
  { icon: Building2, label: "Service Businesses" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container-narrow relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                } 
              }
            }}
            className="max-w-3xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, x: -30 },
                visible: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
              }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-accent mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                IT Services & Software Development
              </span>
            </motion.div>
            
            <motion.div 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(0 0% 100%)" }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.04,
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap gap-x-[1px] gap-y-2 lg:gap-y-3 lg:gap-x-[2px] justify-start">
                {(() => {
                  const line1 = "Building Innovative Software Solutions for ".split("");
                  const line2 = "Modern Businesses".split("");
                  const totalChars = line1.length + line2.length;
                  
                  return (
                    <>
                      {line1.map((char, index) => (
                        <motion.span
                          key={`l1-${char}-${index}`}
                          initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          transition={{ 
                            delay: 0.2 + (index * 0.03), 
                            type: "spring", 
                            damping: 15, 
                            stiffness: 100 
                          }}
                          className="inline-block"
                          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                      
                      <span className="text-gradient relative inline-flex">
                        {line2.map((char, index) => (
                          <motion.span
                            key={`l2-${char}-${index}`}
                            initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ 
                              delay: 0.2 + (index * 0.03), // Make both lines start at the exact same time
                              type: "spring", 
                              damping: 15, 
                              stiffness: 100 
                            }}
                            className="inline-block"
                            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                          >
                            {char}
                          </motion.span>
                        ))}
                        <motion.span 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.2 + (Math.max(line1.length, line2.length) * 0.03) + 0.3, duration: 1, ease: "circOut" }}
                          className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
                        />
                      </span>
                    </>
                  );
                })()}
              </div>
            </motion.div>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
                visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6 } }
              }}
              className="text-lg md:text-xl mb-8 max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Sripada Infotech transforms your ideas into powerful digital products with cutting-edge technology and expert craftsmanship.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } }
              }}
              className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="gradient-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] text-base px-8 relative overflow-hidden group">
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center">
                      Get Started 
                      <motion.div 
                        initial={{ x: 0 }} 
                        whileHover={{ x: 4 }} 
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight size={18} className="ml-2" />
                      </motion.div>
                    </span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-base px-8 group relative overflow-hidden" style={{ color: "hsl(0 0% 100%)", borderColor: "hsl(0 0% 100% / 0.2)", backgroundColor: "hsl(0 0% 100% / 0.1)" }}>
                  <Link to="/services">
                    <span className="relative z-10 transition-colors group-hover:text-primary">Our Services</span>
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 text-center shadow-card"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            badge="Our Services"
            title="What We Do"
            description="End-to-end software development services to help your business grow"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                  <s.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading
            badge="Why Us"
            title="Why Choose Sripada Infotech"
            description="We deliver excellence through a combination of expertise, dedication, and innovation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <item.icon size={28} />
                </div>
                <h3 className="font-display font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            badge="Industries"
            title="Industries We Serve"
            description="Delivering tailored solutions across diverse sectors"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
              >
                <ind.icon size={32} className="mx-auto mb-3 text-primary" />
                <span className="text-sm font-medium text-foreground">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Let's discuss your project and bring your vision to life.
            </p>
            <Button asChild size="lg" className="gradient-primary shadow-button text-base px-8">
              <Link to="/contact">Contact Us <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
