import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addBikes } from "../../../redux/actions/bikesActions";

const FormAddBike = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "",
    color: "",
    model: "",
    lat: "",
    log: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBike = (e) => {
    dispatch(addBikes(input))
      .then((res) => {
        e.target.reset();
        e.preventDefault();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleAddBike} className="container">
      <FormGroup row>
        <Label for="Id" sm={2}>
          Id
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            name="id"
            placeholder="Id-Bike"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="color" sm={2}>
          Color
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="color"
            placeholder="Bike color"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="model" sm={2}>
          Model
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="model"
            placeholder="Bike model"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="location" sm={2}>
          Latitud
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            step="0.0000000001"
            name="lat"
            placeholder="Bike location"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="location" sm={2}>
          Longitud
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            step="0.0000000001"
            name="log"
            placeholder="Bike location"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FormAddBike;
