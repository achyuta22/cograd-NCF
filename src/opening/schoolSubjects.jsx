// import React from 'react'
// import imagey from "../images/vision.png";
// const SchoolSubjects = () => {
//   return (
//     <section class="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
//     <div class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
//       <div class="lg:col-span-5 lg:mt-0">
//         <a href="#">
//           <img class="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full" src={imagey} alt="peripherals" />
//           <img class="mb-4 hidden dark:block md:h-full" src="../images/Screenshot_2024_0817_073216.png" alt="peripherals" />
//         </a>
//       </div>
//       <div class="me-auto place-self-center lg:col-span-7">
//         <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
//           School Subjects <br />
//         </h1>
//         <p class="mb-6 text-gray-500 dark:text-gray-400">School subjects encompass a range of disciplines designed to provide a well-rounded education. Subjects span various fields, each contributing to a comprehensive educational experience.</p>
//       </div>
//     </div>
//     <section class="p-6 bg-gray-100">
//   <div class="flex flex-wrap gap-6 justify-center">
//     {/* <!-- Box 1 --> */}
//     <div class="relative w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
//       <img src={imagey} alt="Description 1" class="w-full h-48 object-cover" />
//       <div class="p-4">
//         {/* <h3 class="text-xl font-bold mb-2">Title 1</h3> */}
//         <p class="text-gray-700">
//           Education in Interdisciplinary Areas
//         </p>
//       </div>
//     </div>

//     {/* <!-- Box 2 --> */}
//     <div class="relative w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
//       <img src={imagey} alt="Description 2" class="w-full h-48 object-cover" />
//       <div class="p-4">
//         {/* <h3 class="text-xl font-bold mb-2">Title 2</h3> */}
//         <p class="text-gray-700">
//         Vocational Education
//         </p>
//       </div>
//     </div>

//     {/* <!-- Box 3 --> */}
//     <div class="relative w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
//       <img src={imagey} alt="Description 3" class="w-full h-48 object-cover" />
//       <div class="p-4">
//         {/* <h3 class="text-xl font-bold mb-2">Title 3</h3> */}
//         <p class="text-gray-700">
// Subjects in Grade 11 and 12        </p>
//       </div>
//     </div>
//   </div>
// </section>

//   </section>

//   )
// }

// export default SchoolSubjects
import React from "react";
import imagey from "../images/vision.png";

const SchoolSubjects = () => {
  return (
    <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div className="lg:col-span-5 lg:mt-0">
          <a href="#">
            <img
              className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
              src={imagey}
              alt="peripherals"
            />
            <img
              className="mb-4 hidden dark:block md:h-full"
              src="../images/Screenshot_2024_0817_073216.png"
              alt="peripherals"
            />
          </a>
        </div>
        <div className="me-auto place-self-center lg:col-span-7">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            School Subjects <br />
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            School subjects encompass a range of disciplines designed to provide
            a well-rounded education. Subjects span various fields, each
            contributing to a comprehensive educational experience.
          </p>
        </div>
      </div>

      {/* Key Points Section */}
      <section className="p-6 bg-gray-100">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Aspects of School Subjects
          </h2>
          <ul className="list-inside space-y-4 text-gray-700 dark:text-gray-400">
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Learning in The Foundational Stage
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Language Education
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Mathematics Education
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Science Education
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              STEM education (Science, Technology, Engineering, Mathematics)
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Humanities and Social Sciences for critical thinking
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Fine Arts: Music, Visual Arts, Theater, Dance
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Physical Education and Health for holistic development
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Vocational Education
            </li>
            <li className="flex items-start">
              <span className="inline-block text-green-500 w-6 h-6 mr-2">
                &#10003;
              </span>{" "}
              Life skills and career readiness through specialized programs
            </li>
          </ul>
        </div>
      </section>

      {/* Images and additional information */}
      <section className="p-6 bg-gray-100">
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Box 1 */}
          <div className="relative w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={imagey}
              alt="Description 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">
                Education in Interdisciplinary Areas
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={imagey}
              alt="Description 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">Vocational Education</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={imagey}
              alt="Description 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">Subjects in Grade 11 and 12</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SchoolSubjects;
