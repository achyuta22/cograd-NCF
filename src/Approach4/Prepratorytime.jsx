import React, { useState } from "react";

const Prepratorytime = () => {
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
          ? "Illustrative Timetable for the Prepratory Stage(Two Working Saturdays)"
          : "Number of Hours per Subject"}
      </h1>

      {/* Table Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-x-auto">
        {!showNextTable ? (
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-background text-primary">
                <th className="border border-border p-4">Preparatory</th>
                <th className="border border-border p-4">Annual Hours</th>
                <th className="border border-border p-4">Annual Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-card">
                <td className="border border-border p-4">R1+Library</td>
                <td className="border border-border p-4">180</td>
                <td className="border border-border p-4">270</td>
              </tr>
              <tr className="bg-card">
                <td className="border border-border p-4">R2</td>
                <td className="border border-border p-4">190</td>
                <td className="border border-border p-4">285</td>
              </tr>
              <tr className="bg-card">
                <td className="border border-border p-4">
                  Mathematics (Maths)
                </td>
                <td className="border border-border p-4">185</td>
                <td className="border border-border p-4">277.5</td>
              </tr>
              <tr className="bg-card">
                <td className="border border-border p-4">
                  The World Around Us (TWAU)
                </td>
                <td className="border border-border p-4">200</td>
                <td className="border border-border p-4">300</td>
              </tr>
              <tr className="bg-card">
                <td className="border border-border p-4">
                  Art Education (Art)
                </td>
                <td className="border border-border p-4">100</td>
                <td className="border border-border p-4">150</td>
              </tr>
              <tr className="bg-card">
                <td className="border border-border p-4">
                  Physical Education (PE)
                </td>
                <td className="border border-border p-4">100</td>
                <td className="border border-border p-4">150</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="min-w-full border-collapse border border-border">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="border border-border p-2">Time (hrs)</th>
                <th className="border border-border p-2">Monday</th>
                <th className="border border-border p-2">Tuesday</th>
                <th className="border border-border p-2">Wednesday</th>
                <th className="border border-border p-2">Thursday</th>
                <th className="border border-border p-2">Friday</th>
                <th className="border border-border p-2">Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">8:30-8:55</td>
                <td className="border border-border p-2">Assembly</td>
                <td className="border border-border p-2">Assembly</td>
                <td className="border border-border p-2">Assembly</td>
                <td className="border border-border p-2">Assembly</td>
                <td className="border border-border p-2">Assembly</td>
                <td className="border border-border p-2 bg-muted-foreground">
                  8:30-9:10
                </td>
                <td className="border border-border p-2 bg-muted-foreground">
                  TWAU
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2">9:00-9:40</td>
                <td className="border border-border p-2">R1</td>
                <td className="border border-border p-2">R1</td>
                <td className="border border-border p-2">R1</td>
                <td className="border border-border p-2">R1</td>
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2 bg-muted-foreground">
                  9:15-9:55
                </td>
                <td className="border border-border p-2 bg-muted-foreground">
                  TWAU
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2">9:45-10:25</td>
                <td className="border border-border p-2">R1</td>
                <td className="border border-border p-2">Library</td>
                <td className="border border-border p-2">R1</td>
                <td className="border border-border p-2">Library</td>
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2 bg-muted-foreground">
                  9:55-10:15
                </td>
                <td className="border border-border p-2 bg-muted-foreground">
                  Snack Break
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2">10:30-10:45</td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Snack break
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Snack break
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Snack break
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Snack break
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Snack break
                </td>
                <td className="border border-border p-2">10:20-11:00</td>
                <td className="border border-border p-2">R2</td>
              </tr>
              <tr>
                <td className="border border-border p-2">10:50-11:30</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">11:05-11:45</td>
                <td className="border border-border p-2">Art</td>
              </tr>
              <tr>
                <td className="border border-border p-2">1135-1205</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">Maths</td>
                <td className="border border-border p-2">11:50-12:30</td>
                <td className="border border-border p-2">PE</td>
              </tr>
              <tr>
                <td className="border border-border p-2">12:05-12:50</td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Lunch
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Lunch
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Lunch
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Lunch
                </td>
                <td className="border border-border p-2 bg-accent-foreground">
                  Lunch
                </td>
                <td className="border border-border p-2">12:30-13:00</td>
                <td className="border border-border p-2">Lunch</td>
              </tr>
              <tr>
                <td className="border border-border p-2">12:50-13:30</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2"></td>
              </tr>
              <tr>
                <td className="border border-border p-2">13:35-14:15</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2"></td>
                <td className="border border-border p-2"></td>
              </tr>
              <tr>
                <td className="border border-border p-2">14:20-15:00</td>
                <td className="border border-border p-2">PE</td>
                <td className="border border-border p-2">Art</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">PE</td>
                <td className="border border-border p-2">PE</td>
                <td className="border border-border p-2"></td>
                <td className="border border-border p-2"></td>
              </tr>
              <tr>
                <td className="border border-border p-2">15:05-15:45</td>
                <td className="border border-border p-2">PE</td>
                <td className="border border-border p-2">Art</td>
                <td className="border border-border p-2">TWAU</td>
                <td className="border border-border p-2">PE</td>
                <td className="border border-border p-2">PE</td>
                <td className="border border-border p-2"></td>
                <td className="border border-border p-2"></td>
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

export default Prepratorytime;
