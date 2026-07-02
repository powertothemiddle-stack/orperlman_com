import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: `“Or had been a mentor and an important partner in my transition towards the leadership role. 
      I grew as a person and as a future leader. 
      To this day I’m building upon the great experiences for how one builds a well functioning, engaged team where people genuinely cheer for each other on a human level.”`,
      author: "Hanna Luberadzka",
      role: "Brand Design Lead for EU @ SumUp"
    },
    {
      text: `“Our leadership team and I took away many actionable insights and left inspired to experiment in our teams. 
      Or is a great sparring partner and I’m happy to recommend him. 
      I am looking forward to working together again on other leadership topics.”`,
      author: "Judith Nguyen Thanh",
      role: "Director of People @ CareerFoundry"
    },
    {
      text: `“I highly recommend Or Perlman to any organization that values collaboration. 
      The workshop he designed helped our newly formed team-of-teams to a great start. 
      Our teamwork has improved substantially, and our business results are the proof.”`,
      author: "Stas Rozenbaum",
      role: "Director of Growth Marketing @ Ada Health"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      className="py-12 bg-zinc-50/80 text-zinc-900 border-t border-b border-zinc-200/80 relative overflow-hidden testimonial-section" 
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-12">
        
        {/* Left Side: Context label & Navigation arrows */}
        <div className="shrink-0 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-4 lg:border-r border-zinc-200/60 pb-4 lg:pb-0 lg:pr-12 lg:min-w-[240px]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 section-tag select-none mb-1">
              <MessageSquare className="w-3 h-3 text-indigo-600" />
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-600">
                Client Feedback
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider hidden lg:block">
              Immediate Authority & Trust
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Side: Active rotating quote and author details */}
        <div className="flex-grow min-h-[120px] sm:min-h-[80px] flex flex-col justify-center testimonial-container relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col text-left"
            >
              {/* Active quotation text with beautiful fluid sizing */}
              <p 
                id="testimonial-text" 
                className="font-display font-bold text-zinc-900 tracking-tight leading-relaxed mb-4 max-w-4xl testimonial-text text-sm sm:text-base md:text-lg whitespace-pre-line"
              >
                {current.text}
              </p>

              {/* Author Metadata inline */}
              <div className="flex items-center gap-2 testimonial-meta">
                <span 
                  id="testimonial-author" 
                  className="font-display font-extrabold text-xs text-indigo-600 tracking-wide uppercase testimonial-author"
                >
                  {current.author}
                </span>
                <span className="text-zinc-300 text-xs select-none">•</span>
                <span 
                  id="testimonial-role" 
                  className="text-[11px] sm:text-xs text-zinc-500 font-medium font-sans testimonial-role"
                >
                  {current.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
