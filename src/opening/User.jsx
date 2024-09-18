import React, { useState } from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    qualification: "",
    subject: "",
    designation: "",
    teachingStage: "",
    currentSchool: "",
    teachingExperience: "",
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();

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
    navigate("/table");
  };

  return (
    <section className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white py-4 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-md">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
            Teacher Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
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
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Age */}
            <div className="relative">
              <label
                htmlFor="age"
                className="block text-lg font-medium text-gray-700"
              >
                Age
              </label>
              <FaBirthdayCake className="absolute left-2 top-11 text-gray-400" />
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your age"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-medium text-gray-700"
              >
                Phone Number
              </label>
              <FaPhoneAlt className="absolute left-2 top-11 text-gray-400" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
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
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Qualification */}
            <div className="relative">
              <label
                htmlFor="qualification"
                className="block text-lg font-medium text-gray-700"
              >
                Qualification
              </label>
              <FaUserGraduate className="absolute left-2 top-11 text-gray-400" />
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your qualification</option>
                <option value="Bachelors + B.Ed">Bachelors + B.Ed</option>
                <option value="Masters + B.Ed">Masters + B.Ed</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Subject */}
            <div className="relative">
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700"
              >
                Subject
              </label>
              <FaBook className="absolute left-2 top-11 text-gray-400" />
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your subject"
              />
            </div>

            {/* Designation */}
            <div className="relative">
              <label
                htmlFor="designation"
                className="block text-lg font-medium text-gray-700"
              >
                Designation
              </label>
              <FaChalkboardTeacher className="absolute left-2 top-11 text-gray-400" />
              <select
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your designation</option>
                <option value="PRT">PRT</option>
                <option value="TGT">TGT</option>
                <option value="PGT">PGT</option>
                <option value="Vice Principal">Vice Principal</option>
                <option value="Principal">Principal</option>
              </select>
            </div>

            {/* Teaching Stage */}
            <div className="relative">
              <label
                htmlFor="teachingStage"
                className="block text-lg font-medium text-gray-700"
              >
                Stage of Teaching
              </label>
              <FaCalendarAlt className="absolute left-2 top-11 text-gray-400" />
              <select
                id="teachingStage"
                name="teachingStage"
                value={formData.teachingStage}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select teaching stage</option>
                <option value="Foundational">Foundational</option>
                <option value="Preparatory">Preparatory</option>
                <option value="Middle">Middle</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>

            {/* Current School */}
            <div className="relative">
              <label
                htmlFor="currentSchool"
                className="block text-lg font-medium text-gray-700"
              >
                Current School
              </label>
              <FaSchool className="absolute left-2 top-11 text-gray-400" />
              <input
                type="text"
                id="currentSchool"
                name="currentSchool"
                value={formData.currentSchool}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your current school"
              />
            </div>

            {/* Teaching Experience */}
            <div className="relative">
              <label
                htmlFor="teachingExperience"
                className="block text-lg font-medium text-gray-700"
              >
                Teaching Experience (in years)
              </label>
              <FaCalendarAlt className="absolute left-2 top-11 text-gray-400" />
              <input
                type="number"
                id="teachingExperience"
                name="teachingExperience"
                value={formData.teachingExperience}
                onChange={handleChange}
                required
                className="mt-2 pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your teaching experience"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
