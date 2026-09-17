import React, { useState } from "react";
import { motion } from "motion/react";
import worldMeritLogo from "../assets/images/WorldMerit logo.png";
import woowooLogo from "../assets/images/Woowoo logo.png";
import sumUpLogo from "../assets/images/SumUp_logo_ModernInk_RGB-FullLogo_web_400width.png";
import innonatureLogo from "../assets/images/Innonature logo.png";
import codeUniversityLogo from "../assets/images/CODE University.png";
import careerFoundryLogo from "../assets/images/CareerFoundry logo.png";
import boasLogo from "../assets/images/Boas-logo-1028x1080-removebg-preview.png";
import altneulandLogo from "../assets/images/ALTNEULAND-EN-stacked-black copy.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const partners = [
    { name: "WorldMerit", src: worldMeritLogo, className: "h-8 w-auto object-contain" },
    { name: "WooWoo", src: woowooLogo, className: "h-3.5 w-auto object-contain" },
    { name: "SumUp", src: sumUpLogo, className: "h-[78px] w-auto object-contain" },
    { name: "InnoNature", src: innonatureLogo, className: "h-[96px] w-auto object-contain" },
    { name: "CODE University", src: codeUniversityLogo, className: "h-8 w-auto object-contain" },
    { name: "CareerFoundry", src: careerFoundryLogo, className: "h-[84px] w-auto object-contain" },
    { name: "Boas", src: boasLogo, className: "h-9 w-auto object-contain" },
    { name: "Altneuland", src: altneulandLogo, className: "h-[96px] w-auto object-contain" },
  ];

  const gridItems = [
    {
      id: "marketing",
      tag: "Fractional services",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=700&q=75",
      gradient: "from-blue-950/40 via-transparent to-black/50",
      overlay: "Marketing & E-commerce",
      backLabel: "FRACTIONAL SERVICES",
      color: "#ff55cc",
      description: "From turnaround fixes to launching new growth programs, I focus on maximizing efficiency and shortening time to impact.",
      bullets: [
        "Ecommerce and marketing strategy",
        "From initial setup to market execution",
        "One-off, freelance support, or fractional leadership"
      ],
      buttonText: "INQUIRE ADVISORY",
      buttonLink: "mailto:hello@orperlman.com?subject=Inquiry: Marketing %26 E-commerce Advisory",
    },
    {
      id: "education",
      tag: "Next Generation",
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=700&q=75",
      gradient: "from-zinc-950/40 via-transparent to-black/50",
      overlay: "Teaching & Mentoring",
      backLabel: "NEXT GENERATION",
      color: "#00f5a0",
      description: "Empowering the next generation of business architects through exxperience-based learning",
      bullets: [
        "Mentor and leadership facilitator ",
        "Advanced Marketing lecturer at Code University for Applied Sciences",
        "Board member of World Merit, a community of changemakers"
      ],
      buttonText: "INQUIRE MENTORING",
      buttonLink: "mailto:hello@orperlman.com?subject=Inquiry: Teaching %26 Mentoring",
    },
    {
      id: "e-commerce",
      tag: "Experiments",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=75",
      gradient: "from-purple-950/40 via-transparent to-black/50",
      overlay: "Shops & Products",
      backLabel: "EXPERIMENTS",
      color: "#a855f7",
      description: "Rapid incubation and deployment of my own online storefronts, micro-brands, and experimental e-commerce touchpoints.",
      bullets: [
        "Grounded Jewlery: Elegant wearables for stress relief, sensory feedback, and focus",
        "CognitivHQ: Screen-free, STEM toys for curious primary-age children",
        "The Movement Deck: Gamifying child-adult tandem workouts, for healthy routines and fun bonding"
      ],
      buttonText: "EXPLORE VENTURES",
      buttonLink: "mailto:hello@orperlman.com?subject=Inquiry: Shops %26 Products Experiments",
    },
    {
      id: "athletics",
      tag: "Human Movement",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=75",
      gradient: "from-red-950/35 via-transparent to-black/50",
      overlay: "Mobility & Strength",
      backLabel: "HUMAN MOVEMENT",
      color: "#f97316",
      description: "Personal training frameworks for oridinary people designed for mobility, injury resilience, and functional athletic capability.",
      bullets: [
        "Science-backed strength training",
        "Strength through full range of motion",
        "Preparing the body for both sports and everyday life"
      ],
      buttonText: "START TRAINING",
      buttonLink: "mailto:hello@orperlman.com?subject=Inquiry: Mobility %26 Strength Coaching",
    },
  ];

  return (
    <section className="relative min-h-screen pt-40 pb-16 bg-white text-black overflow-hidden" id="hero">
      {/* Background architectural guideline line effects */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-zinc-100" />
        <div className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-zinc-100" />
        <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-zinc-100" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Headline Display - Matches screenshot exactly */}
          <div className="text-center py-4">
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-[12vw] md:text-[11vw] tracking-tighter leading-[0.85] text-black uppercase select-none"
            >
              LEADERSHIP<br />IN MOTION
            </motion.h1>
          </div>

          {/* 2x2 Bento Box Grid with 3D Flip capability */}
          <motion.div
            id="verticals"
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 scroll-mt-24"
          >
            {gridItems.map((item, index) => (
              <BentoCard key={item.id} item={item} priority={index === 0} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Brands & Scrolling Footer Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-16">
        <div className="border-t border-zinc-200 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">
            Trusted by employers and clients
          </p>
          <div id="hero-company-logos" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {partners.map((p) => {
              return (
                <div
                  key={p.name}
                  className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  title={p.name}
                >
                  <img
                    src={p.src}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className={p.className}
                    referrerPolicy="no-referrer"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BentoItem {
  id: string;
  tag: string;
  image: string;
  gradient: string;
  overlay: string;
  backLabel: string;
  color: string;
  description: string;
  bullets: string[];
  buttonText: string;
  buttonLink: string;
}

const BentoCard: React.FC<{ item: BentoItem; priority?: boolean }> = ({ item, priority = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative h-[380px] sm:h-[450px] md:h-[500px] w-full cursor-pointer group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden border border-zinc-200/80 shadow-sm transition-all duration-500"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Background high-resolution image */}
          <img
            src={item.image}
            alt={item.tag}
            width={700}
            height={500}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
              isFlipped ? "scale-105" : "scale-100 group-hover:scale-105"
            }`}
          />
          
          {/* Visual Ambient Color & Contrast Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} transition-opacity duration-500`} />
          
          {/* Double Noise Layer */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="absolute inset-0 opacity-[0.14] pointer-events-none mix-blend-screen bg-repeat grainy-overlay" />

          {/* Upper Left Floating Custom Category Tag */}
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider uppercase text-white select-none shadow-sm">
              {item.tag}
            </span>
          </div>

          {/* Bottom Left Floating Custom Overlay Text */}
          {item.overlay && (
            <div className="absolute bottom-8 left-8 z-10 max-w-[85%]">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight select-none drop-shadow-sm leading-none uppercase text-left">
                {item.overlay.includes(" & ") ? (
                  <>
                    <span className="block">{item.overlay.split(" & ")[0]} &</span>
                    <span className="block">{item.overlay.split(" & ")[1]}</span>
                  </>
                ) : (
                  item.overlay
                )}
              </h2>
            </div>
          )}
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden border border-zinc-800 bg-[#12131a] shadow-2xl p-8 sm:p-10 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Background Ambient Glow & Noise */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 via-[#12131a] to-black" />
          <div 
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-25 pointer-events-none transition-opacity duration-500" 
            style={{ backgroundColor: item.color }}
          />
          
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen bg-repeat grainy-overlay" />

          {/* Content area */}
          <div className="relative z-10 flex-1 flex flex-col justify-center text-left">
            {/* Tag / Category Label */}
            <span 
              className="text-[10px] tracking-widest font-mono font-black uppercase mb-2 block"
              style={{ color: item.color }}
            >
              {item.backLabel}
            </span>

            {/* Header / Title */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] font-display font-black tracking-tight leading-[1.05] uppercase mb-4">
              {item.overlay.includes(" & ") ? (
                <>
                  <span className="block">{item.overlay.split(" & ")[0]} &</span>
                  <span className="block">{item.overlay.split(" & ")[1]}</span>
                </>
              ) : (
                item.overlay
              )}
            </h2>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-4" />

            {/* Description */}
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5 font-sans font-light">
              {item.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-2">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 font-light">
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
