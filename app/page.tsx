"use client";
import React from "react";
import { GlobeDemo } from "./components/globe";
import { Nav } from "./components/navbar";
import { BentoGridThirdDemo } from "./components/bento-grid";
import { GridSmallBackgroundDemo } from "./components/dotted-background";
import { HeroTitle } from "./components/hero-title";
import { LitButton } from "@/app/components/lit-button";
import { AiServices } from "@/app/components/ai-services";
import { LeadManagement } from "@/app/components/lead-management";
import { About } from "@/app/components/about";
import { MarketingServices } from "@/app/components/marketing-services";
import { ContactUs } from "@/app/components/contact-us";

export default function Home() {
  return (
    <div className="relative dark" id="home">
      <Nav />
      <GridSmallBackgroundDemo />
      <div className="mx-6 md:mx-8 lg:mx-24 xl:mx-32">
        <div className="h-[90vh]">
          <HeroTitle />
        </div>
        <About />
        <AiServices />
        <MarketingServices />
        <LeadManagement />
        <ContactUs />
      </div>
    </div>
  );
}
