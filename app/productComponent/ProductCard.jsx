import React from "react";

export default function ProductCard() {
  return (
    <div className="h-fit w-[40%] border-2 rounded-xl  flex justify-between gap-4 max-md:w-[90%] items-center p-3 shadow-lg">
      <div className="image w-[60%] min-w-[250px] h-full max-lg:min-w-[100px] border-2 rounded-xl p-3 bg-slate-100">
        <img src="https://steelmansgears.com/imgs/chamfer_hobs.jpg" alt="" />
      </div>
      <div className="info flex flex-col justify-between gap-4 w-full">
        <div className="">
          <h2 className="text-lg font-bold">Product Name</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            molestias nulla beatae officia a, corrupti necessitatibus eligendi
            pariatur.
          </p>
        </div>
        <div className="">
          <button className=" text-blue-700">Explore more</button>
        </div>
      </div>
    </div>
  );
}
