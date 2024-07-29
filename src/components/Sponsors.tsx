import amazon from "../assets/amazon.png"
import meta from "../assets/meta.png"
import bloomberg from "../assets/bloomberg.png"
import tesla from "../assets/tesla.png"
import jpmorgan from "../assets/jpmorgan.png"
import pinterest from "../assets/pinterest.png"

interface SponsorProps {
  icon: string
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: meta,
    name: "Sponsor 1",
  },
  {
    icon: tesla,
    name: "Sponsor 2",
  },
  {
    icon: bloomberg,
    name: "Sponsor 3",
  },
  {
    icon: amazon,
    name: "Sponsor 4",
  },
  {
    icon: jpmorgan,
    name: "Sponsor 5",
  },
  {
    icon: pinterest,
    name: "Sponsor 6",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-2">
        Used by professionals in
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <img key={name} src={icon} className="w-full h-auto grayscale object-cover scale-75"></img>
          </div>
        ))}
      </div>
    </section>
  );
};
