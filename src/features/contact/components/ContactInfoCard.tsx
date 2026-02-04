import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { ContactInfoItem } from "../types";

interface ContactInfoCardProps {
  item: ContactInfoItem;
}

export const ContactInfoCard = ({ item }: ContactInfoCardProps) => {
  const Icon = item.icon;

  return (
    <Card className="bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300">
      <CardHeader>
        <div className={`p-3 rounded-lg ${item.iconBgClass} w-fit mb-2`}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {item.href ? (
          <a
            href={item.href}
            className="text-primary hover:underline font-medium"
          >
            {item.content}
          </a>
        ) : (
          <>
            <p className="text-foreground font-medium">{item.content}</p>
            {item.subContent && (
              <p className="text-muted-foreground text-sm">{item.subContent}</p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
