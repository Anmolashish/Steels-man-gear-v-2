import React from "react";

export default function HomePage1() {
  return (
    <div className="w-full h-screen ">
      <div className="top-home-page-1 h-[60vh] w-full bg-[#041A33] flex justify-center items-center relative">
        <div className="floating-data h-[75vh] w-[80%] bg-[#009CFE] absolute top-[20vh] flex rounded-2xl text-white max-md:flex-col max-md:justify-between max-md:items-center">
          <div className="h-[10px]"></div>
          <div className="text-data w-[60%] flex justify-center flex-col pl-[5%] max-md:w-[100%] max-md:items-center max-md:text-center max-md:pl-[0] z-10">
            <h1 className="heading text-8xl font-black w-[80%] leading-[80px] max-md:text-6xl md:text-7xl xl:text-8xl [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] ">
              The <span className="text-[#251bab]">Gear</span> Experts You Can
              <span className="text-[#201981]"> Trust</span>
            </h1>
            <p className="subline m-4 text-xl w-[80%] max-md:text-sm [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] ">
              Providing comprehensive gear solutions and unparalleled customer
              service.
            </p>
            <button className="bg-[#251bab] text-[#ffffff] p-[12px] rounded-2xl w-[50%] text-lg font-semibold">
              Get a Quote
            </button>
          </div>
          <div className="image-data relative w-[40%] max-md:w-[100%] max-md:flex max-md:justify-center max-md:h-[10px]">
            <img
              className="h-full object-cover rounded-r-2xl w-full max-md:hidden"
              src="/Images/download.jpg"
              alt="Steelmans gears Background Image"
            />
            <img
              className="absolute bottom-0 h-[120%]  max-md:h-[400px] object-cover max-md:opacity-40 "
              src="https://templatekit.jegtheme.com/autofix/wp-content/uploads/sites/422/2023/10/mechanic-men-8RQDFKJ.png"
              alt="Steelmans gears Pop-up image"
            />
          </div>
        </div>
      </div>
      <div className="bottom-home-page-1 h-[40vh] w-full bg-white"></div>
    </div>
  );
}
