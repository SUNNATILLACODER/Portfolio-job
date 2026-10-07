import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { contactConfig } from '../data/contact';
import { GithubIcon } from './icons/GithubIcon';
import { Send, Mail, Copy, Check, ArrowUpRight, AlertCircle, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedTelegram, setCopiedTelegram] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = t.contact.validation.nameRequired;
    }
    if (!formData.email.trim()) {
      errs.email = t.contact.validation.emailRequired;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = t.contact.validation.emailInvalid;
      }
    }
    if (!formData.message.trim()) {
      errs.message = t.contact.validation.messageRequired;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest mailto delivery
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Sunnatilla,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyForTelegram = () => {
    const textToCopy = formData.message.trim()
      ? `Hello Sunnatilla, I'm ${formData.name || 'a visitor'} (${formData.email || 'no email'}).\n\n${formData.message}`
      : `Hello Sunnatilla, I reviewed your portfolio and would like to discuss a frontend project with you.`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedTelegram(true);
    setTimeout(() => setCopiedTelegram(false), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-b border-white/[0.06] bg-[#080A0A]"
      aria-label="Contact inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.06]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
              {t.contact.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F4F0] tracking-tight">
              {t.contact.heading}
            </h2>
          </div>

          <p className="text-sm text-[#8E9691] max-w-md leading-relaxed font-sans">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Direct Channels & Honest Action Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct High-Contrast Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#F3F4F0] font-semibold">
                // {t.contact.directChannels}
              </h3>
            </div>

            {/* Telegram Channel */}
            <a
              href={contactConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl surface-card surface-card-hover border border-white/[0.08]"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#080A0A] border border-white/[0.06] text-[#00F5A0]">
                    <Send size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#F3F4F0] block">Telegram</span>
                    <span className="text-xs font-mono text-[#00F5A0]">{contactConfig.telegramHandle}</span>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-[#8E9691] group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs text-[#8E9691] pl-11">
                Fastest response for technical inquiries, freelancing, and immediate chat.
              </p>
            </a>

            {/* GitHub Profile */}
            <a
              href={contactConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl surface-card surface-card-hover border border-white/[0.08]"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#080A0A] border border-white/[0.06] text-[#F3F4F0]">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#F3F4F0] block">GitHub</span>
                    <span className="text-xs font-mono text-[#8E9691]">{contactConfig.githubHandle}</span>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-[#8E9691] group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs text-[#8E9691] pl-11">
                Open source repositories, pull requests, and verified commit history.
              </p>
            </a>

            {/* Email Address */}
            <div className="p-5 rounded-xl surface-card border border-white/[0.08]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#080A0A] border border-white/[0.06] text-[#82FCD0]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#F3F4F0] block">Email</span>
                    <span className="text-xs font-mono text-[#8E9691]">{contactConfig.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-[#080A0A] border border-white/[0.06] text-[#8E9691] hover:text-[#00F5A0] transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="text-[#00F5A0]" /> : <Copy size={14} />}
                </button>
              </div>
              <p className="text-xs text-[#8E9691] pl-11">
                Direct business inquiries, contract briefs, and project proposals.
              </p>
            </div>

            {/* Status Indicator */}
            <div className="p-3.5 rounded-lg bg-[#080A0A] border border-white/[0.06] flex items-center gap-2.5 text-xs font-mono text-[#F3F4F0]">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
              <span>{t.contact.statusOpen}</span>
            </div>
          </div>

          {/* Right Column: Honest Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="surface-card p-6 sm:p-8 rounded-xl border border-white/[0.08]">
              <h3 className="font-display text-xl font-bold text-[#F3F4F0] mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-[#8E9691] mb-6 font-mono">
                {t.contact.formSubtitle}
              </p>

              <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[#F3F4F0] mb-1.5">
                    {t.contact.fields.name} <span className="text-[#00F5A0]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.fields.namePlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080A0A] text-sm text-[#F3F4F0] placeholder-[#8E9691]/50 border transition-colors focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-white/[0.08] focus:border-[#00F5A0]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-[#F3F4F0] mb-1.5">
                    {t.contact.fields.email} <span className="text-[#00F5A0]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.fields.emailPlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080A0A] text-sm text-[#F3F4F0] placeholder-[#8E9691]/50 border transition-colors focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-white/[0.08] focus:border-[#00F5A0]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#F3F4F0] mb-1.5">
                    {t.contact.fields.message} <span className="text-[#00F5A0]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.fields.messagePlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080A0A] text-sm text-[#F3F4F0] placeholder-[#8E9691]/50 border transition-colors focus:outline-none ${
                      errors.message ? 'border-red-500' : 'border-white/[0.08] focus:border-[#00F5A0]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Direct Delivery Notice */}
                <div className="p-3 rounded-lg bg-[#080A0A] border border-white/[0.06] text-[11px] font-mono text-[#8E9691] flex items-start gap-2">
                  <MessageSquare size={13} className="text-[#00F5A0] shrink-0 mt-0.5" />
                  <span>{t.contact.honestNotice}</span>
                </div>

                {/* Submit Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 min-w-[200px] py-3 px-5 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-semibold text-xs tracking-wider uppercase hover:bg-[#82FCD0] transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>{t.contact.submitButton}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyForTelegram}
                    className="py-3 px-4 rounded-lg bg-[#080A0A] border border-white/[0.08] text-xs font-mono text-[#F3F4F0] hover:text-[#00F5A0] hover:border-[#00F5A0]/40 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    {copiedTelegram ? (
                      <>
                        <Check size={14} className="text-[#00F5A0]" />
                        <span className="text-[#00F5A0]">{t.contact.copiedNotice}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>{t.contact.copyToTelegram}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
