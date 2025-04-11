"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [side, setSide] = useState(false);
  const handleClick = () => {
    if (!side) {
      document.querySelector(".sidebar").classList.add("translate-x-[-100%]");
      setSide(true);
    } else {
      document
        .querySelector(".sidebar")
        .classList.remove("translate-x-[-100%]");
      setSide(false);
    }
  };
  return (
    <>
      <div className="lower-navbar z-20 sticky top-0 h-[12vh] w-full bg-[#041A33] flex justify-between items-center px-[3%]">
        <div className="navbar-logo w-[30%]  min-w-[250px]">
          <Link href="/">
            <img
              className="w-[100%]"
              src="/Images/logo-2 (1).png"
              alt="Steelmans gears logo"
            />
          </Link>
        </div>
        <div className="navbar-tabs flex text-white gap-[80px] max-lg:gap-[30px] font-bold max-md:hidden">
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            <Link href={"/products"}>Products</Link>
          </div>
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div
          className="hamburger md:hidden cursor-pointer"
          onClick={handleClick}
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-two-tone/24/FFFFFF/menu--v1.png"
            alt="menu--v1"
          />
        </div>
      </div>
      <div className="sidebar duration-300 fixed h-full top-0 z-50 w-[250px] bg-[rgba(16,0,85,0.59)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[5.5px] border border-[rgba(255,255,255,0.18)] hidden max-md:flex flex-col transform translate-x-[-100%]">
        <div className="sidebar-header flex flex-col justify-center p-[20px]">
          <div className="sidebar-logo w-full flex justify-center text-center">
            <Link href="/">
              <img
                className="w-[120px]"
                src="/Images/logo2.png"
                alt="Steelmans gears logo"
              />
            </Link>
          </div>
          <div className="nav-options mt-3 p-1">
            <div
              className="nav-option hover:text-[#00C3FE] tracking-widest
            transition duration-300 ease-in-out cursor-pointer py-3 m-1 border-b-[1px] border-white"
              onClick={handleClick}
            >
              <Link
                href="/"
                className="text-white hover:text-[#00C3FE] duration-300"
              >
                Home
              </Link>
            </div>
            <div
              className="nav-option hover:text-[#00C3FE] tracking-widest
            transition duration-300 ease-in-out cursor-pointer py-3 m-1 border-b-[1px] border-white"
              onClick={handleClick}
            >
              <Link
                href="/about"
                className="text-white hover:text-[#00C3FE] duration-300"
              >
                About
              </Link>
            </div>
            <div
              className="nav-option hover:text-[#00C3FE] tracking-widest
            transition duration-300 ease-in-out cursor-pointer py-3 m-1 border-b-[1px] border-white"
              onClick={handleClick}
            >
              <Link
                href="/products"
                className="text-white hover:text-[#00C3FE] duration-300"
              >
                Products
              </Link>
            </div>
            <div
              className="nav-option hover:text-[#00C3FE] tracking-widest
            transition duration-300 ease-in-out cursor-pointer py-3 m-1 border-b-[1px] border-white"
              onClick={handleClick}
            >
              <Link
                href="/contact"
                className="text-white hover:text-[#00C3FE] duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
