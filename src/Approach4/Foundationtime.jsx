import React, { useState } from "react";

const Foundationtime = () => {
  const [showNextTable, setShowNextTable] = useState(false);

  const handleNextClick = () => {
    setShowNextTable(true);
  };

  const handlePreviousClick = () => {
    setShowNextTable(false);
  };

  return (
    <div className="py-6 px-4 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-center text-teal-600 mb-8">
        {showNextTable
          ? "Time Table for Children Ages 6-8 Years"
          : "Time Table for Children Ages 3-6 Years"}
      </h1>

      {/* Table Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-x-auto">
        {!showNextTable ? (
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  From
                </th>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  To
                </th>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  Duration
                </th>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">09:30</td>
                <td className="border border-gray-300 p-2 md:p-4">10:15</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  45 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Circle time/Conversation
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">10:15</td>
                <td className="border border-gray-300 p-2 md:p-4">10:30</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  15 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4 bg-green-100">
                  Snack Break
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">10:30</td>
                <td className="border border-gray-300 p-2 md:p-4">10:45</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  15 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Rhyme/Song/Music/Movement
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">11:45</td>
                <td className="border border-gray-300 p-2 md:p-4">12:45</td>
                <td className="border border-gray-300 p-2 md:p-4">1 hour</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Concept Time/Pre-numeracy
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">11:45</td>
                <td className="border border-gray-300 p-2 md:p-4">12:15</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Art/Craft/Free Play
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">12:15</td>
                <td className="border border-gray-300 p-2 md:p-4">13:00</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  45 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Corners Time
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">13:00</td>
                <td className="border border-gray-300 p-2 md:p-4">13:45</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  45 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4 bg-green-100">
                  Lunch Break (ages 3-4 go home)
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">13:45</td>
                <td className="border border-gray-300 p-2 md:p-4">14:30</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  45 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Emergent Literacy/Story Time
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">14:30</td>
                <td className="border border-gray-300 p-2 md:p-4">15:00</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Outdoor Play and Wind Up
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  From
                </th>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  To
                </th>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  Duration
                </th>
                <th className="border border-gray-300 p-4 text-left text-sm md:text-lg font-semibold">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">09:00</td>
                <td className="border border-gray-300 p-2 md:p-4">09:30</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Circle Time - Song/Movement
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">09:30</td>
                <td className="border border-gray-300 p-2 md:p-4">10:00</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  R1 - Oral Language
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">10:00</td>
                <td className="border border-gray-300 p-2 md:p-4">10:30</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  R1 - Word Recognition
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">10:30</td>
                <td className="border border-gray-300 p-2 md:p-4">10:45</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  15 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4 bg-green-100">
                  Snack Time
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">10:45</td>
                <td className="border border-gray-300 p-2 md:p-4">11:45</td>
                <td className="border border-gray-300 p-2 md:p-4">1 hour</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Mathematics
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">11:45</td>
                <td className="border border-gray-300 p-2 md:p-4">12:15</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Arts and Crafts
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">12:15</td>
                <td className="border border-gray-300 p-2 md:p-4">12:45</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4 bg-green-100">
                  R1 - Reading/ Writing
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">12:45</td>
                <td className="border border-gray-300 p-2 md:p-4">13:30</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  45 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  Lunch Break
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">13:30</td>
                <td className="border border-gray-300 p-2 md:p-4">14:30</td>
                <td className="border border-gray-300 p-2 md:p-4">1 hour</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  R2 - Oral Language, Word Recognition
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-teal-50 transition-colors duration-300">
                <td className="border border-gray-300 p-2 md:p-4">14:30</td>
                <td className="border border-gray-300 p-2 md:p-4">15:00</td>
                <td className="border border-gray-300 p-2 md:p-4">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-2 md:p-4">Play</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Toggle Button */}
      <div className="mt-6">
        {!showNextTable ? (
          <button
            onClick={handleNextClick}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
          >
            Next Table (Ages 6-8)
          </button>
        ) : (
          <button
            onClick={handlePreviousClick}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
          >
            Previous Table (Ages 3-6)
          </button>
        )}
      </div>
    </div>
  );
};

export default Foundationtime;
