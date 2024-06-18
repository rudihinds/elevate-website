"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input, TextArea } from "@/components/ui/input";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/utils/cn";
import axios from "axios";

export function ContactUs() {
  return (
    <div className="relative overflow-hidden h-min lg:h-screen" id="contact">
      {/* <SectionLabel>Get In Touch</SectionLabel> */}
      <div className="flex h-full flex-col items-center justify-center lg:pt-24">
        <h1 className="text-4xl md:text-[6rem] font-bold leading-snug mb-4">
          Get in touch
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
          <div className="w-full rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black  dark:border-white/[0.2] border border-transparent">
            <BackgroundBeamsDemo />
            {/* <h1 className="text-white text-8xl">We'd love to hear from you!</h1> */}
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export function Form() {
  return <SignupFormDemo />;
}

function SignupFormDemo() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/web-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting form");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black  dark:border-white/[0.2] border border-transparent">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let's talk!
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="email" type="email" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="number incl area code"
            type="tel"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="help">How can we help you?</Label>
          <TextArea
            name="help"
            id="help"
            placeholder="give a little detail about what you are looking for"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export function BackgroundBeamsDemo() {
  return (
    <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Ready to get started?
        </h1>

        <p className="text-neutral-500 max-w-sm mx-auto my-2 text-md text-center relative z-10">
          Got an AI idea or question? Reach out to us and we will guide, assist,
          or just share in your excitement!
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
