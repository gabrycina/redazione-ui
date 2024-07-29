import { FormEventHandler } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Hero = ({ handleSignUp, registerEmail, setRegisterEmail }: { handleSignUp: FormEventHandler, registerEmail: string, setRegisterEmail: Function }) => {
  return (
    <section id="hero" className="container place-items-center py-32 mx-auto">
      <div className="text-center space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            The only newsletter
            <br />
            <span className="inline bg-gradient-to-r from-[#007bff]  to-[#007bdd] text-transparent bg-clip-text">
              {" "} you need
            </span>.
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto">
          The #1 AI agent that generates a personalised newsletter from the websites you want
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <form
            className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
            onSubmit={handleSignUp}
          >
            <Input
              placeholder="yourbest@email.com"
              className="bg-muted/50 dark:bg-muted/80 "
              aria-label="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <Button>Sign me up</Button>
          </form>
        </div>

        <div>
          Are you a company? {" "}
          <a className="underline mt-10" href="https://tally.so/r/woOJY1" target="_blank">
            Contact Us!
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>

    </section>
  );
};
