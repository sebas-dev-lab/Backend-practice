import React from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { Trash } from "react-bootstrap-icons";

const TableMap = ({ bks }) => {
  const handleDelete = (e, id) => {
    const url = "http://localhost:3001";
    axios
      .delete(`${url}/bikes/${id}`)
      .then((res) => {
        console.log("Eliminado");
        e.preventDefault();
      })
      .catch((err) => console.log("error"));
  };

  return (
    <Table dark className="container">
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
                <td>
                  <Trash onClick={() => handleDelete(bike.id)} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TableMap;
