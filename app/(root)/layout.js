import React from "react";
import Navbar from "../homeComponents/Navbar";
import Footer from "../homeComponents/Footer";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
