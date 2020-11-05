import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormUpdate = () => {
  const [update, setUpdate] = useState({
    id: "",
    color: "",
    model: "",
    lat: "",
    log: "",
  });

  const updateBike = (e, id) => {
    const url = "http://localhost:3001";
    axios
      .put(`${url}/bikes/${id}`, {
        id: update.id,
        color: update.color,
        model: update.model,
        lat: update.lat,
        log: update.log,
      })
      .then((res) => {
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  let id = update.id;
  const handleChange = (e) => {
    e.preventDefault();
    setUpdate({
      ...update,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <Form onSubmit={(e) => updateBike(e, id)} className="container">
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

export default FormUpdate;
