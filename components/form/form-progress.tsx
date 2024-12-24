"use client";

import { useFormStore } from "@/lib/store";
import { Progress } from "@/components/ui/progress";

export function FormProgress() {
  const currentStep = useFormStore((state) => state.formData.currentStep);
  const progress = (currentStep - 1) * (100 / 3);

  return (
    <div className="mb-8 space-y-2">
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground text-center">
        Step {currentStep} of 4
      </p>
    </div>
  );
}