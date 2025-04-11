"use client";
import React, { useContext } from "react";
import ProductPage3 from "../productComponent/ProductPage3";
import ProductsData from "../productsData/Context";

export default function ProductsGrid() {
  const { data2 } = useContext(ProductsData);

  return (
    <div className="bg-blue-200 pt-3">
      <ProductPage3 items={data2} />
    </div>
  );
}
