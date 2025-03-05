import SingleProduct from "@/app/productComponent/SingleProduct";
import React from "react";

export default function page({ params }) {
  return (
    <div>
      <SingleProduct subSlug={params.subSlug} />
    </div>
  );
}
