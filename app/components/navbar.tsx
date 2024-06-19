import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";

export function Nav({ className }: { className?: string }) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [widthChecked, setWidthChecked] = React.useState(false);

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
    <div className={"relative z-50 flex justify-end"}>
      {isMobile && widthChecked && <SidebarDrawer />}
      {!isMobile && widthChecked && <Navbar />}
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("w-full z-50 absolute", className)}>
      <Menu setActive={setActive}>
        <div>
          <Image alt="logo" src="/blacklogo.svg" width={55} height={55} />
        </div>
        <div className="space-x-3 flex items-center">
          <HoveredLink href="#home">Home</HoveredLink>
          <HoveredLink href="#about">About</HoveredLink>
          <HoveredLink href="#ai">AI Automations</HoveredLink>
          <HoveredLink href="#marketing">Marketing</HoveredLink>
          <HoveredLink href="#leads">Leads</HoveredLink>
          <HoveredLink href="#contact">Contact</HoveredLink>
        </div>
        <button className="border border-black rounded-lg px-4 py-2 hover:bg-black hover:text-neutral-200 text-black">
          Get Started
        </button>
      </Menu>
    </div>
  );
}

export default function SidebarDrawer() {
  return (
    <Drawer className="lg:hidden">
      <DrawerTrigger asChild>
        <div className="lg:hidden mt-4">
          <svg
            width="40"
            height="50"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </DrawerTrigger>
      <DrawerContent className="p-2 border-border-white">Hi man</DrawerContent>
    </Drawer>
  );
}
