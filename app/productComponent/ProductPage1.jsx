"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ProductPage1() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="sticky top-[10vh] z-40">
        <div className="w-full h-[10vh] bg-[#041A33] relative flex justify-center items-center">
          <div className="categories h-[10vh] text-lg w-[80%] rounded-full top-[5vh] z-20 absolute bg-blue-500">
            <div className="text-white flex justify-evenly h-full items-center font-semibold max-lg:hidden">
              <Link href={"/products"}>
                <div className="category-tabs">All</div>
              </Link>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <Link href={"/products/gear-hobs"}>
                <div className="category-tabs">Gear hobs</div>
              </Link>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <Link href={"/products/gear-cutters"}>
                <div className="category-tabs">Gear cutters</div>
              </Link>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <Link href={"/products/straight-bevel-gear-cutters"}>
                <div className="category-tabs">Straight bevel gear cutters</div>
              </Link>
              <div className="divider w-[1px] h-[40%] bg-white"></div>
              <Link href={"/products/spiral-bevel-gear-cutters"}>
                <div className="category-tabs">Spiral bevel gear cutters</div>
              </Link>
            </div>

            {/* Mobile View */}
            <div className="category-md text-lg justify-center items-center h-full text-white font-semibold hidden max-lg:flex p-6 relative">
              <div className="flex w-full justify-between">
                <div className="category-tabs cursor-pointer">Categories</div>
                <div className="hamburger" onClick={() => setClick(!click)}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-two-tone/24/FFFFFF/menu--v1.png"
                    alt="menu"
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              <div
                className={`nav-dropdown absolute left-0 w-full bg-[rgba(59,130,246,0.59)] shadow-lg backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-3xl p-3 transition-all duration-300 ease-in-out top-[12vh] ${
                  click
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-5 invisible"
                }`}
              >
                <Link href={"/products"}>
                  <div className="category-menu p-2 m-2 border-b">All</div>
                </Link>
                <Link href={"/products/gear-hobs"}>
                  <div
                    className="category-menu p-2 m-2 border-b"
                    onClick={() => setClick(!click)}
                  >
                    Gear hobs
                  </div>
                </Link>
                <Link href={"/products/gear-cutters"}>
                  <div
                    className="category-menu p-2 m-2 border-b"
                    onClick={() => setClick(!click)}
                  >
                    Gear cutters
                  </div>
                </Link>
                <Link href={"/products/straight-bevel-gear-cutters"}>
                  <div
                    className="category-menu p-2 m-2 border-b"
                    onClick={() => setClick(!click)}
                  >
                    Straight bevel gear cutters
                  </div>
                </Link>
                <Link href={"/products/spiral-bevel-gear-cutters"}>
                  <div
                    className="category-menu p-2 m-2 border-b"
                    onClick={() => setClick(!click)}
                  >
                    Spiral bevel gear cutters
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] bg-white"></div>
    </>
  );
}
