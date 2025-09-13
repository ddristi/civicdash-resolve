import { IssuesTable } from "@/components/IssuesTable";
import { IssueMap } from "@/components/IssueMap";

export default function Issues() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Issues Management</h1>
        <p className="text-muted-foreground">Monitor and manage civic issues reported by citizens</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <IssuesTable />
        </div>
        <div>
          <IssueMap />
        </div>
      </div>
    </div>
  );
}