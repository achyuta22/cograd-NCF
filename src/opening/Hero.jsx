// src/components/Hero.js

import React from "react";
import NcfeImage from "../images/mcf-image.png"; // Update the path according to your file structure

const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-900 relative">
      <div className="container mx-auto grid max-w-screen-xl px-4 py-16 lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-6 text-4xl font-bold tracking-tight leading-tight md:text-5xl xl:text-6xl">
            National Curriculum Framework 2023
          </h1>
          <p className="max-w-2xl mb-8 font-light text-gray-700 md:text-lg lg:text-xl">
            The NCF 2023 focuses on the all-round development of students,
            emphasizing not just academic learning but also life skills,
            emotional well-being, and values like empathy, ethics, and teamwork.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Curriculum
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col items-center">
          <img
            src={NcfeImage}
            alt="mockup"
            className="w-full h-auto lg:max-w-md rounded-md shadow-md "
          />
          <p className="mt-4 text-sm text-gray-600">Presented by CoGrad</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
