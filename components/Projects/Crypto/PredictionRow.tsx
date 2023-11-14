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
      <th className="pe-4">
        <span className="">{title}</span>
      </th>
      <td className="ps-4 md:ps-10">
        <span className={`text-${valueColor}-500`}>{value}</span>
      </td>
    </tr>
  );
}
