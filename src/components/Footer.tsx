import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Sripada Infotech</h3>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Building innovative software solutions for modern businesses. We transform ideas into powerful digital products.
            </p>
            <a
              href="mailto:sripadainfotech@gmail.com"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
              sripadainfotech@gmail.com
            </a>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <span>Web Development</span>
              <span>Mobile Apps</span>
              <span>UI/UX Design</span>
              <span>Software Testing</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Sripada Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
