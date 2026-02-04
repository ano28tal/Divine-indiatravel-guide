import type { LucideIcon } from "lucide-react";

export interface PrivacySection {
  icon: LucideIcon;
  title: string;
  content: string[];
}

export interface PrivacyContactInfo {
  email: string;
  address: string;
}
