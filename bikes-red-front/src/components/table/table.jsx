import React from "react";
import { useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { Trash } from "react-bootstrap-icons";
import { deleteBike } from "../../redux/actions/bikesActions";

const TableMap = ({ bks }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(bks);
    console.log(id);
    dispatch(deleteBike(id));
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
