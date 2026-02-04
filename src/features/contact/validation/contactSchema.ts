import { z } from "zod";
import type { ContactFormData, ContactFormErrors } from "../types";

// Zod schema for contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

// Type inference from schema
export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

// Validate entire form
export const validateContactForm = (
  data: ContactFormData
): { isValid: boolean; errors: ContactFormErrors } => {
  const result = contactFormSchema.safeParse(data);

  if (result.success) {
    return { isValid: true, errors: {} };
  }

  const errors: ContactFormErrors = {};
  result.error.errors.forEach((err) => {
    const field = err.path[0] as keyof ContactFormErrors;
    if (field && !errors[field]) {
      errors[field] = err.message;
    }
  });

  return { isValid: false, errors };
};

// Validate single field
export const validateField = (
  field: keyof ContactFormData,
  value: string
): string | undefined => {
  const fieldSchema = contactFormSchema.shape[field];
  const result = fieldSchema.safeParse(value);

  if (result.success) {
    return undefined;
  }

  return result.error.errors[0]?.message;
};

// Initial form data
export const initialContactFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
