import React from "react";

export default function HomePage2() {
  return (
    <div className="home-page-2 min-h-screen w-full flex justify-center items-center px-4 mb-8 max-md:mb-11">
      <div className="home-page-2-container w-[90%] max-w-[1200px] flex flex-wrap justify-center items-center gap-8">
        {/* Image Section */}
        <div className="home-page-2-image w-full md:w-[44%] flex justify-center max-md:hidden">
          <img
            className="w-full max-w-[500px] h-auto object-cover "
            src="/Images/Gemini_Generated_Image_4jkm3s4jkm3s4jkm.jpg"
            alt="Product"
          />
        </div>

        {/* Text Section */}
        <div className="home-page-2-text w-full md:w-[50%] flex flex-col gap-4 text-center md:text-left">
          <h6 className="text-lg md:text-xl font-medium flex gap-2 items-center justify-center md:justify-start tracking-widest">
            <span className="w-5 bg-blue-500 h-[2px]"></span>
            About
            <span className="w-5 bg-blue-500 h-[2px]"></span>
          </h6>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            The Professionals Choice: Gear that meets and exceeds expectations
          </h2>
          <p className="text-sm font-thin tracking-widest text-gray-700">
            Steelman Gear is dedicated to providing mechanics and DIY
            enthusiasts with innovative, high-quality tools.
          </p>
          <div className="w-full border-l-4 md:border-l-8 border-blue-500 h-[100px] md:h-[100px] bg-blue-100 mx-auto md:mx-0 flex justify-center items-center p-[20px] tracking-wide">
            " Our expertise spans a broad range of gear types, from standard
            models to custom designs tailored for specific applications. "
          </div>
          <p className="text-sm font-thin tracking-widest text-gray-700">
            We're here to support your work with reliable equipment you can
            trust.
          </p>
          <button className="bg-[#251bab] text-white py-3 px-6 rounded-2xl w-[80%] md:w-[60%] mx-auto md:mx-0 text-lg font-semibold">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
