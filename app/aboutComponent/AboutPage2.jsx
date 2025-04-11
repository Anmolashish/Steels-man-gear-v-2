import React from "react";

export default function GearProductsPage() {
  return (
    <div className="home-page-2 w-full flex justify-center items-center px-4 mb-10">
      <div className="home-page-2-container w-[90%] max-w-[1200px] flex flex-wrap justify-center items-center gap-8">
        {/* Image Section */}
        <div className="home-page-2-image w-full md:w-[44%] flex justify-center max-md:hidden bottom-1">
          <img
            className="w-full max-w-[500px] h-auto object-cover rounded-xl"
            src="https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg"
            alt="Gear Cutting Tools"
          />
        </div>

        {/* Text Section */}
        <div className="home-page-2-text w-full md:w-[50%] flex flex-col gap-6 text-center md:text-left">
          {/* Gear Cutters Section */}
          <div className="w-full border-l-4 md:border-l-8 border-blue-500 min-h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col justify-center p-[20px] tracking-wide">
            <strong className="text-blue-800 text-xl mb-2">
              Gear Shaper Cutters
            </strong>
            <p className="text-gray-700 mb-4">
              Gear Shaper cutters are designed and produced for cutting and
              finishing for any type of gear, internal or external, spur or
              helical. They can also be designed to cut splines, serrations,
              sprockets or other involute forms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div>
                <strong>Module:</strong> 0.50 to 20.00
              </div>
              <div>
                <strong>Pressure Angle:</strong> 14°30' to 30°
              </div>
              <div>
                <strong>Accuracy:</strong> Class "AA" & "A" as per DIN, BS, ASA
                standards
              </div>
              <div>
                <strong>Special Features:</strong> Chamfering, semi-topping,
                protuberance, flat or fillet roots
              </div>
              <div>
                <strong>Spur & Helical:</strong> With all standard &
                non-standard profiles
              </div>
            </div>
          </div>

          {/* Gear Hobs Section */}
          <div className="w-full border-l-4 md:border-l-8 border-blue-500 min-h-[100px] bg-blue-100 mx-auto md:mx-0 flex flex-col justify-center p-[20px] tracking-wide">
            <strong className="text-blue-800 text-xl mb-2">Gear Hobs</strong>
            <p className="text-gray-700 mb-4">
              Machine relieved & ground form Gear Hobs are manufactured in 'A',
              'B', 'C' classes to cover the range from 0.1 to 40 module & 64 DP
              to 0.8 DP conforming to DIN 3968, BS 2062.
            </p>
            <p className="text-gray-700">
              Special profile Hobs with Protuberance, Topping, Semi Topping, Pre
              Shaving, Pre Grinding & as per customer requirement are also
              supplied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
