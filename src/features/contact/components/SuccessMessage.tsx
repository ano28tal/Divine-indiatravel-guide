import { Button } from "@/shared/components/ui/button";
import { Send } from "lucide-react";
import { contactPageContent } from "../constants";

interface SuccessMessageProps {
  onReset: () => void;
}

export const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  const { success } = contactPageContent;

  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Send className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {success.title}
      </h3>
      <p className="text-muted-foreground mb-4">{success.description}</p>
      <Button onClick={onReset} variant="outline">
        {success.buttonText}
      </Button>
    </div>
  );
};
