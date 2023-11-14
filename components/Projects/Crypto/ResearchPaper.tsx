export function ResearchPaper({ children }: { children?: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto my-2 max-w-6xl px-4 text-gray-600 dark:text-gray-400 sm:px-6">
        {/* Paper effect */}
        <div className="relative rounded-sm bg-gray-50 px-8 py-10 dark:bg-zinc-900 md:px-12 md:py-10">
          <div className="relative mx-auto flex max-w-3xl flex-col gap-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
