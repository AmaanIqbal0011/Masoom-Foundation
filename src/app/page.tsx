import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import Testimonial from "@/components/testimonial";
import Volunteer from "@/components/volunteer";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <Hero
        title="Masoom "
        title1="Non-Goverment Organization"
        description="'تعلیم کا یہ سفر جاری رکھنے کے لیے آپ کے تعاون کی ضرورت ہے'"
        buttonText="Donate"
        imageUrl={require("../../public/photos/GBM_Pakistan_2019-263.jpg")}
      />
      <Testimonial />
      <Showcase />
      < Volunteer />
    </>
  );
}

  
  
  





















  

  

  




  

  




  













