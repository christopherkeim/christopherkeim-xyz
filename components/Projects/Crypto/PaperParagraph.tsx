type PaperParagraphProps = {
  children: React.ReactNode;
  className?: string;
  textSize?: "md" | "lg" | "xl";
};

export function PaperParagraph({
  className,
  children,
  textSize = "md",
}: PaperParagraphProps) {
  return (
    <p
      className={`mb-2 text-gray-600 dark:text-gray-400 text-${textSize} ${
        className ?? ""
      }`}
    >
      {children}
    </p>
  );
}
