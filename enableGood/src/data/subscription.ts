// src/data/subscriptions.ts

export type Plan = {
  id: number;
  title: string;
  price: number;
  unit: string;
  features: string[];
  highlight: boolean;
};

export type SubscriptionsData = {
  companies: Plan[];
  ngo: Plan[];
};

export const subscriptions: SubscriptionsData = {
  companies: [
    {
      id: 1,
      title: "Explorer",
      price: 20,
      unit: "/ month",
      features: [
        "NGO discovery & filtering",
        "Standard match suggestions (up to 5/org per month)",
        "Basic project dashboard",
      ],
      highlight: false,
    },
    {
      id: 2,
      title: "Collaborator",
      price: 50,
      unit: "/ month",
      features: [
        "Everything in Explorer",
        "Collaborative project workspace (tasks, timelines, file-sharing)",
        "Custom branding on joint initiatives",
      ],
      highlight: true,
    },
    {
      id: 3,
      title: "Leader",
      price: 80,
      unit: "/ month",
      features: [
        "Everything in Collaborator",
        "Advanced ESG-alignment toolkit (goal-setting & tracking)",
        "Executive analytics reports & quarterly business reviews",
        "Dedicated account manager",
      ],
      highlight: false,
    },
  ],
  ngo: [
    {
      id: 1,
      title: "Starter",
      price: 20,
      unit: "/ month",
      features: [
        "Directory listing with logo & mission",
        "Access to corporate partnership applications",
        "Up to 3 match suggestions per month",
      ],
      highlight: false,
    },
    {
      id: 2,
      title: "Growth",
      price: 50,
      unit: "/ month",
      features: [
        "Everything in Starter",
        "Priority visibility in NGO search",
        "Unlimited match suggestions",
        "Access to collaboration tools (shared docs, comments)",
      ],
      highlight: true,
    },
    {
      id: 3,
      title: "Impact",
      price: 80,
      unit: "/ month",
      features: [
        "Everything in Growth",
        "Impact reporting dashboard",
        "Downloadable analytics (PDF / CSV)",
        "Invitation to curated campaigns",
        "Priority support & onboarding help",
      ],
      highlight: false,
    },
  ],
};
