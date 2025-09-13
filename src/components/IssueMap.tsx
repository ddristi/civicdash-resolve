import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation } from "lucide-react";

// Sample map data points
const issueLocations = [
  { id: 1, lat: 40.7128, lng: -74.0060, status: "pending", category: "Infrastructure" },
  { id: 2, lat: 40.7580, lng: -73.9855, status: "in-progress", category: "Sanitation" },
  { id: 3, lat: 40.7489, lng: -73.9857, status: "resolved", category: "Utilities" },
  { id: 4, lat: 40.7614, lng: -73.9776, status: "pending", category: "Infrastructure" },
];

export function IssueMap() {
  return (
    <Card className="h-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="w-5 h-5" />
          Issue Locations Heatmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 bg-muted/50 rounded-lg flex items-center justify-center overflow-hidden">
          {/* Map placeholder with simulated pins */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100">
            {/* Simulated map pins */}
            {issueLocations.map((location, index) => {
              const statusColors = {
                pending: "text-pending",
                "in-progress": "text-in-progress", 
                resolved: "text-resolved"
              };
              
              // Simulate random positions within the map
              const top = 20 + (index * 15) + Math.random() * 20;
              const left = 10 + (index * 20) + Math.random() * 30;
              
              return (
                <div 
                  key={location.id} 
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                  style={{ top: `${top}%`, left: `${left}%` }}
                >
                  <MapPin className={`w-6 h-6 ${statusColors[location.status as keyof typeof statusColors]} drop-shadow-md`} />
                </div>
              );
            })}
          </div>
          
          <div className="relative z-10 text-center">
            <div className="text-sm text-muted-foreground mb-2">Interactive Map Coming Soon</div>
            <div className="text-xs text-muted-foreground">
              Integration with mapping services will show real issue locations
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-pending" />
            <span>Pending</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-in-progress" />
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-resolved" />
            <span>Resolved</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}