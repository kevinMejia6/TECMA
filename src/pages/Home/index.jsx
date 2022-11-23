import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import About from "../About/About";
import Carousel from "react-bootstrap/Carousel";
import banner from "../../assets/images/bannerhonda.jpg";
import molinos from "../../assets/images/banner-molinos.jpg";
import baldor from "../../assets/images/banner-baldor.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import gx630 from "../../assets/images/gx630.png";
import Productos from "../../componets/Productos/productos";
import "./style.scss";
import whatsapp from "../../assets/images/Whatsapp.png";
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;
const Home = () => {
  return (
    <div className="Home">
      <div>
        <Carousel variant="dark" fade>
          <Carousel.Item>
            <img className="d-block w-100" src={banner} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={molinos} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={baldor} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <Productos />
      </div>
    </div>
  );
};

export default Home;
