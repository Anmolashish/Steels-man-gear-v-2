import React from "react";

export default function ProductPage4(props) {
  return (
    <div className="w-full flex justify-center items-center px-4 mb-2">
      <div className="home-page-2-container w-[90%] max-w-[1200px] flex flex-wrap justify-center items-center gap-8">
        {/* Image Section */}
        <div className="home-page-2-image w-full md:w-[44%] flex justify-center">
          <img
            className="w-full max-w-[500px] h-auto object-cover rounded-xl"
            src={props.image}
            alt={props.name}
          />
        </div>

        {/* Text Section */}
      </div>
    </div>
  );
}
