import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactInfoItem } from "../types";

export const contactInfoItems: ContactInfoItem[] = [
  {
    id: "email",
    icon: Mail,
    iconBgClass: "bg-gradient-accent",
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours.",
    content: "info@sacredindia.com",
    href: "mailto:info@sacredindia.com",
  },
  {
    id: "phone",
    icon: Phone,
    iconBgClass: "bg-secondary",
    title: "Call Us",
    description: "Speak with our travel experts directly.",
    content: "+91 XXX XXX XXXX",
  },
  {
    id: "location",
    icon: MapPin,
    iconBgClass: "bg-primary",
    title: "Visit Us",
    description: "Our office location.",
    content: "India",
  },
  {
    id: "hours",
    icon: Clock,
    iconBgClass: "bg-accent",
    title: "Working Hours",
    description: "When we're available to help.",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
    subContent: "Sunday: Closed",
  },
];

export const contactPageContent = {
  hero: {
    badge: "Get In Touch",
    title: "Contact Us",
    description:
      "Have questions about sacred destinations in India? We're here to help you plan your spiritual journey.",
  },
  form: {
    title: "Send Us a Message",
    description:
      "Fill out the form below and we'll get back to you as soon as possible.",
    submitButton: "Send Message",
    submittingButton: "Sending...",
  },
  success: {
    title: "Message Sent!",
    description:
      "Thank you for reaching out. We'll get back to you within 24 hours.",
    buttonText: "Send Another Message",
  },
  placeholders: {
    name: "Your name",
    email: "your@email.com",
    subject: "How can we help you?",
    message: "Tell us about your travel plans or questions...",
  },
  labels: {
    name: "Full Name",
    email: "Email Address",
    subject: "Subject",
    message: "Message",
  },
};
