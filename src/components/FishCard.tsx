import { Fish } from "@/data/fishData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FishCardProps {
  fish: Fish;
}

const FishCard = ({ fish }: FishCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={fish.image}
          alt={fish.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{fish.name}</CardTitle>
            <CardDescription className="font-mono text-xs">{fish.shortCode}</CardDescription>
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {fish.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Common Use:</p>
          <p className="text-sm">{fish.commonUse}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Available As:</p>
          <p className="text-sm">{fish.availableAs.join(", ")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FishCard;
