import AllProducts from "@/app/productComponent/AllProducts";
import ProductPage2 from "@/app/productComponent/ProductPage2";
import ProductPage3 from "@/app/productComponent/ProductPage3";

export default function page() {
  return (
    <>
      <ProductPage2
        name={"All Products"}
        description={` Our precision-engineered helical gears offer exceptional performance and
        durability for a wide range of applications. These gears feature a
        helical tooth design for smooth and quiet operation, even at high
        speeds. Crafted from high-quality steel alloys, they provide superior
        strength and wear resistance. Available in various modules and sizes to
        meet your specific needs, our helical gears are ideal for demanding
        applications such as automotive transmissions, industrial machinery, and
        robotics.`}
      />
      <AllProducts />
    </>
  );
}
