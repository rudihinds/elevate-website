"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState, useEffect } from "react";

export default function SidebarDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Tailwind's md breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Drawer
      className="md:hidden"
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
    >
      <DrawerTrigger asChild>
        <div className="flex md:hidden">
          <button
            // variant="secondary"
            className="fixed p-8 transform -translate-x-1/2 left-1/2 bottom-2"
            onClick={() => setIsOpen(true)}
          >
            Open Filters
            <PlusIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="p-2"></DrawerContent>
    </Drawer>
  );
}
