import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router";

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
