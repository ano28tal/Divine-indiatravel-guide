import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { privacyPageContent, privacyContactInfo } from "../constants";

export const PrivacyContact = () => {
  const { contactSection } = privacyPageContent;

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
            <strong>Email:</strong> {privacyContactInfo.email}
          </p>
          <p>
            <strong>Address:</strong> {privacyContactInfo.address}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
