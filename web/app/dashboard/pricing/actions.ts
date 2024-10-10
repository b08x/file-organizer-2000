"use server";

import { redirect } from 'next/navigation';

async function pricingActionPlaceholder(actionName: string) {
  console.warn(`${actionName} functionality has been removed`);
  // You might want to redirect to a specific page or show a message to the user
  redirect('/dashboard');
}

export async function createOneTimePaymentCheckout() {
  return pricingActionPlaceholder('One-time payment checkout');
}

export async function createSubscriptionCheckout() {
  return pricingActionPlaceholder('Monthly subscription checkout');
}

export async function createYearlySubscriptionCheckout() {
  return pricingActionPlaceholder('Yearly subscription checkout');
}