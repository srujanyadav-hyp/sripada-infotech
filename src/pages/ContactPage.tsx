import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-accent mb-4">
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Get In Touch
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Have a project in mind? Let's talk about it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-8 text-muted-foreground">
              <Mail size={20} className="text-primary" />
              <a href="mailto:sripadainfotech@gmail.com" className="hover:text-primary transition-colors">
                sripadainfotech@gmail.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <Input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <Textarea
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="gradient-primary shadow-button w-full">
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
