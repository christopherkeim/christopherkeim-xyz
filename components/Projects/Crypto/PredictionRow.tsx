export function PredictionRow({
  title,
  value,
  valueColor = "white",
}: {
  title: string;
  value: string;
  valueColor?: "white" | "green" | "red";
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
