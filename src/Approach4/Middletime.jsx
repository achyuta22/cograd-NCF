import React, { useState } from "react";

const Middletime = () => {
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
          ? "Illustrative Timetable for the Middle Stage(Two Working Saturdays)"
          : "Number of Hours per Subject"}
      </h1>

      {/* Table Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-x-auto">
        {!showNextTable ? (
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                <th className="border border-border p-2">Middle</th>
                <th className="border border-border p-2">Annual Hours</th>
                <th className="border border-border p-2">Annual Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">R1+Library</td>
                <td className="border border-border p-2">65</td>
                <td className="border border-border p-2">97.5</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2">70</td>
                <td className="border border-border p-2">105</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">R3</td>
                <td className="border border-border p-2">75</td>
                <td className="border border-border p-2">112.5</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">
                  Mathematics (Maths)
                </td>
                <td className="border border-border p-2">115</td>
                <td className="border border-border p-2">172.5</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">Science</td>
                <td className="border border-border p-2">160</td>
                <td className="border border-border p-2">240</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">
                  Social Science (SS)
                </td>
                <td className="border border-border p-2">160</td>
                <td className="border border-border p-2">240</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">
                  Art Education (Art)
                </td>
                <td className="border border-border p-2">100</td>
                <td className="border border-border p-2">150</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">
                  Physical Education (PE)
                </td>
                <td className="border border-border p-2">100</td>
                <td className="border border-border p-2">150</td>
              </tr>
              <tr className="hover:bg-muted">
                <td className="border border-border p-2">
                  Vocational Education (VE)
                </td>
                <td className="border border-border p-2">110</td>
                <td className="border border-border p-2">165</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr>
                <th className="bg-primary text-primary-foreground border border-border px-4 py-2">
                  Time
                </th>
                <th className="bg-primary text-primary-foreground border border-border px-4 py-2">
                  Monday
                </th>
                <th className="bg-primary text-primary-foreground border border-border px-4 py-2">
                  Tuesday
                </th>
                <th className="bg-primary text-primary-foreground border border-border px-4 py-2">
                  Wednesday
                </th>
                <th className="bg-primary text-primary-foreground border border-border px-4 py-2">
                  Thursday
                </th>
                <th className="bg-primary text-primary-foreground border border-border px-4 py-2">
                  Friday
                </th>
                <th className="bg-primary text-primary-foreground border border-border px-4 py-2">
                  Saturday
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">8:30-8:55</td>
                <td className="border border-border px-4 py-2">Assembly</td>
                <td className="border border-border px-4 py-2">Assembly</td>
                <td className="border border-border px-4 py-2">Assembly</td>
                <td className="border border-border px-4 py-2">Assembly</td>
                <td className="border border-border px-4 py-2">Assembly</td>
                <td className="border border-border px-4 py-2">8:30-9:10</td>
                <td className="border border-border px-4 py-2">Library</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">9:00-9:40</td>
                <td className="border border-border px-4 py-2">R1</td>
                <td className="border border-border px-4 py-2">Maths</td>
                <td className="border border-border px-4 py-2">Maths</td>
                <td className="border border-border px-4 py-2">Maths</td>
                <td className="border border-border px-4 py-2">Maths</td>
                <td className="border border-border px-4 py-2">9:15-9:55</td>
                <td className="border border-border px-4 py-2">Library</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">9:45-10:25</td>
                <td className="border border-border px-4 py-2">R2</td>
                <td className="border border-border px-4 py-2">R2</td>
                <td className="border border-border px-4 py-2">R1</td>
                <td className="border border-border px-4 py-2">Maths</td>
                <td className="border border-border px-4 py-2">R1</td>
                <td className="border border-border px-4 py-2">9:55-10:15</td>
                <td className="border border-border px-4 py-2">Snack Break</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">10:30-104:5</td>
                <td className="bg-muted border border-border px-4 py-2">
                  Snack break
                </td>
                <td className="bg-muted border border-border px-4 py-2">
                  Snack break
                </td>
                <td className="bg-muted border border-border px-4 py-2">
                  Snack break
                </td>
                <td className="bg-muted border border-border px-4 py-2">
                  Snack break
                </td>
                <td className="bg-muted border border-border px-4 py-2">
                  Snack break
                </td>
                <td className="border border-border px-4 py-2">10:20-11:00</td>
                <td className="border border-border px-4 py-2">VE</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">10:50-11:30</td>
                <td className="border border-border px-4 py-2">SS</td>
                <td className="border border-border px-4 py-2">SS</td>
                <td className="border border-border px-4 py-2">SS</td>
                <td className="border border-border px-4 py-2">SS</td>
                <td className="border border-border px-4 py-2">SS</td>
                <td className="border border-border px-4 py-2">11:05-11:45</td>
                <td className="border border-border px-4 py-2">Art</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">11:35-12:05</td>
                <td className="border border-border px-4 py-2">SS</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">11:50-12:30</td>
                <td className="border border-border px-4 py-2">VE</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">12:05-12:50</td>
                <td className="border border-border px-4 py-2">Lunch</td>
                <td className="border border-border px-4 py-2">Lunch</td>
                <td className="border border-border px-4 py-2">Lunch</td>
                <td className="border border-border px-4 py-2">Lunch</td>
                <td className="border border-border px-4 py-2">Lunch</td>
                <td className="bg-muted border border-border px-4 py-2">
                  12:30-13:00
                </td>
                <td className="bg-muted border border-border px-4 py-2">
                  Lunch
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">12:50-13:30</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">Art</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">Art</td>
                <td className="border border-border px-4 py-2">R2</td>
                <td className="border border-border px-4 py-2"></td>
                <td className="border border-border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">13:35-14:15</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">Art</td>
                <td className="border border-border px-4 py-2">Science</td>
                <td className="border border-border px-4 py-2">Art</td>
                <td className="border border-border px-4 py-2">R3</td>
                <td className="border border-border px-4 py-2"></td>
                <td className="border border-border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">14:20-15:00</td>
                <td className="border border-border px-4 py-2">PE</td>
                <td className="border border-border px-4 py-2">VE</td>
                <td className="border border-border px-4 py-2">PE</td>
                <td className="border border-border px-4 py-2">VE</td>
                <td className="border border-border px-4 py-2">PE</td>
                <td className="border border-border px-4 py-2"></td>
                <td className="border border-border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">15:05-15:45</td>
                <td className="border border-border px-4 py-2">PE</td>
                <td className="border border-border px-4 py-2">VE</td>
                <td className="border border-border px-4 py-2">PE</td>
                <td className="border border-border px-4 py-2">VE</td>
                <td className="border border-border px-4 py-2">VE</td>
                <td className="border border-border px-4 py-2"></td>
                <td className="border border-border px-4 py-2"></td>
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
            Next Table
          </button>
        ) : (
          <button
            onClick={handlePreviousClick}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
          >
            Previous Table
          </button>
        )}
      </div>
    </div>
  );
};

export default Middletime;
