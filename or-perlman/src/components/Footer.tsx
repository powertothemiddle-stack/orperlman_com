import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  // Scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Ticker repeated items for infinite marquee
  const tickerItems = [
    "FACILITATOR",
    "LEADER",
    "FATHER",
    "HUSBAND",
    "ACHIEVER",
    "CURIOUS",
  ];

  return (
    <footer className="bg-zinc-50/70 text-zinc-900 border-t border-zinc-200 relative overflow-hidden" id="footer">
      
      {/* 1. Infinite Scrolling Ticker (Marquee) at top of footer */}
      <div className="border-b border-zinc-200/80 py-4 bg-zinc-100/40 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-[marquee_25s_linear_infinite] shrink-0 gap-16 min-w-full">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[10px] font-bold font-display tracking-widest text-zinc-500 uppercase select-none">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600/60" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & socials (span 4) */}
          <div className="md:col-span-4 space-y-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group cursor-pointer text-left"
              id="footer-logo"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 100 100" className="w-4.5 h-4.5 text-white" fill="none">
                  {/* Thin circle (shifted top-left) */}
                  <circle cx="46" cy="46" r="39" stroke="currentColor" strokeWidth="2.5" />
                  {/* Thick circle (shifted bottom-right) */}
                  <circle cx="54" cy="54" r="37" stroke="currentColor" strokeWidth="8.5" />
                </svg>
              </div>
              <span className="font-display font-black text-lg tracking-wider text-zinc-900">OR PERLMAN</span>
            </button>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans max-w-sm">
              Leadership in motion.
            </p>
          </div>

          {/* Col 2: Navigation links (span 2.5) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-sans">
              <li>
                <button onClick={() => scrollToSection("verticals")} className="hover:text-zinc-950 transition-colors cursor-pointer text-left font-semibold">
                  Verticals
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-zinc-950 transition-colors cursor-pointer text-left font-semibold">
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("articles")} className="hover:text-zinc-950 transition-colors cursor-pointer text-left font-semibold">
                  Insights
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("cta")} className="hover:text-zinc-950 transition-colors cursor-pointer text-left font-semibold">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Links (span 2.5) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Links</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-sans">
              <li>
                <a href="mailto:hello@orperlman.com" className="inline-flex items-center gap-1 hover:text-zinc-950 transition-colors font-semibold">
                  Email <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/or-perlman14/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-950 transition-colors font-semibold">
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href="https://miro.com/templates/profile/the-middle/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-950 transition-colors font-semibold">
                  Miro templates <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription (span 3.5) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">STAY CONNECTED</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Let's stay in touch. I'm looking forward to receiving your email.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="absolute top-1.5 right-1.5 bg-zinc-900 text-white hover:bg-zinc-800 p-2 rounded-lg cursor-pointer transition-colors shadow-sm"
                  id="footer-subscribe"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] text-emerald-600 font-bold"
                >
                  Thank you! You have subscribed successfully.
                </motion.p>
              )}
            </form>
          </div>

        </div>

        {/* 3. Bottom Legal & Copyright row */}
        <div className="pt-12 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-zinc-400 font-sans uppercase tracking-wider font-bold">
          <p>© {currentYear} OR PERLMAN. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-700 transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
