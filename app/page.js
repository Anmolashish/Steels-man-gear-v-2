import Image from "next/image";
import HomePage1 from "./homeComponents/HomePage1";
import Navbar from "./homeComponents/Navbar";
import HomePage2 from "./homeComponents/HomePage2";
import HomePage3 from "./homeComponents/HomePage3";
import HomePage4 from "./homeComponents/HomePage4";
import HomePage5 from "./homeComponents/HomePage5";
import HomePage6 from "./homeComponents/HomePage6";
import Footer from "./homeComponents/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
      <HomePage5 />
      <HomePage6 />
      <Footer />
    </>
  );
}
