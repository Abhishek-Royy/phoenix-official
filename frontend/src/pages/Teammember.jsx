import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Teammember() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  // Function to fetch team member data
  const fetchedTeamMemberData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/team/teammembers`
      );
      setMembers(response.data.message);
    } catch (error) {
      console.error("Error fetching team member data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchedTeamMemberData();
  }, []);

  // Function to handle the member click
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedMember(null);
  };

  // Function to render the modal content
  const renderModalContent = () => {
    if (!selectedMember) return null;

    const {
      Avatar,
      Name,
      About,
      EducationalBackground,
      Skills = [],
      RoleInCompany,
    } = selectedMember;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className=" bg-white dark:bg-[#111C29] p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            className="absolute top-2 right-2 text-gray-600 dark:text-gray-400"
            onClick={closeModal}
          >
            X
          </button>
          <div className="flex flex-col items-center">
            <img
              className="w-48 h-44 mb-3 rounded-full shadow-lg object-cover"
              src={Avatar}
              alt={Name}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {Name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {RoleInCompany}
            </span>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {EducationalBackground}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{About}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Skills: {Skills.join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="lg:w-full ms:px-32 py-20 dark:bg-[#111C29] bg-[#fff]">
      <div className="md:w-full w-[95%] mx-auto">
        <h3 className="lg:text-3xl text-2xl font-extrabold text-yellow-500 text-center mb-2">
          Creative Team
        </h3>
        <h1 className="lg:text-5xl text-2xl  font-extrabold dark:text-gray-100 text-center mb-20">
          Experience & Our Professional Teammembers
        </h1>
        <div className="w-full mx-auto max-w-sm  rounded-lg  ">
          {loading ? (
            <div className="text-center">
              <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto mb-8"></div>
              <p className="text-lg dark:text-gray-100">Loading services...</p>
            </div>
          ) : (
            members.map((item) => (
              <div
                key={item.id}
                className="flex flex-col flex-wrap items-center py-10 cursor-pointer"
                onClick={() => handleMemberClick(item)}
              >
                <img
                  className="w-40 h-40 mb-3 rounded-full shadow-lg object-cover"
                  src={item.Avatar}
                  alt={item.Name}
                />
                <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
                  {item.Name}
                </h5>
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  {item.RoleInCompany}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Render modal content */}
        {renderModalContent()}
      </div>
    </div>
  );
}

export default Teammember;
