"use client";
import React from "react";
import { useContext } from "react";
import ProductsData from "../productsData/Context";
import ProductPage2 from "./ProductPage2";
import ProductPage3 from "./ProductPage3";

export default function ProductsHandler(props) {
  const { data } = useContext(ProductsData);

  const resultn = data.find((element) => element.slug === props.slug);
  // ?. means here that only do it if the name exist, other that that you can skip that
  const name = resultn?.name ?? "Not Found";

  const resultd = data.find((element) => element.slug === props.slug);

  const description =
    resultd?.description ??
    "Looks like you have reached the wrong page here, you can visit the home page now";

  const resulti = data?.find((element) => element.slug === props.slug);

  // Ensure items is always an array
  const items = resulti?.items ?? [];

  return (
    <div>
      <ProductPage2 name={name} description={description} />
      <ProductPage3 slug={props.slug} items={items} />
    </div>
  );
}
