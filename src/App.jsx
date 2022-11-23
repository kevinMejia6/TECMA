import { useState } from "react";
import Header from "./componets/header";
import Footer from "./componets/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Layout from "./componets/layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import "./styles.scss";
import About from "./pages/About/About";
import BlogLayout from "./componets/layout/blog";
import Acerca from "./componets/about";

const App = () => {
  return (
    <div className="App container-fluid p-0">
      <main>
        {/* React router */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={<Home data={{ propiedad: 1 }} title={"Home"} />}
              />
              <Route path="Acerca" element={<Acerca title={"Acerca"} />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="/blog" element={<BlogLayout />}>
              <Route
                index
                element={<Home data={{ propiedad: 1 }} title={"Home"} />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
