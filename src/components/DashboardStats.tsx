import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, AlertCircle, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Total Issues",
    value: "1,284",
    icon: FileText,
    description: "All reported issues",
    trend: "+12% from last month"
  },
  {
    title: "Pending",
    value: "156",
    icon: AlertCircle,
    description: "Awaiting assignment",
    trend: "-8% from last week",
    color: "text-pending"
  },
  {
    title: "In Progress",
    value: "89",
    icon: Clock,
    description: "Currently being resolved",
    trend: "+5% from last week",
    color: "text-in-progress"
  },
  {
    title: "Resolved",
    value: "1,039",
    icon: CheckCircle,
    description: "Successfully completed",
    trend: "+15% from last month",
    color: "text-resolved"
  }
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color || 'text-muted-foreground'}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}