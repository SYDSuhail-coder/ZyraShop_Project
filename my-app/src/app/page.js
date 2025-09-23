import BestSelling from "@/app/bestselling/page";
import Hero from "@/app/hero/page";
import LatestProducts from "@/app/latestproducts/page";
import Newsletter from "@/app/newsletter/page";
import OurSpecs from "@/app/ourspecs/page";

export default function HomePage() {
  return (
    <>
    <Hero/>
    <LatestProducts/>
    <BestSelling/>
    <OurSpecs/>
    <Newsletter/>
    </>
  );
}
