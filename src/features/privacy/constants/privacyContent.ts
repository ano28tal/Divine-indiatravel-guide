import { Shield, Eye, Cookie, Lock, Users, Mail } from "lucide-react";
import type { PrivacySection, PrivacyContactInfo } from "../types";

export const privacyPageContent = {
  hero: {
    badge: "Legal",
    title: "Privacy Policy",
    description:
      "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
    lastUpdated: "Last updated: January 2025",
  },
  introduction:
    'Sacred India ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. By using our website, you consent to the practices described in this policy.',
  contactSection: {
    title: "Questions About This Policy?",
    description:
      "If you have any questions about this Privacy Policy or our data practices, please contact us:",
  },
};

export const privacySections: PrivacySection[] = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal information you provide (name, email, phone number) when using our contact form or signing up for newsletters.",
      "Usage data including pages visited, time spent on pages, and navigation patterns.",
      "Device information such as browser type, operating system, and IP address.",
      "Location data when you use our destination search features (with your consent).",
    ],
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "To provide and improve our sacred destination guide services.",
      "To respond to your inquiries and provide customer support.",
      "To send you updates about new destinations and features (with your consent).",
      "To analyze website usage and improve user experience.",
      "To comply with legal obligations and protect our rights.",
    ],
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share information with service providers who help us operate our website.",
      "We may disclose information when required by law or to protect our rights.",
      "Analytics data may be shared in aggregate, non-identifiable form.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies and Tracking",
    content: [
      "We use cookies to enhance your browsing experience and remember your preferences.",
      "Essential cookies are required for the website to function properly.",
      "Analytics cookies help us understand how visitors use our website.",
      "You can control cookie settings through your browser preferences.",
      "Third-party services (like Google Analytics) may set their own cookies.",
    ],
  },
  {
    icon: Shield,
    title: "Data Security",
    content: [
      "We implement appropriate security measures to protect your personal information.",
      "Data is transmitted using SSL/TLS encryption.",
      "Access to personal data is restricted to authorized personnel only.",
      "We regularly review and update our security practices.",
    ],
  },
  {
    icon: Mail,
    title: "Your Rights",
    content: [
      "Access: You can request a copy of the personal data we hold about you.",
      "Correction: You can request correction of inaccurate personal data.",
      "Deletion: You can request deletion of your personal data (subject to legal requirements).",
      "Opt-out: You can unsubscribe from marketing communications at any time.",
      "Contact us at info@sacredindia.com to exercise any of these rights.",
    ],
  },
];

export const privacyContactInfo: PrivacyContactInfo = {
  email: "info@sacredindia.com",
  address: "India",
};
