import React from "react";

export default function AboutPage6() {
  return (
    <div className="about-page-6 flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-100 min-h-[120vh] ">
      <div className=" flex flex-col justify-center items-center m-8 mt-[150px]">
        <h2 className="text-3xl md:text-5xl flex items-center gap-3 font-bold text-center pb-4 text-gray-900">
          <span className="w-[50px] bg-blue-500 h-[3px] rounded-xl"></span>
          Our commitment to Quality
          <span className="w-[50px] bg-blue-500 h-[3px] rounded-xl"></span>
        </h2>
        <div className="w-[80%]  min-h-[100px]   mx-auto md:mx-0 flex flex-col justify-center p-[20px] tracking-wide">
          {/* <strong className="text-blue-800">Custom Solutions:</strong> */}
          <span className="text-lg text-center text-gray-700">
            Quality is at the core of our operations. We are proud to be{" "}
            <strong className="text-bold">ISO certified,</strong> demonstrating
            our commitment to maintaining the highest standards of quality
            management. This certification ensures that our processes are
            consistently monitored and improved, guaranteeing the reliability
            and performance of our gears. We adhere to standards for gear
            calculations and tolerances.
          </span>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center m-8 mt-[50px]">
        <h2 className="text-3xl md:text-5xl flex items-center gap-3 font-bold text-center pb-4 text-gray-900">
          <span className="w-[50px] bg-blue-500 h-[3px] rounded-xl"></span>
          Our Mission
          <span className="w-[50px] bg-blue-500 h-[3px] rounded-xl"></span>
        </h2>
        <div className="w-[80%]  min-h-[100px]   mx-auto md:mx-0 flex flex-col justify-center p-[20px] tracking-wide">
          {/* <strong className="text-blue-800">Custom Solutions:</strong> */}
          <span className="text-lg text-center text-gray-700">
            Our mission is to provide our clients with the most reliable,
            precise, and durable gears available. We strive to exceed
            expectations through continuous improvement, advanced manufacturing
            techniques, and a deep understanding of our customers' needs. We
            strive to be your trusted partner, dedicated to providing
            high-quality gear solutions that empower your success. We're driven
            by a commitment to precision engineering, ensuring every gear we
            produce meets exacting standards for optimal performance and
            reliability. This dedication extends to our careful selection of
            superior materials and the utilization of advanced manufacturing
            processes, resulting in gears built to withstand the test of time.
          </span>
        </div>
      </div>
    </div>
  );
}
