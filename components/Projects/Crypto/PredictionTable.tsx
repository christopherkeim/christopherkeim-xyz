export function PredictionTable({ children }: { children?: React.ReactNode }) {
  return (
    <table className="mx-auto w-300 table-auto whitespace-nowrap text-lg py-2 my-2">
      {children}
    </table>
  );
}
