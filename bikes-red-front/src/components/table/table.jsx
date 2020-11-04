import React from "react";
import { Table } from "reactstrap";

const TableMap = ({ bks }) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Id</th>
          <th>Color</th>
          <th>Model</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {bks &&
          bks.map((bike) => {
            return (
              <tr>
                <th scope="row">{bike.id}</th>
                <td>{bike.color}</td>
                <td>{bike.model}</td>
                <td>
                  {" "}
                  lat: {bike.location[0]} || log: {bike.location[1]}
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TableMap;
