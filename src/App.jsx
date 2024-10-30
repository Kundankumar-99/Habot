import React from "react";
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router";
import Header from "./components/Head/Header";


function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
