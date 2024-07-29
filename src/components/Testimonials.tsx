import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "",
    name: "Marco",
    userName: "Researcher",
    comment: "It's just on point. Everythin I need daily.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Benedetta",
    userName: "Influencer with 300k+ subs",
    comment:
      "I don't know what the plans are for Redact, but even if it's left in beta, please don't delete it. I love it. It keeps me updated quickly, saving me time from the hassle of searching for articles. P.S. summaries are incredible.",
  },
  {
    image: "",
    name: "Ankit",
    userName: "Startup Founder",
    comment:
      "We use Redact in our company to keep everyone in the team updated. Plug and play, just amazing.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover why people use
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Redact{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        We could've asked our friends for reviews, but we'd probably have to pay them
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
