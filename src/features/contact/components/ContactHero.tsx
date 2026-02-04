import { Badge } from "@/shared/components/ui/badge";
import { MessageSquare } from "lucide-react";
import { contactPageContent } from "../constants";

export const ContactHero = () => {
  const { hero } = contactPageContent;

  return (
    <section className="py-16 px-4 bg-gradient-hero">
      <div className="max-w-[1400px] mx-auto text-center">
        <Badge className="mb-4 bg-primary text-primary-foreground shadow-soft">
          <MessageSquare className="w-3 h-3 mr-1" />
          {hero.badge}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          {hero.title}
        </h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          {hero.description}
        </p>
      </div>
    </section>
  );
};
