import React from "react";
import "./style.scss";
import logo from "../../assets/images/logo.png";
import ReactDOM from "react-dom";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
        <div className="col-12">
          <div className="row row-12">
            <div className="col-sm-3 text-md-center">
              <h5>
                <span>
                  <i
                    className="fa fa-firefox text-light"
                    aria-hidden="true"
                  ></i>
                </span>
                <img className="w-50" src={logo}></img>
              </h5>
            </div>
            <div className="col-sm-3  my-sm-0 mt-5">
              <ul className="list-unstyled">
                <li className="mt-0">
                  <i className="fa fa-spinner fa-spin"></i>Servicios
                </li>
                <li>Productos</li>
                <li>Contactanos</li>
              </ul>
            </div>
            <div className="col-sm-3  my-sm-0 mt-5">
              <ul className="list-unstyled">
                <li className="mt-0">
                  <b>Trabajos</b>
                </li>
                <li>Servicio de reparacion</li>
                <li>Instalaciones</li>
              </ul>
            </div>
            <div className="col-sm-3  my-sm-0 mt-5">
              <ul className="list-unstyled">
                <li className="mt-0">
                  <b>Empresa</b>
                </li>
                <li>Direccion</li>
                <li>Telefono</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
        <div className="col-12">
          <div className="row my-4 row-1 no-gutters">
            <div className="col-sm-3 col-auto text-center">
              <small>
                &#9400;<b>Developed by</b>
              </small>
            </div>
            <div className="col-md-3 col-auto "></div>
            <div className="col-md-3 col-auto"></div>
            <div className="col  my-auto text-md-left  text-right ">
              <small>Kevinmejia075@gmail.com</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
