import React from "react";
import ServicesCard from "./ServicesCard";

export default function HomePage3() {
  return (
    <div className="home-page-3 min-h-[63vh] w-full bg-blue-800 pb-8">
      <div className="home-page-3-heading p-10 text-center flex flex-col items-center gap-2 mb-2">
        <h3 className="text-5xl font-bold text-[#ffffff]">
          Our Gear Services{" "}
        </h3>
        <div className="underline w-[50%] h-[0.2px] bg-blue-400 "> </div>
        <p className="text-sm font-normal font-sarif w-[60%] text-[#ffffff]">
          From initial design and engineering to precision manufacturing and
          rigorous quality control
        </p>
      </div>
      <div className="home-page-3-content flex justify-evenly flex-wrap gap-4 ">
        <ServicesCard
          icon={"https://img.icons8.com/glyph-neue/64/FFFFFF/gears--v1.png"}
          name={"Gear Design & Engineering"}
          description={
            "Our experienced engineers utilize advanced CAD/CAM software to design and optimize gear solutions for your specific applications."
          }
        />
        <ServicesCard
          icon={
            "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/FFFFFF/external-repair-gas-station-xnimrodx-lineal-xnimrodx.png"
          }
          name={"Gear Repair & Refubrishment"}
          description={
            " Our experienced technicians can assess the condition of your gears and provide cost-effective solutions to restore their performance."
          }
        />

        <ServicesCard
          icon={
            "https://img.icons8.com/external-others-pike-picture/50/FFFFFF/external-Manufacturing-erp-others-pike-picture-3.png"
          }
          name={"Manufacturing & Production"}
          description={
            " We don't just sell gear; we create it. Our state-of-the-art manufacturing facility combines cutting-edge technology with the expertise of skilled craftsmen."
          }
        />
      </div>
    </div>
  );
}
