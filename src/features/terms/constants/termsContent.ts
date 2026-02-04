import {
  FileText,
  AlertCircle,
  Scale,
  Ban,
  Globe,
  RefreshCw,
} from "lucide-react";
import type { TermsSection, TermsContactInfo } from "../types";

export const termsPageContent = {
  hero: {
    badge: "Legal",
    title: "Terms of Service",
    description: "Please read these terms carefully before using our website.",
    lastUpdated: "Last updated: January 2025",
  },
  introduction:
    'Welcome to Sacred India. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. Please read them carefully before proceeding.',
  governingLaw: {
    title: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in India.",
  },
  contactSection: {
    title: "Questions About These Terms?",
    description:
      "If you have any questions about these Terms of Service, please contact us:",
  },
};

export const termsSections: TermsSection[] = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using Sacred India website, you accept and agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, please do not use our website.",
      "We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance.",
      "It is your responsibility to review these terms periodically for updates.",
    ],
  },
  {
    icon: Globe,
    title: "Use of Website",
    content: [
      "You may use our website for personal, non-commercial purposes to explore information about sacred destinations in India.",
      "You agree not to use the website for any unlawful purpose or in any way that could damage or impair the website.",
      "You must not attempt to gain unauthorized access to any part of the website or its systems.",
      "Automated access to the website (bots, scrapers) is prohibited without our express permission.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Content and Information",
    content: [
      "All content on this website is for informational purposes only and should not be considered professional travel advice.",
      "We strive to provide accurate information about sacred destinations, but we do not guarantee its completeness or accuracy.",
      "Temple timings, accessibility, and other details may change without notice. Please verify with local authorities before visiting.",
      "User-submitted content must be respectful and relevant to spiritual travel in India.",
    ],
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content: [
      "All content, design, graphics, and data on this website are owned by Sacred India and protected by copyright laws.",
      "You may not reproduce, distribute, or create derivative works without our written permission.",
      "The Sacred India name, logo, and branding are our trademarks and may not be used without authorization.",
      "Images of temples and sacred sites are used with respect to their cultural significance.",
    ],
  },
  {
    icon: Ban,
    title: "Limitations of Liability",
    content: [
      "Sacred India is not responsible for any damages arising from your use of this website.",
      "We are not liable for any travel-related issues, accidents, or incidents at destinations featured on our site.",
      "Third-party links on our website are provided for convenience; we do not endorse or control their content.",
      "Use of information from this website is at your own risk.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Changes and Termination",
    content: [
      "We may update, modify, or discontinue any part of the website without prior notice.",
      "We reserve the right to terminate or restrict access to users who violate these terms.",
      "These terms remain in effect until terminated by either party.",
      "Provisions regarding intellectual property and liability survive termination.",
    ],
  },
];

export const termsContactInfo: TermsContactInfo = {
  email: "info@sacredindia.com",
  address: "India",
};
