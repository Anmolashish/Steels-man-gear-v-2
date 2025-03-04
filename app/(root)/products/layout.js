import PagesHeader from "@/app/homeComponents/PagesHeader";
import ProductPage1 from "@/app/productComponent/ProductPage1";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <PagesHeader
        heading={"Explore Our Gears Catalogue "}
        subline={
          "Steelman Gears offers a comprehensive range of precision-engineered gears designed to meet the demanding requirements of diverse industries"
        }
      />
      <ProductPage1 />
      {children}
    </div>
  );
}
