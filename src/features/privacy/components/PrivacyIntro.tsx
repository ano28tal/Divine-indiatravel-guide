import { Card, CardContent } from "@/shared/components/ui/card";
import { privacyPageContent } from "../constants";

export const PrivacyIntro = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-soft mb-8">
      <CardContent className="pt-6">
        <p className="text-muted-foreground leading-relaxed">
          {privacyPageContent.introduction}
        </p>
      </CardContent>
    </Card>
  );
};
