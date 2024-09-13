import React from 'react';
import { Link } from 'react-router-dom';
import imagey from "../images/vision.png";

const SchoolSubjects = () => {
  return (
    <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div className="lg:col-span-5 lg:mt-0">
          <a href="#">
            <img className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full" src={imagey} alt="peripherals" />
            <img className="mb-4 hidden dark:block md:h-full" src="../images/Screenshot_2024_0817_073216.png" alt="peripherals" />
          </a>
        </div>
        <div className="me-auto place-self-center lg:col-span-7">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            School Subjects <br />
          </h1>
        </div>
      </div>

      {/* Cards Container */}
      <section className="p-1">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-center">
          {/* Main Aspects Card */}
          <Link to="/mainAspects" className="relative bg-cover bg-center rounded-lg shadow-lg p-6 dark:bg-gray-800" style={{ backgroundImage: `url(${imagey})`, height: '250px', width: '350px' }}>
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-white text-center">Main Aspects of School Subjects</h2>
            </div>
          </Link>

          {/* Key Aspects Card */}
          <Link to="/keyAspects" className="relative bg-cover bg-center rounded-lg shadow-lg p-6 dark:bg-gray-800" style={{ backgroundImage: `url(${imagey})`, height: '250px', width: '350px' }}>
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-white text-center">Key Aspects of School Subjects</h2>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default SchoolSubjects;
