import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 bg-white text-zinc-900 border-t border-zinc-200 relative overflow-hidden scroll-mt-24" id="cta">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Rounded border dark card wrapper on white section background */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-[32px] border border-zinc-800 p-8 md:p-16 flex flex-col items-center text-center overflow-hidden shadow-2xl"
        >
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white" />
            <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white" />
            <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white" />
          </div>

          <div className="relative z-10 space-y-6 max-w-2xl">


            {/* Header */}
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter text-white">
              Connect with me <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
                today.
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-zinc-400 text-sm md:text-base font-sans leading-relaxed max-w-lg mx-auto">
              Let's chat and explore a bespoke solution for your challenge.
            </p>

            {/* Bullets row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-zinc-400 font-sans">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mentoring & teaching
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fractional services
              </div>
               <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />Shops & products
              </div>
               <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mobility & strength
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={() => {
                  const element = document.getElementById("footer");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-100 transition-colors shadow-sm"
                id="cta-contact"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
