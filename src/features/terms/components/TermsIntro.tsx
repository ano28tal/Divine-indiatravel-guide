import { Card, CardContent } from "@/shared/components/ui/card";
import { termsPageContent } from "../constants";

export const TermsIntro = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-soft mb-8">
      <CardContent className="pt-6">
        <p className="text-muted-foreground leading-relaxed">
          {termsPageContent.introduction}
        </p>
      </CardContent>
    </Card>
  );
};
