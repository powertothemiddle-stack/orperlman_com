import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Article } from "../types";
import { ArrowRight, X, Calendar, Clock, BookOpen, User } from "lucide-react";

export default function Work() {
  const [filter, setFilter] = useState<"All" | "Org Design" | "Leading Talent" | "Decision Making" | "Exercise and Mobility">("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "1",
      title: "Effective decision-making: the case for structure over content",
      category: "Decision Making",
      date: "Nov 24, 2022",
      readTime: "5 min read",
      description: "What's the point of sitting in so many meetings if we are terrible at them anyway? But what if you could enhance the effectiveness of your team interactions and decision-making? And no, having an agenda is not the answer.",
      author: "Or Perlman",
      link: "#",
      content: [
        "In modern minimalist architecture, every margin, every divider, and every stroke holds significant value. When designing premium layout grids, content density acts as the foundational baseline. By omitting gratuitous illustrations and emphasizing pure structural design, we construct high-frequency spatial awareness.",
        "Thin, light borders (such as 1px zinc-200 or zinc-800 depending on the palette) act as elegant boundaries without causing visual noise. This establishes clear separation between content chunks, letting user eyes guide seamlessly over the layout.",
        "We prioritize perfect ratio segments (inspired by Japanese tatami mats and golden ratios) to partition information gracefully. When configuring bento grid structures in Tailwind, using direct grid properties allows modules to grow and shrink symmetrically, securing visual balance."
      ]
    },
    {
      id: "2",
      title: "The one thing you should know about OKRs (Objectives and Key Results)",
      category: "Org Design",
      date: "Aug 22, 2022",
      readTime: "8 min read",
      description: "For OKRs to work at your company, it has to be adapted to your context - your org structure, business environment, processes, etc. The OKR Building Blocks template helps you break down the OKR strategy and goal setting framework into smaller elements, allowing you to recombine them to create a more personalized version for your team.",
      author: "Or Perlman",
      link: "#",
      content: [
        "Performance isn't just a metric; it's a foundational user experience component. To unlock render times consistently under 100 milliseconds, modern applications must stabilize React's execution flow and avoid unnecessary computations.",
        "One major culprit of visual lag is un-memoized object references inside hooks like useEffect. By passing primitive values (strings, numbers, booleans) in dependency arrays, or relying on useCallback and useMemo properly, we stop components from performing infinite re-render loops.",
        "We also benefit from separating heavy client components into lazy-loaded files. Using dynamic React.lazy imports paired with Suspense wrappers ensures the initial javascript payload remains lean, leading to instant interactive readiness."
      ]
    },
    {
      id: "3",
      title: "OKRs are a waste of time: 10 mistakes you make with Objectives and Key-Results",
      category: "Org Design",
      date: "Jun 2, 2022",
      readTime: "4 min read",
      description: "Most people using OKRs can't see the actual benefits this framework brings, but what if the the problem is the way you use them? Discover the 10 mistakes you’re probably making with OKRs.",
      author: "Or Perlman",
      link: "#",
      content: [
        "Many digital designers suffer from the urge to fill every square pixel with banners, indicators, badges, and alerts. However, the most premium designs globally leverage negative space as their signature element.",
        "Negative space is not 'empty space'—it is active space. It provides breathing room for the cognitive system, allowing users to process headlines, brand identity, and focal calls-to-action without overwhelming their attention capacity.",
        "By leaving generous negative space in landing views, we create a sense of premium luxury. High contrast, elegant typography, and massive margins command focus and naturally translate to higher trust and better engagement."
      ]
    },
    {
      id: "4",
      title: "Is feedback culture all it’s cracked up to be?",
      category: "Leading Talent",
      date: "May 5, 2022",
      readTime: "6 min read",
      description: `Employee development is everyone's responsibility every day
The problem? The end shouldn't justify the means, which is, unfortunately, the message from the book An Everyone Culture.`,
      author: "Or Perlman",
      link: "#",
      content: [
        "External charting libraries often load megabytes of bundled dependencies, introducing slow interactive boots. For clean sparklines and simplified trend indicators, pure inline SVG elements are dramatically faster and more customizable.",
        "By calculating dynamic path coordinates mathematically inside a React component, we can bind data points straight to a standard <svg> and <path d={...}>. This gives us absolute control over the visual line strokes, fills, and responsive behavior.",
        "We can also integrate standard Tailwind animations or Framer Motion layout attributes directly on the SVG nodes to design elegant transition sweeps when data updates."
      ]
    },
    {
      id: "5",
      title: "The system must be first: The joys of scientific management",
      category: "Leading Talent",
      date: "Sep 28, 2021",
      readTime: "7 min read",
      description: "Employees are stupid, ignorant, and passive. They are only second to the methods and should avoid using their mind entirely.  And yet, is there something for us to learn here?",
      author: "Or Perlman",
      link: "#",
      content: [
        "As modern standard web stacks transition towards full-stack Node.js servers, relative path resolution errors under strict ES module environments have become a frequent developer pain point.",
        "By packaging the backend logic into a bundled CommonJS (.cjs) build using esbuild, we resolve all local imports at compile-time instead of runtime. This prevents strict relative path failures and optimizes the file structure for production deployments.",
        "This pre-compiled bundling approach also minimizes file system read requests, leading to incredibly fast startup times and higher resilience in containerized cloud environments."
      ]
    },
    {
      id: "6",
      title: "How to design an OKR planning workshop",
      category: "Org Design",
      date: "Sep 7, 2021",
      readTime: "5 min read",
      description: "A tried and tested template. For team leaders, Agile Coaches, or HR Business Partners - I encourage you to give it a try and then adapt it based on the needs of your business environment. ",
      author: "Or Perlman",
      link: "#",
      content: [
        "Relying on discrete breakpoints (like sm, md, lg) for typography size updates can result in sudden, awkward text wrapping on medium screens. Fluid typography solves this beautifully.",
        "Using CSS clamp() allows us to scale font sizes continuously between a defined minimum and maximum size based on the current viewport width. For example, clamp(1rem, 2.5vw + 0.5rem, 3rem) delivers beautiful scaling without breakpoints.",
        "In modern styling files, we can register fluid typography presets directly under Tailwind's utility configurations, making it incredibly straightforward to apply responsive scales across all layout components."
      ]
    },
    {
      id: "7",
      title: "Recurring meeting agenda",
      category: "Org Design",
      date: "Sep 5, 2021",
      readTime: "5 min read",
      description: "Ah, another meeting..!? The meeting is too long! Why are all these people present? What’s the goal here? Meetings are not the problem, it’s how we run them.",
      author: "Or Perlman",
      link: "#",
      content: [
        "Relying on discrete breakpoints (like sm, md, lg) for typography size updates can result in sudden, awkward text wrapping on medium screens. Fluid typography solves this beautifully.",
        "Using CSS clamp() allows us to scale font sizes continuously between a defined minimum and maximum size based on the current viewport width. For example, clamp(1rem, 2.5vw + 0.5rem, 3rem) delivers beautiful scaling without breakpoints.",
        "In modern styling files, we can register fluid typography presets directly under Tailwind's utility configurations, making it incredibly straightforward to apply responsive scales across all layout components."
      ]
    },
     {
      id: "8",
      title: "3 leadership principles to help juniors in your team crush any project",
      category: "Leading Talent",
      date: "Aug 31, 2021",
      readTime: "5 min read",
      description: "You should definitely get the benefits that seniors can provide, but juniors can often outperform them, given the right conditions.",
      author: "Or Perlman",
      link: "#",
      content: [
        "Relying on discrete breakpoints (like sm, md, lg) for typography size updates can result in sudden, awkward text wrapping on medium screens. Fluid typography solves this beautifully.",
        "Using CSS clamp() allows us to scale font sizes continuously between a defined minimum and maximum size based on the current viewport width. For example, clamp(1rem, 2.5vw + 0.5rem, 3rem) delivers beautiful scaling without breakpoints.",
        "In modern styling files, we can register fluid typography presets directly under Tailwind's utility configurations, making it incredibly straightforward to apply responsive scales across all layout components."
      ]
    },
  ];

  // Filtering
  const filteredArticles = articles.filter((art) => {
    return filter === "All" || art.category === filter;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Org Design":
        return "text-indigo-600 bg-indigo-50 border-indigo-100";
      case "Leading Talent":
        return "text-emerald-600 bg-emerald-50 border-emerald-100";
      case "Decision Making":
        return "text-amber-600 bg-amber-50 border-amber-100";
      case "Exercise and Mobility":
        return "text-rose-600 bg-rose-50 border-rose-100";
      default:
        return "text-zinc-600 bg-zinc-50 border-zinc-100";
    }
  };

  return (
    <section className="py-24 bg-white text-zinc-900 border-t border-zinc-200 relative scroll-mt-24" id="articles">
      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-zinc-100 pointer-events-none hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-zinc-100 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                Articles & Resources
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-zinc-900">
              Thoughts on Leadership
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mt-3 max-w-xl font-sans">
              The organizational setting needs to evolve. We can and should spend most waking hours enjoying what we do and know we made a difference.
            </p>
          </div>

          {/* Filters Container */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            {/* Filter Segment Control */}
            <div className="flex flex-wrap gap-1 p-1 rounded-2xl bg-zinc-50 border border-zinc-200">
              {["All", "Org Design", "Leading Talent", "Decision Making", "Exercise and Mobility"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-[11px] font-bold cursor-pointer transition-all duration-300 ${
                    filter === cat
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-500 hover:text-black"
                  }`}
                  id={`article-filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Rows Layout */}
        <div className="border-t border-zinc-200">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="group relative border-b border-zinc-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer -mx-4 px-4 rounded-2xl hover:bg-zinc-50/75 transition-all duration-300"
                  id={`article-row-${article.id}`}
                >
                  {/* Left block: Category, Title, Meta info */}
                  <div className="flex-grow space-y-3 max-w-4xl">
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-zinc-300" />
                        <span>{article.date}</span>
                        <span className="text-zinc-200">•</span>
                        <Clock className="w-3.5 h-3.5 text-zinc-300" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg md:text-xl text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs md:text-sm text-zinc-500 leading-relaxed max-w-3xl line-clamp-2 md:line-clamp-none font-sans">
                      {article.description}
                    </p>
                  </div>

                  {/* Right block: Author & Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-4 md:pt-0 border-t border-zinc-100 md:border-t-0">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center font-display font-bold text-[10px] text-zinc-700">
                        {article.author.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Written by</p>
                        <p className="text-xs font-semibold text-zinc-700">{article.author}</p>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 group-hover:text-zinc-950 group-hover:border-zinc-400 group-hover:bg-zinc-50 shadow-sm transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center text-zinc-400"
              >
                <p className="font-sans text-sm">No articles found in this category.</p>
                <button
                  onClick={() => setFilter("All")}
                  className="mt-4 text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline cursor-pointer"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArticle(null)}
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white border border-zinc-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 flex flex-col"
              >
                {/* Header info */}
                <div className="p-6 md:p-8 border-b border-zinc-100 flex flex-col gap-4 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
                    id="article-modal-close"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border ${getCategoryColor(activeArticle.category)}`}>
                      {activeArticle.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <span>{activeArticle.date}</span>
                      <span className="text-zinc-200">•</span>
                      <span>{activeArticle.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl md:text-3xl text-zinc-900 pr-10 leading-tight">
                    {activeArticle.title}
                  </h3>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center font-display font-bold text-xs text-zinc-700">
                      {activeArticle.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Published by</p>
                      <p className="text-xs font-semibold text-zinc-800">{activeArticle.author}</p>
                    </div>
                  </div>
                </div>

                {/* Article Content Preview */}
                <div className="p-6 md:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                  <p className="text-sm md:text-base text-zinc-600 font-medium leading-relaxed italic border-l-2 border-indigo-500 pl-4 bg-zinc-50/50 py-3 rounded-r-xl font-sans">
                    "{activeArticle.description}"
                  </p>

                  <div className="space-y-4 text-xs md:text-sm text-zinc-600 leading-relaxed font-sans">
                    {activeArticle.content && activeArticle.content.length > 0 ? (
                      activeArticle.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))
                    ) : (
                      <>
                        <p>
                          In modern minimalist architecture, every margin, every divider, and every stroke holds significant value. When designing premium layout grids, content density acts as the foundational baseline. By omitting gratuitous illustrations and emphasizing pure structural design, we construct high-frequency spatial awareness.
                        </p>
                        <p>
                          This article explores the direct implementation methodologies we used to balance positive and negative space, formulate mathematically cohesive scales using css clamp mechanics, and load sub-modules dynamically to secure immediate render fidelity.
                        </p>
                        <h4 className="font-display font-bold text-sm text-zinc-900 pt-2 uppercase tracking-wider">Core Methodology</h4>
                        <p>
                          First, we establish structural boundaries. Rigid grid structures limit adaptation across unconventional screens. To resolve this, we leverage fluid layout wrappers integrated with standard Flexbox and Grid rules that transition dynamically from desktop row structures into single-column mobile views.
                        </p>
                        <p>
                          Second, we prioritize visual hierarchy. Typographical sizes must reflect intentional design choices. We recommend using font pairings that match display sans-serif or sans-grotesque weights alongside monospace details for system indices.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-6 md:p-8 border-t border-zinc-100 bg-zinc-50 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider flex items-center gap-1.5 font-mono">
                    <User className="w-3.5 h-3.5 text-indigo-500" /> {activeArticle.author} © 2026
                  </span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
