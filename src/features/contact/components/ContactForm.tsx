import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Send } from "lucide-react";
import type { ContactFormData, ContactFormErrors } from "../types";
import { contactPageContent } from "../constants";

interface ContactFormProps {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onBlur: (field: keyof ContactFormData) => void;
}

export const ContactForm = ({
  formData,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
  onBlur,
}: ContactFormProps) => {
  const { placeholders, labels, form } = contactPageContent;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{labels.name}</Label>
          <Input
            id="name"
            name="name"
            placeholder={placeholders.name}
            value={formData.name}
            onChange={onChange}
            onBlur={() => onBlur("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{labels.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={placeholders.email}
            value={formData.email}
            onChange={onChange}
            onBlur={() => onBlur("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">{labels.subject}</Label>
        <Input
          id="subject"
          name="subject"
          placeholder={placeholders.subject}
          value={formData.subject}
          onChange={onChange}
          onBlur={() => onBlur("subject")}
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p className="text-sm text-red-500">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{labels.message}</Label>
        <textarea
          id="message"
          name="message"
          placeholder={placeholders.message}
          value={formData.message}
          onChange={onChange}
          onBlur={() => onBlur("message")}
          rows={6}
          className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-accent hover:shadow-glow text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>{form.submittingButton}</>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {form.submitButton}
          </>
        )}
      </Button>
    </form>
  );
};
