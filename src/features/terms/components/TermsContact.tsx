import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { termsPageContent, termsContactInfo } from "../constants";

export const TermsContact = () => {
  const { contactSection } = termsPageContent;

  return (
    <Card className="bg-muted/50 border-border mt-8">
      <CardHeader>
        <CardTitle>{contactSection.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {contactSection.description}
        </p>
        <div className="space-y-2 text-foreground">
          <p>
            <strong>Email:</strong> {termsContactInfo.email}
          </p>
          <p>
            <strong>Address:</strong> {termsContactInfo.address}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
