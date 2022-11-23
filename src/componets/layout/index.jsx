import React from "react";
import Header from "../header/index";
import Footer from "../footer/index";
import { Outlet } from "react-router";
import Productos from "../Productos/productos";
import "./style.scss";
import About from "../about";

import whatsapp from "../../assets/images/whatsapp.png";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />

      <a
        to="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
        className="whatsapp"
        target="_blank"
      >
        <img src={whatsapp}></img>
      </a>
    </React.Fragment>
  );
};

export default Layout;
