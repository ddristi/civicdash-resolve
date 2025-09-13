import { DashboardStats } from "@/components/DashboardStats";
import { IssuesTable } from "@/components/IssuesTable";
import { IssueMap } from "@/components/IssueMap";

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Civic Issues Dashboard</h1>
        <p className="text-muted-foreground">Municipal authority portal for issue tracking and resolution</p>
      </div>

      {/* Statistics Cards */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Issues Table - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <IssuesTable />
        </div>
        
        {/* Map - Takes 1 column on large screens */}
        <div>
          <IssueMap />
        </div>
      </div>
    </div>
  );
};

export default Index;
