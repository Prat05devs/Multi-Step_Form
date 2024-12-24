"use client";

import { useFormStore } from "@/lib/store";
import { PersonalInfo } from "./steps/personal-info";
import { AddressDetails } from "./steps/address-details";
import { Preferences } from "./steps/preferences";
import { Review } from "./steps/review";

export function FormSteps() {
  const currentStep = useFormStore((state) => state.formData.currentStep);

  return (
    <div>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <AddressDetails />}
      {currentStep === 3 && <Preferences />}
      {currentStep === 4 && <Review />}
    </div>
  );
}