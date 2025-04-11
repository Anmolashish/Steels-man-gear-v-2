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
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[60vh] md:h-[50vh] w-full bg-white"></div>
    </div>
  );
}
