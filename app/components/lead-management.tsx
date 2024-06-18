import React from "react";
import { HeroScrollDemo } from "./ipad-scroll";

export function LeadManagement() {
  return (
    <div className="relative overflow-hidden h-min md:my-10 lg:mt-0" id="leads">
      <div className="h-full">
        <HeroScrollDemo />
      </div>
    </div>
  );
}
