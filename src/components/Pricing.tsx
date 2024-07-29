import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { FormEventHandler } from "react";
import { usePostHog } from "posthog-js/react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  action: FormEventHandler
}

const handleClick = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


export const Pricing = () => {
  const posthog = usePostHog()

  const pricingList: PricingProps[] = [
    {
      title: "Free",
      popular: 0,
      price: 0,
      description:
        "A free plan with all you need to boost your daily reading",
      buttonText: "Get Started",
      benefitList: [
        "5 websites of your choice",
        "Max 10 articles/day",
        "Specify your preferences",
      ],
      action: () => {
        handleClick("hero")
        posthog?.capture('free_sign_up_clicked')
      }
    },
    {
      title: "Premium",
      popular: 1,
      price: 9.99,
      description:
        "We'll give you love and everything we have",
      buttonText: "Get Started",
      benefitList: [
        "Unlimited websites of your choice",
        "Unlimited articles/day",
        "Daily podcast version",
        "Custom sending time"
      ],
      action: () => {
        handleClick("hero")
        posthog?.capture('paid_sign_up_clicked')
      }
    },
    {
      title: "Company",
      popular: 0,
      price: -1,
      description:
        "Adapted to each company internal needs (with love)",
      buttonText: "Contact US",
      benefitList: [
        "Internal newsletter integration",
        "API access",
        "Unlimited usage",
        "Whitelabeling"
      ],
      action: () => window.open("https://tally.so/r/woOJY1", '_blank', 'noopener,noreferrer')
    },
  ];

  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Use it for free or get unlimited and custom features on a subscription plan
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                {pricing.price === -1 ?
                  <span className="text-3xl font-bold">
                    Custom
                  </span>
                  :
                  (
                    <>
                      <span className="text-3xl font-bold">${pricing.price}</span>
                      <span className="text-muted-foreground"> /month</span></>
                  )

                }
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button onClick={pricing.action} className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
