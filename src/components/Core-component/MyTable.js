import React from "react";
import TableRow from "./TableRow";
import { Table } from "react-bootstrap";

const MyTable = props => {
  console.log(props);
  const TableData = props.rows.map((col, index) => {
    return <TableRow key={index} sn={index + 1} col={col} />;
  });

  return (
    <div>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Body</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>{TableData}</tbody>
      </Table>
    </div>
  );
};

export default MyTable;
