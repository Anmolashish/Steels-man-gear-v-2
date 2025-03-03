import React from "react";

export default function PagesHeader(props) {
  return (
    <div className="w-full min-h-[40vh] bg-[#041A33] flex flex-col justify-center items-center gap-3">
      <h1 className="text-6xl text-white font-bold max-md:text-4xl text-center">
        {props.heading}
      </h1>
      <p className="text-md text-white max-md:text-xs text-center">
        {props.subline}
      </p>
    </div>
  );
}
