"use client";

import { useFormStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validateZipCode } from "@/lib/validators";
import { useState } from "react";
import { useTranslation } from "next-i18next";

// Component for collecting address information
export function AddressDetails() {
  // Get form data and update function from store
  const { formData, setFormData } = useFormStore();
  // Local state for ZIP code validation error
  const [zipError, setZipError] = useState("");
  // Get translation function
  const { t } = useTranslation();

  // Handle ZIP code input changes
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-digits and limit to 6 characters
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setFormData({ zipCode: value });
    // Show error if ZIP code is invalid
    setZipError(validateZipCode(value) ? "" : t("zipCodeError"));
  };

  // Handle next button click
  const handleNext = () => {
    if (!validateZipCode(formData.zipCode)) {
      setZipError(t("zipCodeError"));
      return;
    }
    // Move to next step if validation passes
    setFormData({ currentStep: 3 });
  };

  return (
    <div className="space-y-6">
      {/* Form header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{t("addressDetails")}</h2>
        <p className="text-muted-foreground">{t("addressDetailsDesc")}</p>
      </div>

      {/* Form fields */}
      <div className="space-y-4">
        {/* Street address input */}
        <div className="space-y-2">
          <Label htmlFor="street">{t("streetAddress")}</Label>
          <Input
            id="street"
            value={formData.street}
            onChange={(e) => setFormData({ street: e.target.value })}
          />
        </div>

        {/* City and state inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">{t("city")}</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ city: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">{t("state")}</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => setFormData({ state: e.target.value })}
            />
          </div>
        </div>

        {/* ZIP code input with validation */}
        <div className="space-y-2">
          <Label htmlFor="zipCode">{t("zipCode")}</Label>
          <Input
            id="zipCode"
            value={formData.zipCode}
            onChange={handleZipChange}
            maxLength={6}
            className={zipError ? "border-red-500" : ""}
          />
          {zipError && (
            <p className="text-sm text-red-500">{zipError}</p>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setFormData({ currentStep: 1 })}
        >
          {t("previous")}
        </Button>
        <Button onClick={handleNext}>
          {t("nextStep")}
        </Button>
      </div>
    </div>
  );
}