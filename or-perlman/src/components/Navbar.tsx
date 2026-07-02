import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const navLinks = [
    { name: "Verticals", id: "verticals" },
    { name: "About Me", id: "about" },
    { name: "Insights", id: "articles" },
    { name: "Contact", id: "cta" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-zinc-200 bg-white/80 backdrop-blur-xl py-6"
          : "border-b border-transparent bg-transparent py-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo (Left-aligned, flex-1) */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3.5 group cursor-pointer text-left"
            id="nav-logo"
          >
            <svg viewBox="0 0 100 100" className="w-[30px] h-[30px] text-black transition-transform duration-300 group-hover:scale-110" fill="none">
              {/* Thin circle (shifted top-left) */}
              <circle cx="46" cy="46" r="39" stroke="currentColor" strokeWidth="2.5" />
              {/* Thick circle (shifted bottom-right) */}
              <circle cx="54" cy="54" r="37" stroke="currentColor" strokeWidth="8.5" />
            </svg>
            <span className="font-display font-black text-lg md:text-2xl tracking-wider md:tracking-widest text-black leading-none whitespace-nowrap">
              OR PERLMAN
            </span>
          </button>
        </div>

        {/* Desktop Navigation (Centered in middle) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs uppercase font-bold tracking-wider text-zinc-500 hover:text-black transition-colors duration-200 cursor-pointer relative py-1 group"
              id={`nav-link-${link.id}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right side container - Empty on desktop, shows mobile menu button on mobile */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-900 hover:text-black p-1 cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                {navLinks.map((link, idx) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-base md:text-sm font-bold uppercase tracking-wider text-zinc-600 hover:text-black transition-colors duration-200 py-1 cursor-pointer"
                    id={`mobile-nav-link-${link.id}`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-4 md:pt-0 border-t md:border-t-0 border-zinc-200"
              >
                <button
                  onClick={() => scrollToSection("cta")}
                  className="w-full md:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-zinc-900 transition-colors cursor-pointer"
                  id="mobile-nav-cta"
                >
                  Get in Touch <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
