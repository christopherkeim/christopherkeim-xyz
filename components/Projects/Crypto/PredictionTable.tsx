export function PredictionTable({ children }: { children?: React.ReactNode }) {
  return (
    <table className="mx-auto my-2 table-auto whitespace-nowrap py-2 text-lg">
      <tbody>{children}</tbody>
    </table>
  );
}
