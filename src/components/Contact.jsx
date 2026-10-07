import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { contactConfig } from '../data/contact';
import { GithubIcon } from './icons/GithubIcon';
import { Send, Mail, Copy, Check, ArrowUpRight, MessageSquare, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';


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
  const [formSubmitted, setFormSubmitted] = useState(false);

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

    // Honest mailto triggering without fake backend simulation
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Sunnatilla,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const handleCopyMessageForTelegram = () => {
    if (!formData.message.trim() && !formData.name.trim()) {
      const textToCopy = `Hello Sunnatilla, I came across your portfolio and would like to discuss a project.`;
      navigator.clipboard.writeText(textToCopy);
    } else {
      const formatted = `Hello Sunnatilla, this is ${formData.name || 'a visitor'} (${formData.email || 'no email provided'}).\n\n${formData.message}`;
      navigator.clipboard.writeText(formatted);
    }
    setCopiedTelegram(true);
    setTimeout(() => setCopiedTelegram(false), 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-t border-white/5 bg-[#080D0B]"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
            {t.contact.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7F5] tracking-tight leading-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#9AA6A0] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Direct Channels & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Channels & Verified Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9AA6A0] mb-4">
              // {t.contact.directChannels}
            </h3>

            {/* Telegram Card */}
            <a
              href={contactConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-[#0B1110] border border-white/8 hover:border-[#35D9FF]/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#35D9FF]/10 text-[#35D9FF] group-hover:bg-[#35D9FF]/20 transition-colors">
                    <Send size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F4F7F5] group-hover:text-[#35D9FF] transition-colors">
                      Telegram
                    </h4>
                    <span className="text-xs font-mono text-[#35D9FF]">
                      {contactConfig.telegramHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#9AA6A0] group-hover:text-[#35D9FF] transition-colors" />
              </div>
              <p className="text-xs text-[#9AA6A0] leading-relaxed">
                {contactConfig.socials[0].description[lang]}
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href={contactConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-[#0B1110] border border-white/8 hover:border-[#00F5A0]/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#00F5A0]/10 text-[#00F5A0] group-hover:bg-[#00F5A0]/20 transition-colors">
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F4F7F5] group-hover:text-[#00F5A0] transition-colors">
                      GitHub
                    </h4>
                    <span className="text-xs font-mono text-[#00F5A0]">
                      {contactConfig.githubHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#9AA6A0] group-hover:text-[#00F5A0] transition-colors" />
              </div>
              <p className="text-xs text-[#9AA6A0] leading-relaxed">
                {contactConfig.socials[1].description[lang]}
              </p>
            </a>

            {/* Email Card with Copy Action */}
            <div className="p-6 rounded-2xl bg-[#0B1110] border border-white/8 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-[#F4F7F5]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F4F7F5]">
                      Email
                    </h4>
                    <span className="text-xs font-mono text-[#9AA6A0]">
                      {contactConfig.email}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#F4F7F5] hover:text-[#00F5A0] transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-[#00F5A0]" /> : <Copy size={16} />}
                </button>
              </div>
              <p className="text-xs text-[#9AA6A0] leading-relaxed">
                {contactConfig.socials[2].description[lang]}
              </p>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-xl bg-[#050807] border border-[#00F5A0]/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00F5A0]" />
              </span>
              <span className="text-xs font-mono text-[#F4F7F5]">
                {t.contact.statusOpen}
              </span>
            </div>
          </div>

          {/* Right Column: Honest Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative">
              <h3 className="text-xl font-bold text-[#F4F7F5] mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-[#9AA6A0] mb-8 leading-relaxed">
                {t.contact.formSubtitle}
              </p>

              <form onSubmit={handleFormSubmit} noValidate className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[#F4F7F5] mb-2">
                    {t.contact.fields.name} <span className="text-[#00F5A0]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.fields.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-[#050807] text-sm text-[#F4F7F5] placeholder-[#9AA6A0]/40 border transition-all focus:outline-none focus:ring-1 ${
                      errors.name
                        ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#00F5A0] focus:ring-[#00F5A0]'
                    }`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-[#F4F7F5] mb-2">
                    {t.contact.fields.email} <span className="text-[#00F5A0]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.fields.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-[#050807] text-sm text-[#F4F7F5] placeholder-[#9AA6A0]/40 border transition-all focus:outline-none focus:ring-1 ${
                      errors.email
                        ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#00F5A0] focus:ring-[#00F5A0]'
                    }`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#F4F7F5] mb-2">
                    {t.contact.fields.message} <span className="text-[#00F5A0]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.fields.messagePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-[#050807] text-sm text-[#F4F7F5] placeholder-[#9AA6A0]/40 border transition-all focus:outline-none focus:ring-1 ${
                      errors.message
                        ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#00F5A0] focus:ring-[#00F5A0]'
                    }`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Honest Workflow Explanation Notice */}
                <div className="p-3.5 rounded-xl bg-[#050807] border border-white/8 text-[11px] text-[#9AA6A0] leading-relaxed flex items-start gap-2.5">
                  <div className="p-1 rounded bg-[#00F5A0]/10 text-[#00F5A0] shrink-0 mt-0.5">
                    <MessageSquare size={13} />
                  </div>
                  <span>{t.contact.honestNotice}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 min-w-[200px] py-3.5 px-6 rounded-xl bg-[#00F5A0] text-[#050807] font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,245,160,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>{t.contact.submitButton}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessageForTelegram}
                    className="py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#F4F7F5] hover:text-[#35D9FF] hover:border-[#35D9FF]/40 transition-colors cursor-pointer flex items-center gap-2"
                    title={t.contact.copyToTelegram}
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
