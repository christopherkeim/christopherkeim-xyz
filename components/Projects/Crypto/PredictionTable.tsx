export function PredictionTable({ children }: { children?: React.ReactNode }) {
  return (
    <table className="mx-auto w-fit table-auto whitespace-nowrap text-2xl">
      {children}
    </table>
  );
}
