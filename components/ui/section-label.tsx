export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute flex w-full justify-center mt-10">
      <p className="w-min rounded-xl dark:bg-indigo-600	 text-center p-2 px-4 whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
