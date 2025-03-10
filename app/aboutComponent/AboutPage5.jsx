import Link from "next/link";
import React from "react";

export default function AboutPage5() {
  return (
    <div className="flex justify-center items-end quote-background  w-full">
      <div className="min-h-[30vh] flex justify-evenly text-white max-md:flex-col items-center w-full bg-blue-600 p-4">
        <div className="heading text-5xl max-md:text-3xl max-md:text-center">
          <h4 className="pb-3">
            Your Next Adventure Starts Here:
            <br /> Gear Up and Explore
          </h4>
        </div>
        <div className="button">
          <Link href={"/products"}>
            <button className="py-[10px] px-[15px] bg-white text-blue-600 font-bold max-md:text-sm rounded-2xl text-2xl">
              Explore Our Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
