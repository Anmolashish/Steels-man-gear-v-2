import React from "react";

export default function ProductPage2(props) {
  return (
    <div className="w-full min-h-[40vh] flex flex-col justify-center items-center p-10 ">
      <h3 className="heading text-3xl flex justify-center items-center text-center">
        {props.name}
      </h3>
      <p className="text-md text-center flex justify-center items-center w-[80%]">
        {props.description}
      </p>
    </div>
  );
}
