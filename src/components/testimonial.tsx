import React from "react";

const Testimonial = () =>  {
return (
    <section className="py-12  bg-gray-100 dark:bg-gray-900" >
        <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Our Mission</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Our mission is to provide every child with quality education and a path to a brighter future, while also empowering them with knowledge of emerging technologies like AI and the Metaverse. </p>
      </div>

   <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 border border-gray-300 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-200 text-2xl">
          ہم ہر بچے کو معیاری تعلیم فراہم کرنے کے لیے پرعزم ہیں، تاکہ وہ ایک روشن اور کامیاب مستقبل کی جانب گامزن ہو سکیں۔</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 border border-gray-300 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-200 text-2xl">
          ہم نئی ٹیکنالوجیز جیسے کہ مصنوعی ذہانت  اور میٹاورس  کی تعلیم کو عام کرنے کے لیے کام کر رہے ہیں، تاکہ ہمارے نوجوان جدید دور کے تقاضوں سے ہم آہنگ ہو سکیں۔

</p>
</div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 border border-gray-300 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-200 text-2xl">
          ہمارا مشن ہے کہ غریب اور نادار افراد کو راشن اور ضروری اشیاء فراہم کی جائیں، تاکہ وہ باعزت زندگی گزار سکیں۔   </p>      </div>
     
      
      </div>
    </div>
    </div>
    
    </section>
)

}

export default Testimonial