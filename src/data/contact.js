/**
 * Configurable Contact Information for Sunnatilla
 * Update the email address below when the developer provides a primary public email.
 */
export const contactConfig = {
  name: "Sunnatilla",
  title: "Independent Frontend Developer",
  location: "Tashkent, Uzbekistan",
  availableForWork: true,
  
  // Real provided links:
  githubUrl: "https://github.com/SUNNATILLACODER",
  githubHandle: "SUNNATILLACODER",
  
  telegramUrl: "https://t.me/war1pov_developer",
  telegramHandle: "@war1pov_developer",
  
  // Configurable email address placeholder with honest indicator
  email: "sunnatilla.dev@gmail.com", // Developer can edit this to their preferred address
  isEmailConfigured: true,

  // Social Links List for UI Rendering
  socials: [
    {
      id: "telegram",
      name: "Telegram",
      handle: "@war1pov_developer",
      url: "https://t.me/war1pov_developer",
      icon: "Send",
      accent: "#35D9FF",
      description: {
        en: "Fastest response time for chats and quick inquiries",
        uz: "Xabarlar va tezkor savollar uchun eng qulay aloqa"
      }
    },
    {
      id: "github",
      name: "GitHub",
      handle: "SUNNATILLACODER",
      url: "https://github.com/SUNNATILLACODER",
      icon: "Github",
      accent: "#00F5A0",
      description: {
        en: "Open-source repositories, source code & commits",
        uz: "Ochiq manbali repozitoriylar, kodlar va loyihalar"
      }
    },
    {
      id: "email",
      name: "Email",
      handle: "sunnatilla.dev@gmail.com",
      url: "mailto:sunnatilla.dev@gmail.com",
      icon: "Mail",
      accent: "#00F5A0",
      description: {
        en: "Direct business inquiries and project briefs",
        uz: "Hamkorlik takliflari va loyiha topshiriqlari"
      }
    }
  ]
};
