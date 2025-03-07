import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#041A33] text-white">
      {/* Footer Container */}
      <div className="max-w-[1200px] mx-auto py-10 px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-5 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/products/gear-hobs" className="hover:text-white">
                  Gear hobs
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gear-cutters"
                  className="hover:text-white"
                >
                  Gear cutters
                </Link>
              </li>
              <li>
                <Link
                  href="/products/straight-bevel-gear-cutters"
                  className="hover:text-white"
                >
                  Bevel gear cutters
                </Link>
              </li>
              <li>
                <Link
                  href="/products/spiral-bevel-gear-cutters"
                  className="hover:text-white"
                >
                  Custom gear
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:info@steelmans.com"
                  className="hover:text-white"
                >
                  <span className="font-semibold">Email : </span>
                  info@steelmans.com
                </a>
              </li>
              <li>
                <a href="tel:+91 1757961320" className="hover:text-white">
                  <span className="font-semibold">Phone : </span> +91 1757961320
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  <span className="font-semibold">Add : </span>
                  183 Ajit Nagar, Patiala 147001 Punjab (INDIA)
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Image Gallery Section */}
          <div className="flex gap-3 grid-cols-2 max-md:hidden">
            <img
              src="https://steelmansgears.com/imgs/chamfer_hobs.jpg"
              alt="shoe1"
              className=" w-[70%] max-w-[150px] max-h-[150px] rounded-lg object-cover"
            />

            <img
              src="https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg"
              alt="shoe3"
              className=" w-[70%] max-w-[150px] max-h-[150px] rounded-lg object-cover"
            />
            <img
              src="https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg"
              alt="shoe2"
              className=" w-[70%] max-w-[150px] max-h-[150px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Footer Middle Section */}
        <div className="flex justify-between items-center border-t border-gray-500 mt-8 pt-7 max-sm:flex-col max-sm:text-center">
          <div className="flex flex-col items-center space-x-2">
            <Link href={"/"}>
              <h3 className="text-2xl font-bold text-white">
                <img src="/Images/logo2.png" alt="" />
              </h3>
            </Link>
          </div>
          <div className="flex justify-between text-gray-400 text-sm mt-6 gap-8 max-sm:flex-col max-sm:text-center">
            <div className="flex space-x-6">
              <a
                href="https://www.steelmans.com"
                target="_blank"
                className="hover:text-white"
              >
                Steelmans Broaches Pvt. Ltd.{" "}
                <span className="font-bold">{"(www.steelmans.com)"}</span>
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.steelmanscuttingtools.com"
                target="_blank"
                className="hover:text-white"
              >
                Steelmans Cutting Tools.{" "}
                <span className="font-bold">
                  {"(www.steelmanscuttingtools.com)"}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}

        {/* Copyright Section */}
      </div>
      <div className="text-center text-gray-500 mt-6 p-2">
        2008 © Copyright{" "}
        <a href="https://steelmansgears.com/" className=" text-white">
          www.steelmansgears.com.
        </a>{" "}
        All rights reserved.
      </div>
    </div>
  );
}
