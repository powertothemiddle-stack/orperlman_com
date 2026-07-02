import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, TrendingUp, Zap, Layers, Globe, Check, Command } from "lucide-react";

export default function Features() {
  // Clock state
  const [time, setTime] = useState(new Date());
  const [use24Hour, setUse24Hour] = useState(true);

  // Growth Chart hover/interactive state
  const [activeChartIndex, setActiveChartIndex] = useState<number | null>(null);
  const chartPoints = [
    { label: "Jan", val: 30, growth: "+12%" },
    { label: "Feb", val: 45, growth: "+35%" },
    { label: "Mar", val: 35, growth: "+22%" },
    { label: "Apr", val: 65, growth: "+110%" },
    { label: "May", val: 58, growth: "+90%" },
    { label: "Jun", val: 85, growth: "+240%" },
    { label: "Jul", val: 98, growth: "+310%" },
  ];

  // Layers state
  const [selectedLayer, setSelectedLayer] = useState("hero");
  const layerDetails = {
    hero: { title: "Hero Layout", desc: "Large header typography paired with animated display text and action buttons.", speed: "120ms load" },
    grid: { title: "Bento Grid", desc: "Intelligent layout arranging visual components with crisp, thin borders.", speed: "80ms load" },
    work: { title: "Work Showcase", desc: "Interactive filtering, magnification, and smooth slide previews.", speed: "140ms load" },
    pricing: { title: "SaaS Tables", desc: "Dynamic pricing toggles supporting monthly/yearly packages.", speed: "90ms load" },
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatClockTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    if (!use24Hour) {
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
  };

  const svgWidth = 500;
  const svgHeight = 160;
  const padding = 20;

  const getCoordinates = () => {
    return chartPoints.map((p, idx) => {
      const x = padding + (idx * (svgWidth - padding * 2)) / (chartPoints.length - 1);
      const y = svgHeight - padding - (p.val / 100) * (svgHeight - padding * 2);
      return { x, y };
    });
  };

  const coords = getCoordinates();
  const linePath = coords.reduce((acc, c, idx) => {
    return idx === 0 ? `M ${c.x} ${c.y}` : `${acc} L ${c.x} ${c.y}`;
  }, "");

  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${svgHeight - padding} L ${coords[0].x} ${svgHeight - padding} Z`;

  return (
    <section className="py-24 bg-zinc-50/70 text-zinc-900 border-t border-zinc-200/80 relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 mb-6">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              Engineered for Speed
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-zinc-900 mb-6">
            Designed for impact. <br />
            Built with pure precision.
          </h2>
          <p className="text-zinc-500 font-sans text-base md:text-lg max-w-xl">
            A comprehensive suite of custom modules configured to load instantly and behave beautifully across any screen.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Interactive Live Local Clock (Col span 5) */}
          <div className="col-span-1 md:col-span-5 rounded-3xl border border-zinc-200/80 bg-white p-6 flex flex-col justify-between h-[320px] hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            {/* Grid line accent */}
            <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-zinc-100 group-hover:border-zinc-200 transition-colors duration-300" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold uppercase tracking-wider">Local Time Engine</span>
                </div>
                <button
                  onClick={() => setUse24Hour(!use24Hour)}
                  className="px-2.5 py-1 rounded bg-zinc-100 hover:bg-zinc-200 text-[10px] font-bold text-zinc-700 transition-colors border border-zinc-200 cursor-pointer"
                  id="features-time-toggle"
                >
                  {use24Hour ? "12H" : "24H"}
                </button>
              </div>

              <div className="pt-4">
                <p className="font-display font-bold text-4xl lg:text-5xl text-zinc-900 tracking-wider font-mono">
                  {formatClockTime(time)}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-zinc-500">
                    Live Feed • {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <h3 className="font-display font-bold text-lg mb-1 text-zinc-900">Dynamic Status Tracker</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Tracks user schedules, local dates, and active session nodes directly inside your portfolio container.
              </p>
            </div>
          </div>

          {/* Card 2: Interactive Growth Metric SVG Graph (Col span 7) */}
          <div className="col-span-1 md:col-span-7 rounded-3xl border border-zinc-200/80 bg-white p-6 flex flex-col justify-between h-[320px] hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-zinc-500">
                <TrendingUp className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Aesthetic Performance Sparkline</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-400">Active Metric:</span>
                <span className="ml-1.5 text-xs font-bold text-rose-500 font-mono">
                  {activeChartIndex !== null ? chartPoints[activeChartIndex].growth : "+310% Peak"}
                </span>
              </div>
            </div>

            {/* Sparkline Canvas */}
            <div className="relative h-40 flex items-center justify-center my-2">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <line x1={padding} y1={svgHeight / 2} x2={svgWidth - padding} y2={svgHeight / 2} stroke="#000000" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />
                <line x1={padding} y1={padding} x2={svgWidth - padding} y2={padding} stroke="#000000" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />
                <line x1={padding} y1={svgHeight - padding} x2={svgWidth - padding} y2={svgHeight - padding} stroke="#000000" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />

                <path d={areaPath} fill="url(#chartGlow)" />

                <path
                  d={linePath}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {activeChartIndex !== null && (
                  <line
                    x1={coords[activeChartIndex].x}
                    y1={padding}
                    x2={coords[activeChartIndex].x}
                    y2={svgHeight - padding}
                    stroke="#818cf8"
                    strokeOpacity="0.4"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                )}

                {coords.map((c, idx) => (
                  <g key={idx}>
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={activeChartIndex === idx ? "6" : "3.5"}
                      fill={activeChartIndex === idx ? "#818cf8" : "#27272a"}
                      className="transition-all duration-200 cursor-pointer"
                      onMouseEnter={() => setActiveChartIndex(idx)}
                      onMouseLeave={() => setActiveChartIndex(null)}
                    />
                  </g>
                ))}

                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e11d48" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </svg>
            </div>

            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base text-zinc-900">Conversion & Yield Sparkline</h3>
                <p className="text-xs text-zinc-500">
                  Interactive real-time node rendering optimized for absolute CSS layout fluidity.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Interactive Workspace Layers Module (Col span 7) */}
          <div className="col-span-1 md:col-span-7 rounded-3xl border border-zinc-200/80 bg-white p-6 flex flex-col justify-between min-h-[320px] hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-zinc-500">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Dynamic Layout Tree</span>
              </div>
              <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Active Node
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-grow my-2">
              {/* Left Column: Interactive Layer selectors */}
              <div className="col-span-1 md:col-span-5 flex flex-col gap-2">
                {Object.keys(layerDetails).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedLayer(key)}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all cursor-pointer ${
                      selectedLayer === key
                        ? "bg-zinc-100 text-zinc-900 border-zinc-300 shadow-sm"
                        : "bg-transparent text-zinc-400 border-transparent hover:text-zinc-700"
                    }`}
                    id={`layer-select-${key}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize">{key} node</span>
                      {selectedLayer === key && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column: Layer Preview Canvas */}
              <div className="col-span-1 md:col-span-7 bg-zinc-50 rounded-xl border border-zinc-200 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/5 to-rose-500/5 rounded-bl-full pointer-events-none" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedLayer}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 flex-grow"
                  >
                    <p className="text-xs font-display font-bold text-zinc-900 uppercase tracking-wider">
                      {layerDetails[selectedLayer as keyof typeof layerDetails].title}
                    </p>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      {layerDetails[selectedLayer as keyof typeof layerDetails].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-2 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>Render Load:</span>
                  <span className="text-zinc-700 font-bold">{layerDetails[selectedLayer as keyof typeof layerDetails].speed}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <h3 className="font-display font-bold text-lg text-zinc-900">Hierarchical Layer Controller</h3>
              <p className="text-xs text-zinc-500">
                A gorgeous interactive simulator for organizing page layers and visualizing layout render loads.
              </p>
            </div>
          </div>

          {/* Card 4: Global Hub Integrations Module (Col span 5) */}
          <div className="col-span-1 md:col-span-5 rounded-3xl border border-zinc-200/80 bg-white p-6 flex flex-col justify-between min-h-[320px] hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="flex items-center gap-2 text-zinc-500 mb-4">
              <Globe className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider">Global Ecosystem Hub</span>
            </div>

            {/* Central Node Visualizer with lines pulsing */}
            <div className="relative h-44 flex items-center justify-center my-2">
              {/* Central Core */}
              <div className="relative w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Command className="w-6 h-6 text-white animate-spin-slow" />
              </div>

              {/* Surrounding Nodes */}
              <div className="absolute top-2 left-6 w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center z-10 hover:border-zinc-300 hover:shadow-sm transition-all">
                <span className="text-[10px] font-extrabold font-display text-zinc-800">FIG</span>
              </div>
              <div className="absolute top-2 right-6 w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center z-10 hover:border-zinc-300 hover:shadow-sm transition-all">
                <span className="text-[10px] font-extrabold font-display text-zinc-800">SLK</span>
              </div>
              <div className="absolute bottom-2 left-6 w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center z-10 hover:border-zinc-300 hover:shadow-sm transition-all">
                <span className="text-[10px] font-extrabold font-display text-zinc-800">STR</span>
              </div>
              <div className="absolute bottom-2 right-6 w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center z-10 hover:border-zinc-300 hover:shadow-sm transition-all">
                <span className="text-[10px] font-extrabold font-display text-zinc-800">NOT</span>
              </div>

              {/* Pulsing connection line background graphics */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                <path d="M 40 40 L 100 100 M 160 40 L 100 100 M 40 160 L 100 100 M 160 160 L 100 100" stroke="#000000" strokeWidth="1" strokeOpacity="0.08" />
                <path d="M 40 40 L 100 100 M 160 40 L 100 100 M 40 160 L 100 100 M 160 160 L 100 100" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="8 12" className="animate-[dash_4s_linear_infinite]" />
              </svg>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <h3 className="font-display font-bold text-lg text-zinc-900">Universal Hub Connection</h3>
              <p className="text-xs text-zinc-500">
                Syncs workflow databases and design components smoothly across Slack, Figma, and Notion APIs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
