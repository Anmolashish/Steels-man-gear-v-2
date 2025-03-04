import React from "react";

export default function ServicesCard(props) {
  return (
    <div
      className="services-card w-[400px] h-[220px] bg-white rounded-xl border border-blue-800 px-[25px] py-[20px] flex flex-col justify-evenly shadow-2xl
    "
    >
      <div className="service-icon bg-blue-800 rounded-full h-[60px] w-[60px] flex items-center justify-center mb-2">
        <img width="40" height="40" src={props.icon} alt="gears--v1" />
      </div>
      <div className="service-text">
        <h2 className="text-xl font-bold text-gray-900">{props.name}</h2>
        <p className="text-sm text-gray-600 text-justify">
          {props.description}
        </p>
      </div>
    </div>
  );
}
