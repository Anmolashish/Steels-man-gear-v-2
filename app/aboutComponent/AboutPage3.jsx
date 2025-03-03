import React from "react";

export default function AboutPage3() {
  return (
    <div className="home-page-2 min-h-screen w-full flex justify-center items-center px-4 mb-8 max-md:mb-11">
      <div className="home-page-2-container w-[90%] max-w-[1200px] flex flex-wrap justify-center items-center gap-8">
        {/* Text Section */}
        <div className="home-page-2-text w-full md:w-[50%] flex flex-col gap-4 text-center md:text-left">
          <h6 className="text-lg md:text-xl font-medium flex flex-row-reverse gap-2 items-center justify-center md:justify-start tracking-widest text-right">
            <span className="w-5 bg-blue-500 h-[2px]"></span>
            Our Expertise
            <span className="w-5 bg-blue-500 h-[2px]"></span>
          </h6>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-right max-md:text-center">
            Engineering and Design Excellence
          </h2>

          <div className="w-full border-r-4 md:border-r-8 text-right border-blue-500 min-h-[100px] md:h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col justify-center max-md:text-center p-[20px] tracking-wide">
            <strong className="text-blue-800">Precision at Our Core:</strong>
            <span className="text-gray-700">
              We utilize state-of-the-art CNC machining centers and meticulous
              quality control procedures
            </span>
          </div>

          <div className="w-full border-r-4 md:border-r-8 text-right border-blue-500 min-h-[100px] md:h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col max-md:text-center justify-center p-[20px] tracking-wide">
            <strong className="text-blue-800">Industries:</strong>
            <span className="text-gray-700">
              Our team of experienced engineers and technicians utilizes
              state-of-the-art equipment and software to deliver precise and
              reliable gear solutions
            </span>
          </div>

          <div className="w-full border-r-4 md:border-r-8 text-right border-blue-500 min-h-[100px] md:h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col max-md:text-center justify-center p-[20px] tracking-wide">
            <strong className="text-blue-800">
              Experienced Engineering Team:
            </strong>
            <span className="text-gray-700">
              Our team comprises highly skilled engineers with extensive
              experience in gear design, analysis, and manufacturing.
            </span>
          </div>
        </div>
        {/* Image Section */}
        <div className="home-page-2-image w-full md:w-[44%] flex justify-center max-md:hidden">
          <img
            className="w-full max-w-[500px] h-auto object-cover rounded-xl"
            src="/Images/unnamed.png"
            alt="Product"
          />
        </div>
      </div>
    </div>
  );
}
