export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "OsuCeylon",
  description: "Your trusted source for Sri Lankan Ayurveda and traditional medicine",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Herbal Products",
      href: "/products",
    },
    {
      title: "Doctor Consultation",
      href: "/consultation",
    },
    {
      title: "Diet Plans",
      href: "/diet-plans",
    },
    {
      title: "Pharmacopeia",
      href: "/pharmacopeia",
    },
    {
      title: "About Us",
      href: "/about",
    },
  ],
  footer: [
    {
      name: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    {
      name: "Services",
      items: [
        { name: "Consultations", href: "/consultation" },
        { name: "Diet Plans", href: "/diet-plans" },
        { name: "Products", href: "/products" },
        { name: "Pharmacopeia", href: "/pharmacopeia" },
      ],
    },
    {
      name: "Connect",
      items: [
        { name: "Facebook", href: "https://facebook.com/osuceylon" },
        { name: "Instagram", href: "https://instagram.com/osuceylon" },
        { name: "WhatsApp", href: "https://wa.me/yourphonenumber" },
        { name: "Email", href: "mailto:contact@osuceylon.com" },
      ],
    },
  ],
  links: {
    facebook: "https://facebook.com/osuceylon",
    instagram: "https://instagram.com/osuceylon",
    whatsapp: "https://wa.me/yourphonenumber",
  },
}
