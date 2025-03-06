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
          heading: "Involute Tooth Cutters for Precision Gear Manufacturing",
          subSlug: "involute-gear-hobs",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          description:
            "Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi-topping profiles. These are supplied in single or multi-starts in class 'AA', 'A' & 'B'.",
          quality:
            "High precision is paramount to ensure accurate involute profiles and smooth gear operation.",
          production:
            "Manufacturing processes must be carefully controlled to maintain dimensional accuracy and consistency.",
          manufacturing:
            "Advanced manufacturing techniques, such as CNC grinding, are often used to produce high-quality involute gear hobs.",
        },
        {
          id: 2,
          name: "Involute Spline Hobs",
          heading:
            "Involute Spline Generation for Standard and Non-Standard Applications",
          subSlug: "involute-spline-hobs",
          image: "https://steelmansgears.com/imgs/involute_spline_hobs.jpg",
          description:
            "Involute Spline Hobs for cutting all types of standard and non-standard involute splines as per DIN 5480, 5481 & 5482. These are manufactured in pressure angles 20°, 30°, 37.5°, and 45° with or without shoulder clearances in single or multi-start designs.",
          quality:
            "High accuracy is critical to ensure proper spline engagement and performance.",
          production:
            "Manufacturing processes must be capable of producing the complex geometries required for spline hobs.",
          manufacturing:
            "CNC grinding and specialized tooling are often required for precise spline hob production.",
        },
        {
          id: 3,
          name: "Straight Spline Hobs",
          heading: "Straight Spline Cutters for Parallel Spline Applications",
          subSlug: "straight-spline-hobs",
          image: "https://steelmansgears.com/imgs/straight_spline_hobs.jpg",
          description:
            "Straight Spline Hobs are used for cutting parallel splines. These are manufactured with or without lugs, semi-topping, and shoulder clearance types in Class 'AA' & 'A'.",
          quality:
            "High accuracy is critical to ensure proper spline engagement and performance.",
          production:
            "Manufacturing processes must be capable of producing the complex geometries required for spline hobs.",
          manufacturing:
            "CNC grinding and specialized tooling are often required for precise spline hob production.",
        },
        {
          id: 4,
          name: "Sprocket Hobs",
          heading: "Chain Sprocket Cutters for BS, JIS, DIN, and ASA Standards",
          subSlug: "sprocket-hobs",
          image: "https://steelmansgears.com/imgs/sprocket_hobs.jpg",
          description:
            "Sprocket Hobs are manufactured for chain sprocket tooth forms as per BS, JIS, DIN, ASA standards with non-topping or full-topping types in single or multi-start designs.",
          quality:
            "Precise tooth profiles are essential for proper chain engagement and wear resistance.",
          production:
            "Manufacturing processes must ensure consistent tooth shape and spacing.",
          manufacturing:
            "CNC grinding and specialized tooling are often used to produce sprocket hobs.",
        },
        {
          id: 5,
          name: "Worm Wheel Hobs",
          heading: "Worm Gear Cutters for Bore and Shank Type Applications",
          subSlug: "worm-wheel-hobs",
          image: "https://steelmansgears.com/imgs/worm_wheel_hobs.jpg",
          description:
            "Worm Wheel Hobs are manufactured in bore type and shank type in single or multi-start, topping or non-topping as per DIN, BS specifications or as per customer's requirement.",
          quality:
            "High accuracy is critical for proper meshing with the worm gear and smooth operation.",
          production:
            "Manufacturing processes must be able to produce the complex helical profiles required for worm wheel hobs.",
          manufacturing:
            "Advanced manufacturing techniques, such as CNC grinding and specialized tooling, are often used for worm wheel hob production.",
        },
        {
          id: 6,
          name: "Chamfer Hobs",
          heading: "Bevel Edge Hobs for Chamfering Ring Gears",
          subSlug: "chamfer-hobs",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          description:
            "Chamfer Hobs are generally used for chamfering of entering end of ring gears. These are available in various types as per drawing of components.",
          quality:
            "Precise chamfer angles and smooth transitions are essential for optimal gear performance.",
          production:
            "Manufacturing processes must ensure consistent chamfer geometry and high surface finish.",
          manufacturing:
            "Grinding and finishing processes are critical to achieving the desired chamfer quality.",
        },
        {
          id: 7,
          name: "Inserted Blade Gear Hobs",
          heading:
            "Modular Precision Hobs for Cost-Effective Gear Manufacturing",
          subSlug: "inserted-blade-gear-hobs",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          description:
            "Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carbon steel. These hobs save money & time, and damaged blades can also be replaced.",
          quality:
            "Precise positioning and secure clamping of the inserted blades are crucial for accurate gear profiles. Blade material and coating quality are vital for tool life and cutting performance.",
          production:
            "Requires high-precision manufacturing of the hob body and blade pockets. Blades are often produced separately and then assembled into the hob body.",
          manufacturing:
            "Utilizes high-strength materials for the hob body and advanced coatings for the blades. CNC machining and grinding are essential for achieving the required tolerances.",
        },
        {
          id: 8,
          name: "Saw Blade Hobs",
          heading:
            "Efficient Saw Tooth Hobs for Hack and Band Saw Applications",
          subSlug: "saw-blade-hobs",
          image: "https://steelmansgears.com/imgs/saw-blade-hobs.jpg",
          description:
            "Ground and Unground saw blade hobs for hack saw blade and band saw applications.",
          quality:
            "Sharp and consistent saw teeth are essential for efficient cutting. Blade material and heat treatment are critical for durability.",
          production:
            "Requires specialized equipment for forming and sharpening the saw teeth. Precise control of tooth spacing and depth is essential.",
          manufacturing:
            "Utilizes high-speed steel or carbide materials. Grinding and sharpening processes are crucial for achieving the desired cutting performance.",
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
          heading: "Gear Finishing Tools for Smooth and Precise Tooth Profiles",
          subSlug: "shaving-cutters",
          image: "https://steelmansgears.com/imgs/shaving_cutters.jpg",
          description:
            "These HSS cutters are supplied in conventional type, diagonal, plunge cut with a wide range of sizes according to the customer requirement. Cutters are designed with profiles to incorporate them with tip relief, depth crowning, lead crowning etc., on component.",
          quality:
            "Critical for achieving precise tooth profiles, smooth surfaces, and minimal burrs. Requires high dimensional accuracy and sharp cutting edges.",
          production:
            "Manufacturing processes must ensure consistent tooth geometry and high surface finish. Grinding and honing processes are crucial.",
          manufacturing:
            "Typically made from high-speed steel or carbide, requiring careful heat treatment and finishing processes.",
        },
        {
          id: 22,
          name: "Disk Type Cutters",
          heading: "Gear Milling Disks for Spur, Helical, and Spline Gears",
          subSlug: "disk-type-cutters",
          image: "https://steelmansgears.com/imgs/disk_type_shaper_cutters.jpg",
          description:
            "These shaper cutters have a disc shape, which has the general utility to give roughing or finish form to cut spur, helical & spline gear.",
          quality:
            "High precision is essential for accurate tooth profiles and consistent tooth spacing. Requires sharp cutting edges and proper indexing mechanisms.",
          production:
            "Manufacturing processes must ensure accurate tooth shapes and spacing, as well as proper balance and vibration control.",
          manufacturing:
            "Typically made from high-speed steel or carbide, requiring careful heat treatment and grinding processes.",
        },
        {
          id: 23,
          name: "Shaper Cutters",
          heading: "Gear Shaping Tools for Internal and External Gears",
          subSlug: "shaper-cutters",
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          description:
            "This type of cutter is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job.",
          quality:
            "Requires precise tooth profiles, accurate cutting edges, and good overall balance.",
          production:
            "Manufacturing processes must ensure consistent tooth geometry and high surface finish. Grinding and finishing processes are critical.",
          manufacturing:
            "Typically made from high-speed steel or carbide, requiring careful heat treatment and grinding processes.",
        },
        {
          id: 24,
          name: "Hub Type Shaper Cutters",
          heading: "Rigid Hub Shapers for External Gear Roughing and Finishing",
          subSlug: "hub-type-shaper-cutters",
          image: "https://steelmansgears.com/imgs/hub_type_shaper_cutters.jpg",
          description:
            "These cutters can be used for roughing & finishing external gears where it is not feasible to use external disc type cutters.",
          quality:
            "High precision and rigidity are crucial due to the direct mounting. Requires minimal runout and high dimensional accuracy.",
          production:
            "Manufacturing processes must ensure high precision and rigidity, as well as proper balance and vibration control.",
          manufacturing:
            "Typically made from high-speed steel or carbide, requiring careful heat treatment, grinding, and balancing processes.",
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
          heading: "Modular Bevel Cutters for Mass Production",
          subSlug: "segmented-type-straight-bevel-gear-cutter",
          image: "https://steelmansgears.com/imgs/segmented.jpg",
          description:
            '(For Mass Production of Bevel Gears) Roughing, finishing & completing type suitable for 16", 21" & 25" Diameter cutter bodies. Also includes Deburring Tools. Material: H.S.S AISI – M2.',
          quality:
            "Segment matching precision, secure clamping integrity, and consistent segment tooth geometry.",
          production:
            "Modular segment manufacturing, precise assembly fixtures, and rigorous final cutter inspection.",
          manufacturing:
            "High-strength materials for segments, precise CNC machining, and controlled heat treatment.",
        },
        {
          id: 32,
          name: "Pairs",
          heading: "Matched Cutting Pairs for Straight Bevel Gears",
          subSlug: "pairs",
          image: "https://steelmansgears.com/imgs/pairs.jpg",
          description:
            "A pair of Straight bevel gear shaping generation cutter blades in type I to IV suitable for all types of machines, supplied in module range 0.3 to 20 mm. Material: H.S.S AISI - M2, M35.",
          quality:
            "Identical tool geometry across the pair, synchronized cutting edge integrity, and precise dimensional matching.",
          production:
            "Matched tool manufacturing processes, controlled inspection for pair consistency, and rigorous calibration procedures.",
          manufacturing:
            "Precision CNC grinding, matched material batches, and tightly controlled finishing processes.",
        },
        {
          id: 33,
          name: "Konvoid Blades",
          heading:
            "Konvoid Profile Cutters for Complex Bevel Gear Applications",
          subSlug: "konvoid-blades",
          image: "https://steelmansgears.com/imgs/konvold.jpg",
          description:
            "Various Konvoid blade sets available: ZFTK 250 X 5 (Set of 44 Blades), ZFTK 500 X 10 (Set of 56 Blades), Russian Konovoid Blades (Set of 36 Blades), Klingelnberg Blades (Set of 72 Blades). Material: H.S.S AISI - M2, M35.",
          quality:
            "Accurate konvoid curve generation, consistent blade profile, and high surface finish.",
          production:
            "Specialized CNC grinding with profile compensation, advanced measuring techniques, and controlled material removal.",
          manufacturing:
            "High-grade carbide materials, multi-axis CNC grinding, and specialized coating applications.",
        },
        {
          id: 34,
          name: "Coniflex Blades",
          heading: "Crowning Bevel Cutters for Large Straight Gears",
          subSlug: "coniflex-blades",
          image: "https://steelmansgears.com/imgs/coniflex.jpg",
          description:
            "Inserted Type Blades suitable for cutting large Straight Gears. Material: H.S.S AISI – M2.",
          quality:
            "Precise crowning control, consistent tooth profile, and accurate blade geometry.",
          production:
            "Specialized grinding techniques for crowning, advanced measurement systems, and controlled blade finishing.",
          manufacturing:
            "High-strength steel or carbide, specialized CNC equipment, and controlled heat treatment.",
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
          heading: "Heavy-Duty Roughing Blades for Pinion and Crown Wheels",
          subSlug: "pinion-and-crown-wheel-roughing-blade",
          image: "https://steelmansgears.com/imgs/pinion-craw.jpg",
          description:
            "Includes specifications such as Cutter Diameter, Point Width, Whole Depth of the Gear or Pinion to be cut, Type of cutter body used (RIDG Ac, Soft Body, etc.), Pressure Angle of O.B & I.B Blades, Number of blades per set, and Blade Edge Radius.",
          quality:
            "Robust cutting edges and high wear resistance are essential for roughing operations. Blade geometry must be optimized for efficient material removal.",
          production:
            "Requires high-strength materials and precise manufacturing processes. Heat treatment and coating are often used to enhance tool life.",
          manufacturing:
            "Utilizes high-speed steel or carbide materials. CNC machining and grinding are essential for achieving the required tolerances.",
        },
        {
          id: 42,
          name: "Crown Wheel Finishing Blades",
          heading: "Precision Finishing Blades for Crown Wheels",
          subSlug: "crown-wheel-finishing-blades",
          image: "https://steelmansgears.com/imgs/crown-wheel.jpg",
          description:
            "Includes specifications such as Cutter Diameter, Point Width, Pressure Angle of O.B & I.B Blades, and Blade Edge Radius.",
          quality:
            "High precision and smooth cutting edges are essential for achieving the desired surface finish. Blade geometry must be optimized for accurate tooth profiles.",
          production:
            "Requires extremely precise manufacturing processes and high-quality materials. Grinding and polishing processes are crucial for achieving the desired surface finish.",
          manufacturing:
            "Utilizes high-speed steel or carbide materials. CNC grinding and specialized finishing processes are essential.",
        },
        {
          id: 43,
          name: "Pinion Finishing Blades (Concave & Convex)",
          heading: "Profile Finishing Blades for Pinion Gears",
          subSlug: "pinion-finishing-blades-concave-convex",
          image: "https://steelmansgears.com/imgs/pinion_finishing_blades.jpg",
          description:
            "Specifications include Point Width, Type of cutter body used, Point Width of Roughing Blades, Pressure Angle, Top Term Letter, Blade Edge Radius, and Number of Blades per Set.",
          quality:
            "Precise concave and convex profiles are essential for accurate tooth geometry. High surface finish and sharp cutting edges are crucial for optimal performance.",
          production:
            "Requires specialized manufacturing processes and high-quality materials. Grinding and polishing processes are crucial for achieving the desired surface finish.",
          manufacturing:
            "Utilizes high-speed steel or carbide materials. CNC grinding and specialized finishing processes are essential.",
        },
        {
          id: 44,
          name: "Oerlikon Blanks",
          heading: "High-Quality Cutter Blanks for Spiral Bevel Gears",
          subSlug: "oerlikon-blanks",
          image: "https://steelmansgears.com/imgs/oerlicon.jpg",
          description:
            "Available sizes: 7.5 x 9 x 95 mm, 7.5 x 9 x 100 mm, 13.5 x 17 x 110 mm. Material: H.S.S AISI - M2, M35.",
          quality:
            "High-quality blank materials are essential for producing accurate and durable gear cutting tools. Dimensional accuracy and surface finish are critical.",
          production:
            "Requires precise machining and forming processes. Heat treatment and surface preparation are often used.",
          manufacturing:
            "Utilizes high-strength materials and advanced machining techniques. Quality control of the raw material is very important.",
        },
        {
          id: 45,
          name: "Spiromatic Blades",
          heading:
            "Complex Curve Blades for Oerlikon Spiral Bevel Gear Machines",
          subSlug: "spiromatic-blades",
          image: "https://steelmansgears.com/imgs/spiromatic.jpg",
          description:
            "From Dia. 70 mm to 108 mm suitable for Oerlikon Spiral Bevel Gear Machines. Material: H.S.S AISI – M2.",
          quality:
            "Complex geometric shapes require very high levels of precision. Blade coatings are very important.",
          production:
            "Requires very specialized grinding equipment. Very specialized quality control.",
          manufacturing:
            "High grade carbide is standard. Very high end CNC grinding.",
        },
        {
          id: 46,
          name: "Curvex Type Blades",
          heading: "Advanced Curve Blades for WMW Spiral Bevel Gear Machines",
          subSlug: "curvex-type-blades",
          image: "https://steelmansgears.com/imgs/curvex.jpg",
          description:
            "Manufactured both with and without Toprem, suitable for WMW Spiral Bevel Gear Machines. Available in various diameters: 75 mm (Set of 8 Blades), 106 mm (Set of 10 Blades), 150 mm (Set of 12 Blades), 212 mm (Set of 16 Blades), 300 mm (Set of 18 Blades). Material: H.S.S AISI – M2.",
          quality:
            "Very high levels of precision are needed on all curves. Blade coatings are very important.",
          production:
            "Requires very specialized grinding equipment. Very specialized quality control.",
          manufacturing:
            "High grade carbide is standard. Very high end CNC grinding.",
        },
        {
          id: 47,
          name: "Rack Shaper Cutter",
          heading: "Rack Tooth Shaper for MAG and Sunderland Machines",
          subSlug: "rack-shaper-cutter",
          image: "https://steelmansgears.com/imgs/rack-shaper.jpg",
          description:
            "Suitable for MAG & Sunderland machines. Material: H.S.S AISI – M2.",
          quality:
            "Accurate tooth profiles and consistent tooth spacing are essential for producing high-quality racks. Sharp cutting edges and high wear resistance are crucial.",
          production:
            "Requires precise manufacturing processes and high-quality materials. Grinding and finishing processes are critical for achieving the desired surface finish.",
          manufacturing:
            "Utilizes high-speed steel or carbide materials. CNC grinding and specialized finishing processes are essential.",
        },
      ],
    },
  ];
  return (
    <ProductsData.Provider value={{ data }}>{children}</ProductsData.Provider>
  );
}

export default ProductsData;
