import { HowItWorks } from "./HowItWorks";
import { Badge } from "./ui/badge";

const featureList: string[] = [
  "Time saving",
  "Websites aggregation",
  "Articles Summaries",
  "Daily Podcast Version",
];

export const Features = () => {
  return (
    <section
      id="howitworks"
      className="container space-y-8 pt-20"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        How It Works 💌{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4 md:pb-10">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="outline"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <HowItWorks />
    </section>
  );
};
