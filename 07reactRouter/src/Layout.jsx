import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      {/* Header and footer will always be there on all pages */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}
export default Layout;
