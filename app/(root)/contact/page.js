import AboutPage5 from "@/app/aboutComponent/AboutPage5";
import ContactPage1 from "@/app/contactComponent/ContactPage1";
import ContactPage2 from "@/app/contactComponent/ContactPage2";
import PagesHeader from "@/app/homeComponents/PagesHeader";

export default function page() {
  return (
    <>
      <PagesHeader
        heading={"Get in Touch with Us Today"}
        subline={
          "We're here to help you find the perfect gear solution for your application."
        }
      />
      <ContactPage1 />
      <ContactPage2 />
      <AboutPage5 />
    </>
  );
}
