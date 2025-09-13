import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Bell, Users, Shield } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage system preferences and configurations</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="w-5 h-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="municipality">Municipality Name</Label>
              <Input id="municipality" defaultValue="City of Springfield" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Email</Label>
              <Input id="contact" defaultValue="admin@springfield.gov" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
            <Button>Save General Settings</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive alerts via email</p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="urgent-alerts">Urgent Issue Alerts</Label>
                <p className="text-sm text-muted-foreground">Instant alerts for high-priority issues</p>
              </div>
              <Switch id="urgent-alerts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weekly-reports">Weekly Reports</Label>
                <p className="text-sm text-muted-foreground">Weekly summary reports</p>
              </div>
              <Switch id="weekly-reports" />
            </div>
            <Button>Save Notification Settings</Button>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>System Users</Label>
              <p className="text-sm text-muted-foreground">Currently managing 12 system users</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Add New User</Button>
              <Button variant="outline">Manage Permissions</Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Department Access</Label>
              <p className="text-sm text-muted-foreground">Configure department-specific access levels</p>
            </div>
            <Button>Configure Access</Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Enhance account security</p>
              </div>
              <Switch id="two-factor" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="session-timeout">Auto Session Timeout</Label>
                <p className="text-sm text-muted-foreground">30 minutes of inactivity</p>
              </div>
              <Switch id="session-timeout" defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Data Backup</Label>
              <p className="text-sm text-muted-foreground">Last backup: Today at 2:00 AM</p>
              <Button variant="outline" size="sm">Run Manual Backup</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}