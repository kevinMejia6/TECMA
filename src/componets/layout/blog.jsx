import React from "react";
import Header from "../header/index";
import Footer from "../footer/index";
import { Outlet } from "react-router";

const BlogLayout = () => {

  return (
        <React.Fragment>
          <Outlet/>
        </React.Fragment>
  );
};

export default BlogLayout;
