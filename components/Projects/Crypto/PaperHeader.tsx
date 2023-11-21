type PaperHeaderProps = {
  children: React.ReactNode;
  headerLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

export function PaperHeader({ children, headerLevel = 3 }: PaperHeaderProps) {
  return (
    <h3 className={`h${headerLevel} mb-2 text-gray-700 dark:text-gray-100`}>
      {children}
    </h3>
  );
}
