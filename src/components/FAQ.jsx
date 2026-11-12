import React, { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { ChevronDown, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
  const { t, lang } = useLanguage();
  // Open the first item by default for immediate discoverability
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndex = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => {
    if (openIndices.length === t.faq.items.length) {
      setOpenIndices([]);
    } else {
      setOpenIndices(t.faq.items.map((_, i) => i));
    }
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 border-b border-white/[0.06] bg-[#080A0A]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.06]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] block">
                {t.faq.eyebrow}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/20 flex items-center gap-1">
                <ShieldCheck size={11} />
                <span>{t.faq.badge}</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F4F0] tracking-tight">
              {t.faq.heading}
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 max-w-md">
            <p className="text-sm text-[#A3AAA5] leading-relaxed font-sans md:text-right">
              {t.faq.subtitle}
            </p>
            <button
              type="button"
              onClick={expandAll}
              className="text-xs font-mono text-[#00F5A0] hover:text-[#82FCD0] underline underline-offset-4 cursor-pointer transition-colors"
            >
              {openIndices.length === t.faq.items.length
                ? (lang === 'uz' ? "Barchasini yopish" : lang === 'ru' ? "Свернуть все" : "Collapse all")
                : (lang === 'uz' ? "Barchasini ochish" : lang === 'ru' ? "Развернуть все" : "Expand all")}
            </button>
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndices.includes(index);
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#101413] border-[#00F5A0]/30 shadow-[0_0_25px_rgba(0,245,160,0.05)]'
                    : 'bg-[#101413]/60 border-white/[0.06] hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00F5A0]"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#00F5A0] pt-0.5 select-none">
                      [{itemNumber}]
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#F3F4F0] group-hover:text-[#00F5A0] transition-colors leading-snug">
                      {item.q}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 p-1.5 rounded-lg border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#00F5A0]/10 border-[#00F5A0]/30 text-[#00F5A0]'
                        : 'bg-white/[0.03] border-white/[0.06] text-[#8E9691] group-hover:text-[#F3F4F0] group-hover:border-white/20'
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.04]">
                        <p className="text-sm text-[#A3AAA5] leading-relaxed font-sans pl-8 sm:pl-9">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-[#101413] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#00F5A0]/10 border border-[#00F5A0]/20 flex items-center justify-center shrink-0 text-[#00F5A0]">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-[#F3F4F0]">
                {t.faq.telegramPrompt}
              </h4>
              <p className="text-xs text-[#8E9691] font-mono mt-0.5">
                Telegram: @war1pov_developer // sunnatilla.dev@gmail.com
              </p>
            </div>
          </div>

          <a
            href="https://t.me/war1pov_developer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-bold text-xs tracking-wider uppercase hover:bg-[#82FCD0] hover:shadow-[0_0_20px_rgba(0,245,160,0.3)] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>{t.faq.telegramBtn}</span>
            <Send size={13} />
          </a>
        </div>

      </div>
    </section>
  );
};
