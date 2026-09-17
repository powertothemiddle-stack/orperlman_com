import { motion } from "motion/react";
import { User } from "lucide-react";
// @ts-ignore
import profilePic from "../assets/images/PXL_20260727_090125328.PORTRAIT.jpg";

export default function AboutMe() {
  return (
    <section className="py-24 bg-white text-zinc-900 border-t border-zinc-200/80 relative overflow-hidden scroll-mt-24" id="about">
      {/* Background guideline line effects */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-zinc-100" />
        <div className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-zinc-100" />
        <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-zinc-100" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center animate-fade-in">
        {/* Header: MORE ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 mb-8"
        >
          <User className="w-3.5 h-3.5 text-zinc-800" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
            MORE ABOUT ME
          </span>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-zinc-200/80 shadow-md">
            <img
              id="about-me-portrait"
              src={profilePic}
              alt="Or Perlman portrait"
              width={224}
              height={224}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-black/5 pointer-events-none" />
        </motion.div>

        {/* Sub-header */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-xl md:text-2xl lg:text-3xl tracking-tight text-zinc-900 leading-snug mb-6 max-w-2xl"
        >
          A 3x CMO and organizational strategist, I design high-impact, scalable business systems and cultivate leadership excellence while serving as a strategic facilitator and mentor.
        </motion.h3>

        {/* Text paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-500 text-sm md:text-base font-sans leading-relaxed max-w-2xl"
        >
          Bringing the same focus and discipline that made me an award-winning youth athlete, I bridge the gap between commercial planning and operational excellence, optimizing everything from digital ecosystems to team workflows.
        </motion.p>
      </div>
    </section>
  );
}
