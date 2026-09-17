import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, Sparkles, X, Send, Loader2, Copy, Check, Mail, Linkedin } from "lucide-react";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@orperlman.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = "hello@orperlman.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const validateForm = () => {
    const tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state after transition completes
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 300);
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
              <button
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm ${
                  copiedEmail
                    ? "bg-emerald-500 text-white"
                    : "bg-white text-zinc-950 hover:bg-zinc-100"
                }`}
                id="cta-copy-email"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Email Address Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Write me an Email
                  </>
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/or-perlman14/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200 shadow-sm"
                id="cta-linkedin"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" /> Connect on LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal Contact Form */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
              id="contact-modal"
            >
              {/* Top banner visual element */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-zinc-600 via-white to-zinc-600" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer z-20"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white flex items-center gap-2">
                          Start a Conversation
                        </h3>
                        <p className="text-zinc-400 text-xs mt-1.5 font-sans">
                          Fill out the details below and I'll get back to you shortly.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                            Your Name <span className="text-zinc-500 font-normal">(Required)</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                            className={`w-full bg-zinc-900/50 border ${
                              errors.name ? "border-red-500/50 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500"
                            } rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors font-sans`}
                            id="contact-form-name"
                          />
                          {errors.name && (
                            <p className="text-red-400 text-[11px] font-sans mt-1">{errors.name}</p>
                          )}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                            Email Address <span className="text-zinc-500 font-normal">(Required)</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                            className={`w-full bg-zinc-900/50 border ${
                              errors.email ? "border-red-500/50 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500"
                            } rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors font-sans`}
                            id="contact-form-email"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-[11px] font-sans mt-1">{errors.email}</p>
                          )}
                        </div>

                        {/* Message Input */}
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                            Your Message <span className="text-zinc-500 font-normal">(Required)</span>
                          </label>
                          <textarea
                            required
                            rows={4}
                            placeholder="Tell me about your project, idea, or challenge..."
                            value={formData.message}
                            onChange={(e) => {
                              setFormData({ ...formData, message: e.target.value });
                              if (errors.message) setErrors({ ...errors, message: "" });
                            }}
                            className={`w-full bg-zinc-900/50 border ${
                              errors.message ? "border-red-500/50 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500"
                            } rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors font-sans resize-none`}
                            id="contact-form-message"
                          />
                          {errors.message && (
                            <p className="text-red-400 text-[11px] font-sans mt-1">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                          id="contact-form-submit"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" /> Sending message...
                            </>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" /> Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="py-6 text-center space-y-6"
                    >
                      <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-2xl tracking-tight text-white">
                          Message Sent!
                        </h3>
                        <p className="text-zinc-400 text-sm max-w-sm mx-auto font-sans leading-relaxed">
                          Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been received successfully. I'll get back to you soon.
                        </p>
                      </div>

                      <button
                        onClick={handleClose}
                        className="cursor-pointer inline-flex items-center justify-center px-8 py-3 rounded-xl text-xs font-semibold bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
                        id="contact-success-close"
                      >
                        Close Window
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

