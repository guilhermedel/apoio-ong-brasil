
import { ONG } from "@/types/ong";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";

interface ONGCardProps {
  ong: ONG;
}

const ONGCard = ({ ong }: ONGCardProps) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={ong.image}
          alt={ong.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
            {ong.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2">
          {ong.title}
        </CardTitle>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          {ong.location}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 line-clamp-3 mb-4">
          {ong.description}
        </CardDescription>
        
        {ong.website && (
          <a
            href={ong.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Visitar site
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ONGCard;
