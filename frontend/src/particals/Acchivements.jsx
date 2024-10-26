import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Achievements() {
  const [allAchivements, setallAchivements] = useState([]);

  const fetchAchievements = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/achivements/achivements`
      );
      setallAchivements(response.data.message);
      console.log(allAchivements);
    } catch (error) {
      console.error("Error fetching achievements:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <>
      <div className=" dark:bg-[#111C29] w-full md:px-32 py-20">
        <h1 className="text-3xl font-bold text-center mb-20 dark:text-gray-100">
          Milestones of Excellence
        </h1>
        <div className="card-cont flex  flex-wrap md:w-full w-[92%] mx-auto  items-center justify-center gap-10">
          {allAchivements.map((acchivement) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, x: -1 }}
              className="md:w-[617px] w-full md:h-[35vh] h-auto dark:border-white border border-black md:flex block cursor-pointer"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="md:w-1/2 w-full h-full "
                style={{ borderRadius: "10px" }}
              >
                <img
                  style={{ borderRadius: "10px" }}
                  className="w-full h-full"
                  src={acchivement.aImage}
                  alt=""
                />
              </div>
              <div className="md:w-1/2 w-full h-full p-4">
                <h5 className="h-[40%] dark:text-white overflow-hidden font-semibold text-2xl">
                  {acchivement.aTitle}
                </h5>
                <p className="w-full text-[14px] pt-5 max-h-[60%] dark:text-gray-200 overflow-hidden ">
                  {acchivement.aDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Achievements;
