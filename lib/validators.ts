// Simple validation functions for form fields

/**
 * Validates personal information fields
 * @param data Object containing personal info fields
 * @returns Object with validation errors, if any
 */
export function validatePersonalInfo(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  const errors: Record<string, string> = {};

  // Check if first name is provided
  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  // Check if last name is provided
  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  // Validate email format
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }

  // Validate phone number format
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  return errors;
}

/**
 * Checks if a ZIP code is exactly 6 digits
 * @param zipCode The ZIP code to validate
 * @returns true if valid, false otherwise
 */
export function validateZipCode(zipCode: string): boolean {
  // ZIP code must be exactly 6 digits
  return /^\d{6}$/.test(zipCode);
}