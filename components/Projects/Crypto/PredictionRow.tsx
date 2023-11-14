export function PredictionRow({
  title,
  value,
  valueColor = "inherit",
}: {
  title: string;
  value: string;
  valueColor?: "inherit" | "green" | "red";
}) {
  return (
    <tr className="">
      <th className="pe-4">{title}</th>
      <td className="ps-4 md:ps-10" style={{ color: valueColor }}>
        {value}
      </td>
    </tr>
  );
}
