"use client";
import { useContext } from "react";
import ProductsData from "../productsData/Context";
import ProductPage2 from "./ProductPage2";
import ProductPage4 from "./ProductPage4";

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
  const image = matchedItem ? matchedItem.image : "No Name Found";
  const quality = matchedItem ? matchedItem.quality : "No Name Found";
  const production = matchedItem ? matchedItem.production : "No Name Found";
  const manufacturing = matchedItem
    ? matchedItem.manufacturing
    : "No Name Found";
  const heading = matchedItem ? matchedItem.heading : "No Name Found";

  console.log(name);
  console.log(description);

  return (
    <div className="mb-[100px]">
      <ProductPage2 name={name} description={description} />
      <ProductPage4
        image={image}
        name={name}
        quality={quality}
        production={production}
        manufacturing={manufacturing}
        heading={heading}
      />
    </div>
  );
}
