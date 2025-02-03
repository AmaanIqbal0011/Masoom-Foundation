import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = ({ title, description, buttonText, imageUrl,title1 } : any) => {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src={imageUrl}
                alt="Hero Background"
                fill
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 dark:text-black">{title}</h1>
          <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 dark:text-black">{title1}</h3>
          <p className="text-3xl sm:text-4xl md:text-xl font-bold mb-4 dark:text-black">{description}</p>
          {buttonText && (
<Button className="flex mx-auto text-lg text-black dark:text-gray-400" variant="outline">{buttonText}</Button>

           

          )}
      </div>
    </div>
    </>
  );
};

export default Hero;
