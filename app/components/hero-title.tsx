import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { LitButton } from "@/app/components/lit-button";
import { GlobeDemo } from "@/app/components/globe";

export function HeroTitle() {
  return <FlipWordsTitle />;
}

function FlipWordsTitle() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [widthChecked, setWidthChecked] = React.useState(false);
  const words = [
    "Chatbots",
    "AI-Assistants",
    "Sales-Processes",
    "Lead-Magnets",
    "Marketing-Solutons",
    "AI-Optimisations",
  ];

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 821);
      setWidthChecked(true);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full relative pt-6">
      <div className="h-full flex justify-center items-start flex-col gap-y-4 lg:gap-y-2 lg:pl-20 ">
        <div className="mx-auto lg:mx-0 px-4 lg:px-0 text-6xl lg:text-5xl xl:text-7xl font-bold xl:font-normal text-center lg:text-left text-neutral-600 dark:text-neutral-300 shadow-2xl w-full mb-6 xl:mb-4   ">
          Put your systems <br /> on autopilot with AI
        </div>
        <div className="flex w-full text-center mb-10 md:text-xl xl:text-2xl xl:text-left md:justify-center lg:justify-start">
          <p className="md:w-5/6 px-6 lg:px-0">
            {/* <p className="flex w-full md:w-1/2 lg:w-2/3 text-sm md:text-xl mb-10 text-center xl:text-left mx-auto md:mx-0"> */}
            Automate your workflows, time-consuming tasks, and
            elevate your business.
          </p>
        </div>
        <div className="flex w-full justify-center lg:justify-start">
          <LitButton buttonText="Find out how" />
        </div>
      </div>
      <div className="flex items-center">
        {!isMobile && widthChecked && <GlobeDemo />}
      </div>
    </div>
  );
}
