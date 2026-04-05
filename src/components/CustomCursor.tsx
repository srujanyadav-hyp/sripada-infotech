import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const lastSectionRef = useRef<Element | null>(null);

  // Motion values for the instant small dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animation for the larger trailing ring
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // A function to check background and update colors directly via DOM for 120fps performance
    const updateCursorColorForElement = (clientX: number, clientY: number) => {
      const el = document.elementFromPoint(clientX, clientY);
      if (!el) return;

      // Identify the closest major container
      const container = el.closest('section, nav, footer, [data-theme], header');
      
      // We only execute DOM updates if we've crossed into a new section
      if (container && container !== lastSectionRef.current) {
        lastSectionRef.current = container;
        
        const classes = container.className || "";
        // Define what constitutes a "Dark / Blue" background in our architecture
        const isDarkBg = 
          classes.includes("bg-[#070b14]") || 
          classes.includes("gradient-hero") || 
          classes.includes("bg-primary") || 
          classes.includes("bg-popover") ||
          container.tagName.toLowerCase() === 'footer';

        if (isDarkBg) {
          // Switch to White Cursor
          cursorRef.current?.classList.remove("bg-primary", "shadow-[0_0_8px_rgba(var(--primary),0.8)]");
          cursorRef.current?.classList.add("bg-white", "shadow-[0_0_8px_rgba(255,255,255,0.8)]");
          
          ringRef.current?.classList.remove("border-primary/50", "bg-primary/10");
          ringRef.current?.classList.add("border-white/50", "bg-white/10");
        } else {
          // Switch to Blue Cursor
          cursorRef.current?.classList.remove("bg-white", "shadow-[0_0_8px_rgba(255,255,255,0.8)]");
          cursorRef.current?.classList.add("bg-primary", "shadow-[0_0_8px_rgba(var(--primary),0.8)]");
          
          ringRef.current?.classList.remove("border-white/50", "bg-white/10");
          ringRef.current?.classList.add("border-primary/50", "bg-primary/10");
        }
      }
    };

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      
      updateCursorColorForElement(e.clientX, e.clientY);
    };

    // Recalculate color if scrolling without moving mouse
    const handleScroll = () => {
      updateCursorColorForElement(cursorX.get(), cursorY.get());
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot that perfectly tracks the mouse */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-colors duration-300"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Larger trailing ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 bg-primary/10 rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px] transition-colors duration-300"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
};

export default CustomCursor;
