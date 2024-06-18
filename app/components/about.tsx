"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function About() {
  return (
    <div className="relative h-screen" id="about">
      {/* <SectionLabel>ABOUT</SectionLabel> */}
      <SparklesPreview />
    </div>
  );
}

export function SparklesPreview() {
  const welcome = `
  Welcome to Elevate AI and Automations.`;

  const words = `
    We are applying the latest advancements in artificial intelligence 
    and automation technologies to optimize efficiency and foster innovation in progressive organisations.
  `;

  const words2 = `
    Let's discuss how AI can help you get ahead of your competition.
  `;

  return (
    <div
      className="h-screen relative w-screen m-0 flex overflow-hidden  items-center justify-center"
      style={{
        padding: "0",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        boxSizing: "border-box",
      }}
    >
      <div className="w-full relative inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="absolute z-20 w-full flex flex-col md:items-start justify-center h-full px-8 md:px-[8rem] lg:px-[16rem]">
        <TextGenerateEffect words={welcome} />  
        <br />
        <TextGenerateEffect words={words} startDelay={2} />
        <br />
        <TextGenerateEffect words={words2} startDelay={8} />
      </div>
    </div>
  );
}
