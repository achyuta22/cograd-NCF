import React, { useState } from "react";
import NcfeImage from "../images/mcf-image.png";
import Modal from './Modal'; // Import the Modal component


const Sidebar = ({ isOpen, onClose }) => {
  const [openModal, setOpenModal] = useState(null);

  // Modal content based on the section
  const modalContent = {
    'History of NCF': 'Content for History of NCF...',
    'Approach': 'Content for Approach...',
    'Cross Cutting Themes': 'Content for Cross Cutting Themes...',
    'School Subjects': 'Content for School Subjects...',
    'School Culture': 'Content for School Culture...',
    'Supportive Ecosystem': 'Content for Supportive Ecosystem...',
  };

  // Handle sidebar item click
  const handleItemClick = (section) => {
    setOpenModal(section);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          &times;
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Index</h2>
        </div>
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            {['History of NCF', 'Approach', 'Cross Cutting Themes', 'School Subjects', 'School Culture', 'Supportive Ecosystem'].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handleItemClick(item)}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG path for icon */}
                  </svg>
                  <span className="ml-3">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 text-center text-sm text-gray-400 border-t border-gray-600">
          Presented by CoGrad
        </div>
      </div>

      {/* Render modals based on the state */}
      {Object.keys(modalContent).map((key) => (
        <Modal
          key={key}
          isOpen={openModal === key}
          onClose={() => setOpenModal(null)}
          title={key}
          content={modalContent[key]}
        />
      ))}
    </>
  );
};

const Ncfe = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <section className="bg-white dark:bg-gray-900 relative">
      
       

       
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              National Curriculum Framework 2023
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The NCF 2023 focuses on the all-round development of students,
              emphasizing not just academic learning but also life skills,
              emotional well-being, and values like empathy, ethics, and
              teamwork.
            </p>
            <a
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Curriculum
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col items-center">
            <img
              src={NcfeImage}
              alt="mockup"
              className="w-full h-auto lg:max-w-md"
            />
            {/* Added "Presented by CoGrad" text */}
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Presented by CoGrad
            </p>
          </div>
        </div>
      </section>
      <section class="bg-gray-50 dark:bg-gray-900 p-10 sm:p-5">
        <div class="mx-auto max-w-screen-xl px-10 lg:px-12" id="table">
          <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-4 py-3">
                      ASPECT
                    </th>
                    <th scope="col" class="px-4 py-3">
                      NCF 1975
                    </th>
                    <th scope="col" class="px-4 py-3">
                      NCF 1988
                    </th>
                    <th scope="col" class="px-4 py-3">
                      NCF 2000
                    </th>
                    <th scope="col" class="px-4 py-3">
                      NCF 2005
                    </th>
                    <th scope="col" class="px-4 py-3">
                      NCF 2023
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Philosophical Approach
                    </th>
                    <td class="px-4 py-3">Unity & National Integration</td>
                    <td class="px-4 py-3">Cultural Heritage & Values</td>
                    <td class="px-4 py-3">Learning without Burden</td>
                    <td class="px-4 py-3">Constructivist Learning</td>
                    <td class="px-4 py-3">Holistic and Multidisciplinary</td>
                  </tr>
                  <tr class="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Curriculum Structure
                    </th>
                    <td class="px-4 py-3">Uniform Curriculum</td>
                    <td class="px-4 py-3">Science and Technology</td>
                    <td class="px-4 py-3">Child-Centred</td>
                    <td class="px-4 py-3">Interdisciplinary ,Thematic</td>
                    <td class="px-4 py-3">Competency-Based Flexible</td>
                  </tr>
                  <tr class="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Pedagogy
                    </th>
                    <td class="px-4 py-3">Basic Literacy and Numeracy</td>
                    <td class="px-4 py-3">Environmental Education</td>
                    <td class="px-4 py-3">Technology Integration</td>
                    <td class="px-4 py-3">Activity baded Learning</td>
                    <td class="px-4 py-3">Vocational Education </td>
                  </tr>
                  <tr class="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Assessment Methods
                    </th>
                    <td class="px-4 py-3">Examination-Oriented</td>
                    <td class="px-4 py-3">Continous Evaluation</td>
                    <td class="px-4 py-3">
                      Continous Comprehensive Evaluation
                    </td>
                    <td class="px-4 py-3">CCE Implementation</td>
                    <td class="px-4 py-3">Holistic,Adaptive</td>
                  </tr>
                  <tr class="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Inclusivity and Acessibility
                    </th>
                    <td class="px-4 py-3">Equal Opportunities</td>
                    <td class="px-4 py-3">Non-Formal Education</td>
                    <td class="px-4 py-3">Inclusive Education</td>
                    <td class="px-4 py-3">Gender Sensitivity and Equity</td>
                    <td class="px-4 py-3">
                      Equity ,Access Multilingual Education
                    </td>

                    
                  </tr>
                                 </tbody>
              </table>
            </div>
                    </div>
        </div>
      </section>
    </>
  );
};

export default Ncfe;
