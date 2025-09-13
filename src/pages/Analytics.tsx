import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics & Reports</h1>
        <p className="text-muted-foreground">Performance insights and trend analysis</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Issue Categories Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Issues by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center bg-muted/50 rounded">
              <div className="text-center">
                <PieChart className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Pie Chart Coming Soon</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Infrastructure: 45%<br/>
                  Sanitation: 30%<br/>
                  Utilities: 25%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Department Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center bg-muted/50 rounded">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Bar Chart Coming Soon</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Resolution rates by department
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Monthly Issue Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center bg-muted/50 rounded">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Line Chart Coming Soon</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Issue trends over time
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Average Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">5.2 days</div>
            <p className="text-sm text-muted-foreground">Improved by 15% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Citizens Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-resolved">4.6/5</div>
            <p className="text-sm text-muted-foreground">Based on 1,039 responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Most Common Issue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Infrastructure</div>
            <p className="text-sm text-muted-foreground">45% of all reported issues</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}