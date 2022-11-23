import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import banner from "../../assets/images/bannerhonda.jpg";
import molinos from "../../assets/images/banner-molinos.jpg";
import molino from "../../assets/images/molino.png";
import baldor from "../../assets/images/banner-baldor.jpg";
import baldors from "../../assets/images/baldor.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import gx630 from "../../assets/images/gx630.png";
import "./style.scss";

const Productos = () => {
  const productosData = [
    {
      imagen: gx630,
      title: "Motor honda",
      description: "Original",
      url: "/producto1",
    },
    {
      imagen: gx630,
      title: "TITULO",
      description: "Motores electricos americanos",
      url: "/molino",
    },
    {
      imagen: gx630,
      title: "Motor honda",
      description: "Original",
      url: "/producto1",
    },
    {
      imagen: gx630,
      title: "Motor honda",
      description: "Original",
      url: "/producto1",
    },
    {
      imagen: gx630,
      title: "Motor honda",
      description: "Original",
      url: "/producto1",
    },
    {
      imagen: gx630,
      title: "Motor honda",
      description: "Original",
      url: "/producto1",
    },
    {
      imagen: gx630,
      title: "Motor honda",
      description: "Original",
      url: "/producto1",
    },
    {
      imagen: gx630,
      title: "Motor honda",
      description: "Original",
      url: "/producto1",
    },
  ];

  return (
    <div className="container-fluid productos">
      <h2 className="titulo display-4 has-line">PRODUCTOS</h2>
      <div className="row">
        {productosData.map((item, index) => {
          return (
            <div className="col-md-3 p-3 " key={index}>
              <Card className="md-2 card pricing-card">
                <div className="container-img">
                  <Card.Img variant="p-2" className="w-50" src={item.imagen} />
                </div>
                <Card.Body>
                  <Card.Title className="tittle-product">
                    {item.title}
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="container-btn">
                    <Button className="more">Ver mas</Button>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
