"use client";
import { useContext } from "react";
import ProductsData from "../productsData/Context";
import ProductPage2 from "./ProductPage2";

export default function SingleProduct(props) {
  const { data } = useContext(ProductsData);

  if (!data) {
    console.error("Data is undefined or null");
    return <p>Loading...</p>; // Prevents execution if data is not available
  }

  const allData = data.flatMap((category) => category.items);

  // Use `find()` to get a single matching item instead of `filter()`
  const matchedItem = allData.find((item) => item.subSlug === props.subSlug);

  const name = matchedItem ? matchedItem.name : "No Name Found";
  const description = matchedItem
    ? matchedItem.description
    : "No Description Found";

  console.log(name);
  console.log(description);

  return (
    <div>
      <ProductPage2 name={name} description={description} />
    </div>
  );
}
