// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// function Project() {
//   const [projectdata, setProjectdata] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const fetchProjectFromBackend = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_BACKEND_URL}/projects/projects`
//       );
//       setProjectdata(response.data.message);
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProjectFromBackend();
//   }, []);

//   // Function to open the popup
//   const openPopup = (project) => {
//     setSelectedProject(project);
//     setIsPopupOpen(true);
//   };

//   // Function to close the popup
//   const closePopup = () => {
//     setSelectedProject(null);
//     setIsPopupOpen(false);
//   };

//   return (
//     <>
//       <div className="dark:bg-[#111C29] bg-[#fff] container w-full h-auto md:px-32 py-24">
//         <h1 className="   lg:text-5xl text-3xl font-extrabold dark:text-yellow-500 text-center mb-8">
//         Transforming Ideas into Reality
//         </h1>
//         <p className="text-lg dark:text-white text-center">Our work reflects a commitment to innovation and impact, turning ideas into meaningful solutions. We strive to create lasting change through every project we undertake.</p>

//         <div className="box w-full mx-auto mt-10 items-center justify-center gap-5 flex flex-wrap">
//           {projectdata.map((item) => (
//             <motion.div
//               onClick={() => openPopup(item)} // Open popup on project click
//               whileHover={{ y: -5 }}
//               key={item._id}
//               className="cont lg:w-[300px] w-[90%] h-auto bg-gray-100 p-3 rounded-md shadow-xl cursor-pointer"
//             >
//               <div className="img w-full h-[180px] ">
//                 <img className="w-full h-full" src={item.pCoverImage} alt="" />
//               </div>
//               <h5 className="text-2xl font-medium mt-2">{item.pTitle}</h5>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Popup component */}
//       {isPopupOpen && selectedProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-5 rounded-lg w-[90%] max-w-[548px]">
//             <button
//               onClick={closePopup}
//               className="text-gray-500 hover:text-gray-700 font-bold float-right"
//             >
//               X
//             </button>
//             <div className="img w-full h-[180px] mt-3">
//               <img
//                 className="w-full h-full object-contain"
//                 src={selectedProject.pCoverImage}
//                 alt={selectedProject.pTitle}
//               />
//             </div>
//             <h3 className="text-2xl font-medium mt-5">
//               {selectedProject.pTitle}
//             </h3>
//             <p className="text-sm mt-2">{selectedProject.pdescription}</p>
//             <div className="flex items-center justify-between mt-5">
//               <p className="font-semibold">
//                 Project Created By: {selectedProject.pCreatedBy}
//               </p>
//               <a
//                 className="bg-yellow-300 py-2 px-8 rounded-xl md:w-max  "
//                 href={selectedProject.pLiveLink} target="_blank"
//               >
//                 Visit Site
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Project;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Project() {
  const [projectdata, setProjectdata] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchProjectFromBackend = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/projects/projects`
      );
      setProjectdata(response.data.message);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    fetchProjectFromBackend();
  }, []);

  // Function to open the popup
  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedProject(null);
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="dark:bg-[#111C29] bg-[#fff] container w-full h-auto md:px-32 py-24">
        <h1 className="lg:text-5xl text-3xl font-extrabold dark:text-yellow-500 text-center mb-8">
          Transforming Ideas into Reality
        </h1>
        <p className="text-lg dark:text-white text-center">
          Our work reflects a commitment to innovation and impact, turning ideas
          into meaningful solutions. We strive to create lasting change through
          every project we undertake.
        </p>

        {loading ? (
          // Loader component
          <div className="text-center">
            <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto  my-10"></div>
            <p className="text-lg dark:text-gray-100">Loading projects...</p>
          </div>
        ) : (
          <div className="box w-full mx-auto mt-10 items-center justify-center gap-5 flex flex-wrap">
            {projectdata.map((item) => (
              <motion.div
                onClick={() => openPopup(item)} // Open popup on project click
                whileHover={{ y: -5 }}
                key={item._id}
                className="cont lg:w-[300px] w-[90%] h-auto bg-gray-100 p-3 rounded-md shadow-xl cursor-pointer"
              >
                <div className="img w-full h-[180px]">
                  <img
                    className="w-full h-full object-contain"
                    src={item.pCoverImage}
                    alt=""
                  />
                </div>
                <h5 className="text-2xl font-medium mt-2">{item.pTitle}</h5>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Popup component */}
      {isPopupOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-[90%] max-w-[548px]">
            <button
              onClick={closePopup}
              className="text-gray-500 hover:text-gray-700 font-bold float-right"
            >
              X
            </button>
            <div className="img w-full h-[180px] mt-3">
              <img
                className="w-full h-full object-contain"
                src={selectedProject.pCoverImage}
                alt={selectedProject.pTitle}
              />
            </div>
            <h3 className="text-2xl font-medium mt-5">
              {selectedProject.pTitle}
            </h3>
            <p className="text-sm mt-2">{selectedProject.pdescription}</p>
            <div className="flex items-center justify-between mt-5">
              <p className="font-semibold">
                Project Created By: {selectedProject.pCreatedBy}
              </p>
              <a
                className="bg-yellow-300 py-2 px-8 rounded-xl md:w-max"
                href={selectedProject.pLiveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
