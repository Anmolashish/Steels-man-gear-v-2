import React from "react";

export default function AboutPage1() {
  return (
    <div className=" h-auto w-full">
      <div className="flex justify-center items-center h-[30vh] w-full bg-[#041A33] relative">
        <div className="floating-about absolute top-5 flex flex-col justify-center items-center gap-6">
          <div className="about-image w-[85%] h-[400px]">
            <img
              className="rounded-lg w-full h-full object-cover"
              src="https://steelmansgears.com/imgs/1.png"
              alt="Steelmans gear's headquaters"
            />
          </div>
          <div className="about-text w-[70%] text-center flex justify-center flex-col items-center mt-10 ">
            <h4 className="text-4xl font-bold mb-3">About Steelmans Gear</h4>
            <p className="text-lg ">
              At Steelman Gears, we're more than just gear manufacturers; we're
              precision engineering partners. For decades, we've dedicated
              ourselves to delivering high-quality, custom gear solutions that
              empower industries across the globe. Our commitment to excellence,
              innovation, and customer satisfaction drives everything we do
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[100vh] md:h-[75vh] w-full bg-white"></div>
    </div>
  );
}
