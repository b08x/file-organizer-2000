"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  createOneTimePaymentCheckout,
  createSubscriptionCheckout,
  createYearlySubscriptionCheckout,
} from "./actions";

const pricingPlans = [
  {
    name: "Monthly",
    price: 15,
    interval: "month",
    features: [
      "Access to all features",
      "1000 files per month",
      "120 min audio transcription",
      "24/7 support",
    ],
    action: createSubscriptionCheckout,
  },
  {
    name: "Yearly",
    price: 150,
    interval: "year",
    features: [
      "All Monthly features",
      "2 months free",
      "Priority support",
      "Early access to new features",
    ],
    action: createYearlySubscriptionCheckout,
  },
  {
    name: "Lifetime",
    price: 250,
    interval: "one-time",
    features: [
      "Unlimited access forever",
      "All Yearly features",
      "Exclusive workshops",
      "Personal onboarding",
    ],
    action: createOneTimePaymentCheckout,
  },
];

export default function PlanSelectionPage() {
  const handlePlanSelection = async (plan: string) => {
    const selectedPlan = pricingPlans.find(p => p.name === plan);
    if (selectedPlan) {
      await selectedPlan.action();
    }
  };

  const renderPricingCard = (plan: typeof pricingPlans[0]) => {
    return (
      <Card key={plan.name} className="flex flex-col p-6 border border-stone-300">
        <h2 className="mb-2 text-2xl font-semibold">{plan.name} Plan</h2>
        <p className="mb-4 text-4xl font-bold">
          ${plan.price}
          {plan.interval !== "one-time" && (
            <span className="text-lg font-normal">/{plan.interval}</span>
          )}
        </p>
        <ul className="flex-grow mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2 text-green-500">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => handlePlanSelection(plan.name)}
          className="w-full px-4 py-2 transition-colors bg-stone-800 text-stone-100 hover:bg-stone-700"
        >
          {plan.name === "Lifetime" ? "Get Lifetime Access" : `Choose ${plan.name} Plan`}
        </Button>
      </Card>
    );
  };

  return (
    <section className="max-w-6xl px-4 py-12 mx-auto">
      <h1 className="mb-6 text-5xl font-bold text-center">Choose Your Plan</h1>
      <p className="mb-8 text-xl text-center">Select the perfect plan for your needs.</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingPlans.map(renderPricingCard)}
      </div>
    </section>
  );
}