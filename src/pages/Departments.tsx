import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Users, Clock, CheckCircle } from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Public Works",
    head: "John Smith",
    members: 24,
    activeIssues: 45,
    completedThisMonth: 156,
    avgResolutionTime: "4.2 days"
  },
  {
    id: 2,
    name: "Waste Management", 
    head: "Sarah Johnson",
    members: 18,
    activeIssues: 23,
    completedThisMonth: 89,
    avgResolutionTime: "2.8 days"
  },
  {
    id: 3,
    name: "Utilities",
    head: "Mike Davis",
    members: 15,
    activeIssues: 21,
    completedThisMonth: 134,
    avgResolutionTime: "6.1 days"
  },
  {
    id: 4,
    name: "Parks & Recreation",
    head: "Emily Wilson",
    members: 12,
    activeIssues: 8,
    completedThisMonth: 67,
    avgResolutionTime: "3.5 days"
  }
];

export default function Departments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Department Management</h1>
        <p className="text-muted-foreground">Manage departments and assign responsibilities</p>
      </div>

      {/* Department Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {departments.map((dept) => (
          <Card key={dept.id}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building2 className="w-5 h-5" />
                {dept.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p><strong>Head:</strong> {dept.head}</p>
                <p className="flex items-center gap-1 mt-1">
                  <Users className="w-4 h-4" />
                  {dept.members} members
                </p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-pending">
                  {dept.activeIssues} Active
                </Badge>
                <Badge variant="outline" className="text-resolved">
                  {dept.completedThisMonth} Done
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                Avg: {dept.avgResolutionTime}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Department Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Department Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Department Head</TableHead>
                <TableHead>Team Size</TableHead>
                <TableHead>Active Issues</TableHead>
                <TableHead>Completed (Month)</TableHead>
                <TableHead>Avg Resolution Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((dept) => (
                <TableRow key={dept.id}>
                  <TableCell className="font-medium">{dept.name}</TableCell>
                  <TableCell>{dept.head}</TableCell>
                  <TableCell>{dept.members}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-pending">
                      {dept.activeIssues}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-resolved">
                      {dept.completedThisMonth}
                    </Badge>
                  </TableCell>
                  <TableCell>{dept.avgResolutionTime}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Assign Issues
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}