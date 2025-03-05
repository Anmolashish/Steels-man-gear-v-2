"use client";
import React from "react";
import { createContext } from "react";

const ProductsData = createContext();

export function Context({ children }) {
  const data = [
    {
      id: 1,
      slug: "gear-hobs",
      name: "Gear Hobs",
      description: `Machine relieved & ground form Gear Hobs are manufactured in 'A', 'B', 'C' classes to cover the range from 0.1 to 40 module & 64 DP to 0.8 DP conforming to DIN 3968, BS 2062. Special profile Hobs with Protuberance, Topping, Semi Topping, Pre-Shaving, Pre-Grinding & as per customer requirement are also supplied. `,
      items: [
        {
          id: 1,
          name: "Involute Gear Hobs",
          subSlug: "involute-gear-hobs",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          description:
            "Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi-topping profiles. These are supplied in single or multi-starts in class 'AA', 'A' & 'B'.",
        },
        {
          id: 2,
          name: "Involute Spline Hobs",
          subSlug: "involute-spline-hobs",
          image: "https://steelmansgears.com/imgs/involute_spline_hobs.jpg",
          description:
            "Involute Spline Hobs for cutting all types of standard and non-standard involute splines as per DIN 5480, 5481 & 5482. These are manufactured in pressure angles 20°, 30°, 37.5°, and 45° with or without shoulder clearances in single or multi-start designs.",
        },
        {
          id: 3,
          name: "Straight Spline Hobs",
          subSlug: "straight-spline-hobs",
          image: "https://steelmansgears.com/imgs/straight_spline_hobs.jpg",
          description:
            "Straight Spline Hobs are used for cutting parallel splines. These are manufactured with or without lugs, semi-topping, and shoulder clearance types in Class 'AA' & 'A'.",
        },
        {
          id: 4,
          name: "Sprocket Hobs",
          subSlug: "sprocket-hobs",
          image: "https://steelmansgears.com/imgs/sprocket_hobs.jpg",
          description:
            "Sprocket Hobs are manufactured for chain sprocket tooth forms as per BS, JIS, DIN, ASA standards with non-topping or full-topping types in single or multi-start designs.",
        },
        {
          id: 5,
          name: "Worm Wheel Hobs",
          subSlug: "worm-wheel-hobs",
          image: "https://steelmansgears.com/imgs/worm_wheel_hobs.jpg",
          description:
            "Worm Wheel Hobs are manufactured in bore type and shank type in single or multi-start, topping or non-topping as per DIN, BS specifications or as per customer's requirement.",
        },
        {
          id: 6,
          name: "Chamfer Hobs",
          subSlug: "chamfer-hobs",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          description:
            "Chamfer Hobs are generally used for chamfering of entering end of ring gears. These are available in various types as per drawing of components.",
        },
        {
          id: 7,
          name: "Inserted Blade Gear Hobs",
          subSlug: "inserted-blade-gear-hobs",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          description:
            "Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carbon steel. These hobs save money & time, and damaged blades can also be replaced.",
        },
        {
          id: 8,
          name: "Saw Blade Hobs",
          subSlug: "saw-blade-hobs",
          image: "https://steelmansgears.com/imgs/saw-blade-hobs.jpg",
          description:
            "Ground and Unground saw blade hobs for hack saw blade and band saw applications.",
        },
      ],
    },
    {
      id: 2,
      slug: "gear-cutters",
      name: "Gear Cutters",
      description: `Gear Shaper cutters are designed and produced for cutting and finishing for any type of gear, internal or external, spur or helical. They can also be designed to cut splines, serrations, sprockets or other involute forms.   
            Module:  0.50 to 20.00   
            Pressure Angle: 140 30 to 300    
            Accuracy: Class “AA” & “A” as per DIN, BS, ASA standards specification    
            Special Features: Chamfering, semi-topping, protuberance, flat or fillet roots   
            Spur & Helical: With all standard & non-standard profiles  `,
      items: [
        {
          id: 21,
          name: "Shaving Cutters",
          subSlug: "shaving-cutters",
          image: "https://steelmansgears.com/imgs/shaving_cutters.jpg",
          description:
            "These HSS cutters are supplied in conventional type, diagonal, plunge cut with a wide range of sizes according to the customer requirement. Cutters are designed with profiles to incorporate them with tip relief, depth crowning, lead crowning etc., on component.",
        },
        {
          id: 22,
          name: "Disk Type Cutters",
          subSlug: "disk-type-cutters",
          image: "https://steelmansgears.com/imgs/disk_type_shaper_cutters.jpg",
          description:
            "These shaper cutters have a disc shape, which has the general utility to give roughing or finish form to cut spur, helical & spline gear.",
        },
        {
          id: 23,
          name: "Shaper Cutters",
          subSlug: "shaper-cutters",
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          description:
            "This type of cutter is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job.",
        },
        {
          id: 24,
          name: "Hub Type Shaper Cutters",
          subSlug: "hub-type-shaper-cutters",
          image: "https://steelmansgears.com/imgs/hub_type_shaper_cutters.jpg",
          description:
            "These cutters can be used for roughing & finishing external gears where it is not feasible to use external disc type cutters.",
        },
      ],
    },
    {
      id: 3,
      slug: "straight-bevel-gear-cutters",
      name: "Straight Bevel Gear Cutters",
      description: `Straight bevel gear cutters are specialized tools used to create the teeth on straight bevel gears. These gears are used to transmit power between two intersecting shafts. The cutters have a conical shape with teeth formed on the cone's surface. They come in various sizes and configurations to produce different gear sizes and tooth profiles  `,
      items: [
        {
          id: 31,
          name: "Segmented Type Straight Bevel Gear Cutter",
          subSlug: "segmented-type-straight-bevel-gear-cutter",
          image: "https://steelmansgears.com/imgs/segmented.jpg",
          description:
            '(For Mass Production of Bevel Gears) Roughing, finishing & completing type suitable for 16", 21" & 25" Diameter cutter bodies. Also includes Deburring Tools. Material: H.S.S AISI – M2.',
        },
        {
          id: 32,
          name: "Pairs",
          subSlug: "pairs",
          image: "https://steelmansgears.com/imgs/pairs.jpg",
          description:
            "A pair of Straight bevel gear shaping generation cutter blades in type I to IV suitable for all types of machines, supplied in module range 0.3 to 20 mm. Material: H.S.S AISI - M2, M35.",
        },
        {
          id: 33,
          name: "Konvoid Blades",
          subSlug: "konvoid-blades",
          image: "https://steelmansgears.com/imgs/konvold.jpg",
          description:
            "Various Konvoid blade sets available: ZFTK 250 X 5 (Set of 44 Blades), ZFTK 500 X 10 (Set of 56 Blades), Russian Konovoid Blades (Set of 36 Blades), Klingelnberg Blades (Set of 72 Blades). Material: H.S.S AISI - M2, M35.",
        },
        {
          id: 34,
          name: "Coniflex Blades",
          subSlug: "coniflex-blades",
          image: "https://steelmansgears.com/imgs/coniflex.jpg",
          description:
            "Inserted Type Blades suitable for cutting large Straight Gears. Material: H.S.S AISI – M2.",
        },
      ],
    },
    {
      id: 4,
      slug: "spiral-bevel-gear-cutters",
      name: "Spiral Bevel Gear Cutters",
      description: `Spiral bevel gear cutters are specialized tools used to create the teeth on spiral bevel gears. These gears, with their curved teeth, offer smoother and quieter operation than straight bevel gears, especially at higher speeds. The cutters themselves have a complex shape with curved cutting edges that match the spiral of the gear teeth. `,
      items: [
        {
          id: 41,
          name: "Pinion and Crown Wheel Roughing Blade",
          subSlug: "pinion-and-crown-wheel-roughing-blade",
          image: "https://steelmansgears.com/imgs/pinion-craw.jpg",
          description:
            "Includes specifications such as Cutter Diameter, Point Width, Whole Depth of the Gear or Pinion to be cut, Type of cutter body used (RIDG Ac, Soft Body, etc.), Pressure Angle of O.B & I.B Blades, Number of blades per set, and Blade Edge Radius.",
        },
        {
          id: 42,
          name: "Crown Wheel Finishing Blades",
          subSlug: "crown-wheel-finishing-blades",
          image: "https://steelmansgears.com/imgs/crown-wheel.jpg",
          description:
            "Includes specifications such as Cutter Diameter, Point Width, Pressure Angle of O.B & I.B Blades, and Blade Edge Radius.",
        },
        {
          id: 43,
          name: "Pinion Finishing Blades (Concave & Convex)",
          subSlug: "pinion-finishing-blades-concave-convex",
          image: "https://steelmansgears.com/imgs/pinion_finishing_blades.jpg",
          description:
            "Specifications include Point Width, Type of cutter body used, Point Width of Roughing Blades, Pressure Angle, Top Term Letter, Blade Edge Radius, and Number of Blades per Set.",
        },
        {
          id: 44,
          name: "Oerlicon Blanks",
          subSlug: "oerlicon-blanks",
          image: "https://steelmansgears.com/imgs/oerlicon.jpg",
          description:
            "Available sizes: 7.5 x 9 x 95 mm, 7.5 x 9 x 100 mm, 13.5 x 17 x 110 mm. Material: H.S.S AISI - M2, M35.",
        },
        {
          id: 45,
          name: "Spiromatic Blades",
          subSlug: "spiromatic-blades",
          image: "https://steelmansgears.com/imgs/spiromatic.jpg",
          description:
            "From Dia. 70 mm to 108 mm suitable for Oerlicon Spiral Bevel Gear Machines. Material: H.S.S AISI – M2.",
        },
        {
          id: 46,
          name: "Curvex Type Blades",
          subSlug: "curvex-type-blades",
          image: "https://steelmansgears.com/imgs/curvex.jpg",
          description:
            "Manufactured both with and without Toprem, suitable for WMW Spiral Bevel Gear Machines. Available in various diameters: 75 mm (Set of 8 Blades), 106 mm (Set of 10 Blades), 150 mm (Set of 12 Blades), 212 mm (Set of 16 Blades), 300 mm (Set of 18 Blades). Material: H.S.S AISI – M2.",
        },
        {
          id: 47,
          name: "Rack Shaper Cutter",
          subSlug: "rack-shaper-cutter",
          image: "https://steelmansgears.com/imgs/rack-shaper.jpg",
          description:
            "Suitable for MAG & Sunderland machines. Material: H.S.S AISI – M2.",
        },
      ],
    },
  ];

  return (
    <ProductsData.Provider value={{ data }}>{children}</ProductsData.Provider>
  );
}

export default ProductsData;
