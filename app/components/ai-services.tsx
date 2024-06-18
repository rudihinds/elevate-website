import { BentoGridThirdDemo } from "@/app/components/bento-grid";
import { SectionLabel } from "@/components/ui/section-label";

export function AiServices() {
  return (
    <div className="relative overflow-hidden h-min lg:h-screen" id="ai">
      {/* <SectionLabel>AI AUTOMATIONS</SectionLabel> */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-[6rem] font-bold leading-snug mb-4">
          AI Automations
        </h1>
        <BentoGridThirdDemo />
      </div>
    </div>
  );
}
