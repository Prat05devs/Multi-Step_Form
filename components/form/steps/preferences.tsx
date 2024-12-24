"use client";

import { useFormStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function Preferences() {
  const { formData, setFormData } = useFormStore();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Preferences</h2>
        <p className="text-muted-foreground">Choose your communication preferences</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notifications">Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications about updates
            </p>
          </div>
          <Switch
            id="notifications"
            checked={formData.notifications}
            onCheckedChange={(checked) => setFormData({ notifications: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="newsletter">Newsletter</Label>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter
            </p>
          </div>
          <Switch
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => setFormData({ newsletter: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="updates">Product Updates</Label>
            <p className="text-sm text-muted-foreground">
              Receive product updates and announcements
            </p>
          </div>
          <Switch
            id="updates"
            checked={formData.updates}
            onCheckedChange={(checked) => setFormData({ updates: checked })}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setFormData({ currentStep: 2 })}
        >
          Previous
        </Button>
        <Button onClick={() => setFormData({ currentStep: 4 })}>
          Review
        </Button>
      </div>
    </div>
  );
}