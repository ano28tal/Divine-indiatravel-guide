import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { termsPageContent } from "../constants";

export const TermsGoverningLaw = () => {
  const { governingLaw } = termsPageContent;

  return (
    <Card className="bg-gradient-card border-border shadow-soft mt-6">
      <CardHeader>
        <CardTitle className="text-xl">{governingLaw.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{governingLaw.content}</p>
      </CardContent>
    </Card>
  );
};
