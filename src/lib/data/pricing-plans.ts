import { BadgeProps } from "@/components/ui/badge";

export interface PricingPlan {
  name: string;
  price: string | number;
  period: 'monthly' | 'annually' | 'weekly';
  badge?: {
    text: string;
    variant: BadgeProps['variant'];
  };
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  paypalPlanId?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Boost',
    price: 19,
    period: 'weekly',
    badge: { text: 'Most Popular', variant: 'default' },
    features: [
      'Featured listing for 7 days',
      '1x Newsletter mention',
      'verified checkmark'
    ],
    buttonText: 'Get Started',
    paypalPlanId: 'basic-boost'
  },
  {
    name: 'Pro Boost',
    price: 79,
    period: 'monthly',
    badge: { text: 'Best Value', variant: 'secondary' },
    features: [
      'Featured listing for 30 days',
      'Priority placement',
      '2x Newsletter mention',
      'Forever verified checkmark'
    ],
    highlighted: true,
    buttonText: 'Upgrade to Pro',
    paypalPlanId: 'pro-boost'
  },
  {
    name: 'Custom',
    price: 'Custom',
    period: 'annually',
    badge: { text: 'Contact Us', variant: 'outline' },
    features: [
      'All Pro features',
      'Custom promotion plan',
      'Dedicated support'
    ],
    buttonText: 'Contact Sales'
  }
];