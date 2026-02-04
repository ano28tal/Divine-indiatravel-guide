import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { TermsSection } from "../types";

interface TermsSectionCardProps {
  section: TermsSection;
}

export const TermsSectionCard = ({ section }: TermsSectionCardProps) => {
  const Icon = section.icon;

  return (
    <Card className="bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-accent">
            <Icon className="w-5 h-5 text-primary-foreground" />
          </div>
          <CardTitle className="text-xl">{section.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {section.content.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-muted-foreground"
            >
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
