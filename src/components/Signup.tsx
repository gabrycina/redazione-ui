import { FormEventHandler } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Signup = ({ handleSignUp, registerEmail, setRegisterEmail }: { handleSignUp: FormEventHandler, registerEmail: string, setRegisterEmail: Function }) => {
  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Save time,{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Read More
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Start now for free, it only take 60 seconds to sign up ⚡️
        </p>

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

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
