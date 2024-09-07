import React from "react";

const Points = () => {
  const points = [
    { name: "React", description: "A JavaScript library for building user interfaces." },
    { name: "Tailwind", description: "A utility-first CSS framework for creating custom designs." },
    { name: "JavaScript", description: "A programming language for web development." },
    { name: "HTML", description: "The standard markup language for creating web pages." },
    { name: "CSS", description: "A style sheet language used for describing the presentation of a document." },
    { name: "Design", description: "The process of creating visual content to communicate messages." },
    { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
    { name: "Express", description: "A minimal and flexible Node.js web application framework." },
    { name: "API", description: "A set of functions and procedures allowing the creation of applications." },
    { name: "MongoDB", description: "A NoSQL database that uses a document-oriented data model." },
    { name: "Database", description: "An organized collection of structured information or data." },
    { name: "NoSQL", description: "A database model that provides a mechanism for storage and retrieval of data." },
    { name: "Cloud", description: "A model for delivering information technology services over the internet." },
    { name: "Deployment", description: "The process of making a software application available for use." },
    { name: "DevOps", description: "A set of practices that combines software development and IT operations." }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Points Overview</h1>
        <div className="space-y-6">
          {points.map((point, index) => (
            <div key={index} className="flex items-start mb-4">
              {/* Styled Green Arrow */}
              <div className="relative flex items-center mr-6">
                <div className="w-6 h-6 flex items-center justify-center text-white bg-green-500 rounded-full">
                  <div className="w-4 h-4 bg-green-700 transform rotate-45"></div>
                </div>
                <div className="absolute w-2 h-2 bg-green-500 rounded-full -left-3"></div>
              </div>
              {/* Point Text */}
              <div>
                {/* <h2 className="text-xl font-semibold mb-1">{point.name}</h2> */}
                <p className="text-gray-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Points;
