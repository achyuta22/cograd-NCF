import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaBook, FaSchool } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    classOfStudy: "",
    schoolName: "",
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Form submitted successfully!");

    navigate("/history"); // Navigate to the /history page after form submission
  };

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">
            Student Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <FaUser className="absolute left-2 top-11 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-medium text-gray-700"
              >
                Phone Number
              </label>
              <FaPhone className="absolute left-2 top-11 text-gray-400" />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <FaEnvelope className="absolute left-2 top-11 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="classOfStudy"
                className="block text-lg font-medium text-gray-700"
              >
                Class of Study
              </label>
              <FaBook className="absolute left-2 top-11 text-gray-400" />
              <input
                type="text"
                id="classOfStudy"
                name="classOfStudy"
                value={formData.classOfStudy}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your class of study"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="schoolName"
                className="block text-lg font-medium text-gray-700"
              >
                School Name
              </label>
              <FaSchool className="absolute left-2 top-11 text-gray-400" />
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your school name"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
