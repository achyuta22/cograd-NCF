import React from "react";
import culture1 from "../images/culture1.png";
import culture2 from "../images/culture2.png";
import culture3 from "../images/culture3.png";

const Culture = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-yellow-50">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-pink-600">
          Cross Cutting Themes
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl text-blue-700">
          The NCF 2023 focuses on the all-round development of students,
          emphasizing not just academic learning but also life skills, emotional
          well-being, and values like empathy, ethics, and teamwork.
        </p>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col items-center">
        <img
          src={culture1}
          alt="mockup"
          className="w-full h-auto lg:max-w-md rounded-lg shadow-md border-4 border-green-300"
        />
      </div>
      {/* Full-width container for the images */}
      <div className="w-full flex flex-col md:flex-row items-stretch gap-4 mt-8 lg:mt-12 lg:col-span-12">
        {/* Image 1 */}
        <div className="flex-1 relative bg-white border-4 border-yellow-400 rounded-lg shadow-lg  duration-300">
          <img
            src={culture2}
            alt="Culture Image 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-1 relative bg-white border-4 border-blue-300 rounded-lg shadow-lg  duration-300">
          <img
            src={culture3}
            alt="Culture Image 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
     
    </div>
  );
};

export default Culture;
