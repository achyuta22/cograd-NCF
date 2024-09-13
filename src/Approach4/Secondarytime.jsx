import React, { useState } from "react";

const Secondarytime = () => {
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
          ? "Illustrative Timetable for the Secondary Stage(Grades 9 & 10)"
          : "Number of Hours per Subject"}
      </h1>

      {/* Table Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-x-auto">
        {!showNextTable ? (
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                <th className="border border-border p-2">Secondary</th>
                <th className="border border-border p-2">Annual Hours</th>
                <th className="border border-border p-2">Annual Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-border">
                <td className="border border-border p-2">R1</td>
                <td className="border border-border p-2">70</td>
                <td className="border border-border p-2">84</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">R2</td>
                <td className="border border-border p-2">70</td>
                <td className="border border-border p-2">84</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">R3</td>
                <td className="border border-border p-2">70</td>
                <td className="border border-border p-2">84</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">
                  Mathematics (Maths)
                </td>
                <td className="border border-border p-2">135</td>
                <td className="border border-border p-2">162</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">Science</td>
                <td className="border border-border p-2">135</td>
                <td className="border border-border p-2">162</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">
                  Social Science (SS)
                </td>
                <td className="border border-border p-2">125</td>
                <td className="border border-border p-2">150</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">
                  Interdisciplinary Area (IDA)
                </td>
                <td className="border border-border p-2">125</td>
                <td className="border border-border p-2">150</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">
                  Art Education (Art)
                </td>
                <td className="border border-border p-2">115</td>
                <td className="border border-border p-2">138</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">
                  Physical Education (PE)
                </td>
                <td className="border border-border p-2">90</td>
                <td className="border border-border p-2">108</td>
              </tr>
              <tr className="border border-border">
                <td className="border border-border p-2">
                  Vocational Education (VE)
                </td>
                <td className="border border-border p-2">110</td>
                <td className="border border-border p-2">132</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="min-w-full border-collapse border border-zinc-300">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="border border-zinc-300 p-2">Time</th>
                <th className="border border-zinc-300 p-2">Monday</th>
                <th className="border border-zinc-300 p-2">Tuesday</th>
                <th className="border border-zinc-300 p-2">Wednesday</th>
                <th className="border border-zinc-300 p-2">Thursday</th>
                <th className="border border-zinc-300 p-2">Friday</th>
                <th className="border border-zinc-300 p-2">Saturday(2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-2">08:00-08:25</td>
                <td className="border border-zinc-300 p-2">Assembly</td>
                <td className="border border-zinc-300 p-2">Assembly</td>
                <td className="border border-zinc-300 p-2">Assembly</td>
                <td className="border border-zinc-300 p-2">Assembly</td>
                <td className="border border-zinc-300 p-2">Assembly</td>
                <td className="border border-zinc-300 p-2">08:00-08:50</td>
                <td className="border border-zinc-300 p-2">SS</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">08:30-09:20</td>
                <td className="border border-zinc-300 p-2">R1</td>
                <td className="border border-zinc-300 p-2">R2</td>
                <td className="border border-zinc-300 p-2">Maths</td>
                <td className="border border-zinc-300 p-2">R2</td>
                <td className="border border-zinc-300 p-2">R1</td>
                <td className="border border-zinc-300 p-2">08:55-09:45</td>
                <td className="border border-zinc-300 p-2">IDA</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">09:25-10:15</td>
                <td className="border border-zinc-300 p-2">Maths</td>
                <td className="border border-zinc-300 p-2">Maths</td>
                <td className="border border-zinc-300 p-2">Maths</td>
                <td className="border border-zinc-300 p-2">Maths</td>
                <td className="border border-zinc-300 p-2">R3</td>
                <td className="border border-zinc-300 p-2">09:50-10:40</td>
                <td className="border border-zinc-300 p-2">R2</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">10:20-11:10</td>
                <td className="border border-zinc-300 p-2">Art</td>
                <td className="border border-zinc-300 p-2">Science</td>
                <td className="border border-zinc-300 p-2">Science</td>
                <td className="border border-zinc-300 p-2">Science</td>
                <td className="border border-zinc-300 p-2">Art</td>
                <td className="border border-zinc-300 p-2">10:45-11:35</td>
                <td className="border border-zinc-300 p-2">R3</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">11:15-12:05</td>
                <td className="border border-zinc-300 p-2">Art</td>
                <td className="border border-zinc-300 p-2">PE</td>
                <td className="border border-zinc-300 p-2">Science</td>
                <td className="border border-zinc-300 p-2">Art</td>
                <td className="border border-zinc-300 p-2">Art</td>
                <td className="border border-zinc-300 p-2">11:40-12:30</td>
                <td className="border border-zinc-300 p-2">R1</td>
              </tr>
              <tr className="bg-muted">
                <td className="border border-zinc-300 p-2">12:05-13:00</td>
                <td className="border border-zinc-300 p-2">Lunch</td>
                <td className="border border-zinc-300 p-2">Lunch</td>
                <td className="border border-zinc-300 p-2">Lunch</td>
                <td className="border border-zinc-300 p-2">Lunch</td>
                <td className="border border-zinc-300 p-2">Lunch</td>
                <td className="border border-zinc-300 p-2">12:30-13:00</td>
                <td className="border border-zinc-300 p-2">Lunch</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">13:00-13:50</td>
                <td className="border border-zinc-300 p-2">SS</td>
                <td className="border border-zinc-300 p-2">SS</td>
                <td className="border border-zinc-300 p-2">SS</td>
                <td className="border border-zinc-300 p-2">SS</td>
                <td className="border border-zinc-300 p-2">SS</td>
                <td className="border border-zinc-300 p-2">13:05-13:55</td>
                <td className="border border-zinc-300 p-2">AEP*</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">13:55-14:45</td>
                <td className="border border-zinc-300 p-2">IDA</td>
                <td className="border border-zinc-300 p-2">VE</td>
                <td className="border border-zinc-300 p-2">PE</td>
                <td className="border border-zinc-300 p-2">VE</td>
                <td className="border border-zinc-300 p-2">IDA</td>
                <td className="border border-zinc-300 p-2"></td>
                <td className="border border-zinc-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">14:50-15:40</td>
                <td className="border border-zinc-300 p-2">IDA</td>
                <td className="border border-zinc-300 p-2">VE</td>
                <td className="border border-zinc-300 p-2">PE</td>
                <td className="border border-zinc-300 p-2">VE</td>
                <td className="border border-zinc-300 p-2">IDA</td>
                <td className="border border-zinc-300 p-2"></td>
                <td className="border border-zinc-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-2">15:45-16:35</td>
                <td className="border border-zinc-300 p-2">AEP*</td>
                <td className="border border-zinc-300 p-2">AEP*</td>
                <td className="border border-zinc-300 p-2">AEP*</td>
                <td className="border border-zinc-300 p-2">AEP*</td>
                <td className="border border-zinc-300 p-2">AEP*</td>
                <td className="border border-zinc-300 p-2"></td>
                <td className="border border-zinc-300 p-2"></td>
              </tr>
            </tbody>
          </table>
          // <p className="text-muted-foreground text-sm">*AEP = Additional Enrichment Period</p>
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

export default Secondarytime;
