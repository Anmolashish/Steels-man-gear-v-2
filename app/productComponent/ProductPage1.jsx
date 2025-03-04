import React from "react";

export default function ProductPage1() {
  return (
    <>
      <div className="sticky top-[10vh]">
        <div className="w-full h-[10vh] bg-[#041A33] relative flex justify-center items-center">
          <div className="categories h-[10vh] text-lg w-[80%] rounded-full top-[5vh] absolute bg-blue-500 ">
            <div className="text-white flex justify-evenly h-full items-center font-semibold max-md:hidden">
              <div className="category-tabs">All</div>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <div className="category-tabs">Gear hobs</div>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <div className="category-tabs">Gear cutters</div>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <div className="category-tabs">Straight bevel gear cutters</div>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <div className="category-tabs">Spiral bevel gear cutters</div>
            </div>
            <div className="category-md text-lg justify-between items-center h-full text-white font-semibold hidden max-md:flex p-6">
              <div className="category-tabs">Categories</div>
              <div className="hamburger">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-two-tone/24/FFFFFF/menu--v1.png"
                  alt="menu--v1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] bg-white"></div>
    </>
  );
}
