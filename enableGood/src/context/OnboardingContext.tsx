import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface OnboardingData {
  // Company Details
  organizationName: string;
  country: string;
  sector: string;
  website: string;
  email: string;
  password: string;
  mission: string;

  // Partnership Goals
  partnershipGoals: string[];

  // SDGs
  selectedSDGs: string[];

  // Preferences
  partnerTypes: string[];
  esgPillars: string[];

  // Subscription
  subscriptionPlan: string;
}

interface OnboardingContextType {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  resetData: () => void;
}

const initialData: OnboardingData = {
  organizationName: "",
  country: "",
  sector: "",
  website: "",
  email: "",
  password: "",
  mission: "",
  partnershipGoals: [],
  selectedSDGs: [],
  partnerTypes: [],
  esgPillars: [],
  subscriptionPlan: "",
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OnboardingData>(initialData);

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const resetData = () => {
    setData(initialData);
  };

  return (
    <OnboardingContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
