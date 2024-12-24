"use client";

import { useFormStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Review() {
  const { formData, setFormData, resetForm } = useFormStore();

  const handleSubmit = () => {
    // Here you would typically submit the form data
    console.log("Form submitted:", formData);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Review Your Information</h2>
        <p className="text-muted-foreground">Please review your information before submitting</p>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
            <p><span className="font-medium">Email:</span> {formData.email}</p>
            <p><span className="font-medium">Phone:</span> {formData.phone}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><span className="font-medium">Street:</span> {formData.street}</p>
            <p><span className="font-medium">City:</span> {formData.city}</p>
            <p><span className="font-medium">State:</span> {formData.state}</p>
            <p><span className="font-medium">ZIP Code:</span> {formData.zipCode}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><span className="font-medium">Notifications:</span> {formData.notifications ? "Enabled" : "Disabled"}</p>
            <p><span className="font-medium">Newsletter:</span> {formData.newsletter ? "Subscribed" : "Not subscribed"}</p>
            <p><span className="font-medium">Product Updates:</span> {formData.updates ? "Enabled" : "Disabled"}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setFormData({ currentStep: 3 })}
        >
          Previous
        </Button>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}