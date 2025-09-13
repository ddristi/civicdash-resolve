import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Filter, Search } from "lucide-react";

// Sample data
const issues = [
  {
    id: "ISS-001",
    category: "Infrastructure",
    location: "Main Street & Oak Ave",
    status: "pending",
    department: "Public Works",
    reportedDate: "2024-09-10",
    description: "Large pothole causing traffic issues"
  },
  {
    id: "ISS-002", 
    category: "Sanitation",
    location: "Central Park",
    status: "in-progress",
    department: "Waste Management",
    reportedDate: "2024-09-09",
    description: "Garbage overflow near playground"
  },
  {
    id: "ISS-003",
    category: "Utilities",
    location: "Pine Street",
    status: "resolved",
    department: "Utilities",
    reportedDate: "2024-09-08",
    description: "Street light not working"
  },
  {
    id: "ISS-004",
    category: "Infrastructure",
    location: "Bridge Road",
    status: "pending",
    department: "Public Works",
    reportedDate: "2024-09-12",
    description: "Water leakage from main pipe"
  }
];

const statusColors = {
  pending: "bg-pending text-white",
  "in-progress": "bg-in-progress text-white", 
  resolved: "bg-resolved text-white"
};

export function IssuesTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || issue.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || issue.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Issues Management
        </CardTitle>
        <div className="flex gap-4 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Infrastructure">Infrastructure</SelectItem>
              <SelectItem value="Sanitation">Sanitation</SelectItem>
              <SelectItem value="Utilities">Utilities</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Issue ID</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Reported Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIssues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell className="font-medium">{issue.id}</TableCell>
                <TableCell>{issue.category}</TableCell>
                <TableCell>{issue.location}</TableCell>
                <TableCell>
                  <Badge className={statusColors[issue.status as keyof typeof statusColors]}>
                    {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{issue.department}</TableCell>
                <TableCell>{issue.reportedDate}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredIssues.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No issues found matching your criteria.
          </div>
        )}
      </CardContent>
    </Card>
  );
}