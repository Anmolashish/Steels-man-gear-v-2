import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-[120px]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side (Text Content) */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-blue-900 max-md:text-center">
            Quality Gear Solutions: Built to Perform
          </h1>
          <p className="text-sm text-gray-600 mt-4 max-md:text-center">
            {" "}
            Engineered to meet the demands of diverse industries, with solutions
            tailored to your requirements.
          </p>
          <p className="text-gray-600 mt-4 max-md:text-center">
            Welcome to our comprehensive selection of precision-engineered
            gears, where innovation meets uncompromising quality. At Steelman
            Gears, we understand that the heart of any mechanical system lies in
            its gears. That's why we dedicate ourselves to crafting gear
            solutions that not only meet but exceed the demands of modern
            industry.
          </p>
          <Link href="/products" className="max-md:flex max-md:justify-center">
            <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition duration-300">
              See all products<span className="text-lg">→</span>
            </button>
          </Link>

          {/* Customer Info */}
          <div className="mt-8 flex items-center max-md:justify-center gap-4">
            <Link href={"/products"}>
              <div className="bg-black text-white p-4 rounded-lg flex items-center gap-3">
                <img
                  src="https://templatekit.jegtheme.com/autofix/wp-content/uploads/sites/422/2023/10/mechanic-men-8RQDFKJ.png"
                  alt="Customer"
                  className="w-16  rounded-full"
                />
                <div className="text-right">
                  <p className="text-2xl font-bold">Explore</p>
                  <p className="text-sm ml-[20%] w-[80%]">
                    our extensive gear product catalog
                  </p>
                </div>
              </div>
            </Link>

            <div>
              <p className="font-bold">Checkout</p>
              <Link
                href="products/gear-cutters"
                className="text-green-600 font-semibold"
              >
                GEAR CUTTERS
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* First Column (Top) */}
          <div className="bg-blue-200 h-[400px] rounded-xl flex justify-center p-[2px]">
            <img
              src="https://image.made-in-china.com/202f0j00DWTcSYwByJom/Stock-a-2A-3A-Grade-Single-Thread-Metal-Cutting-Tools-Involute-Gear-Hobs.webp"
              alt="Steel mans gears"
              className="object-cover rounded-lg "
            />
          </div>

          {/* Second Column (Top, Taller) */}
          <div className="bg-blue-700 h-[550px] rounded-xl max-md:h-[400px] flex justify-center ">
            <img
              src="/Images/Gemini_Generated_Image_ilh1y6ilh1y6ilh1.jpg"
              alt=""
              className="object-cover rounded-lg  opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
