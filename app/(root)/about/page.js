import AboutPage1 from "@/app/aboutComponent/AboutPage1";
import AboutPage2 from "@/app/aboutComponent/AboutPage2";
import AboutPage3 from "@/app/aboutComponent/AboutPage3";
import AboutPage4 from "@/app/aboutComponent/AboutPage4";
import AboutPage5 from "@/app/aboutComponent/AboutPage5";
import AboutPage6 from "@/app/aboutComponent/AboutPage6";
import PagesHeader from "@/app/homeComponents/PagesHeader";
import React from "react";

export default function page() {
  return (
    <>
      <PagesHeader heading={"About us"} />
      <AboutPage1 />
      <AboutPage2 />
    </>
  );
}
