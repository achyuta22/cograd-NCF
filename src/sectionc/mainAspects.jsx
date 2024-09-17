import React from "react";
import image1 from "../images/c1.jpg"; // Replace with actual image paths
import image2 from "../images/c2.jpg";
import image3 from "../images/c3.jpg";
 import image4 from "../images/c4.jpg"; // Add additional images
 import image5 from "../images/c5.jpg";
import image6 from "../images/c6.jpg";
 import image7 from "../images/c7.jpg";
 import image8 from "../images/c8.jpg";
 import image9 from "../images/c9.jpg";
 import image10 from "../images/c10.jpg";
import { Link } from "react-router-dom";

const MainAspects = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen flex flex-col">
      <div className="mx-auto max-w-screen-xl px-2 py-3 md:px-8 flex-grow">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Main Aspects
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image1})`, height: "150px" }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <a
              href="https://drive.google.com/file/d/1Zb6m6cm510E_3OgpD0e3fjiS57-9s9c6/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Learning In Foundational Stage
                </h2>
              </div>
            </a>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image2})`, height: "150px" }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <a
              href="https://drive.google.com/file/d/1irIaycbyoymRdjzFrPIM9vGXsBTszdYn/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Language Education
                </h2>
              </div>
            </a>
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image3})`, height: "150px" }}
          >
            <a
              href="https://drive.google.com/file/d/1DZ0DPPUqRhPFmlVm4aZf37ZhReM6m0KB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Mathematics Education
                </h2>
              </div>
            </a>
          </div>

          {/* Card 4 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image4})`, height: "150px" }}
          >
            <a
              href="https://drive.google.com/file/d/1C1a4bxlIppYqrhaLBUqzy3Ouq8hoGFx8/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Science Education
                </h2>
              </div>
            </a>
          </div>

          {/* Card 5 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image5})`, height: "150px" }}
          >
            <a
href="https://drive.google.com/file/d/1YQ658QfLz0fIPHGNkQtixE-KoBVb_2-P/view?usp=drive_link"              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Social Science Education
                </h2>
              </div>
            </a>
          </div>

          {/* Card 6 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image6})`, height: "150px" }}
          >
            <a
href="https://drive.google.com/file/d/1ikcPWd1s0SykkKkI1Y6z7bjMlhAhnEVE/view?usp=drive_link"              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Art Education
                </h2>
              </div>
            </a>
          </div>

          {/* Card 7 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image7})`, height: "150px" }}
          >
            <a
href="https://drive.google.com/file/d/1DrwoklcSIYyaEqEaCkI3IxscDGjwM3Jw/view?usp=drive_link"              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Education in Interdisciplinary Areas
                </h2>
              </div>
            </a>
          </div>

          {/* Card 8 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image8})`, height: "150px" }}
          >
            <a
href="https://drive.google.com/file/d/1EZxcXcY3EsqE7Y29emhV-zxxxTBhVgoQ/view?usp=drive_link"              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Physical Education and Well-Being
                </h2>
              </div>
            </a>
          </div>

          {/* Card 9 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image9})`, height: "150px" }}
          >
            <a
href="https://drive.google.com/file/d/1YgwAZSfbr9W6BrVyE9fjNdjo0X938smC/view?usp=drive_link"              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Vocational Education
                </h2>
              </div>
            </a>
          </div>

          {/* Card 10 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image10})`, height: "150px" }}
          >
            <a
href="https://drive.google.com/file/d/1zwAGbuMLKZF6fZwtOZ6Be1pqdTFFQduA/view?usp=drive_link"              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">
                  Subjects in class 11 and 12
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
          <Link
            to="/keyAspects"
            
          >
             <button className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Key Aspects
            </button>
          </Link>
        </div>
      
    </section>
  );
};

export default MainAspects;
