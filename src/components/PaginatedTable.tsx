import { IDataEntries } from "../types/types";

interface Props {
  dataEntries: IDataEntries;
}

export default function PaginatedTable({
  dataEntries: { columns, data },
}: Props) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
