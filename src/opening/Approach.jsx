import React from "react";
import Approach1 from "../components/Approach1";
import Curricular from "../components/Curricular";
import Stages1 from "../components/Stages1";
import Approach2 from "../components/Approach2";
import Approach3 from "../components/Approach3";

const Approach = () => {
  return (
    <div>
      <Approach1 />
      <Curricular />
      <Stages1 />
      <Approach2 />
      <Approach3/>
    </div>
  );
};

export default Approach;
  <div className="bg-teal-50 px-4 min-h-screen flex flex-col items-center py-10">
    {/* Heading */}
    <h1 className="text-3xl font-bold text-teal-900 mb-6">
      Stage-specific Approaches
    </h1>

    {/* Points in a horizontal row */}
    <div className="flex space-x-6">
      {/* Point 1 */}
      <div className="bg-white shadow-md rounded-lg p-4 w-40 text-center">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          Foundational Stage{" "}
        </h2>
      </div>

      {/* Point 2 */}
      <div className="bg-white shadow-md rounded-lg p-4 w-40 text-center">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          Prepatory Stage{" "}
        </h2>
      </div>

      {/* Point 3 */}
      <div className="bg-white shadow-md rounded-lg p-4 w-40 text-center">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          Middle Stage{" "}
        </h2>
      </div>

      {/* Point 4 */}
      <div className="bg-white shadow-md rounded-lg p-4 w-40 text-center">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          Secondary Stage{" "}
        </h2>
      </div>
    </div>
  </div>;