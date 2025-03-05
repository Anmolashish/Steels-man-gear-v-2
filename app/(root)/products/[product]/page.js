import ProductsHandler from "@/app/productComponent/ProductsHandler";
import React from "react";

export default function page({ params }) {
  return (
    <>
      <ProductsHandler slug={params.product} />
    </>
  );
}
