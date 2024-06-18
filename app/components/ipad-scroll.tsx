"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SectionLabel } from "@/components/ui/section-label";

import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden items-center">
      {/* <SectionLabel>Automated Lead Management</SectionLabel> */}
      <h1 className="text-4xl md:text-[6rem] font-bold md:mt-1 leading-none mb-6">
        Managed Leads
      </h1>
      <ContainerScroll titleComponent={<></>}>
        <Image
          src={`/ghl-dash.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
