"use client";
import React from "react";

export function LitButton({ buttonText }: { buttonText?: string }) {
  return (
    <button
      className="p-[3px] relative lg:w-[18em] mx-auto my-auto lg:mx-0 lg:my-0"
      onClick={() =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-16 py-4 rounded-[6px]  relative group transition duration-100 text-white hover:bg-violet-700 text-2xl">
        {buttonText ? buttonText : "Get Started"}
      </div>
    </button>
  );
}
