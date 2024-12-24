"use client";

import { FormSteps } from "@/components/form/form-steps";
import { FormProgress } from "@/components/form/form-progress";
import { Card } from "@/components/ui/card";

export default function FormPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <FormProgress />
      <Card className="p-6">
        <FormSteps />
      </Card>
    </div>
  );
}