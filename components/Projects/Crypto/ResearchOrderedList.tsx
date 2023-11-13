export function ResearchOrderedList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ol
      className="mb-4 flex list-decimal flex-col px-6 text-gray-600 dark:text-gray-400"
      type="1"
      start={1}
    >
      {children}
    </ol>
  );
}
