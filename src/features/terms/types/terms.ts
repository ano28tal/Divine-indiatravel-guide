import type { LucideIcon } from "lucide-react";

export interface TermsSection {
  icon: LucideIcon;
  title: string;
  content: string[];
}

export interface TermsContactInfo {
  email: string;
  address: string;
}
