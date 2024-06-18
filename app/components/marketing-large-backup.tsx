"use client";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { SectionLabel } from "@/components/ui/section-label";
import React from "react";

export function MarketingServices() {
  return (
    <div className="relative overflow-hidden h-min lg:h-screen" id="marketing">
      {/* <SectionLabel>MARKETING SERVICES</SectionLabel> */}
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-[6rem] font-bold md:leading-[5rem] lg:leading-none mb-4">
          Marketing Services
        </h1>
        <WobbleCardDemo />
      </div>
    </div>
  );
}

function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Facebook Ads Management
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/fbads.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[26%] grayscale filter -bottom-40 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Create. Refine. Automate your content.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          (Using the help of AI of course)
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 lg:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Social Media Content Management
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/social_media.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-16 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
