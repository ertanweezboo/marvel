import React from "react";
import { Table } from "../styles/shared";

type Props = {
  body: (string | number | boolean | React.ReactElement)[][];
  headers: (string | number | boolean | React.ReactElement)[];
};

const TableComponent = ({ headers, body }: Props) => {
  const bodyData = body.map((row, index) => {
    let rowData = [];
    let i = 0;

    for (const key in row) {
      rowData.push({
        key: body[i],
        val: row[key],
      });
      i++;
    }

    return (
      <tr key={index}>
        {rowData.map((item, index) => (
          <td key={index}>{item.val}</td>
        ))}
      </tr>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header, i) => {
            return <th key={i}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </Table>
  );
};

export default TableComponent;
