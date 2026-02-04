import type { LucideIcon } from "lucide-react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactInfoItem {
  id: string;
  icon: LucideIcon;
  iconBgClass: string;
  title: string;
  description: string;
  content: string;
  subContent?: string;
  href?: string;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  validateField: (field: keyof ContactFormData) => boolean;
}
