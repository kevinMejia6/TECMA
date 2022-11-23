import React, { useEffect, useState } from "react";
import "./style.scss";
import logo from "../../assets/images/logo.png";

const Acerca = () => {
  return (
    <section className="section about">
      <div className="container p-5">
        <div className="row justify-content-between">
          <div className="col-md-5 align-self-center mb-4 mb-md-0 img-bg border-0">
            <img src={logo} alt="" className="shadow w-100" />
          </div>
          <div className="col-md-6 col-lg-5">
            <h6 className="title display-4 has-line">SOBRE NOSOTROS</h6>
            <p>
              Somos una empresa familiar, dedicada a ofrecer la mejor calidad en
              nuestro trabajo, asi tambien como ofreciendo los siguientes
              servicios
            </p>
            <ul className="list-unstyled mt-4">
              <li className="media">
                <div className="circle-40 mr-3 mt-1">
                  <i className="ti-gift"></i>
                </div>
                <div className="media-body">
                  <h6 className="mb-2 services-tittle">Reparacion</h6>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                </div>
              </li>
              <li className="media">
                <div className="circle-40 mr-3 mt-1">
                  <i className="ti-face-smile"></i>
                </div>
                <div className="media-body">
                  <h6 className="mb-2 services-tittle">Instalacion</h6>
                  <p>
                    Cras in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="circle-40 mr-3 mt-1">
                  <i className="ti-microphone"></i>
                </div>
                <div className="media-body">
                  <h6 className="mb-2 services-tittle">
                    Venta de maquinaria agricola
                  </h6>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="circle-40 mr-3 mt-1">
                  <i className="ti-microphone"></i>
                </div>
                <div className="media-body">
                  <h6 className="mb-2 services-tittle">
                    Venta de molinos nixtamal
                  </h6>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="circle-40 mr-3 mt-1">
                  <i className="ti-microphone"></i>
                </div>
                <div className="media-body">
                  <h6 className="mb-2 services-tittle">
                    Venta de motores electricos o gasolina
                  </h6>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="circle-40 mr-3 mt-1">
                  <i className="ti-microphone"></i>
                </div>
                <div className="media-body">
                  <h6 className="mb-2 services-tittle">
                    Repuestos de picadoras Nogueira
                  </h6>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
