"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Showcase = () => {
  return (
    <>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center  dark:text-gray-200 mb-4 mx-auto pt-6">Our Partners</h2>
      <Carousel plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
              
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={require("../../public/photos/download.jpg")}
                  alt="blog"
                />
               
                <div className="p-6">
                  <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3 dark:text-gray-200">
                  Foundation Public School
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-200">
                    

                  We are grateful to Foundation Public School for providing our children with quality education at an affordable fee. As a valuable partner, they are actively contributing to our mission of revolutionizing education, and we warmly welcome their support.                  </p>
                </div>
               
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={require("../../public/photos/images.png")}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3 dark:text-gray-200">
                    SMIT
                  </h1>
                  <p className="leading-relaxed mb-3 dark:tetx-gray-200">
                  We extend our heartfelt gratitude to Saylani Welfare for providing free IT education to our children. Their dedication to empowering the youth with technological skills aligns with our mission, and we are thankful for their continued support in shaping a brighter future for our students.                  </p>
                </div>
    
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={require("../../public/photos/download (1).png")}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3 dark:text-gray-200">
                    JDC
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-200">
                    
                  We are deeply thankful to JDC Foundation for their generous support in providing ration to our children and families in need. Their commitment to alleviating hunger and providing essential resources is a vital part of our mission, and we appreciate their continued partnership in making a difference.                  </p>
                  
                </div>
                
              </div>
            </div>
          </CarouselItem>
         
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Showcase;
