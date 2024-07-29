import { FormEventHandler } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Cta = ({ handleSignUp }: { handleSignUp: FormEventHandler }) => {
  return (
    <section
      id="cta"
      className="my-10 sm:my-32"
    >
      <div className="container max-w-4xl">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            A simple idea for your{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              media consumption
            </span>
            {" "}💡
          </h2>
          <p className="text-muted-foreground text-xl mt-8 mb-8 lg:mb-0">
            As consumers we dive into a bunch of media every day.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            We skim.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            We read.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            We search for something useful for us, our business or career.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Personally, we found that the skimming part was an easy job for AI agents. So we started having this automation running daily on our favourite sources (mostly hackernews cause we're nerds)
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Every morning an email is sent to us with the most relevant articles from a bunch of sources.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            And it's amazing.
          </p>
        </div>

        <div className="mt-4 text-center max-w-md pt-4">
          <form
            className="flex flex-col w-full md:flex-row mx-auto gap-4"
            onSubmit={handleSignUp}
          >
            <Input
              placeholder="yourbest@email.com"
              className="bg-muted/50 dark:bg-muted/80 "
              aria-label="email"
            />
            <Button>Sign me up</Button>
          </form>

          <div className="mt-4 text-left">
            Are you a company? {" "}
            <a className="underline mt-10" href="https://tally.so/r/woOJY1"
              target="_blank"
            >
              Contact Us!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
