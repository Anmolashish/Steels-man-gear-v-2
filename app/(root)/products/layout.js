import PagesHeader from "@/app/homeComponents/PagesHeader";
import ProductPage1 from "@/app/productComponent/ProductPage1";
import React from "react";
export const metadata = {
  title: "Steelman Gears | High-Performance Gear Tools ",
  description:
    "We offer precision-engineered cutting edges and durable materials for optimal gear manufacturing. Get a quote! ",
};

export default function layout({ children }) {
  return (
    <div>
      <PagesHeader heading={"Products"} />
      {/* <ProductPage1 /> */}
      {children}
    </div>
  );
}
