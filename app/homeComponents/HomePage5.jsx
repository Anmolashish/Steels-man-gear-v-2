"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ReviewCard from "./ReviewCard"; // Import your ReviewCard component

export default function HomePage5() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const loopScroll = async () => {
      while (true) {
        await controls.start({
          x: "-50%", // Shift by half the width (because of duplication)
          transition: { duration: 40, ease: "linear" },
        });
        controls.set({ x: "0%" }); // Instantly reset to starting position
      }
    };

    loopScroll();
  }, [controls]);

  return (
    <div className="h-[85vh]  w-full bg-gradient-to-b from-gray-100 to-blue-200">
      {/* Header Section */}
      <div className="flex flex-col home-page-3-heading justify-center items-center pt-10">
        <h3 className="text-5xl font-black text-blue-800 max-md:text-center">
          Trusted by Industries Worldwide
        </h3>
        <p className="text-blue-900 max-md:text-center">
          Read real-world testimonials from satisfied customers
        </p>
      </div>

      {/* Infinite Scrolling Review Section */}
      <div className="relative overflow-hidden w-full h-[50vh] flex items-center select-none px-4">
        <motion.div
          className="flex gap-[20px] w-max"
          animate={controls}
          ref={containerRef}
        >
          {/* Double the ReviewCards for Seamless Loop */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <ReviewCard
                image={
                  "https://uiparadox.co.uk/templates/shoe-vibe/assets/media/users/blog-user-3.png"
                }
                description={
                  "We’ve been using Steelman gear hobs for our manufacturing process for several years, and they’ve never disappointed. The accuracy and quality of the teeth they cut are exceptional. We use them for producing high-quality spur gears, and the hobs give us a consistently smooth finish with minimal burrs."
                }
                auther={"Charlie Quitzon"}
              />
              <ReviewCard
                image={
                  "https://uiparadox.co.uk/templates/shoe-vibe/assets/media/users/blog-user-1.png"
                }
                description={
                  "Steelman gear cutters are a solid choice for general gear cutting. We’ve used them for a variety of projects, from smaller gears to larger, high-torque applications, and they have performed well. The cutters offer precision and a good finish, though I’ve found that for certain materials , they require more frequent re-sharpening."
                }
                auther={"Kristina Grimes"}
              />
              <ReviewCard
                image={
                  "https://uiparadox.co.uk/templates/shoe-vibe/assets/media/users/blog-user-2.png"
                }
                description={
                  "We’ve been using Steelman spiral bevel gear cutters in our aerospace projects, and they’re truly top-tier. The quality of the teeth is incredibly precise, even for complex, high-precision applications. These cutters provide a superior tooth contact pattern, which translates to smoother operation and reduced wear."
                }
                auther={"Selena tamer"}
              />
              <ReviewCard
                image={
                  "https://templatekit.jegtheme.com/autofix/wp-content/uploads/sites/422/2023/10/portrait-of-successful-senior-businessman-gray-PRHRJ6H.jpg"
                }
                description={
                  "Steelman straight bevel gear cutters are a great tool for cutting bevel gears in industrial machinery. We use them for a variety of heavy-duty applications, and they deliver solid results every time. The cutters provide a good balance of performance and affordability, especially spiral bevels"
                }
                auther={"John Doe"}
              />
              <ReviewCard
                image={
                  "https://templatekit.jegtheme.com/autofix/wp-content/uploads/sites/422/2023/10/pretty-secretary-ZCNGWCU.jpg"
                }
                description={
                  "We’ve been using Steelman shaper cutters for several months now in our gear-cutting operations, and they’ve been fantastic. We’ve been able to produce gears with a very fine finish. The cutters are durable, even when dealing with harder materials like tool steel, and we've seen minimal wear even after long periods of use."
                }
                auther={"Justin tim"}
              />
              <ReviewCard
                image={
                  "https://templatekit.jegtheme.com/autofix/wp-content/uploads/sites/422/2023/10/testimonial-LDXAEEM.jpg"
                }
                description={
                  "Steelman involute gear hobs have been a crucial part of our gear production process. We specialize in high-precision gears, and these hobs deliver exceptional results. The teeth on the gears cut with great precision, which has significantly improved our production rates and reduced downtime for maintenance."
                }
                auther={"J.J. Thomsan"}
              />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
