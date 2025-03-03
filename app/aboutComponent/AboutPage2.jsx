import Link from "next/link";
import React from "react";

export default function AboutPage2() {
  return (
    <div className="home-page-2  w-full flex justify-center items-center px-4 mb-2">
      <div className="home-page-2-container w-[90%] max-w-[1200px] flex flex-wrap justify-center items-center gap-8">
        {/* Image Section */}
        <div className="home-page-2-image w-full md:w-[44%] flex justify-center max-md:hidden">
          <img
            className="w-full max-w-[500px] h-auto object-cover rounded-xl"
            src="/Images/Gemini_Generated_Image_xzjegdxzjegdxzje.jpg"
            alt="Product"
          />
        </div>

        {/* Text Section */}
        <div className="home-page-2-text w-full md:w-[50%] flex flex-col gap-4 text-center md:text-left">
          <h6 className="text-lg md:text-xl font-medium flex gap-2 items-center justify-center md:justify-start tracking-widest">
            <span className="w-5 bg-blue-500 h-[2px]"></span>
            Our values
            <span className="w-5 bg-blue-500 h-[2px]"></span>
          </h6>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Precision Engineering <br />
            You Can Trust
          </h2>

          <div className="w-full border-l-4 md:border-l-8 border-blue-500 min-h-[100px] md:h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col justify-center  p-[20px] tracking-wide">
            <strong className="text-blue-800">Quality:</strong>
            <span className="text-gray-700">
              We are committed to using only the finest materials and employing
              rigorous manufacturing processes to deliver exceptional products.
            </span>
          </div>
          <div className="w-full border-l-4 md:border-l-8 border-blue-500 min-h-[100px] md:h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col justify-center p-[20px] tracking-wide">
            <strong className="text-blue-800">Innovation:</strong>
            <span className="text-gray-700">
              We continuously invest in advanced technology and research to
              develop innovative gear solutions that meet the evolving demands
              of our clients.
            </span>
          </div>
          <div className="w-full border-l-4 md:border-l-8 border-blue-500 min-h-[100px] md:h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col justify-center p-[20px] tracking-wide">
            <strong className="text-blue-800">Customer Focus:</strong>
            <span className="text-gray-700">
              We prioritize building strong, long-term relationships with our
              clients by providing personalized service and expert support.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
