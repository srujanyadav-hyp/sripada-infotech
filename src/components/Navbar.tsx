import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container-narrow flex items-center justify-between py-2 md:py-3">
        <Link to="/" className="flex items-center relative w-[200px] md:w-[280px] h-16 md:h-24">
          <AnimatePresence mode="wait">
            {!scrolled ? (
              <motion.div
                key="text-logo"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className="font-display flex items-baseline relative z-10 overflow-hidden">
                  {(() => {
                    const wordSripada = "SRIPADA".split("");
                    const wordInfotech = "INFOTECH".split("");
                    let charIndex = 0;
                    
                    return (
                      <>
                        <span className="text-2xl md:text-[28px] font-extrabold tracking-[-0.02em] text-white flex">
                          {wordSripada.map((char, i) => {
                            const delay = charIndex++ * 0.04;
                            return (
                              <motion.span
                                key={`s-${i}`}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0, transition: { delay, duration: 0.8, ease: "backOut" } }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                              >
                                {char}
                              </motion.span>
                            );
                          })}
                        </span>
                        <span className="text-xl md:text-[24px] font-bold ml-2 text-primary drop-shadow-[0_0_12px_rgba(var(--primary),0.8)] flex">
                          {wordInfotech.map((char, i) => {
                            const delay = charIndex++ * 0.04;
                            return (
                              <motion.span
                                key={`i-${i}`}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0, transition: { delay, duration: 0.8, ease: "backOut" } }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                              >
                                {char}
                              </motion.span>
                            );
                          })}
                        </span>
                        <motion.span 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1, transition: { delay: charIndex * 0.04, duration: 0.8, ease: "backOut" } }}
                          exit={{ opacity: 0, scale: 0, transition: { duration: 0.15 } }}
                          className="text-3xl md:text-4xl text-primary leading-none ml-0.5"
                        >
                          .
                        </motion.span>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="img-logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <img src={logo} alt="Sripada Infotech" className="h-[120%] md:h-[130%] w-auto object-contain -ml-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${location.pathname === link.to
                ? (scrolled ? "text-blue-600 bg-blue-50" : "text-blue-400 bg-blue-400/10")
                : (scrolled ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50" : "text-white/80 hover:text-blue-400 hover:bg-white/10")
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-gray-600" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container-narrow py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.to
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
