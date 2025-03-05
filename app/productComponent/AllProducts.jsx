"use client";
import { useContext } from "react";
import ProductsData from "../productsData/Context";
import ProductPage3 from "./ProductPage3";

export default function AllProducts() {
  const { data } = useContext(ProductsData);

  const allData = data.flatMap((category) => category.items);
  return (
    <>
      <ProductPage3 items={allData} />
    </>
  );
}
