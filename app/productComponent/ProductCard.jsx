import Link from "next/link";
import React from "react";

export default function ProductCard(props) {
  return (
    <Link
      href={`/products/${props.slug}/${props.subSlug}`}
      className="h-fit w-[40%] border-2 rounded-xl  flex justify-between gap-4 max-md:w-[90%] items-center p-3 shadow-lg"
    >
      <div className="image w-[60%] min-w-[250px] h-full min-h-[100px] max-h-[250px] max-lg:min-w-[100px] border-2 rounded-xl p-3 bg-slate-100 text-center flex justify-center items-center">
        <img src={props.image} alt="" className="h-[150px]" />
      </div>
      <div className="info flex flex-col justify-between gap-4 w-full">
        <div className="">
          <h2 className="text-lg font-bold">{props.name}</h2>
          <p className="text-xs">{props.description}</p>
        </div>
        <div className="mt-4">
          <button className="group relative border-none bg-none cursor-pointer flex items-center">
            <span className="pb-[3px] pr-[8px] tracking-[2px] text-sm uppercase relative text-blue-700 after:content-[''] after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:bg-blue-700 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
              Explore more
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}
