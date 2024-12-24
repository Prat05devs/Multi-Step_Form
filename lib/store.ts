import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Address Details
  street: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Preferences
  notifications: boolean;
  newsletter: boolean;
  updates: boolean;
  
  // Form Progress
  currentStep: number;
  isComplete: boolean;
}

interface FormStore {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const initialState: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  notifications: false,
  newsletter: false,
  updates: false,
  currentStep: 1,
  isComplete: false,
};

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: initialState,
      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      resetForm: () => set({ formData: initialState }),
    }),
    {
      name: 'form-storage',
    }
  )
);