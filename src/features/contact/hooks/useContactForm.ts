import { useState, useCallback } from "react";
import type {
  ContactFormData,
  ContactFormErrors,
  UseContactFormReturn,
} from "../types";
import {
  validateContactForm,
  validateField as validateSingleField,
  initialContactFormData,
} from "../validation";

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(
    initialContactFormData
  );
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof ContactFormData;

      setFormData((prev) => ({ ...prev, [fieldName]: value }));

      // Clear error when user starts typing
      if (errors[fieldName]) {
        setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
      }
    },
    [errors]
  );

  const validateField = useCallback(
    (field: keyof ContactFormData): boolean => {
      const error = validateSingleField(field, formData[field]);
      setErrors((prev) => ({ ...prev, [field]: error }));
      return !error;
    },
    [formData]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate all fields
      const { isValid, errors: validationErrors } =
        validateContactForm(formData);

      if (!isValid) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);

      try {
        // Simulate API call - replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // On success
        setIsSubmitted(true);
        setFormData(initialContactFormData);
        setErrors({});
      } catch (error) {
        // Handle error - could set an error state here
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData(initialContactFormData);
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
    validateField,
  };
};
